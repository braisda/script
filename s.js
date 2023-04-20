<script>
    <style>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-container label {
  display: inline-block;
  width: 100px;
  margin-right: 10px;
}

.form-container .input-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.form-container .input-group input[type="text"],
.form-container .input-group input[type="password"] {
  flex: 1;
}
</style>
let form = document.createElement("form");
form.setAttribute("class", "form-container");

let usuarioGroup = document.createElement("div");
usuarioGroup.setAttribute("class", "input-group");
let labelUsuario = document.createElement("label");
labelUsuario.setAttribute("for", "usuario");
labelUsuario.innerHTML = "USUARIO:";
let usuario = document.createElement("input");
usuario.setAttribute("type", "text");
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
let password = document.createElement("input");
password.setAttribute("type", "password");
password.setAttribute("class", "password");
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

</script>
