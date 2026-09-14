import sqlite3

from flask import Flask

app = Flask(__name__)
conexao = sqlite3.connect('banco.db')
cursor = conexao.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome TEXT NOT NULL,
                    email TEXT NOT NULL UNIQUE,
                    senha TEXT NOT NULL
                )''')
conexao.commit()

from route import routes
app.register_blueprint(routes)

if __name__ == '__main__':
    app.run(debug=True)