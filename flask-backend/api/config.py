import os

class Config:
    #set in .env file for future then use os.environ.get('FLASK_APP')
    SECRET_KEY = os.urandom(16)
    FLASK_APP = 'api'
    FLASK_DEBUG = 1
    SQLALCHEMY_DATABASE_URI =  'sqlite:////home/austin/Desktop/future/tweetPredictor/flask-backend/api/db/tp.db'