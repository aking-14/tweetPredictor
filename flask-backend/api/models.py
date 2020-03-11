from . import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class PotentialUser(db.Model):
    __tablename__ = 'signupusers'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=False)
    email = db.Column(db.String(40), nullable=False, unique=True)
    address = db.Column(db.String(75), nullable=False, unique=False)
    phone = db.Column(db.String(22), nullable=False, unique=False)

class User(UserMixin, db.Model):
    __tablename__ = 'loginusers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=False)
    email = db.Column(db.String(40), nullable=False, unique=True)
    password = db.Column(db.String(200), primary_key=False, unique=False, nullable=False)
    address = db.Column(db.String(75), nullable=False, unique=False)
    phone = db.Column(db.String(22), nullable=False, unique=False)
    created_on = db.Column(db.DateTime, index=False, unique=False, nullable=True)
    last_login = db.Column(db.DateTime, index=False, unique=False, nullable=True)

    def set_password(self, password):
        self.password = generate_password_hash(password, method='sha256')

    def check_password(self, password):
        return check_password_hash(self.password, password)
