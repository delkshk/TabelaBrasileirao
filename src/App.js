import React, { Component }from 'react';
import './App.css';


import TabelaBrasileiro from "./components/TabelaBrasileiro";
import Header from "./components/Header"

class App extends Component {
  render(){
    return (
      <div className="App">
          <Header></Header>
          <TabelaBrasileiro></TabelaBrasileiro>
      </div>
    )
  }
}

export default App;
