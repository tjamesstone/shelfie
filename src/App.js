import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'



class App extends Component {

  state = {
    updateID: 0,
    name: '',
    price: '',
    imgurl: ''
  }

  

  setID = (id) => {

    axios.get(`/api/products/${id}`).then(res => {
      let { name, price, img } = res.data[0]
      this.setState({
        updateID: id,
        name: name,
        price: price,
        imgurl: img,
      })
    })
  }



  render() {
    return (
      <Router>
        <div className="App">

          <Header />

          <div className='Body'>
            <Switch>
              <Route exact path='/' render={() => <Dashboard
                setID={this.setID}
                inventory={this.state.inventory} />} />
              <Route path='/add' render={() => <Form setID={this.setID}
                updateID={this.state.updateID}
                props={this.state} />} />
              <Route path='/edit/:id' render={() => <Form setID={this.setID}
                updateID={this.state.updateID}
                props={this.state} />} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;