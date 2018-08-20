from flask import Flask, render_template, jsonify,request,abort

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

@app.route("/repositorio/api/v1.0/empresas")
def get_empresas():

    db = Database()

    db.cursor.execute('select id,nome_empresa from similaridade.referencia limit 5')

    rows = db.cursor.fetchall()

    result = []
    for row in rows:
        obj = {
            'id': row[0],
            'nome_empresa' : row[1]
        }
        result.append(row)

    return jsonify(result)

@app.route('/repositorio/api/v1.0/empresas', methods=['POST'])
def cria_amarracao():
    if not request.json:
        abort(400)
    empresa_1 = request.json['empresa_1']
    empresa_2 = request.json['empresa_2']
    


    return
