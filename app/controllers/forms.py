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


def meuCV():
	pessoais_ = pessoais('José Pedro da Silva Gomes', '88 9 92266091', 'Pedroosd28@gmail.com', 'Crato-CE', '/oopaze', '/in/oopaze').__dict__

	formacao_ = {'1':formacao('Governador Adauto Bezerra', 'Crato-CE', 'Ensino Medio', 'Concluido - 2019').__dict__,
				 '2':formacao('Instituto Federal do Ceará', 'Crato-CE', 'Sistemas de Informação', 'Cursando - 2019').__dict__,
				 '3':formacao('IAExpert', 'Remoto', 'Redes Neurais Artificiais em Python', 'Concluido - 29/06/2020', '80').__dict__,
				 '4':formacao('Udemy', 'Remoto', 'Python para Data Science e Machine Learning - Completo', 'Concluido - 15/06/2020', '18').__dict__}

	emprego_ = {'1': emprego('Ricardo Eletro', 'Assistente Administrativo', '15/08/2019', '15/07/2020', 'Controlava todos os contratos feitos na loja, além de ser um dos responsáveis pelo pós-venda').__dict__}

	projetos_ = {'1': projetos('Booker',
						  'Flask, SQLAlchemy, Bootstrap, Marshmallow, Git, Heroku, Heroku-PG',
						  'Um site que te possibilita guardar livros tal como um repositório',
						  'https://github.com/oopaze/Booker').__dict__,
				'2': projetos('CVCreate',
							  'Json, Python-Docx',
							  'Um algoritmo que gera seu curriculo automaticamente',
							  'https://github.com/oopaze/CVCreate').__dict__,
				'3': projetos('Sua Compra',
							  'Tkinter, SQLite, Socket',
							  'Um sistema de agenciamento de pequenos supermercados',
							  'https://github.com/oopaze/Sua-Compra').__dict__}

	habilidades_  = {'1': habilidades('Inglês', 'Avançado').__dict__, 
					 '2': habilidades('Python', 'Avançado').__dict__,
					 '3': habilidades('PostgreSQL/MySQL', 'Intermediario').__dict__,
					 '4': habilidades('SQLAlchemy', 'Avançado').__dict__,
					 '5': habilidades('Flask', 'Avançado').__dict__}

	areaInteresse_ = {"1":"Desenvolvimento Web", "2":"Desenvolvimento Back-End"}


	return fields(pessoais_, formacao_, emprego_, projetos_, habilidades_, areaInteresse_)

jsonfields = json.dumps(meuCV(), ensure_ascii=False)
