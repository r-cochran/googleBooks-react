import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './App.css';
import Search from "./components/search/Search.js";

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <div className="App-header">
          <h2>Google Books</h2> <img src="react.svg" />
        </div>
        <div className="App-intro">
          <Search />
        </div>
      </Grid>
    );
  }
}

export default App;
