from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from .config import Config
import os

db =  SQLAlchemy()
login_manager = LoginManager()

def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://PetsFurU:Petsforyou!19@localhost/petsfuru'
    app.config['SECRET_KEY'] = os.urandom(16)
    app.config['FLASK_APP'] = 'api'
    app.config['FLASK_DEBUG'] = 1
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    
    #app.config.from_object('Config')

    db.init_app(app)
    login_manager.init_app(app)
    with app.app_context():
        from . views import main
        from . import auth
        app.register_blueprint(main)
        app.register_blueprint(auth.auth_bp)

        db.create_all()

        return app