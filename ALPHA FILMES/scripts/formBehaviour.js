function registro(evt){
	var senha = document.getElementById("nova").value;
	var senhaConfirm = document.getElementById("cnova").value;
	var errorMsg = document.getElementById("msgErrorSenha");
	var sucessMsg = document.getElementById("msgSucess");

	var errorNick = document.getElementById("msgErrorNick");
	var nick = document.getElementById("user").value

	var formulario = document.getElementById("cadastroForm");
	errorMsg.style.display = "none";
	errorNick.style.display = "none";

	formulario.checkValidity();

	if(senha == senhaConfirm && nick.length >= 3){
		sucessMsg.style.display = "block";
		setTimeout(redirectToLogin,2500); 
	}
	else{
		if(nick.length < 3){
			errorNick.style.display = "block";
		}

		if(senha != senhaConfirm){
			errorMsg.style.display = "block";
		}
	}
	evt.preventDefault();
}

function redirectToLogin() {
	window.location.replace("./login.html")
}

function login(evt){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var msgLogin = document.getElementById("msgErrorLogin");
	
	var formulario = document.getElementById("cadastroForm");
	msgLogin.style.display="none";

	formulario.checkValidity();

	if(email != "ana.borges@uniriotec.br" || password != "a1234"){
		msgLogin.style.display="block";
	}
	else{
		location.href="index.html"
	}
	evt.preventDefault();
}

function comentario(evt){
	var comentario = document.getElementById("comentario").value;
	var form = document.getElementById("form-coment");

	if(comentario != ""){
		document.getElementById("p").append(comentario);
		document.getElementById("coment-forum").style.display = "block";
		document.getElementById("comentario").value = "";
	}

	form.checkValidity();
	evt.preventDefault();
}     

function denuncia(){
	var valor = $("input[name='tipo']:checked").val();
	console.log(valor);

	if(valor != 'on'){
		$('#msgDenunciaMiss').css("display", "block");
	}
	else{
		$('#msgDenunciaMiss').css("display", "none");
		$('#msgDenuncia').css("display", "block");
		setTimeout(closeModal,1000); 
	}
}     

function closeModal(){
	$('#denunciaModal').modal('hide');
	$('#msgDenuncia').css("display", "none");
}
