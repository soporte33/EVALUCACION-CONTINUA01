function valida_envia(){

if (document.fvalida.nombre.value.length==0) {

alert("Tiene que escribir su nombre")
document.fvalida.nombre.focus()/*que regrese el cursor*/
return 0;
}


if (document.fvalida.apellidos.value.length==0) {

alert("Tiene que escribir sus apellidos")
document.fvalida.apellidos.focus()/*que regrese el cursor*/
return 0;
}


if (document.fvalida.ec.selectedIndex==0) {

alert("Debe selecionar un estado civil")
document.fvalida.ec.focus()/*que regrese el cursor*/
return 0;
}

if (document.fvalida.genero[0].checked==false && document.fvalida.genero[1].checked==false) {

alert("Debe selecionar un genero");
return false;
}

if (document.fvalida.chkd[0].checked==false && 
	document.fvalida.chkd[1].checked==false && 
	document.fvalida.chkd[2].checked==false) {

alert("Debe selecionar un deporte");
return false;
}

alert("Muchas gracias por enviar el formulario");
document.fvalida.submit();

}

