from flask import Flask, request
from flask_cors import CORS
from search import getNCBIResults, getProteinSwissData, getSwissProtId, getProteinNCBIData
import requests
#import time

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Hello world 1!"

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/message')
def get_message():
    return {'message': "proyecto epico"}

@app.route('/search')
def search():
    value = request.args.get('protein')
    results = getNCBIResults(value)
    return {
        'results': results
    }

@app.route('/protein')
def find():
    pid = request.args.get('id')
    term = request.args.get('term')
    
    #print(term)
    proteinData = getProteinSwissData(term)
    return {
        'results': proteinData
    }

@app.route('/checkResults')
def checkResults():
    term = request.args.get('term')
    proteinData = getProteinSwissData(term)
    return proteinData['amount']
