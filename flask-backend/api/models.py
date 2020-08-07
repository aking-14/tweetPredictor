from . import db

class Tweets(db.Model):
    __tablename__ = 'wtweets'
    
    id = db.Column(db.Integer, primary_key=True)
    dates = db.Column(db.DateTime)

class TweetTime(db.Model):
    __tablename__ = 'whtime'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime)

