from flask import Flask, request, jsonify
from flask_cors import CORS
from search import getNCBIResults, getProteinSwissData, getProteinSwissDataById, getSwissProtId, getProteinNCBIData
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
    species = request.args.get('species')
    results = getNCBIResults(value, species)
    return {
        'results': results
    }

@app.route('/protein')
def find():
    pId = request.args.get('id')
    term = request.args.get('term')
    ncbiData = getProteinNCBIData(pId)
    swissData = getProteinSwissData(term)

    return {
        'ncbiResults': ncbiData,
        'swissResults': swissData
    }

@app.route('/proteinByIds')
def findByBothIds():
    pId = request.args.get('pId')
    sId = request.args.get('sId')
    ncbiData = getProteinNCBIData(pId)
    swissData = getProteinSwissData(sId)
    return {
        'ncbiResults': ncbiData,
        'swissResults': swissData
    }
