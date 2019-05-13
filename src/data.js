

  
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