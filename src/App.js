import React, {Component} from 'react';

import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'

export default class App extends Component{
  constructor(){
    super()
    this.state  = {
      inventory : [{
        name: "test",
        price: 30,
        id: 0,
        img: "data:image/jpeg;base64,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"
      },
      {
        name: "test2",
        price:20,
        id: 1,
        img: "data:image/jpeg;base64,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"
      }
    ],
    }
  }

  getInventoryFromDB(){

  }

  render() {
    return(
    <div className="App">
      <Header/>
      <Dashboard 
        inventory={this.state.inventory}
      />
      <Form />
    </div>
  );
}
}


