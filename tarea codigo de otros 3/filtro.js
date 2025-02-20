// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const listaDeProductos = document.getElementById("lista-de-productos") // cambié el get elements name por un ID, también renombré la variable para que sea mas clara.
const input = document.querySelector("input"); //quité el punto ya que no se trata de una clase, sino de una etiqueta, también cambie el nombre de la variable


const displayProductos = (ArrayDeProductos) => { //inserté el generador de productos dentro de una función que estaba sin usar más abajo.
  for (let i = 0; i < ArrayDeProductos.length; i++) {
    const producto = document.createElement("div") //cambie la declaración para evitar el uso de var y también el nombre de la variable
    producto.classList.add("producto")
  
    const titulo = document.createElement("p") //cambie la declaración para evitar el uso de var y también el nombre de la variable
    titulo.classList.add("titulo")
    titulo.textContent = ArrayDeProductos[i].nombre
    
    const imagen = document.createElement("img"); //cambie la declaración para evitar el uso de var
    imagen.setAttribute('src', ArrayDeProductos[i].img);
  
    producto.appendChild(titulo)
    producto.appendChild(imagen)
  
    listaDeProductos.appendChild(producto)
  }
}

displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild);
  }

  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );
  console.log(productosFiltrados);
  displayProductos(productosFiltrados); // reutilicé la función para optimizar código
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  