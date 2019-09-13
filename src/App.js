import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'

export default class App extends Component{
  constructor(){
    super()
    this.state  = {
      editId: 0,
      inventory:[],
      name: '',
      price: '',
      imgurl: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    axios.get('/api/products')
    .then( res => {
      this.setState({inventory: res.data})
    })
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
      <Form 
      getProductsFn={this.componentDidMount}/>
    </div>
  );
}
}


