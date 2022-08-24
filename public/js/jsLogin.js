//capta el formulario
window.addEventListener("load", function () {
    let formulario = document.querySelector("#forLogin");
    console.log(formulario);
    
  
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
   // let errores = [];
      
    //VALIDACION EMAIL
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (formulario.email.value == "") {
      //errores.push('El email no puede estar vacío');
      formulario.querySelector(".erroremail").innerHTML = "El email no puede estar vacío"
    } else if (!filter.test(formulario.email.value)) {
      //errores.push('Debes ingresar un email valido');
      formulario.querySelector(".erroremail").innerHTML = "Debes ingresar un email válido"
    } else {
      formulario.querySelector(".erroremail").innerHTML = ""
    }    
      
    //VALIDACION CONTRASEÑA
    if (formulario.password.value == "") {
      //errores.push('Debes ingresar una contraseña');
      formulario.querySelector(".errorpassword").innerHTML = "Debes ingresar una contraseña"
    } else {
      formulario.querySelector(".errorpassword").innerHTML = ""
    }
  
       //si no fallaron las validaciones 
      if (errores.length == 0) {
        formulario.submit();
      } // else {console.log(errores)}      
    })
  })
  