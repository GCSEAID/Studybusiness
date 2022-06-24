import os
from flask import (Flask, make_response, render_template, Response, redirect)
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


@app.route('/business')
def business():
    return render_template("business.html")


@app.route('/definitions')
def definitions():
    return render_template("definitions.html")


@app.route('/cases')
def cases():
    return render_template("cases.html", cases=case_studies.query.all())


# @app.route('/template')
# def template():
#     return render_template("template.html", cases = case_studies.query.all())

@app.route("/template/")
def templateRedirect():
  return redirect("/cases/")

@app.route('/template/<id>')
def templateSpecific(id):
    caseStudyQuery = "SELECT * FROM case_studies WHERE id = " + id
    questionsQuery = "SELECT * FROM questions WHERE question_id = " + id
    caseData = db.session.execute(caseStudyQuery)
    questionsData = db.session.execute(questionsQuery)
    return render_template('template.html', caseData=caseData, questionsData=questionsData)


@app.route('/list')
def list():
    return render_template("list.html", values=questions.query.all())


db.session.commit()
if __name__ == "__main__":
    # app.run(debug=True)
    db.create_all()
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
