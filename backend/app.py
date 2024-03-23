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

app = Flask(__name__)
CORS(app)

kw_model = KeyBERT()

client = MongoClient('mongodb+srv://satts27:satts27@cluster0.gvr4alj.mongodb.net/Hackanova3?retryWrites=true&w=majority')
db = client.get_database()
fs = GridFS(db)

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

@app.route('/analyzeReports', methods=['POST'])
def upload_file():# Process PDF text
    file = request.files['file']
    # file = "Surya_Cover_Letter.pdf"
    if file:
        filename = secure_filename(file.filename)
        file_id = fs.put(file, filename=filename)
        print("File successfully uploaded. ObjectId:", file_id)
    raw_text = get_pdf_text(filename)
    # print(raw_text)
    keywords = kw_model.extract_keywords(raw_text,top_n=5)
    print(keywords)
    keyword_strings = [keyword[0] for keyword in keywords]

# Create JSON object
    key = {}
    for i, keyword in enumerate(keyword_strings):
        key[i] = keyword
    print(key)
    return key




    
if __name__ == "__main__":
    app.run(debug=True)
    