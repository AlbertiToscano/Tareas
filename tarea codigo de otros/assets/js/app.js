const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nombre = document.querySelector(`.name`);/* cambie el nombre de laas variables para que fueran menos confusas */
const blog = document.querySelector(`.blog`); /* cambie el selector para que fuera selector de clases */
const localizacion = document.querySelector(`.location`); /* normalicé el uso de `` */

async function displayUser(username) { /* añadí async a la función ya que se utiliza await */
  nombre.textContent = 'cargando...';
  try {   /* añadí el try */
    const response = await fetch(`${usersEndpoint}/${username}`);
    console.log(response);
    const data = await response.json(); /* agregué la variable data y transformé a objeto, además añadí la palabra await */
    console.log(data);
    nombre.textContent = `${data.name}`; /* cambie las comillas por `` */
    blog.textContent = `${data.blog}`;
    localizacion.textContent = `${data.location}`;

  } catch (err) {
    console.log('OH NO!');
    console.log(err);
    nombre.textContent = `Algo salió mal: ${err}`/* añadí el simbolo de $ */
  }
}




displayUser('stolinski')
/* .then((user)=>console.log(user)) */
/*        .catch(handleError); */