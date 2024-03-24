from flask import Flask, jsonify, send_file
import json
import requests
from flask_cors import CORS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from PyPDF2 import PdfReader
from langchain.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from keybert import KeyBERT
from pymongo import MongoClient
from flask import request
from werkzeug.utils import secure_filename
from gridfs import GridFS
from bson import ObjectId
from elasticsearch import Elasticsearch
import base64

app = Flask(__name__)
CORS(app)

kw_model = KeyBERT()

client = MongoClient('mongodb+srv://satts27:satts27@cluster0.gvr4alj.mongodb.net/Hackanova3?retryWrites=true&w=majority')
db = client.get_database()
fs = GridFS(db)


es = Elasticsearch(
    hosts=['https://899818254916480eb7e3932801d735cb.us-central1.gcp.cloud.es.io:443'],
    http_auth=('elastic', 'pmbYfq7ejtkeWD1t9KcqqByp'),
    )

def get_pdf_text(pdf_path):
    text = ""
    with open(pdf_path, "rb") as f:
        pdf_reader = PdfReader(f)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text

def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks = text_splitter.split_text(text)
    return chunks

def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001",google_api_key="AIzaSyAfItvxFBe_CzrjqOokhzkBEoHMpNyvOb8")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")

@app.route("/search", methods=['POST'])
def a():
    elasticsearch_endpoint = "https://899818254916480eb7e3932801d735cb.us-central1.gcp.cloud.es.io:443/doc/_search"
    # query = request.args.get("q", "").lower()
    username = "elastic"
    password = "pmbYfq7ejtkeWD1t9KcqqByp"
    
    # Encode the credentials
    credentials = f"{username}:{password}"
    encoded_credentials = base64.b64encode(credentials.encode()).decode()
    
    # Set up the request headers with the Authorization header
    headers = {
        "Authorization": f"Basic {encoded_credentials}",
        "Content-Type": "application/json"
    }
    query_payload = {
        "size": 10,
        "query": {
            "bool": {
                "must": [
                    {
                        "span_near": {
                            "clauses": [
                                {
                                    "span_multi": {
                                        "match": {
                                            "fuzzy": {
                                                "keywords": {
                                                    "value": "oracle",
                                                    "fuzziness": "AUTO"
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }

    response = requests.post(elasticsearch_endpoint, json=query_payload, headers=headers)
    print(response)
    if response.status_code == 200:
        results = response.json()["hits"]["hits"]
        result_names = []
        for result in results:
            # Check if the 'name' field exists in the document
            if "_source" in result and "id" in result["_source"]:
                result_names.append(result["_source"]["id"])
            else:
                # Handle the case where the 'name' field is missing
                result_names.append("Unknown")
        return jsonify(result_names)
    else:
        return jsonify([]) 


@app.route('/try', methods=['POST'])
def trying():
    id = "65ffb16c3fe95c25efc12785"
    object_id = ObjectId(id)
    file_object = fs.find_one({"_id": object_id})
    if file_object is None:
        return "File not found", 404
    
    # Send the file to the client for download
    return send_file(file_object, as_attachment=True, mimetype='application/pdf', download_name='downloaded_file.pdf')

@app.route('/analyzeReports', methods=['POST'])
def upload_file():# Process PDF text
    file = request.files['file']
    # file = "Surya_Cover_Letter.pdf"
    keyword_strings = ""
    if file:
        filename = secure_filename(file.filename)
        file_id = fs.put(file, filename=filename)
        print("File successfully uploaded. ObjectId:", file_id)
    raw_text = get_pdf_text(filename)
    print(raw_text)
    keywords = kw_model.extract_keywords(raw_text,top_n=5)
    print(keywords)
    # for i in range(5):
    #     keyword_strings = keywords[i][0]
    keyword_strings = [keyword[0] for keyword in keywords]
    combined_string = ' '.join(keyword_strings)
    document = {
            "id": file_id,
            "keywords": combined_string,
        }
    print(keyword_strings)
    document['id'] = str(document['id'])
    json_data = json.dumps(document)
    es.index(index="doc", document=document)
# Create JSON object
    key = {}
    # for i, keyword in enumerate(keyword_strings):
    #     key[i] = keyword
    # print(key)
    return key

@app.route('/retrieve', methods=['POST'])
def retrieve():
    return""





    
if __name__ == "__main__":
    app.run(debug=True)
    