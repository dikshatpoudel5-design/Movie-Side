import React from 'react'

function MovieCard ({movie})  {

function onFavoriteClick(){
    alert(movie.alertMessage)
}


  return (
<div className='movie-card'>
   <div className='movie-poster'>
    <img width={100} src={movie.url} alt={movie.title} />
    <div className='movie-overlay'>
<button className='favorite-btn' onClick={onFavoriteClick}>
    🤍
</button>
    </div>
    </div> 
    <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
    </div>
</div>    

  )
}

export default MovieCard
