import React from 'react';
import ImprovedMovieCard from './ImprovedMovieCard'


class ImprovedMovieList extends React.Component {
  state = {
    movies: [
      { _id:"g2d3lkjgfa1", title: "The Godfather", director: "Francis Coppola",  rating: 9 },
      { _id:"2143lkjgfd2", title: "Star Wars", director: "Rian Johnson",  rating: 8 },
      { _id:"6r48lkjgff3", title: "The Shawshank Redemption", director: "Frank Darabont",  rating: 9 },
      { _id:"3t439kj5fe4", title: "Jurassic Park", director: "Steven Spielberg",  rating: 5 },
      { _id:"f1t3lnjgfo5", title: "Sharknado", director: "Anthony C. Ferrante",  rating: 2 },
      { _id:"1e39kdj01i6", title: "Titanic", director: "James Cameron" ,  rating: 9}
    ]
  }

  deleteMovie = (id) => {
    const updatedMovies = this.state.movies.filter( (movieObj)=> {
      return movieObj._id !== id;
    })

    this.setState( { movies: updatedMovies } );
  }
  
  render() {
    return (
      <div>
      {
        this.state.movies.map((oneMovie)=> {
          return (
            <ImprovedMovieCard 
              key={oneMovie._id}
              movie={oneMovie} 
              deleteMovie={this.deleteMovie}
            />)
        })
      }
    </div>
  )
}
}

export default ImprovedMovieList
