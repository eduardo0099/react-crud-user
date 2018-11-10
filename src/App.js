import React, { Component } from 'react';
import './App.css';
import FormCard from './FormCard/FormCard';
import ListCard from './ListCard/ListCard';
class App extends Component {
  constructor(props) {
    super(props);
    this.listCountries = ["Peru","Chile","Brasil","Argentina","Bolivia"];
  }
  
  render() {
    return (
      <div className="App">
        <FormCard
          listCountries={this.listCountries}
        />
        <ListCard
          listCountries={this.listCountries}
        />
      </div>
    );
  }
}

export default App;
