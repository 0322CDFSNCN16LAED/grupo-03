//capta el formulario
window.addEventListener("load", function () {
  let formulario = document.querySelector("#forProductAdd");
    
  
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();  
    let errores = [];    
    
    //validacion nombre
    if (formulario.name.value == "") {
      errores.push('error: nombre vacío'); 
      formulario.querySelector(".errorname").innerHTML = "El nombre no puede estar vacío"
    } else if (formulario.name.value.length <= 5) {
      errores.push('error: nombre menor a 5 dígitos'); 
      formulario.querySelector(".errorname").innerHTML = "El nombre debe tener al menos cinco caracteres"
    } else {
      formulario.querySelector(".errorname").innerHTML = ""
    };

  
    //validacion precio
    if (formulario.price.value == "") {
      errores.push('precio vacío'); 
      formulario.querySelector(".errorprice").innerHTML = "El precio no puede estar vacío"
    } else if (formulario.price.value <= 0) {
      errores.push('precio menor a 0'); 
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
    errores.push('error en la imagen'); 
    formulario.querySelector(".errorimage").innerHTML = "No se admiten archivos de extensión " + "'" + extension.toUpperCase() + "'." + " Archivos permitidos: JPG, JPEG, PNG o GIF."
    }
    
    //validacion Descripcion 
    if (formulario.description.value == "") {
      errores.push('descripción vacía'); 
      formulario.querySelector(".errordescription").innerHTML = "La descripción no puede estar vacia"
    } else if (
      formulario.description.value.length <= 20){
        errores.push('descripción menor a 20 dígitos'); 
      formulario.querySelector(".errordescription").innerHTML = "La descripción debe tener al menos 20 caracteres"
    } else {
      formulario.querySelector(".errordescription").innerHTML = ""
    };
              
    //si no fallaron las validaciones 
    if (errores.length == 0) {
      formulario.submit();
    } else { console.log(errores)}
  }
      
  )
})
  
  