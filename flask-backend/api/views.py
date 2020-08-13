from flask import redirect, Blueprint, request, session, url_for, jsonify
from . import db
from flask import current_app as app
from .models import Tweets, TweetTime, RdtTweets, RdtTweetTime, JbTweets, JbTweetTime, MpTweets, MpTweetTime
from datetime import timedelta, datetime
import tweepy
import pytz

main = Blueprint('main', __name__)

ACCESS_TOKEN = '739561501669789696-3fK9wa3N7of66PE8jJrvvZfzlTuC9DB'
ACCESS_SECRET = '0dh0MrjJdmvcTYvO2r5LTMYrODPx4RKM2w1NnYvl30ASj'
CONSUMER_KEY = 'ewukOZR9emRzXzWPuMbOe4Lig'
CONSUMER_SECRET = 'NwiegfDOcyjRiSaGS7b9z5jwkJxDk2Wj4oQtVOuD1Wv0m6rBp4'
seq = -1

@main.route('/add_wh', methods=['GET', 'POST'])
def addData():
    if request.method == 'POST':
        seq = request.get_json()['seq']
        if seq == 1:
            tmpModel = RdtTweets
            tmpTime = RdtTweetTime
            tmpName = '@realDonaldTrump'
        elif seq == 2:
            tmpModel = Tweets
            tmpTime = TweetTime
            tmpName = '@WhiteHouse'
        elif seq == 3:
            tmpModel = JbTweets
            tmpTime = JbTweetTime
            tmpName = '@JoeBiden'
        elif seq == 4:
            tmpModel = MpTweets
            tmpTime = MpTweetTime
            tmpName = '@Mike_Pence'
        else:
            return None
        return getData(tmpModel, tmpTime, tmpName)
        #return 'Done', 201

@main.route('/add_all', methods=['GET'])
def add_all():
    dt = datetime.now().astimezone(pytz.timezone('US/Eastern')).replace(hour=0, minute=0, second=0, microsecond=0) - timedelta(days=85)
    whTime = db.session.query(TweetTime).first()
    rdtTime = db.session.query(RdtTweetTime).first()
    jbTime = db.session.query(JbTweetTime).first()
    mpTime = db.session.query(MpTweetTime).first()
    curTime = datetime.strptime(datetime.now().astimezone(pytz.timezone('US/Eastern')).strftime('%Y-%m-%d %H:%M:%S'), '%Y-%m-%d %H:%M:%S')
    willCommit = False
    if ((curTime - whTime.date).total_seconds() > (15 * 60)):
        getAllTweets(whTime.date, curTime, '@WhiteHouse')
        itemWh = TweetTime.query.get(1)
        itemWh.date = curTime
        willCommit = True
    if ((curTime - rdtTime.date).total_seconds() > (15 * 60)):
        getAllTweets(rdtTime.date, curTime, '@realDonaldTrump')
        itemRdt = RdtTweetTime.query.get(1)
        itemRdt.date = curTime
        willCommit = True
    if ((curTime - jbTime.date).total_seconds() > (15 * 60)):
        getAllTweets(jbTime.date, curTime, '@JoeBiden')
        itemJb = JbTweetTime.query.get(1)
        itemJb.date = curTime
        willCommit = True
    if ((curTime - mpTime.date).total_seconds() > (15 * 60)):
        getAllTweets(mpTime.date, curTime, '@Mike_Pence')
        itemMp = MpTweetTime.query.get(1)
        itemMp.date = curTime
        willCommit = True
    if willCommit:
        db.session.commit()
    wh = db.session.query(Tweets.dates).filter(Tweets.dates >= dt).all()
    rdt = db.session.query(RdtTweets.dates).filter(RdtTweets.dates >= dt).all()
    jb = db.session.query(JbTweets.dates).filter(JbTweets.dates >= dt).all()
    mp = db.session.query(MpTweets.dates).filter(MpTweets.dates >= dt).all()
    return jsonify([wh, rdt, jb, mp])


def getData(modelName, modelTime, name):
    dt = datetime.now().astimezone(pytz.timezone('US/Eastern')).replace(hour=0,minute=0, second=0, microsecond=0) - timedelta(days=85)
    time = db.session.query(modelTime).first()
    curTime = datetime.strptime(datetime.now().astimezone(pytz.timezone('US/Eastern')).strftime('%Y-%m-%d %H:%M:%S'), '%Y-%m-%d %H:%M:%S')
    if ((curTime - time.date).total_seconds() > (15 * 60)):
        getAllTweets(time.date, curTime, name)
        item = modelTime.query.get(1)
        item.date = curTime
        db.session.commit()
    data = db.session.query(modelName.dates).filter(modelName.dates >= dt).all()
    return jsonify(data)


def getAllTweets(lstTime, curTime, tName):
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)
    api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True, compression=True)
    tempArr = []
    for status in tweepy.Cursor(api.user_timeline, screen_name=tName).items():
        times = status._json['created_at']
        dt_obj = datetime.strptime(datetime.strptime(times, "%a %b %d %H:%M:%S %z %Y").astimezone(pytz.timezone('US/Eastern')).strftime('%Y-%m-%d %H:%M:%S'), "%Y-%m-%d %H:%M:%S")
        if (dt_obj > lstTime and dt_obj <= curTime):
            if tName == '@WhiteHouse':
                tempArr.append(Tweets(dates=dt_obj))
            elif tName == '@realDonaldTrump':
                tempArr.append(RdtTweets(dates=dt_obj))
            elif tName == '@JoeBiden':
                tempArr.append(JbTweets(dates=dt_obj))
            elif tName == '@Mike_Pence':
                tempArr.append(MpTweets(dates=dt_obj))
        else:
            break
    tempArr.reverse()
    db.session.add_all(tempArr)
