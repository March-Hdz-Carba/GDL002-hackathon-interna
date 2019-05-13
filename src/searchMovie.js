const key = 10784520;

const femScifi = [
    'Mad Max',
    'Gravity',
    'Contact',
    'Arrival',
    'Alien',
    'Ex Machina',
    'Her',
    'Wonder Woman',
    'Captain Marvel',
    'Ghost in the shell'
    ];

// El arrow function recibe el texto a buscar
function searchMovie(search) {
    // Retornamos una promesa, prometiendo que le daremos los datos cuando lleguen del servidor
    return new Promise((resolve, reject) => {
        // usamos fetch para pedir los datos al servidor.
        fetch('http://www.omdbapi.com/?apikey=' + key + '&t=' + search)
            // esperamos los datos
            .then((data) => {
                // llegan los datos y los convertimos en json
                return data.json();
                // esperamos a que los datos se conviertan en json
            }).then((dataAsJson) => {
                // recibimos los datos en json y usamos resolve para cumplir la promesa y enviamos el json
                resolve(dataAsJson);
                // en caso de error atrapamos el error
            }).catch((error) => {
                // avisamos que la promesa no se cumplio y mandamos el error
                reject(error);
            });
    });
}


for (let i = 0; i < femScifi.length; i++){

    searchMovie(femScifi[i])
    // esperamos los datos de la pelicula
    .then((movie)=>{
       // recibimos los datos de la pelicula que la promesa nos envio con resolve
       //alert(movie);
       console.log(movie);
       let pMovieJs = document.getElementById("pMovie");
    
       pMovieJs.innerHTML +=`<div class='content-2 item-lists'><strong>Título:  </strong><span>${movie.Title}</strong><br/></span>
                          <strong> Actores y Actrices:  </strong><p>${movie.Actors}</strong><br/></p>
                          <strong> Género:  </strong><p>${movie.Genre}</strong><br/></p>
                          <strong> Poster  </strong><p><img src="${movie.Poster}"/></strong><br/></p></div>`;
                          
    });
  }

 /* 
  
  const latestReleases = [
    'Captive State',
    'Captain Marvel',
    'Alita: Battle Angel',
    'Maze Runner: The Death Cure',
    'A Wrinkle in Time',
    'Mowgli: Legend of the Jungle',
    'Tomb Raider',
    'Ready Player One',
    'Rampage',
    'Avengers: Infinity War'
    ],

  for (let i = 0; i < latestReleases.length; i++){

    searchMovie(latestReleases[i])
    // esperamos los datos de la pelicula
    .then((movie)=>{
       // recibimos los datos de la pelicula que la promesa nos envio con resolve
       //alert(movie);
       console.log(movie);
       let pMovieJs = document.getElementById("pMoviePremier");
    
       pMovieJs.innerHTML +=`<div class='content-2 item-lists'><strong>Título:  </strong><span>${movie.Title}</strong><br/></span>
                          <strong> Actores y Actrices:  </strong><p>${movie.Actors}</strong><br/></p>
                          <strong> Género:  </strong><p>${movie.Genre}</strong><br/></p>
                          <strong> Poster  </strong><p><img src="${movie.Poster}"/></strong><br/></p></div>`;
                          
    });
  }
*/