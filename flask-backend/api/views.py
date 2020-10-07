from flask import redirect, Blueprint, request, session, url_for, jsonify
from . import db
from flask import current_app as app
from .models import Tweets, RdtTweets, JbTweets, MpTweets, TweetTime
from datetime import timedelta, datetime
import tweepy
import pytz
import threading
from . import create_app

main = Blueprint('main', __name__)

ACCESS_TOKEN = '739561501669789696-3fK9wa3N7of66PE8jJrvvZfzlTuC9DB'
ACCESS_SECRET = '0dh0MrjJdmvcTYvO2r5LTMYrODPx4RKM2w1NnYvl30ASj'
CONSUMER_KEY = 'ewukOZR9emRzXzWPuMbOe4Lig'
CONSUMER_SECRET = 'NwiegfDOcyjRiSaGS7b9z5jwkJxDk2Wj4oQtVOuD1Wv0m6rBp4'

@main.before_app_first_request
def before_app_first_request():
    getTweetData()

@main.route('/add_seq', methods=['GET', 'POST'])
def addData():
    if request.method == 'POST':
        seq = request.get_json()['seq']
        if seq == 1:
            tmpModel = RdtTweets
        elif seq == 2:
            tmpModel = Tweets
        elif seq == 3:
            tmpModel = JbTweets
        elif seq == 4:
            tmpModel = MpTweets
        else:
            return None
        dt = datetime.now().astimezone(pytz.timezone('US/Eastern')).replace(hour=0,minute=0, second=0, microsecond=0) - timedelta(days=85)
        data = db.session.query(tmpModel.dates).filter(tmpModel.dates >= dt).all()
        return jsonify(data)
        #return 'Done', 201

@main.route('/add_all', methods=['GET'])
def add_all():
    dt = datetime.now().astimezone(pytz.timezone('US/Eastern')).replace(hour=0, minute=0, second=0, microsecond=0) - timedelta(days=85)
    wh = db.session.query(Tweets.dates).filter(Tweets.dates >= dt).all()
    rdt = db.session.query(RdtTweets.dates).filter(RdtTweets.dates >= dt).all()
    jb = db.session.query(JbTweets.dates).filter(JbTweets.dates >= dt).all()
    mp = db.session.query(MpTweets.dates).filter(MpTweets.dates >= dt).all()
    return jsonify([wh, rdt, jb, mp])

def getTweetData():
    app = create_app()
    ctx = app.app_context()
    ctx.push()
    threading.Timer(1020.0, getTweetData).start() # every 17 mins get new tweet data
    lstTime = db.session.query(TweetTime).first()
    curTime = datetime.strptime(datetime.now().astimezone(pytz.timezone('US/Eastern')).strftime('%Y-%m-%d %H:%M:%S'), '%Y-%m-%d %H:%M:%S')
    getAllTweets(lstTime.date, curTime)
    #curItem = TweetTime.query.get(1)
    #curItem.date = curTime
    lstTime.date = curTime
    db.session.commit()
    ctx.pop()

def getAllTweets(lstTime, curTime):
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)
    api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True, compression=True)
    lrgArr = []
    tempArr = []
    for status in tweepy.Cursor(api.user_timeline, screen_name='@realDonaldTrump').items():
        times = status._json['created_at']
        dt_obj = datetime.strptime(datetime.strptime(times, "%a %b %d %H:%M:%S %z %Y").astimezone(pytz.timezone('US/Eastern')).strftime('%Y-%m-%d %H:%M:%S'), "%Y-%m-%d %H:%M:%S")
        if (dt_obj > lstTime and dt_obj <= curTime):
            tempArr.append(RdtTweets(dates=dt_obj))
        else:
            break
    tempArr.reverse()
    lrgArr = lrgArr + tempArr
    tempArr = []
    for status in tweepy.Cursor(api.user_timeline, screen_name='@WhiteHouse').items():
        times = status._json['created_at']
        dt_obj = datetime.strptime(datetime.strptime(times, "%a %b %d %H:%M:%S %z %Y").astimezone(pytz.timezone('US/Eastern')).strftime('%Y-%m-%d %H:%M:%S'), "%Y-%m-%d %H:%M:%S")
        if (dt_obj > lstTime and dt_obj <= curTime):
            tempArr.append(Tweets(dates=dt_obj))
        else:
            break
    tempArr.reverse()
    lrgArr = lrgArr + tempArr
    tempArr = []
    for status in tweepy.Cursor(api.user_timeline, screen_name='@JoeBiden').items():
        times = status._json['created_at']
        dt_obj = datetime.strptime(datetime.strptime(times, "%a %b %d %H:%M:%S %z %Y").astimezone(pytz.timezone('US/Eastern')).strftime('%Y-%m-%d %H:%M:%S'), "%Y-%m-%d %H:%M:%S")
        if (dt_obj > lstTime and dt_obj <= curTime):
            tempArr.append(JbTweets(dates=dt_obj))
        else:
            break
    tempArr.reverse()
    lrgArr = lrgArr + tempArr
    tempArr = []
    for status in tweepy.Cursor(api.user_timeline, screen_name='@Mike_Pence').items():
        times = status._json['created_at']
        dt_obj = datetime.strptime(datetime.strptime(times, "%a %b %d %H:%M:%S %z %Y").astimezone(pytz.timezone('US/Eastern')).strftime('%Y-%m-%d %H:%M:%S'), "%Y-%m-%d %H:%M:%S")
        if (dt_obj > lstTime and dt_obj <= curTime):
            tempArr.append(MpTweets(dates=dt_obj))
        else:
            break
    tempArr.reverse()
    lrgArr = lrgArr + tempArr
    db.session.add_all(lrgArr)
