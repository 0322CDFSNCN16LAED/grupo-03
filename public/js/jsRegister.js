//capta el formulario
window.addEventListener("load", function () {
  let formulario = document.querySelector("#forRegistro");
  

  formulario.addEventListener("submit", function (event) {
    let campoNombre = document.querySelector('#name');
    let campoNombreUsuario = document.querySelector('#user');
    let campoEmail = document.querySelector('#email');
    let campoContraseña = document.querySelector('#password');
    let campoImagen = document.querySelector('#image');

    event.preventDefault();
    let errores = [];
    //validaciones

//validacion extencion imagen falta
    

    //validacion nombre
    if (campoNombre.value == "") {
      errores.push('El nombre no puede estar vacio');
    }
    if (campoNombre.value.length <= 2) {
      errores.push('El nombre debe tener al menos dos caracteres');
    }

    //validacion nombre usuario
    if (campoNombreUsuario.value == "") {
      errores.push('El nombre de usuario no puede estar vacio');
    }
    if (campoNombreUsuario.value.length <= 2) {
      errores.push('El nombre debe tener al menos dos caracteres');
    }

    //validacion mail (cuando pongo un mail no valido no aparecen los errores)
    
    if (campoEmail.value == "") {
      errores.push('El mail no puede estar vacio');
    }
    if (campoEmail.value.isEmail == false) {
      errores.push('Debes ingresar un mail valido');
    }
        

     //validacion contraseña
     if (campoContraseña.value == "") {
      errores.push('La contraseña no puede estar vacia');
    }
    if (campoContraseña.value.length < 8) {
      errores.push('La contraseña debe tener al menos 8 caracteres');
    }

     //si no fallaron las validaciones 
    if (errores.length == 0) {
      formulario.submit();
    } else {
      let ulErrores = document.querySelector("div.errores ul");
      for (let i = 0; i < errores.length; i++){
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
      }
    }
	
  })
})
