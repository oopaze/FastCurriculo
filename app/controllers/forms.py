import json


def fields(pessoais_, formacao_, emprego_, projetos_, habilidades_, areaInteresse_):
	fields = {
		'area de interesse': areaInteresse_,
		
		'pessoais': pessoais_,

		'formacao': formacao_,

		'empregos': emprego_,

		'habilidades': habilidades_,

		'projetos': projetos_
	}
	return fields
class formacao:
	def __init__(self, instituicao=None, cidade=None, curso=None, ano=None, horas=None):
		self.instituicao = instituicao
		self.cidade = cidade
		self.curso = curso
		self.ano = ano
		self.horas = horas

class emprego:
	def __init__(self, empresa=None, cargo=None, entrada=None, saida=None, resumo=None):
		self.empresa = empresa
		self.cargo = cargo
		self.entrada = entrada
		self.saida = saida
		self.resumo = resumo

class habilidades:
	def __init__(self, tecnologia, nivel):
		self.tecnologia = tecnologia
		self.nivel = nivel

class projetos:
	def __init__(self, nome, tecnologias, resumo, link):
		self.nome = nome
		self.tecnologias = tecnologias
		self.resumo = resumo
		self.link = link

class pessoais:
	def __init__(self, nome=None, telefone=None, email=None, cidade_estado=None, github=None, linkedin=None):
		self.nome = nome
		self.telefone = telefone
		self.email = email
		self.cidade_estado = cidade_estado
		self.github = github 
		self.linkedin = linkedin

def fields(pessoais_, formacao_, emprego_, projetos_, habilidades_, areaInteresse_):
	fields = {
		'area de interesse': areaInteresse_,
		
		'pessoais': pessoais_,

		'formacao': formacao_,

		'empregos': emprego_,

		'habilidades': habilidades_,

		'projetos': projetos_
	}
	return fields


def meuCV():
	pessoais_ = pessoais('José Pedro da Silva Gomes', '88 9 92266091', 'Pedroosd28@gmail.com', 'Crato-CE', '/oopaze', '/in/oopaze').__dict__

	formacao_ = {'1':formacao('Governador Adauto Bezerra', 'Crato-CE', 'Ensino Medio', 'Concluido - 2019').__dict__,
				 '2':formacao('Instituto Federal do Ceará', 'Crato-CE', 'Sistemas de Informação', 'Cursando - 2019').__dict__,
				 '3':formacao('IAExpert', 'Remoto', 'Redes Neurais Artificiais em Python', 'Concluido - 29/06/2020', '80').__dict__,
				 '4':formacao('Udemy', 'Remoto', 'Python para Data Science e Machine Learning - Completo', 'Concluido - 15/06/2020', '18').__dict__,
				 '5':formacao('Udemy', 'Remoto', 'Desenvolva uma aplicação com Django 2.0 e deploy no heroku', 'Concluído - 19/07/2020', '7.5').__dict__}

	emprego_ = {'1': emprego('Ricardo Eletro', 'Assistente Administrativo', '15/08/2019', '15/07/2020', 'Controlava todos os contratos feitos na loja, além de ser um dos responsáveis pelo pós-venda').__dict__}

	projetos_ = {'1': projetos('Booker',
						  'Flask, SQLAlchemy, Bootstrap, Marshmallow, Git, Heroku, Heroku-PG',
						  'Um site que te possibilita guardar livros tal como um repositório',
						  'https://github.com/oopaze/Booker').__dict__,
				'2': projetos('CVCreate',
							  'Json, Python-Docx, Git',
							  'Um algoritmo que gera seu curriculo automaticamente a partir de um Json',
							  'https://github.com/oopaze/CVCreate').__dict__,
				'3': projetos('FastCurriculo',
							  'Flask, Json, Python-Docx, Git, Heroku',
							  'Uma API que usa o CVCreate para gerar Curriculos a partir do preenchimento de um form',
							  'https://github.com/oopaze/FastCurriculo').__dict__, 
				'4': projetos('Sua Compra',
							  'Tkinter, SQLite, Socket',
							  'Um sistema de agenciamento de pequenos supermercados',
							  'https://github.com/oopaze/Sua-Compra').__dict__,
				'5': projetos('MercadinAPI - Em desenvolvimento',
							  'Python, Flask, PyTest, SQLAlchemy, Marshmallow, Git',
							  'API de gerenciamento de pequenos mercados',
							  'https://github.com/oopaze/Mercadin-API').__dict__,
				'6': projeto('REAnalytics',
							 'OpenPyXL',
							 'Sistema de preenchimento automático de planilhas',
							 'Privado').__dict__}

	habilidades_  = {'1': habilidades('Inglês', 'Avançado').__dict__, 
					 '2': habilidades('Python', 'Intermediario').__dict__,
					 '3': habilidades('JavaScripts', 'Intermediario').__dict__,
					 '4': habilidades('PostgreSQL/MySQL/MongoDB', 'Intermediario').__dict__,
					 '5': habilidades('SQLAlchemy/Mongoose', 'Avançado').__dict__,
					 '6': habilidades('Flask', 'Intermediario').__dict__,
					 '7': habilidades('Django', 'Intermediario').__dict__,
					 '8': habilidades('Express.js', 'Intermediario').__dict__}

	areaInteresse_ = {"1":"Desenvolvedor Back-End - Python"}

	data = fields(pessoais_, formacao_, emprego_, projetos_, habilidades_, areaInteresse_) 
	return json.dumps(data, ensure_ascii=False)
