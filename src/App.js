import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

    // we should bind this keyword which is defined in the constuctor to the class methods we created.
    //this.handleChange = this.handleChange.bind(this);

    // If we use arrow function to define method, we don't need to bind this keyword to it. Because
    // it is understand that when arrow function triggered, it looks the state where it placed. In this
    // example, constructor method and app class
  }

  // sending request to api to get users information
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  //handleChange(e) {
  //  this.setState({ searchField: e.target.value });
  //}
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;

//<input
//type="search"
//placeholder="search monsters"
// everytime state changes, render function suns again!
//onChange={(e) => this.setState({ searchField: e.target.value })}
// setState is an async function. So that we cannot wait this function happens immediately.
// So that if we want to use updated state immediately, we should use callback function of setState.
// onChange={e => this.setState({ searchField: e.target.value}, console.log(this.state))}
// it should be used given code above!
///>
