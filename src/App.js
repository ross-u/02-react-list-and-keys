import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import List from "./components/List";
import MovieList from "./components/MovieList";

import ImprovedMovieList from "./components/ImprovedMovieList";




const listItems = [<h1>1</h1>, <h1>2</h1>, <h1>3</h1>, <h1>4</h1>, <h1>5</h1>];

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

      {/* Example 1  */}
      {/* {listItems} */}

      {/* Example 2 - mapping over an array  */}
      {
        names.map( (nameStr, index) => {
        return <h1 key={index} > {nameStr} </h1>;
      })
      }

      {/* Example 3 - component that creates a list  */}
      <List cities={this.state.cities} />

    </div>
  );
}
}

export default App;
