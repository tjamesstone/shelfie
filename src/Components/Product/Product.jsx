import React, { Component } from 'react'
import './Product.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

class Product extends Component {

  handleDelete = () => {
    let {id} = this.props
    axios.delete(`/api/products/${id}`).then(() => {
      window.location.reload()
    })
  }

  render() {

    let { name, price, img, id } = this.props

    return (


      <div className='ProductHolder'>
        <img src={img} alt={name} className='ProductImage' />
        <div className={'RightSide'}>
          <div className='TextHold'>
            <span className='Text'>{name}</span>
            <span className='Text'>${price}</span>
          </div>
          <div className='Buttons'>

          <Link to={`/edit/${id}`}><button className='GreenButton'
          onClick={() => this.props.setId(id)}>Edit</button></Link>
          <button className='GreenButton' onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Product