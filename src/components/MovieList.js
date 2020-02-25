import React from 'react';
import Card from './Card';

class MovieList extends React.Component {

  state = {
    movies: [
      { _id:"2143lkjgfw8", title: "Jurassic Park", director: "Steven Spielberg" },
      { _id:"jg59lkjgby5", title: "Sharknado", director: "Anthony C. Ferrante" },
      { _id:"a45i3ljamv2", title: "Titanic", director: "James Cameron" }
    ]
  }

  render() {
    return (
      <div>
      {
        this.state.movies.map((movieObj) => {
          return <Card key={movieObj._id} movie={movieObj} />
        })
      }
    </div>
  )
}
}

export default MovieList
