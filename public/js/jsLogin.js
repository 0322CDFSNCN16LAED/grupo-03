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
  