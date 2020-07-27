var f = 1
var f_tamanho = 0

var e = 1
var e_tamanho = 0

var p = 1
var p_tamanho = 0

var h = 1
var h_tamanho = 0


function add_formacao(){
	f += 1
	var formacao = '<div class="tamanho" id="formacao' + f + '"><div class="col-md-12 side_left"><hr width="100%;"></div><div class="col-md-6 col-sm-1 side_left"><label> Instituição </label><input class="form-control" type="text" name=""></div><div class="col-md-6 col-sm-12 side_left"><label> Curso </label><input class="form-control" type="text" name=""></div><div class="col-md-4 col-sm-12 side_left"><label> Cidade </label><input class="form-control" type="text" name=""></div><div class="col-md-4 col-sm-12 side_left"><label> Ano </label><input class="form-control" type="text" name=""></div><div class="col-md-4 col-sm-12 side_left"><label> Hora-Aulas </label><input class="form-control" type="text" name=""></div></div>';
	f_tamanho = formacao.length
	element = document.getElementById('formacao');
	element.innerHTML += formacao;
}

function add_experiencia(){
	e += 1
	var experiencia = '<div class="tamanho" id="experiencia' + e + '"><div class="col-md-12 side_left"><hr width="100%;"></div><div class="col-md-6 col-sm-12 side_left"><label> Empresa </label><input class="form-control" type="text" name=""></div><div class="col-md-6 col-sm-12 side_left"><label> Cargo </label><input class="form-control" type="text" name=""></div><div class="col-md-6 col-sm-12  side_left"><label> Entrada </label><input class="form-control" type="text" name=""></div><div class="col-md-6 col-sm-12 side_left"><label> Saida </label><input class="form-control" type="text" name=""></div><div class="col-md-12 col-sm-12 side_left"><label> Resumo </label><textarea class="form-control"></textarea></div></div>';
	e_tamanho = experiencia.length
	element = document.getElementById('experiencia');
	element.innerHTML += experiencia;
}

function add_projetos(){
	p += 1
	var projetos = '<div class="tamanho" id="projetos' + p + '"><div class="col-md-12 side_left"><hr width="100%;"></div><div class="col-md-6 col-sm-12 side_left"><label> Titulo </label><input class="form-control" placeholder="Titulo do projeto" type="text" name=""></div><div class="col-md-6 col-sm-12 side_left"><label> Tecnologias </label><input class="form-control" placeholder="Tecnologias usadas" type="text" name=""></div><div class="col-md-12 col-sm-12"><label> Link </label><input class="form-control" placeholder="Link do projeto(Github/Site)" type="text" name=""></div><div class="col-md-12 col-sm-12"><label> Resumo </label><textarea class="form-control" placeholder="Breve Resumo sobre o projeto">  </textarea></div></div>';
	p_tamanho = projetos.length
	element = document.getElementById('projetos');
	element.innerHTML += projetos;
}

function add_habilidades(){
	h += 1
	var habilidades = '<div class="tamanho" id="habilidades' + h + '"><div class="col-md-12 side_left"><hr width="100%;"></div><div class="col-md-6  col-sm-12 side_left"><label> Tecnologia </label><input class="form-control" type="text" name=""></div><div class="col-md-6 col-sm-12 side_left"><label> Nível </label><input class="form-control" type="text" name=""></div></div>'

	h_tamanho = habilidades.length
	element = document.getElementById('habilidades');
	element.innerHTML += habilidades;
}


function del_formacao(){
	element = document.getElementById('formacao');
	
	tamanhoTotal = element.innerHTML.length;
	console.log(tamanhoTotal, f_tamanho, tamanhoTotal-f_tamanho)
	if (tamanhoTotal >= 2*f_tamanho){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-f_tamanho) 
	}
}

function del_experiencia(){
	element = document.getElementById('experiencia');
	
	tamanhoTotal = element.innerHTML.length;
	console.log(tamanhoTotal, e_tamanho, tamanhoTotal-e_tamanho)
	if (tamanhoTotal >= 2*e_tamanho){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-e_tamanho) 
	}
}
function del_projetos(){
	element = document.getElementById('projetos');
	
	tamanhoTotal = element.innerHTML.length;
	console.log(tamanhoTotal, p_tamanho, tamanhoTotal-p_tamanho)
	if (tamanhoTotal >= 2*p_tamanho){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-p_tamanho) 
	}
}
function del_habilidades(){
	element = document.getElementById('habilidades');
	
	tamanhoTotal = element.innerHTML.length;
	console.log(tamanhoTotal, h_tamanho, tamanhoTotal-h_tamanho)
	if (tamanhoTotal >= 2*h_tamanho){
		element.innerHTML = element.innerHTML.slice(0, tamanhoTotal-h_tamanho) 
	}
}

function select_text(text){
	element = document.getElementById('navbarDropdown');
	element.innerHTML = text;
}

