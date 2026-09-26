from flask_restful import reqparse, fields
from .brothers import *

activeFields = {
    'pos_id': fields.Integer,
    'title': fields.String,
    'bro_i': fields.Nested(brothersFields),
    'bro_ii': fields.Nested(brothersFields),
    'bro_iii': fields.Nested(brothersFields),
    'bro_iv': fields.Nested(brothersFields),
    "executive": fields.Integer
}

