from flask import (Blueprint, redirect, render_template,
				  url_for, request, jsonify)
from json import loads
from app.controllers.estilos import Padrao
from app.controllers.create import CVWritter
from app.controllers import classifier, forms
import os, requests, json

bp_curriculo = Blueprint('API', __name__)
bp_front = Blueprint('CV', __name__)
path = 'app/static/Files'
filename = None

@bp_front.route('/home/<pronto>', methods=['GET', 'POST'])
@bp_front.route('/home', methods=['GET', 'POST'])
@bp_front.route('/', methods=['GET', 'POST'])
def home(pronto = None):
	global filename
	return render_template('index.html', pronto=pronto, filename=filename)

@bp_front.route('/temas', methods=['GET', 'POST'])
def temas():
	return render_template('themes.html')


@bp_curriculo.route('/create', methods=['GET', 'POST'])
def create():
	norepeatKey = ['nome', 'telefone', 'email', 'Cidade', 'Git', 'Linkedin']
	keys = [key for key in request.form.keys() if key not in norepeatKey]
	data = classifier.gerar_dic(request.form, keys)
	try:
		global path
		global filename

		Pedro = CVWritter(data, path)
		Pedro.createCV()
		file = Pedro.save(generate_filename())

		path = '/'.join(file.split('/')[:-1]) 
		filename = file.split('/')[-1]

	except Exception as e:
		print(e)

	return redirect(url_for('CV.temas'))

@bp_curriculo.route('/secret/<name>/<password>', methods=['GET', 'POST'])
def secret(name, password):
	if name.lower() == 'josepedro' and password == '123':
		meucurriculo = json.loads(forms.meuCV())

		global path
		global filename
		
		Pedro = CVWritter(meucurriculo, path)
		Pedro.createCV()
		file = Pedro.save()

		path = '/'.join(file.split('/')[:-1]) 
		filename = file.split('/')[-1]

	return redirect(url_for('CV.temas'))

@bp_curriculo.route('/theme/<theme>', methods=['GET', 'POST'])
def theme(theme):
	global filename
	if theme == 'padrao':
		curriculo = Padrao(filename, path)
		curriculo.aplicar()
		filename = curriculo.save()
		
	return redirect(url_for('CV.home', pronto=1))

def generate_filename():
	files = os.listdir('app/static/Files')
	filename = f'curriculo_{round(len(files)/2)}'

	return filename




