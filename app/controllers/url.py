from flask import (Blueprint, redirect, render_template,
				  url_for, request, jsonify)
from json import loads
from app.controllers.estilos import Padrao
from app.controllers.create import CVWritter

bp_curriculo = Blueprint('API', __name__)
bp_front = Blueprint('CV', __name__)
path = 'app/static/Files'
filename = None

@bp_front.route('/home', methods=['GET', 'POST'])
@bp_front.route('/', methods=['GET', 'POST'])
def home():
	return render_template('index.html')

@bp_front.route('/temas', methods=['GET', 'POST'])
def temas():
	return render_template('themes.html')


@bp_curriculo.route('/create', methods=['GET', 'POST'])
def create():
	try:
		data = loads(request.json)
		global path
		global filename

		Pedro = CVWritter(data, path)
		Pedro.createCV()
		file = Pedro.save()

		path = '/'.join(file.split('/')[:-1]) 
		filename = file.split('/')[-1]

	except Exception as e:
		pass

	return redirect(url_for('CV.temas'))

@bp_curriculo.route('/theme/<theme>', methods=['GET', 'POST'])
def theme(theme):
	global filename
	if theme == 'padrao':
		curriculo = Padrao(filename, path)
		curriculo.aplicar()
		filename = curriculo.save()
	
	return redirect(f'/download/{filename}')

@bp_curriculo.route('/download/<name>', methods=['GET', 'POST'])
def download(name):
	return render_template('download.html', 
							path_ = path,
							file = filename,
							url_voltar = '')
