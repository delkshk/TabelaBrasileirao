import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';


import TabelaBrasileiro from "./components/TabelaBrasileiro";


class App extends Component {
  render(){
    return (
      <div className="App">
          <TabelaBrasileiro></TabelaBrasileiro>
      </div>
    )
  }
}

export default App;
