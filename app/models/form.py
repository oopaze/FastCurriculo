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
