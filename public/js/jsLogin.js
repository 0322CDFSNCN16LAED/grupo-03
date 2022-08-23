//capta el formulario
window.addEventListener("load", function () {
    let formulario = document.querySelector("#forLogin");
    console.log(formulario);
    
  
  formulario.addEventListener("submit", function (event) {
    let campoEmail = document.querySelector('#email');
    let campoContraseña = document.querySelector('#password');
      
  
    event.preventDefault();
    let errores = [];
      
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
     
     
  
       //si no fallaron las validaciones 
      if (errores.length == 0) {
        formulario.submit();
      }       
    })
  })
  