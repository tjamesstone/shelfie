import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

 export default class Product extends Component{

    

    delete = () => {
        let {id} = this.props
        axios.delete(`/api/products/${id}`).then(() => {
            window.location.reload()
        })
    }

    render(){
        const {name, price, img, id} =this.props
        return(
            <div className="productcontainer">
                <div 
                
                className="product_img">
                    <img src={img} alt={name}/>
                </div>
                <div className="product_box">
                    <p>{name}</p>
                        
                    <p>${price}</p>
                </div>
                <div className="buttons_box">
                    <button 
                    onClick={this.delete}
                    className="delete">
                        Delete
                    </button>
                    <Link
                    to={`/edit/${id}`}
                    ><button 
                    onClick={() => this.props.setId(id)}
                    className="edit">
                        Edit
                    </button>
                    </Link>
                </div>
               
                
                
            </div>
        )
    }
}