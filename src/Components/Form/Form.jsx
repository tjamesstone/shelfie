import React, { Component } from 'react'
import './Form.css'
import noImage from './empty-image.png'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Form extends Component {

  state = {
    edit: false,
    defaultImg: false,
    name: '',
    price: 0,
    imgurl: ''
  }

  componentDidUpdate(oldProps, ) {
    if (oldProps !== this.props) {
      if (this.props.editId !== 0) {
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

  newProduct = () => {
    let { name, price, imgurl } = this.state
    let newProduct = {
      name: name,
      price: price,
      img: imgurl
    }
    axios.post('/api/products', newProduct).then(() => {
      this.clearForm()
    })
  }

  updateProduct = () => {

    let update = {
      name: this.state.name,
      price: this.state.price,
      img: this.state.imgurl
    }

    axios.put(`/api/products/${this.props.editId}`, update).then(() => {
      this.clearForm()
    })
  }


  clearForm = () => {
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

    if(this.state.imgurl.endsWith('.jpg') || this.state.imgurl.endsWith('.gif') || this.state.imgurl.endsWith('.png')){
      url = this.state.imgurl
    } else {
      url = noImage
    }



    return (

      <div className='FormHolder'>
        <div className="Form">

          <img className='Image'
            src={url}
            alt={this.state.name}
            
          />

          <div className="FormInputs">

            <span className='InputLabel'>Image URL:</span><br />
            <input className='FormInput'
              type="text"
              name='imgurl'
              onChange={this.handleChange}
              value={this.state.imgurl} /><br />

            <span className='InputLabel'>Name:</span><br />
            <input className='FormInput'
              type="text"
              name='name'
              onChange={this.handleChange}
              value={this.state.name} /><br />

            <span className='InputLabel'>Price:</span><br />
            <input className='FormInput'
              type="number"
              name='price'
              onChange={this.handleChange}
              value={this.state.price} />


            <div className="ButtonHold">
              <Link to='/'>
                <button className='Cancel' onClick={this.clearForm}>Cancel</button>
              </Link>
              <div>{this.state.edit ? <Link to='/'>
                <button className='Submit' onClick={this.updateProduct}>Save Changes</button>
              </Link> : <Link to='/'><button
                className='Submit'
                onClick={this.newProduct}>Add to Inventory</button></Link>}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form