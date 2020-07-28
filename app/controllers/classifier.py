from app.models import form

def curriculo_count_keys(no_repeat):
	repeat = [0, 0, 0, 0, 0]
	for key in no_repeat:
		key, num =  key[:-1], key[-1]
		if key == 'curso':
			repeat[0] = int(num)
		elif key == 'cargo':
			repeat[1] = int(num)
		elif key == 'titulo':
			repeat[2] = int(num)
		elif key == 'tecnologias':
			repeat[3] = int(num)
		elif key == 'area':
			repeat[4] = int(num)
	print(repeat)
	return repeat


def gerar_dic(data, keys):
	repeat = curriculo_count_keys(keys)
	pessoas = pessoais_classifier(data)
	formacoes = formacao_classifier(data, repeat[0])
	experiencias = experiencia_classifier(data, repeat[1])
	projetos = projetos_classifier(data, repeat[2])
	habilidades = habilidades_classifier(data, repeat[3])
	interesse = interesse_classifier(data, repeat[4])

	fields = form.fields(pessoas, formacoes, experiencias, projetos, habilidades, interesse)

	return fields

def interesse_classifier(data, index):
	interesse = {}
	for i in range(0, index):
		interesse[f'{i+1}'] = data[f'area{i+1}']

	return interesse

def pessoais_classifier(data):
	eu = form.pessoais(data['nome'], 
				  data['telefone'], 
				  data['email'], 
				  data['Cidade'],
				  data['Git'], 
				  data['Linkedin'])
	return eu.__dict__

def formacao_classifier(data, index):
	formacoes = {}
	for i in range(1, index+1):
		formacao = form.formacao(data[f'instituicao{i}'], 
									 	  data[f'cidade{i}'], 
									 	  data[f'curso{i}'], 
									 	  data[f'ano{i}'], 
									 	  data[f'horas{i}'])
		formacoes[f'{i}'] = formacao.__dict__

	return formacoes

def experiencia_classifier(data, index):
	experiencias = {}
	for i in range(1, index+1):
		emprego = form.emprego(data[f'empresa{i}'], 
							   data[f'cargo{i}'], 
							   data[f'entrada{i}'], 
							   data[f'saida{i}'], 
							   data[f'funcoes{i}'], )
		experiencias[f'{i}'] = emprego.__dict__

	return experiencias

def projetos_classifier(data, index):
	projetos = {}
	for i in range(1, index+1):
		projeto = form.projetos(data[f'titulo{i}'], 
							   data[f'tecnologias{i}'], 
							   data[f'link{i}'], 
							   data[f'resumo{i}'])
		projetos[f'{i}'] = projeto.__dict__

	return projetos 

def habilidades_classifier(data, index):
	habilidades = {}
	for i in range(1, index+1):
		habilidade = form.habilidades(data[f'habilidade{i}'], 
									  data[f'nivel{i}'])
		habilidades[f'{i}'] = habilidade.__dict__

	return habilidades











