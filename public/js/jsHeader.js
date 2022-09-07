window.addEventListener("load", function () {
    let container = document.querySelector(".container");
    let menumobile = document.querySelector("#menumobile");
    let burgermenu = document.querySelector("#burgermenu");
    let back1 = document.querySelector(".fa-chevron-left")
  
        burgermenu.addEventListener("click", function(){
            menumobile.classList.toggle("show");
        });

        back1.addEventListener("click", function(){
            menumobile.classList.remove("show");
        });

    let categoria = document.querySelectorAll("#categ")
    let submenu = document.querySelectorAll("#submenu")

        for (let i=0; i<categoria.length; i++){
        categoria[i].addEventListener("click", function(){
            submenu[i].classList.toggle("show")
        })}

        container.style.display = "block"

  })
