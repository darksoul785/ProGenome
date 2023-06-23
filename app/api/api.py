import time
from flask import Flask, request
from search import getTest

app = Flask(__name__)

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
    value = request.args.get('input')
    results = getTest(value)
    return {'results': results }
