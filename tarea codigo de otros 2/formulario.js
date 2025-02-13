var formulario = document.querySelector(".formulario") // no existia el ID asi que lo cambié por una clase
formulario.onsubmit = function (event) { // cambié el nombre del parametro para que fuera más  descriptivo

  event.preventDefault(); // añadí la palabra default para completar la función

  const elementoNombre = formulario.elements[0] //cambié la declaración de las variables para evitar el var
  const elementoEdad = formulario.elements[1] //cambié el nombre de las variables para que fueran mas claras
  const elementoNacionalidad = formulario.elements[2]

  const nombre = elementoNombre.value
  const edad = elementoEdad.value

  const i = elementoNacionalidad.selectedIndex
  const nacionalidad = elementoNacionalidad.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    elementoNombre.classList.add("error")

  }
  if (edad < 18 || edad > 120) {
    elementoEdad.classList.add("error")

  } else { //lo simplifiqué con un else
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

// añadí los comandos a una función para que fuera reutilizable y reducir el codigo de más abajo, además de que generaba un botón sin utilidad.
function crearBotonBorrar(elementoLista) {
  const botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  const corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    botonBorrar.parentNode.remove()
  }
}


/**
 * función que genera los apartados de la lista de invitados
 * lo saqué de dentro de la función para que no fuera tan confuso y mejorar el principio solid
 * @param {string} descripcion 
 * @param {value} valor 
 * @param {elements} elementoLista 
 */

function crearElemento(descripcion, valor, elementoLista) {
  let crearSpan = document.createElement("span") //redeclaré las variables para no usar var
  let crearInput = document.createElement("input") //renombré las variables para que sean mas entendibles
  let darSaltoDeLinea = document.createElement("br")
  crearSpan.textContent = descripcion + ": "
  crearInput.value = valor
  elementoLista.appendChild(crearSpan);
  elementoLista.appendChild(crearInput);
  elementoLista.appendChild(darSaltoDeLinea);
}


/**
 *  función que genera un recuadro con la información de un invitado, además de un boton de borrar para eliminarlo.
 * @param {string} nombre 
 * @param {number} edad 
 * @param {string} nacionalidad 
 */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  const lista = document.getElementById("lista-de-invitados") // agregué el id lista de invitados ya que no existe.

  const elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista") // cambie added por add
  console.log(elementoLista);
  console.log(lista);
  lista.appendChild(elementoLista);

  //eliminé codigo repetitivo que generaba otro espacio de nombre

  crearElemento("Nombre", nombre, elementoLista);
  crearElemento("Edad", edad, elementoLista);
  crearElemento("Nacionalidad", nacionalidad, elementoLista);

  //saqué la función para crear botón de borrar fuera de esta función de agregar invitados para que no fuera tan confusa.
  crearBotonBorrar(elementoLista);

}