from . import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class Tweets(db.Model):
    __tablename__ = 'wh2'
    id = db.Column(db.Integer, primary_key=True)
    dates = db.Column(db.DateTime)

class RdtTweets(db.Model):
    __tablename__ = 'rdt2'
    id = db.Column(db.Integer, primary_key=True)
    dates = db.Column(db.DateTime)

class JbTweets(db.Model):
    __tablename__= 'jb2'
    id = db.Column(db.Integer, primary_key=True)
    dates = db.Column(db.DateTime)

class MpTweets(db.Model):
    __tablename__ = 'mp2'
    id = db.Column(db.Integer, primary_key=True)
    dates = db.Column(db.DateTime)

class TweetTime(db.Model):
    __tablename__ = 'whtime2'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime)

class User(UserMixin, db.Model):
    __tablename__ = 'loginusers'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(40), nullable=False, unique=False)
    last_name = db.Column(db.String(40), nullable=False, unique=False)
    username = db.Column(db.String(20), nullable=False, unique=False)
    username_lower = db.Column(db.String(20), nullable=False, unique=False)
    email = db.Column(db.String(40), nullable=False, unique=True)
    email_lower = db.Column(db.String(40), nullable=False, unique=True)
    password = db.Column(db.String(200), primary_key=False, unique=False, nullable=False)
    created_on = db.Column(db.DateTime, index=False, unique=False, nullable=True)
    
    def set_password(self, password):
        self.password = generate_password_hash(password, method='sha256')
    
    def check_password(self, password):
        return check_password_hash(self.password, password)