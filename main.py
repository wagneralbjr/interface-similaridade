from flask import Flask, render_template

from database import Database


app = Flask(__name__)


@app.route("/<id1>/<id2>")
def updateId(id1=None,id2=None):
    db = Database()
    return render_template('update_id.html',id1=id1,id2=id2)


@app.route("/")
def index():
    db = Database()

    lis1 = [['1','abcd'],
    ['2','dsdsfs'],
    ['3','fdafdsf'],
    ['4','afdasfas']]

    lis2 = [['55','abcsasasasad'],
    ['22','dsdsfsasasas'],
    ['33','fdafsaasadsf'],
    ['44','afdaasaasasasfas']]

    return render_template('index.html',lis1=lis1,lis2=lis2)

