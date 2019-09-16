import React, { Component } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'
import noImage from './empty-image.png'

export default class Form extends Component {

  state = {
    edit: false,
    defaultImg: false,
    name: '',
    price: 0,
    imgurl: ''
  }

  componentDidUpdate(oldProps, ) {
    if (oldProps !== this.props) {
      if (this.props.updateID !== 0) {
        this.setState({
          edit: true
        })
      }
      let { name, price, imgurl } = this.props.props
      this.setState({
        name: name,
        price: price,
        imgurl: imgurl
      })
    }
  }

  postNewProduct = () => {
    let { name, price, imgurl } = this.state
    let newProduct = {
      name: name,
      price: price,
      img: imgurl
    }
    axios.post('/api/products', newProduct).then(() => {
      this.clearState()
    })
  }

  updateProduct = () => {

    let update = {
      name: this.state.name,
      price: this.state.price,
      img: this.state.imgurl
    }

    axios.put(`/api/products/${this.props.updateID}`, update).then(() => {
      this.clearState()
    })
  }


  clearState = () => {
    this.setState({
      name: '',
      price: 0,
      imgurl: '',
      edit: false
    })

  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  defaultTrue = () => {
    this.setState({
      defaultImg: true
    })
  }




  render() {

    let url

    if(this.state.imgurl === ''){
      url = noImage
    } else {
      url = this.state.imgurl
    }



    return (

      
        <div className="form">

          <img className='form_image_preview'
            src={url}
            alt={this.state.name}
            
          />

          <div className="form_inputs">

            <p>Image URL:</p> 
            <input className='form_inputs'
              type="text"
              name='imgurl'
              onChange={this.handleChange}
              value={this.state.imgurl} /> 

            <p>Name:</p> 
            <input className='form_inputs'
              type="text"
              name='name'
              onChange={this.handleChange}
              value={this.state.name} /> 

            <p>Price:</p> 
            <input className='form_inputs'
              type="number"
              name='price'
              onChange={this.handleChange}
              value={this.state.price} />


            <div className="button_holder">
              <Link to='/'>
                <button className='cancel' onClick={this.clearState}>Cancel</button>
              </Link>
              <div>{this.state.edit ? <Link to='/'>
                <button className='submit' onClick={this.updateProduct}>Save Changes</button>
              </Link> : <Link to='/'><button
                className='submit'
                onClick={this.postNewProduct}>Add to Inventory</button></Link>}</div>
            </div>
          </div>
        </div>
     
    )
  }
}

