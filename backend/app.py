from flask import Flask
import json
from flask_cors import CORS
from langchain.text_splitter import RecursiveCharacterTextSplitter
from PyPDF2 import PdfReader
from langchain.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings

app = Flask(__name__)
CORS(app)

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
    file = "Surya_Cover_Letter.pdf"
    raw_text = get_pdf_text(file)
    print(raw_text)
    # text_chunks = get_text_chunks(raw_text)
    # get_vector_store(text_chunks)

    # # Initiate conversation without requiring a question
    # context = raw_text
    return "Surya_Cover_Letter"




    
if __name__ == "__main__":
    app.run(debug=True)