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
    if (formulario.name.value == "") {
      errores.push('El nombre no puede estar vacio');
      formulario.querySelector(".errorname").innerHTML = "El nombre no puede estar vacío"
    } else if (formulario.name.value.length < 2) {
      errores.push('El nombre debe tener al menos dos caracteres');
      formulario.querySelector(".errorname").innerHTML = "El nombre debe tener al menos dos caracteres"
    } else {
      formulario.querySelector(".errorname").innerHTML = ""
    };

  
    //validacion precio
    if (formulario.price.value == "") {
      errores.push('El precio no puede estar vacio');
      formulario.querySelector(".errorprice").innerHTML = "El precio no puede estar vacío"
    } else if (formulario.price.value <= 0) {
      errores.push('El precio debe ser mayos a cero');
      formulario.querySelector(".errorprice").innerHTML = "El precio debe ser mayos a cero"
    } else {
      formulario.querySelector(".errorprice").innerHTML = ""
    };
    
    //validacion Imagen (se envia igual el formulario si agrego otro archivo)       
    function imageChange(campoImagen) {

      if (!campoImagen.target.files[0].type.split("/")[0] === "image") {
        errores.push("Archivos permitidos: JPG, JPEG, PNG o GIF.");
        formulario.querySelector(".errorimage").innerHTML = "Archivos permitidos: JPG, JPEG, PNG o GIF."
      }
    }
    
    //validacion Descripcion 
    if (formulario.description.value == "") {
      errores.push('La descripcion no puede estar vacia');
      formulario.querySelector(".errordescription").innerHTML = "La descripcion no puede estar vacia"
    } else {
      formulario.querySelector(".errordescription").innerHTML = ""
    };
              
    //si no fallaron las validaciones 
    if (errores.length == 0) {
      formulario.submit();
    }
  }
      
  )
})
  
  