import React, {Component} from 'react'
import Product from '../Product/Product'


 export default class Dashboard extends Component{
    render(){
        return(
            <div className="inventorylist">
            {/* {this.props.inventory[0].name} */}
            {
              this.props.inventory.map( product => ( 
              <Product 
              
              key={ product.id } 
              name={product.name}
              imgurl={ product.img }  
              price={ product.price } 
               />
              ))
            }

            </div>
        )
    }
}