const container = document.getElementById("container");
let arregloProductos = ["Remeras", "Calzoncillos", "Medias"];
//   { id: 1, nombre: "Remeras", talle: "XL", precio: 15 },
//   { id: 2, nombre: "Calzoncillos", talle: "L", precio: 10 },
//   { id: 3, nombre: "Medias", talle: "M", precio: 12 },
// ];
// container.innerHTML = `
//  <div>
//  <h1>Productos</h1>
//  </div>`;
//arregloProductos.forEach((el) => {
//const nuevaCard = document.createElement("div");
//nuevaCard.className = "card";
//nuevaCard.innerHTML = `
// <p>${el.id}</p>
// <p>${el.nombre}</p>
// <p>${el.talle}</p>
// <p>$${el.precio}</p>
// `;

// container.appendChild(nuevaCard);
// // });*/
// const boton = document.createElement("button");
// boton.innerText = "Producto";
// boton.className = "btn";
// document.body.appendChild(boton);

let flag = false;

let botonProductos = document.getElementById("btn");
let index = 0;

//botonProductos.addEventListener("mouseover", () => {
const nuevaCard = document.createElement("div");
nuevaCard.className = "card";
//nuevaCard.innerHTML = `
//    <p>${index + 1}</p>
//   <p class="nombreProducto">${arregloProductos[index]}</p>
//    `;

// if (arregloProductos[index]) {
// container.appendChild(nuevaCard);
//index += 1;
// }
//});*/

botonProductos.addEventListener("mouseover", () => {
  if (!document.getElementsByClassName("card")[0]) {
    botonProductos.innerText = "Ocultar Productos";
    arregloProductos.forEach((el, index) => {
      const nuevaCard = document.createElement("div");
      nuevaCard.className = "card";
      nuevaCard.innerHTML = `
     <p class="nombreProducto">${arregloProductos[index]}</p>
   `;

      container.appendChild(nuevaCard);
    });

    flag = true;
  } else {
    botonProductos.innerText = "Mostrar Productos";
    container.innerHTML = "";
    flag = false;
  }
});
const botonCarrito1 = document.createElement("button");
botonCarrito1.innerText = "Comprar Remeras";
botonCarrito1.onclick = () => console.log("Compraste Remeras!");
document.body.appendChild(botonCarrito1);

const botonCarrito2 = document.createElement("button");
botonCarrito2.innerText = "Comprar Calzoncillos";
botonCarrito2.onclick = () => console.log("Compraste Calzoncillos!");
document.body.appendChild(botonCarrito2);

const botonCarrito3 = document.createElement("button");
botonCarrito3.innerText = "Comprar Medias";
botonCarrito3.onclick = () => console.log("Compraste Medias!");
document.body.appendChild(botonCarrito3);

/*container.innerHTML = `
 <div>
 <h1>Productos</h1>
 <h3>${arregloProductos.id}</h3>
 <h3>${arregloProductos.nombre}</h3>
 <h3>${arregloProductos.talle}</h3>
 <h3>${arregloProductos.precio}</h3>
 </div>
 `;*/
