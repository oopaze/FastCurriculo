var f = 1
var f_tamanho = 0
var formacao_values = new Map()

var e = 1
var e_tamanho = 0
var experiencia_values = new Map()

var p = 1
var p_tamanho = 0
var projetos_values = new Map()

var h = 1
var h_tamanho = 0
var habilidades_values = new Map()

var a = 1
var a_tamanho = 0
var area_values = new Map()

function formacao_value(val_control){
	if (val_control == 1){
		inputs = ['instituicao', 'curso', 'cidade', 'ano', 'horas']
		for(var input of inputs){
			for (var i=1; i<=f; i++){
				element = document.getElementById(String(input+i));
				if (element.value.length > 0){
					formacao_values.set(input+i, element.value);
				} 
			}
		}
	} else {
		for (var [key, value] of formacao_values) {
 			element = document.getElementById(key);
 			element.value = value
		}
	}
}

function experiencia_value(val_control){
	if (val_control == 1){
		inputs = ['empresa', 'cargo', 'entrada', 'saida', 'funcoes']
		for(var input of inputs){
			for (var i=1; i<=e; i++){
				element = document.getElementById(input+i);
				if (element.value.length > 0){
					experiencia_values.set(input+i, element.value);
				} 
			}
		}
	} else {
		for (var [key, value] of experiencia_values) {
 			element = document.getElementById(key);
 			element.value = value
		}
	}
}

function projetos_value(val_control){
	if (val_control == 1){
		inputs = ['titulo', 'tecnologias', 'link', 'resumo']
		for(var input of inputs){
			for (var i=1; i<=p; i++){
				element = document.getElementById(input+i);
				if (element.value.length > 0){
					projetos_values.set(input+i, element.value);
				} 
			}
		}
	} else {
		for (var [key, value] of projetos_values) {
 			element = document.getElementById(key);
 			element.value = value
		}
	}
}

function habilidades_value(val_control){
	if (val_control == 1){
		inputs = ['habilidade', 'nivel']
		for(var input of inputs){
			for (var i=1; i<=h; i++){
				element = document.getElementById(input+i);
				if (element.value.length > 0){
					habilidades_values.set(input+i, element.value);
				} 
			}
		}
	} else {
		for (var [key, value] of habilidades_values) {
 			element = document.getElementById(key);
 			element.value = value
		}
	}
}

function area_value(val_control){
	if (val_control == 1){
		for (var i=1; i<=a; i++){
			element = document.getElementById('vaga'+i);
			if (element.value.length > 0){
				area_values.set('vaga'+i, element.value);
			} 
		}
	} else {
		for (var [key, value] of area_values) {
 			element = document.getElementById(key);
 			element.value = value
		}
	}
}

function add_formacao(){
	formacao_value(1)
	f += 1
	var formacao = `
									<div class="tamanho" id='formacao`+f+`'>
										<div class="col-md-12 side_left">
											<hr width="100%;">
										</div>
										<div class="col-md-6 col-sm-1 side_left">	
											<label> Instituição </label>
											<input placeholder="EEM Escola Estadual do Ceará" class="form-control" type="text" name="instituicao`+f+`" id="instituicao`+f+`">
										</div>
										<div class="col-md-6 col-sm-12 side_left">
											<label> Local </label>
											<input placeholder="Sistemas de Informação" class="form-control" type="text" name="curso`+f+`" id="curso`+f+`">
										</div>
										<div class="col-md-4 col-sm-12 side_left">	
											<label> Cidade </label>
											<input placeholder='Example-RJ/Remoto' class="form-control" type="text" name="cidade`+f+`" id="cidade`+f+`">
										</div>
										<div class="col-md-4 col-sm-12 side_left">
											<label> Ano </label>
											<input placeholder='Concluído em 2020' class="form-control" type="text" name="ano`+f+`" id="ano`+f+`">
										</div>
										<div class="col-md-4 col-sm-12 side_left">
											<label> Hora-Aulas </label>
											<input placeholder='20' class="form-control" type="number" name="horas`+f+`" id="horas`+f+`">
										</div>
									</div>`

	f_tamanho = formacao.length

	element = document.getElementById('formacao');
	element.innerHTML += formacao;
	formacao_value()
}

function add_experiencia(){
	experiencia_value(1)
	e += 1
	var experiencia = `
									<div class="tamanho" id='experiencia`+e+`'>
										<div class="col-md-12 side_left">
											<hr width="100%;">
										</div>
										<div class="col-md-6 col-sm-12 side_left">	
											<label> Empresa </label>
											<input placeholder="Comércio dois irmãos" class="form-control" type="text" name="empresa`+e+`" id="empresa`+e+`">
										</div>
										<div class="col-md-6 col-sm-12 side_left">
											<label> Cargo </label>
											<input placeholder="Caixa" class="form-control" type="text" name="cargo`+e+`" id="cargo`+e+`">
										</div>
										<div class="col-md-6 col-sm-12  side_left">
											<label> Entrada </label>
											<input placeholder='janeiro/2020' class="form-control" type="text" name="entrada`+e+`" id="entrada`+e+`">
										</div>
										<div class="col-md-6 col-sm-12 side_left">
											<label> Saida </label>
											<input placeholder='julho/2020' class="form-control" type="text" name="saida`+e+`" id="saida`+e+`">
										</div>
										<div class="col-md-12 col-sm-12 side_left">
											<label> Funções </label>
											<textarea form='Curriculo' class="form-control" name='funcoes`+e+`' id="funcoes`+e+`"></textarea>
										</div>
									</div>`
	e_tamanho = experiencia.length
	element = document.getElementById('experiencia');
	element.innerHTML += experiencia;
	experiencia_value()
}

