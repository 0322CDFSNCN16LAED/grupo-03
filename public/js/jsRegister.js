// //capta el formulario
// window.addEventListener("load", function () {
//   let formulario = document.querySelector("#forRegistro");
  

//   formulario.addEventListener("submit", function (event) {
//     let campoNombre = document.querySelector('#name');
    
//     event.preventDefault();
//     let errores = [];
//     //validaciones
//     if (campoNombre.value == "") {
    
//       errores.push('El nombre no puede estar vacio');

   
//     }


//     //si no fallaron las validaciones 
//     if (errores.length == 0) {
//       formulario.submit();
//     } else {
//       let ulErrores = document.querySelector(".errores.ul");
//       //console.log(errores);
//       errores.forEach(error => {
//         ulErrores.innerHTML += `<li>${error}</li>`;
//       })
//     }
	
//   })
// })