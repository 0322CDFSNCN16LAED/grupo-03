//capta el formulario
window.addEventListener("load", function () {
  let formulario = document.querySelector("#forRegistro");
  

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let errores = [];
    let campoNombre = document.querySelector('#name');
    let campoNombreUsuario = document.querySelector('#user');
    let campoEmail = document.querySelector('#email');
    let campoContraseña = document.querySelector('#password');
    let campoImagen = document.querySelector('#image');

    //VALIDACIONES

    //PROBLEMA: no toma los archivos correctos como correctos (tira siempre error)
    /*var extensionesPermitidas = ["JPG", "JPEG", "PNG", "GIF"]
    var extension = formulario.image.value.split(".").pop();
    if (extension != extensionesPermitidas){
    errores.push("Archivos permitidos: JPG, JPEG, PNG o GIF.");
    formulario.querySelector(".errorimage").innerHTML = "Archivos permitidos: JPG, JPEG, PNG o GIF."
   } else {
    formulario.querySelector(".errorimage").innerHTML = ""
    }*/
    
    //validación imagen 
    
    function imageChange(campoImagen) {

      if (!campoImagen.target.files[0].type.split("/")[0] === "image") {
        errores.push("Archivos permitidos: JPG, JPEG, PNG o GIF.");
        formulario.querySelector(".errorimage").innerHTML = "Archivos permitidos: JPG, JPEG, PNG o GIF."
      }
    }
    

    //validacion nombre
    if (formulario.name.value == "") {
      errores.push('El nombre no puede estar vacio');
      formulario.querySelector(".errorname").innerHTML = "El nombre no puede estar vacío"
    } else if (formulario.name.value.length < 2) {
      errores.push('El nombre debe tener al menos dos caracteres');
      formulario.querySelector(".errorname").innerHTML = "El nombre debe tener al menos dos caracteres"
    } else {
      formulario.querySelector(".errorname").innerHTML = ""
    };

    //validacion nombre usuario
    if (formulario.user.value == "") {
      errores.push('El nombre de usuario no puede estar vacio');
      formulario.querySelector(".erroruser").innerHTML = "El nombre de usuario no puede estar vacío"
    } else if (formulario.user.value.length <= 2) {
      errores.push('El nombre de usuario debe tener al menos dos caracteres');
      formulario.querySelector(".erroruser").innerHTML = "El nombre debe tener al menos dos caracteres"
    } else {
      formulario.querySelector(".erroruser").innerHTML = ""
    }

    //validacion mail 
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (formulario.email.value == "") {
      errores.push('El email no puede estar vacio');
      formulario.querySelector(".erroremail").innerHTML = "El email no puede estar vacio"
    } //else if (formulario.email.body.isEmail == false) {
    else if (!filter.test(formulario.email.value)) {
      errores.push('Debes ingresar un email valido');
      formulario.querySelector(".erroremail").innerHTML = "Debes ingresar un email válido"
    } else {
      formulario.querySelector(".erroremail").innerHTML = ""
    }

    //validacion contraseña
    if (formulario.password.value == "") {
      errores.push('Debes ingresar una contraseña');
      formulario.querySelector(".errorpassword").innerHTML = "Debes ingresar una contraseña"
    } else if (formulario.password.value.length < 8) {
      errores.push('La contraseña debe tener al menos 8 caracteres');
      formulario.querySelector(".errorpassword").innerHTML = "La contraseña debe tener al menos 8 caracteres"
    } else {
      formulario.querySelector(".errorpassword").innerHTML = ""
    }

    //validación confirmar contraseña
    if (formulario.confirmar.value != formulario.password.value) {
      errores.push('Las contraseñas no coinciden');
      formulario.querySelector(".errorconfirmar").innerHTML = "Las contraseñas no coinciden"
    } else {
      formulario.querySelector(".errorconfirmar").innerHTML = ""
    }

    // SI NO HAY ERRORES 
    if (errores.length == 0) {
      formulario.submit();
    }
  
  })
})