function add_projetos(){
	projetos_value(1)
	p += 1
	var projetos = `
									<div class="tamanho" id='projetos`+p+`'>
										<div class="col-md-12 side_left">
											<hr width="100%;">
										</div>
										<div class="col-md-6 col-sm-12 side_left">									
											<label> Titulo </label>
											<input placeholder='FastCurriculo' class="form-control" placeholder='Titulo do projeto' type="text" name="titulo` +p+ `" id="titulo` +p+ `">
										</div>
										<div class="col-md-6 col-sm-12 side_left">						
											<label> Tecnologias </label>
											<input placeholder='Flask, Python-Docx' class="form-control" placeholder='Tecnologias usadas' type="text" name="tecnologias` +p+ `" id="tecnologias` +p+ `">
										</div>
										<div class="col-md-12 col-sm-12">
											<label> Link </label>
											<input placeholder="https://github.com/oopaze/CVGenerator-API" class="form-control" placeholder='Link do projeto(Github/Site)' type="text" name="link` +p+`" id="link` +p+`">
										</div>
										<div class="col-md-12 col-sm-12">	
											<label> Resumo </label>
											<textarea form='Curriculo' class="form-control" placeholder='Breve Resumo sobre o projeto' name="resumo`+p+`" id="resumo`+p+`">  </textarea>
										</div>
									</div>`
	p_tamanho = projetos.length
	element = document.getElementById('projetos');
	element.innerHTML += projetos;
	projetos_value()
}

function add_habilidades(){
	habilidades_value(1)
	h += 1
	var habilidades = `
									<div class="tamanho" id='habilidades`+h+`'>
										<div class="col-md-12 side_left">
											<hr width="100%;">
										</div>
										<div class="col-md-6  col-sm-12 side_left">
											<label> Habilidade </label>
											<input placeholder="Inglês" class="form-control" type="text" name="habilidade`+h+`" required>
										</div>
										<div class="col-md-6 col-sm-12 side_left">
											<label> Nível </label>
											<input placeholder="Avançado" class="form-control" type="text" name="nivel`+h+`" required>
										</div>
									</div>`
	h_tamanho = habilidades.length
	element = document.getElementById('habilidades');
	element.innerHTML += habilidades;
	habilidades_value()
}

function add_area(){
	area_value(1)
	a += 1
	var area = `
									<div class="tamanho" id='area1'>
										<div class="col-md-12 side_left">
											<hr width="100%;">
										</div>
										<div class="col-md-3 col-sm-12 side_left">
											<p> Area de Interesse </p>
										</div>
										<div class="col-md-9 col-sm-12 side_left">
											<input placeholder="Desenvolvimento Web" class="form-control" type="text" name="area`+a+`" id="vaga`+a+`">
										</div>
									</div>`
	a_tamanho = area.length
	element = document.getElementById('area');
	element.innerHTML += area;
	area_value()
}

function del_formacao(){
	formacao_value(1)
	element = document.getElementById('formacao');
	
	tamanhoTotal = element.innerHTML.length;

	if (tamanhoTotal >= 2*f_tamanho - 27){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-f_tamanho); 
		f -= 1;
	}
	formacao_value()
}

function del_experiencia(){
	experiencia_value(1)
	element = document.getElementById('experiencia');
	
	tamanhoTotal = element.innerHTML.length;
	if (tamanhoTotal >= 2*e_tamanho-15){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-e_tamanho); 
		e -= 1;
	}
	experiencia_value()
}

function del_projetos(){
	projetos_value(1)
	element = document.getElementById('projetos');
	
	tamanhoTotal = element.innerHTML.length;
	if (tamanhoTotal >= (2*p_tamanho-225)){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-p_tamanho+100); 
		p -= 1;
	}
	projetos_value()
}
function del_habilidades(){
	habilidades_value(1)
	element = document.getElementById('habilidades');
	
	tamanhoTotal = element.innerHTML.length;
	if (tamanhoTotal >= 2*h_tamanho-3){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-h_tamanho-3); 
		h -= 1;
	}
	habilidades_value()
}
function del_area(){
	area_value(1)
	element = document.getElementById('area');
	
	tamanhoTotal = element.innerHTML.length;
	if (tamanhoTotal >= 2*a_tamanho){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-a_tamanho); 
		a -= 1;
	}
	area_value()
}

function select_text(text){
	element = document.getElementById('navbarDropdown');
	element.innerHTML = text;
}

