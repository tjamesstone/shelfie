import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'



class App extends Component {

  state = {
    editId: 0,
    name: '',
    price: '',
    imgurl: ''
  }

  

  setId = (id) => {

    axios.get(`/api/products/${id}`).then(res => {
      let { name, price, img } = res.data[0]
      this.setState({
        editId: id,
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
                setId={this.setId}
                inventory={this.state.inventory} />} />
              <Route path='/add' render={() => <Form setId={this.setId}
                editId={this.state.editId}
                props={this.state} />} />
              <Route path='/edit/:id' render={() => <Form setId={this.setId}
                editId={this.state.editId}
                props={this.state} />} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;