//capta el formulario
window.addEventListener("load", function () {
    let formulario = document.querySelector("#forProductAdd");
    
  
    formulario.addEventListener("submit", function (event) {
      let campoNombre = document.querySelector('#name');
      let campoPrecio = document.querySelector('#price');
      let campoDescripcion = document.querySelector('#description');
      let campoImagen = document.querySelector('#image');
  
      event.preventDefault();
      let errores = [];
      
//validacion nombre
    if (campoNombre.value == "") {
        errores.push('El nombre no puede estar vacio');
      }
    if (campoNombre.value.length < 5) {
        errores.push('El nombre debe tener al menos cinco caracteres');
      }
  
//validacion precio
    if (campoPrecio.value == "") {
        errores.push('El precio no puede estar vacio');
      }
    
        
//validacion extencion imagen FALTA
    
//validacion Descripcion 
    if (campoDescripcion.value == "") {
        errores.push('La descripcion no puede estar vacia');
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
  