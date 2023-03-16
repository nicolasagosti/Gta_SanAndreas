//guardar el estado (columna activa)
let columnaActiva = 0;

// seleccionar las columnas
const columnas = document.querySelectorAll(".columna");

//escuchar los clicks en cada una de ellas 

columnas.forEach((columna,indice)=>{
    columna.addEventListener('click',function(){
        console.log(columna,indice);
        cambiarColumna(indice);
    })
    
})

function cambiarColumna(indice){
columnas[columnaActiva].classList.remove("activa");
columnas[indice].classList.add("activa");
columnaActiva = indice;
}