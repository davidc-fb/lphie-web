import os
import sys
import json
from pprint import pprint

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from flask_caching import Cache
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.exc import SQLAlchemyError, IntegrityError
from flask_restful import Resource, Api, marshal_with, marshal, abort
'''This is for dockers'''
from api.resources import *
'''This is for testing'''
# from resources import *


# Credientials
load_dotenv()
uri = os.environ.get('URI')

# Setup
class Base(DeclarativeBase): pass
db = SQLAlchemy(model_class=Base)
app = Flask(__name__)       # Flask
CORS(app)
api = Api(app)              # Flask restful
app.config["SQLALCHEMY_DATABASE_URI"] = uri


# Reflecting Database
db.init_app(app)
with app.app_context():
    db.reflect()

    # Define mapped classes for reflected tables
    class BrotherModel(db.Model): __table__ = db.metadata.tables["Brothers"]
    class CrossingModel(db.Model): __table__ = db.metadata.tables["Crossing"]    
    class ChapterModel(db.Model): __table__ = db.metadata.tables["Chapters"]
    class PositionsModel(db.Model): __table__ = db.metadata.tables["Positions"]
    
    pprint(roster)

       

# Resources
class RosterResource(Resource):
    @marshal_with(rosterFields)
    def get(self): 
        crossings = CrossingModel.query.all()
        brothers = BrotherModel.query.all()

        # Create a lookup dictionary for crossings based on some unique ID
        crossing_lookup = {c.Crossing_Order: {
            "Crossing_Order": c.Crossing_Order,
            "Class": c.Class,
            "Semester": c.Semester,
            "Brothers": []
        } for c in crossings}

        # Only add brothers that have a valid Crossing_Order
        for bro in brothers:
            if bro.Crossing in crossing_lookup:
                crossing_lookup[bro.Crossing]["Brothers"].append(bro)

        # Return the roster as a list
        return list(crossing_lookup.values())

       
class ActiveResource(Resource):
    @marshal_with(activeFields)
    def get(self):
        positions = PositionsModel.query.all()
        brothers = BrotherModel.query.all()

        brother_lookup = {
            b.Number: b for b in brothers
        }
        result_data = []
        for p in positions:
            bro_i_obj = brother_lookup.get(p.bro_i)
            bro_ii_obj = brother_lookup.get(p.bro_ii)
            bro_iii_obj = brother_lookup.get(p.bro_iii)
            bro_iv_obj = brother_lookup.get(p.bro_iv)

            position_dict = {
                "pos_id": p.pos_id,
                "title": p.title,
                "bro_i": bro_i_obj, 
                "bro_ii": bro_ii_obj,
                "bro_iii": bro_iii_obj,
                "bro_iv": bro_iv_obj,
                "executive": p.executive
            }
            result_data.append(position_dict)

        return result_data

class CrossingResource(Resource):
    @marshal_with(crossingFields)
    def get(self): return CrossingModel.query.all()

    @marshal_with(crossingFields)
    def post(self):
        args = crossing_parser.parse_args()

class ChaptersResource(Resource):
    @marshal_with(chaptersFields)
    def get(self): return ChapterModel.query.all()

# API Endpoints
api.add_resource(RosterResource, "/roster")
api.add_resource(CrossingResource, "/crossing")
api.add_resource(ChaptersResource, "/chapters")
api.add_resource(ActiveResource, "/active")

@app.route("/")
def home():
    return "<h1>SLURP<h1>"


if __name__ == '__main__':
    app.run(debug=True)
    # pass
    
def create_app():
    return app
