from flask_restful import reqparse, fields

# Fields (Data Formating for Marshaling)
positionFields = {
    'pos_id': fields.Integer,
    'title': fields.String,
    'bro_i': fields.Integer,
    'bro_ii': fields.Integer,
    'bro_iii': fields.Integer,
    'bro_iv': fields.Integer,
    'executive': fields.Integer
}

# Request Parsers
position_parser = reqparse.RequestParser()
position_parser.add_argument('pos_id', type=int, required=True)
position_parser.add_argument('title', type=str, required=True)
position_parser.add_argument('bro_i', type=int, required=True)
position_parser.add_argument('bro_ii', type=int, required=False)
position_parser.add_argument('bro_iii', type=int, required=False)
position_parser.add_argument('bro_iv', type=int, required=False)
position_parser.add_argument('executive', type=int, required=False)
