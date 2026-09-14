from flask import Blueprint,render_template

routes = Blueprint('app', __name__)

@routes.route('/')
def home():
    return render_template('home.html')

@routes.route('/2')
def page2():
    return render_template('page2.html')

@routes.route('/3')
def page3():
    return render_template('page3.html')

@routes.route('/4')
def page4():
    return render_template('page4.html')