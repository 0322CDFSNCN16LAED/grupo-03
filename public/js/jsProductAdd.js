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
    } else if (formulario.name.value.length < 5) {
      errores.push('El nombre debe tener al menos cinco caracteres');
      formulario.querySelector(".errorname").innerHTML = "El nombre debe tener al menos cinco caracteres"
    } else {
      formulario.querySelector(".errorname").innerHTML = ""
    };

  
    //validacion precio
    if (formulario.price.value == "") {
      errores.push('El precio no puede estar vacio');
      formulario.querySelector(".errorprice").innerHTML = "El precio no puede estar vacío"
    } else if (formulario.price.value <= 0) {
      errores.push('El precio debe ser mayor a cero');
      formulario.querySelector(".errorprice").innerHTML = "El precio debe ser mayor a cero"
    } else {
      formulario.querySelector(".errorprice").innerHTML = ""
    };
    
    //validacion Imagen       
    var filename = formulario.image.value
    var extension = filename.substring(filename.lastIndexOf(".")+1).toLowerCase()
    if (extension=="jpg"|| extension=="jpeg" || extension=="png" || extension=="gif" || filename == ""){
    formulario.querySelector(".errorimage").innerHTML = ""
   } else {
    errores.push("No se admiten archivos de extensión " + "'" + extension.toUpperCase() + "'." + " Archivos permitidos: JPG, JPEG, PNG o GIF.");
    formulario.querySelector(".errorimage").innerHTML = "No se admiten archivos de extensión " + "'" + extension.toUpperCase() + "'." + " Archivos permitidos: JPG, JPEG, PNG o GIF."
    }
    
    //validacion Descripcion 
    if (formulario.description.value == "") {
      errores.push('La descripcion no puede estar vacia');
      formulario.querySelector(".errordescription").innerHTML = "La descripción no puede estar vacia"
    } else if (
      formulario.description.value.length < 20){
        errores.push('La descripción debe tener al menos 20 caracteres');
        formulario.querySelector(".errordescription").innerHTML = "La descripción debe tener al menos 20 caracteres"
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
  
  