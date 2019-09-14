import React, {Component} from 'react'

import Product from './../Product/Product'
import axios from 'axios'

class Dashboard extends Component {

  state={
    inventory: []
  }

  componentDidMount() {
    axios.get('/api/products').then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => {
      console.log(`ERROR: ${err}`)
    })

  }

  setID = (id) => {
    this.props.setID(id)
  }

  

  render() {

    const {inventory} = this.state

    const showProducts = inventory.map(product => {
      return <Product 
      key={product.id} 
      id={product.id} 
      name={product.name} 
      price={product.price} 
      img={product.img}
      setID={this.setID}/>
    })

    return(

      <div className='Dashboard'>{showProducts}</div>
    )
  }
}

export default Dashboard