function validarTexto(texto){
	const exprecion = /^[a-zA-ZñÑ .áéíóú]+$/;
	if (texto.val() == "" || !exprecion.test(texto.val())) {
		return false;
	}else{
		return true;
	}
}

function validarCorreo(texto){
	const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if (texto.val() == "" || !regexCorreo.test(texto.val())) {
		return false;
	}else{
		return true;
	}
}

