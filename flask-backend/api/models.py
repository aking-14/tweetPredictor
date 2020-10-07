from . import db

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