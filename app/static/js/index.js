var f = 1
var f_tamanho = 0

var e = 1
var e_tamanho = 0

var p = 1
var p_tamanho = 0

var h = 1
var h_tamanho = 0

var a = 1
var a_tamanho = 0

function add_formacao(){

	f += 1
	var formacao = `
									<div class="tamanho" id='formacao`+f+`'>
										<div class="col-md-12 side_left">
											<hr width="100%;">
										</div>
										<div class="col-md-6 col-sm-1 side_left">	
											<label> Instituição </label>
											<input placeholder="EEM Escola Estadual do Ceará" class="form-control" type="text" name="instituicao`+f+`" required>
										</div>
										<div class="col-md-6 col-sm-12 side_left">
											<label> Curso </label>
											<input placeholder="Sistemas de Informação" class="form-control" type="text" name="curso`+f+`" required>
										</div>
										<div class="col-md-4 col-sm-12 side_left">	
											<label> Cidade </label>
											<input placeholder='Example-RJ/Remoto' class="form-control" type="text" name="cidade`+f+`" required>
										</div>
										<div class="col-md-4 col-sm-12 side_left">
											<label> Ano </label>
											<input placeholder='Concluído em 2020' class="form-control" type="text" name="ano`+f+`" required>
										</div>
										<div class="col-md-4 col-sm-12 side_left">
											<label> Hora-Aulas </label>
											<input placeholder='20' class="form-control" type="number" name="horas`+f+`" required>
										</div>
									</div>`

	f_tamanho = formacao.length

	element = document.getElementById('formacao');
	element.innerHTML += formacao;
}

function add_experiencia(){
	e += 1
	var experiencia = `
									<div class="tamanho" id='experiencia`+e+`'>
										<div class="col-md-12 side_left">
											<hr width="100%;">
										</div>
										<div class="col-md-6 col-sm-12 side_left">	
											<label> Empresa </label>
											<input placeholder="Comércio dois irmãos" class="form-control" type="text" name="empresa`+e+`" required>
										</div>
										<div class="col-md-6 col-sm-12 side_left">
											<label> Cargo </label>
											<input placeholder="Caixa" class="form-control" type="text" name="cargo`+e+`" required>
										</div>
										<div class="col-md-6 col-sm-12  side_left">
											<label> Entrada </label>
											<input placeholder='janeiro/2020' class="form-control" type="text" name="entrada`+e+`" required>
										</div>
										<div class="col-md-6 col-sm-12 side_left">
											<label> Saida </label>
											<input placeholder='julho/2020' class="form-control" type="text" name="saida`+e+`" required>
										</div>
										<div class="col-md-12 col-sm-12 side_left">
											<label> Funções </label>
											<textarea form='Curriculo' class="form-control" name='funcoes`+e+`'></textarea>
										</div>
									</div>`
	e_tamanho = experiencia.length
	element = document.getElementById('experiencia');
	element.innerHTML += experiencia;
}

function add_projetos(){
	p += 1
	var projetos = `
									<div class="tamanho" id='projetos`+p+`'>
										<div class="col-md-12 side_left">
											<hr width="100%;">
										</div>
										<div class="col-md-6 col-sm-12 side_left">									
											<label> Titulo </label>
											<input placeholder='FastCurriculo' class="form-control" placeholder='Titulo do projeto' type="text" name="titulo` +p+ `" required>
										</div>
										<div class="col-md-6 col-sm-12 side_left">						
											<label> Tecnologias </label>
											<input placeholder='Flask, Python-Docx' class="form-control" placeholder='Tecnologias usadas' type="text" name="tecnologias` +p+ `" required>
										</div>
										<div class="col-md-12 col-sm-12">
											<label> Link </label>
											<input placeholder="https://github.com/oopaze/CVGenerator-API" class="form-control" placeholder='Link do projeto(Github/Site)' type="url" name="link` +p+`" required>
										</div>
										<div class="col-md-12 col-sm-12">	
											<label> Resumo </label>
											<textarea form='Curriculo' class="form-control" placeholder='Breve Resumo sobre o projeto' name="resumo`+p+`">  </textarea>
										</div>
									</div>`
	p_tamanho = projetos.length
	element = document.getElementById('projetos');
	element.innerHTML += projetos;
}

function add_habilidades(){
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
}
function add_area(){
	a += 1
	var area = `
									<div class="tamanho" id='area1'>
										<div class="col-md-12 side_left">
											<hr width="100%;">
										</div>
										<div class="col-md-3 col-sm-12 side_left">
											<label> Area de Interesse </label>
										</div>
										<div class="col-md-9 col-sm-12 side_left">
											<input placeholder="Desenvolvimento Web" class="form-control" type="text" name="area1">
										</div>
									</div>`
	a_tamanho = area.length
	element = document.getElementById('area');
	element.innerHTML += area;
}

function del_formacao(){
	element = document.getElementById('formacao');
	
	tamanhoTotal = element.innerHTML.length;

	if (tamanhoTotal >= 2*f_tamanho - 27){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-f_tamanho); 
		f -= 1;
	}
}

function del_experiencia(){
	element = document.getElementById('experiencia');
	
	tamanhoTotal = element.innerHTML.length;
	if (tamanhoTotal >= 2*e_tamanho-15){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-e_tamanho); 
		e -= 1;
	}
}

function del_projetos(){
	element = document.getElementById('projetos');
	
	tamanhoTotal = element.innerHTML.length;
	if (tamanhoTotal >= (2*p_tamanho-225)){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-p_tamanho+100); 
		p -= 1;
	}
}
function del_habilidades(){
	element = document.getElementById('habilidades');
	
	tamanhoTotal = element.innerHTML.length;
	if (tamanhoTotal >= 2*h_tamanho-3){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-h_tamanho-3); 
		h -= 1;
	}
}
function del_area(){
	element = document.getElementById('area');
	
	tamanhoTotal = element.innerHTML.length;
	if (tamanhoTotal >= 2*a_tamanho){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-a_tamanho); 
		a -= 1;
	}
}

function select_text(text){
	element = document.getElementById('navbarDropdown');
	element.innerHTML = text;
}

