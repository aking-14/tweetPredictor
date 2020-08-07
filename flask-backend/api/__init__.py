from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .config import Config
import os

db =  SQLAlchemy()

def create_app():
    app = Flask(__name__)

    #app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://PetsFurU:Petsforyou!19@localhost/petsfuru'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////home/austin/Desktop/future/tweetPredictor/flask-backend/api/db/tp.db'
    app.config['SECRET_KEY'] = os.urandom(16)
    app.config['FLASK_APP'] = 'api'
    app.config['FLASK_DEBUG'] = 1
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    
    #app.config.from_object('Config')

    db.init_app(app)
    with app.app_context():
        from . views import main
        app.register_blueprint(main)

        db.create_all()

        return app