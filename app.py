import os
from tokenize import Number
from flask import (Flask, render_template, redirect, url_for)
from flask_cors import CORS
# from Database_handler import Database_handler

# from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

from flask_sqlalchemy import SQLAlchemy

# app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class case_studies(db.Model):
    id = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(255),
                      unique=False,
                      primary_key=True,
                      nullable=True)
    description = db.Column(db.String(255), unique=False, nullable=True)

    def __init__(self, id, title, description):
        self.id = id
        self.title = title
        self.description = description
        return self


class questions(db.Model):
    id = db.Column(db.Integer, nullable=False, primary_key=True, unique=True)
    question_id = db.Column(db.Integer, nullable=True, unique=False)
    question = db.Column(db.String(4294000000), nullable=True)

    def __init__(self, id, question_id, question):
        self.id = id
        self.question_id = question_id
        self.question = question
        return self


CORS(app)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/business/')
def business():
    return render_template("business.html")


@app.route('/business/definitions')
def definitions():
    return render_template("definitions.html")


@app.route('/cases/')
def cases():
    return render_template("cases.html", cases=case_studies.query.all())


# @app.route('/template')
# def template():
#     return render_template("template.html", cases = case_studies.query.all())

@app.route('/cases/<id>/')
def casepecific(id):
    # Todo> Implement the feature to detect if no case study exists then redirect to cases page if user tries to go to an id that doesnt exist
    caseStudyQuery = "SELECT * FROM case_studies WHERE id = " + id
    questionsQuery = "SELECT * FROM questions WHERE question_id = " + id
    caseData = db.session.execute(caseStudyQuery)
    questionsData = db.session.execute(questionsQuery)
    caseStudyExist = db.session.execute('SELECT id, title FROM case_studies WHERE id = ' + id).fetchone()
    questionExist = db.session.execute('SELECT question_id, question FROM questions WHERE question_id = ' + id).fetchone()
    if caseStudyExist is None: 
        return redirect('/cases/')
    return render_template('caseTemplate.html', caseData=caseData, questionsData=questionsData, dataExist=caseStudyExist, questionExist=questionExist)


@app.route('/list/')
def list():
    return render_template("list.html", values=questions.query.all())

@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404

# Force Reloading of html files
from os import path, walk

extra_dirs = ['../templates/',]
extra_files = extra_dirs[:]
for extra_dir in extra_dirs:
    for dirname, dirs, files in walk(extra_dir):
        for filename in files:
            filename = path.join(dirname, filename)
            if path.isfile(filename):
                extra_files.append(filename)

db.session.commit()
if __name__ == "__main__":
    # app.run(debug=True)
    db.create_all()
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True, extra_files=extra_dirs)
