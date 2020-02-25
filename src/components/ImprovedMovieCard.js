import React from 'react'

function ImprovedMovieCard (props) {
  return (
    <div>
      <h3>{props.movie.title}</h3>
      <p>Rating: {props.movie.rating}</p>
      <p>Director: {props.movie.director}</p>
      
      <button onClick={ ()=>  props.deleteMovie(props.movie._id)  } > Delete </button>
    
    </div>
  )
}

export default ImprovedMovieCard
