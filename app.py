from flask import Flask
from flask_pymongo import PyMongo
from bson import json_util
import json



app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb+srv://John:John@123@cluster0.yozd6.mongodb.net/test"
app.config["MONGO_DBNAME"] = 'test'

mongo = PyMongo(app)

def parse_json(data):
     returnjson.loaads(json_util.dumps(data))

@app.route("/search/<id>", methods=['GET'])
def search_patient(id):
    patient = mongo.db.throats.find_one({"uid": id})

    return parse_json(test)
   