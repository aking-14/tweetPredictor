from flask import Blueprint, request
from . import db
from .models import PotentialUser, User
from werkzeug.security import generate_password_hash

main = Blueprint('main', __name__)

@main.route('/add_user', methods=['POST'])
def add_user():
    user_data = request.get_json()
    new_user = PotentialUser(name=user_data['name'], email=user_data['email'], address=user_data['address'], phone=user_data['phone'])
    #db.create_all() #to create table
    #create_user = User(name=user_data['name'], email=user_data['email'], password=generate_password_hash('root', method='sha256'), address=user_data['address'], phone=user_data['phone'])
    db.session.add(new_user)
    #db.session.add(create_user)
    db.session.commit()

    return 'Done', 201

#add protected route in here
