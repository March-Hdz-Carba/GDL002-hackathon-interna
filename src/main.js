




  /*
for (let i = 0; i < femScifi.length; i++){

  window.data.searchMovie(femScifi[i])
  // esperamos los datos de la pelicula
  .then((movie)=>{
     // recibimos los datos de la pelicula que la promesa nos envio con resolve
     alert(movie);
     console.log(movie);
     let pMovieJs = document.getElementById("pMovie");
  
     pMovieJs.innerHTML +=`<div class='movieItem'><strong>Título:  </strong><span>${movie.Title}</strong><br/></span>
                        <strong> Actores y Actrices:  </strong><span>${movie.Actors}</strong><br/></span>
                        <strong> Género:  </strong><span>${movie.Genre}</strong><br/></span>
                        <strong> Poster  </strong><span><img src="${movie.Poster}"/></strong><br/></span></div>`;
  
  });
}
*/