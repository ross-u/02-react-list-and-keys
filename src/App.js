import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import List from "./components/List";
import MovieList from "./components/MovieList";
import ImprovedMovieList from "./components/ImprovedMovieList";


const names = ["Anna", "Bob", "Sarah", "John"];


class App extends React.Component {
  state = {
    cities: [
     { _id: "asdf234" , name: 'Barcelona'},
     { _id: "fgh346" , name: 'Miami'},
     { _id: "dfg277" , name: 'Amsterdam'},
     { _id: "fgh288" , name: 'Paris'}]
  }
  
  render () {

    return (
      <div className="App">
      <Navbar />

      <ImprovedMovieList />

      <MovieList />

      {/* EXample 2 - Component that creates a list */}
      <List cities={this.state.cities} />

      {/* Example 1 - creating a list of elements out of an array */}
      {
        names.map( (nameStr, index) => {
          return <h1 key={index} > {nameStr} </h1>;
      })
      }
    </div>
  );
}
}

export default App;
