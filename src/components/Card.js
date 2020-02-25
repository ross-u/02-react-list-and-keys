import React from 'react'

function Card(props) {
  return (
    <div key={props.movie._id} >
    <h2> {props.movie.title}  </h2>
    <p>Director: {props.movie.director}</p>
  </div>
  )
}

export default Card
