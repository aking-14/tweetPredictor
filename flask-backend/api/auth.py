from flask import current_app as current_app
from flask import Blueprint, request, session, url_for, jsonify
from flask_login import login_required, logout_user, current_user, login_user 
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import timedelta, datetime
import pytz
from .models import db, User
from . import login_manager

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/add_user', methods=['POST'])
def addUser():
    user_data = request.get_json()
    lowerEmail = user_data['email'].lower()
    lowerUname = user_data['username'].lower()
    exists = db.session.query(User.id).filter_by(email_lower=lowerEmail).scalar() is not None
    uname_exists = db.session.query(User.id).filter_by(username_lower=lowerUname).scalar() is not None
    if (not exists and not uname_exists): # email and username are unique
        createdOn = datetime.strptime(datetime.now().astimezone(pytz.timezone('US/Eastern')).strftime('%Y-%m-%d %H:%M:%S'), '%Y-%m-%d %H:%M:%S')
        new_user = User(first_name=user_data['firstName'], last_name=user_data['lastName'], username=user_data['username'], username_lower=lowerUname, email=user_data['email'], email_lower=lowerEmail, password=generate_password_hash(user_data['password'], method='sha256'), created_on=createdOn)
        db.session.add(new_user)
        db.session.commit()
        login_user(new_user)
    elif (exists and uname_exists): # email and username are not unique
        return jsonify({'Response': False, 'Error': ['This username is already taken. Please enter another one.', 'This email address is already associated with an account. Please enter another one.', True, True]})
    elif (uname_exists): # username is not unique
        return jsonify({'Response': False, 'Error': ['This username is already taken. Please enter another one.', '', True, False]})
    else:
        return jsonify({'Response': False, 'Error': ['', 'This email address is already associated with an account. Please enter another one.', False, True]})
    return jsonify({'Response': True})

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    lowerLogin = data['username'].lower()
    user = User.query.filter_by(username_lower=lowerLogin).first()
    if user:
        if user.check_password(password=data['password']):
            login_user(user)
            return jsonify({'Response': True, 'username': current_user.username})
        return jsonify({'Response': False, 'Error': 'Invalid username/email or password'})
    else:
        user = User.query.filter_by(email_lower=lowerLogin).first()
        if user:
            if user.check_password(password=data['password']):
                login_user(user)
                return jsonify({'Response': True, 'username': current_user.username})
            return jsonify({'Response': False, 'Error': 'Invalid username/email or password'})
    return jsonify({'Response': False, 'Error': 'Invalid username/email or password'})

@auth_bp.route('/logout', methods=['GET'])
@login_required
def logout():
    logout_user()
    return jsonify({'complete': True})


@login_manager.user_loader
def load_user(user_id):
    if user_id is not None:
        return User.query.get(user_id)
    return None

@login_manager.unauthorized_handler
def unauthorized():
    return jsonify({"Unauthorized": "Unauthorized"})

@auth_bp.route('/loginsession', methods=['GET'])
@login_required # will call unauthorized_handler callback if not logged in
def loginsession():
    return jsonify({"valid": True, 'userName': current_user.username})
