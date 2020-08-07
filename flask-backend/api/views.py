from flask import redirect, Blueprint, request, session, url_for, jsonify
from . import db
from flask import current_app as app
from .models import Tweets, TweetTime
from datetime import timedelta, datetime
import tweepy
import pytz

main = Blueprint('main', __name__)

ACCESS_TOKEN = '739561501669789696-3fK9wa3N7of66PE8jJrvvZfzlTuC9DB'
ACCESS_SECRET = '0dh0MrjJdmvcTYvO2r5LTMYrODPx4RKM2w1NnYvl30ASj'
CONSUMER_KEY = 'ewukOZR9emRzXzWPuMbOe4Lig'
CONSUMER_SECRET = 'NwiegfDOcyjRiSaGS7b9z5jwkJxDk2Wj4oQtVOuD1Wv0m6rBp4'

@main.route('/add_wh', methods=['GET'])
def add_user():
    dt = datetime.now().astimezone(pytz.timezone('US/Eastern')).replace(hour=0,minute=0, second=0, microsecond=0) - timedelta(days=85)
    time = db.session.query(TweetTime).first()
    curTime = datetime.strptime(datetime.now().astimezone(pytz.timezone('US/Eastern')).strftime('%Y-%m-%d %H:%M:%S'), '%Y-%m-%d %H:%M:%S')
    if ((curTime - time.date).total_seconds() > (15 * 60)):
        getTweets(time.date, curTime)
        item = TweetTime.query.get(1)
        item.date = curTime
        db.session.commit()
    u = db.session.query(Tweets.dates).filter(Tweets.dates >= dt).all()
    #u = db.session.query(Tweets.dates, Tweets.weekday).all()
    return jsonify(u)

def getTweets(lstTime, curTime):
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)
    api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True, compression=True)
    tempArr = []
    for status in tweepy.Cursor(api.user_timeline, screen_name='@WhiteHouse').items():
        times = status._json['created_at']
        dt_obj = datetime.strptime(datetime.strptime(times, "%a %b %d %H:%M:%S %z %Y").astimezone(pytz.timezone('US/Eastern')).strftime('%Y-%m-%d %H:%M:%S'), "%Y-%m-%d %H:%M:%S")
        if (dt_obj > lstTime and dt_obj <= curTime):
            tempArr.append(Tweets(dates=dt_obj))
        else:
            break
    tempArr.reverse()
    db.session.add_all(tempArr)
    db.session.commit()
