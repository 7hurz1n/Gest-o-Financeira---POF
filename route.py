from flask import Blueprint,render_template, request
from db import db
from models import Usuario

routes = Blueprint('app', __name__)

@routes.route('/')
def home():
    return render_template('home.html')

@routes.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        senha = request.form['senha']
        usuario = Usuario.query.filter_by(email=email, senha=senha).first()
        if usuario:
            return render_template('page2.html', usuario=usuario)
    return render_template('login.html')

@routes.route('/aulas')
def aulas():
    return render_template('aulas.html')
