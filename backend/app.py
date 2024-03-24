from flask import Flask
import json
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


@app.route('/try', methods=['POST'])
def trying():
    # client = Elasticsearch(
    # "https://899818254916480eb7e3932801d735cb.us-central1.gcp.cloud.es.io:443",
    # api_key="4DJadrUqR9Cp7-XTSHcKJA"
    # )
    
    print(es.info())
    return ""

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
    # print(raw_text)
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
    document['id'] = str(document['id'])
    json_data = json.dumps(document)
    es.index(index="doc", document=document)
# Create JSON object
    key = {}
    # for i, keyword in enumerate(keyword_strings):
    #     key[i] = keyword
    # print(key)
    return key

@app.route("/search")
def search_autocomplete():
    query = request.args.get("q", "").lower()
    query_payload = {
        "size": MAX_SIZE,
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

    response = requests.get(ELASTICSEARCH_ENDPOINT, json=query_payload)

    if response.status_code == 200:
        results = response.json()["hits"]["hits"]
        result_names = [result["_source"]["name"] for result in results]
        return jsonify(result_names)
    else:
        return jsonify([])  # Return an empty list if there's an error

if _name_ == "_main_":
    app.run(debug=True)
@app.route('/retrieve', methods=['POST'])
def retrieve():
    return""





    
if __name__ == "__main__":
    app.run(debug=True)
    
