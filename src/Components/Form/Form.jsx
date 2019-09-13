  
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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




  


    render(){
        // console.log(this.state.name)

        const defaultImg= 'https://sanitationsolutions.net/wp-content/uploads/2015/05/empty-image.png'

        let urllink

        if(this.state.imgurl.endsWith('.jpg') || this.state.imgurl.endsWith('.gif') || this.state.imgurl.endsWith('.png')){
          urllink = this.state.imgurl
        } else {
          urllink = defaultImg
        }
        
        return(
            <div className='form'>
                <div
                className="form_image_preview">
                     <img className='displayimg'
                    src={urllink}
                alt={this.state.name}
            
          />
                </div>
                <div className="imgurl">
                Image URL:
                    <input 
                    name='imgurl'
                    value={this.state.imgurl}
                    onChange={this.handleChange}
                    type="text" className="img"/>
                </div>

                <div className="productname">
                    Product Name:
                    <input 
                    name='name'
                    value={this.state.name}
                    onChange={ this.handleChange}
                    type="text" className="product"/>
                </div>
                <div className="price">
                    Price:
                    <input 
                    name='price'
                    value={this.state.price}
                    onChange={ this.handleChange}
                    type="number" className="priceinput"/>
                </div>
                <div className="buttons">
                <Link to='/'>
                <button className='cancel' onClick={this.clearForm}>Cancel</button>
              </Link>
              <div>{this.state.edit ? <Link to='/'>
                <button className='submit' onClick={this.updateProduct}>Save Changes</button>
              </Link> : <Link to='/'><button
                className='addtoinv'
                onClick={this.newProduct}>Add to Inventory</button></Link>}</div>
                </div>
            </div>
        )
    }
}