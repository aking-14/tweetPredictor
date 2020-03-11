import os
from flask import redirect, Blueprint, request, session, url_for, jsonify
from flask_login import login_required, logout_user, current_user, login_user
from flask import current_app as app
from werkzeug.security import generate_password_hash, check_password_hash
from .models import db, User
from . import login_manager

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/login', methods=['POST'])
#@login_required
def login_page():
    login_data = request.get_json()
    email = login_data['email']
    password = login_data['password']
    user = User.query.filter_by(email=email).first()
    if user:
        if user.check_password(password=password):
            login_user(user)
            #next = request.args.get('next') returns user back to page they were at before login, probs dont need
            return jsonify({"working": "works"})
        return jsonify({"error": "not working"})
    return jsonify({"error2":"definitely not working"})

@auth_bp.route('/logout')
@login_required
def logout_page():
    logout_user()
    return jsonify({"logout": "logout"})


@login_manager.user_loader
def load_user(user_id):
    if user_id is not None:
        return User.query.get(user_id)
    return None

@login_manager.unauthorized_handler
def unauthorized():
    return jsonify({"Unauthorized": "Unauthorized"})

@auth_bp.route('/loginsession', methods=['GET'])
@login_required
def loginsession():
    my_user = db.session.query(User).first()
    return jsonify({"valid": "valid"})
