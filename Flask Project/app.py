import os
from flask import (Flask, make_response, render_template, Response) 
from flask_cors import CORS

app = Flask(__name__)
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
    return render_template("cases.html")

@app.route('/template')
def template():
    return render_template("template.html")

if __name__ == "__main__":
    # app.run(debug=True)
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)