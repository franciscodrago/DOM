console.dir(document.body)

let seccionSuperior=document.getElementById("principal");

console.log(seccionSuperior.innerHTML);
seccionSuperior.style.background="red"

let titulo=document.getElementById("titulo");
titulo.style.font="bold 40px monospace";
titulo.innerHTML="Vitajeans"


let parrafos=document.getElementsByTagName("p");
console.log(parrafos);
parrafos[0].innerText=new Date().toLocaleString();

let articulo = document.createElement("article");

articulo.innerHTML = "<h2>Contactanos en nuestras redes";

seccionSuperior.append(articulo);

parrafos[1].remove();

const productos = [{id: 1, nombre: "Remera", precio: 5000},
                   {id: 2, nombre: "Buzo", precio:7000 },
                   {id: 3, nombre: "Campera", precio:10000},
                   {id: 4, nombre: "Jean", precio: 8000}]


let campoEmpresa=document.getElementById("empresa");
let campoCantidad=document.getElementById("cantidad");
campoEmpresa.value="Vitajeans"
campoCantidad.value=productos.length;

//Tabla

let tabla=document.createElement("table");
tabla.className="table table-striped"
let tablaBody=document.createElement("tBody")

for(const producto of productos){
    tablaBody.innerHTML+=`
    <tr>
<td>${producto.id}</td>
<td>${producto.nombre}</td>
<td>${producto.precio}</td>
    </tr>
    `;
}
tabla.appendChild(tablaBody);
let inferior = document.getElementById("inferior");
inferior.append(tabla);

//cards

let cartas=document.getElementById("cartas")
for(const producto of productos){
let carta=document.createElement("div")
carta.className="card";
carta.innerHTML=`
<div class="card-body">
<h5 class="card-title">${producto.nombre}</h5>
<p class="card-text">${producto.precio}</p>
<a href="#" class="btn btn-primary">Comprar</a>
</div>
`
cartas.append(carta);
}