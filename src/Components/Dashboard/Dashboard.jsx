import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'


 export default class Dashboard extends Component{
    constructor(){
        super()
        this.state ={
            inventory: []
        }
    }

    componentDidMount() {
        axios.get('/api/products').then(res => {
          this.setState({
            inventory: res.data
          })
        }).catch(err => {
          console.log( `errorMessage: ${err}`)
        })
    }

    setId = (id)=> {
        this.props.setId(id)
    }
    
    
    render(){

        const {inventory} = this.state

        return(
            <div className="inventorylist">
            
            {
              inventory.map( product => {
              return <Product 
              
              key={ product.id } 
              id={ product.id}
              name={product.name}
              imgurl={ product.img }  
              price={ product.price } 
              setId={this.setId}
               />
              })
            }

            </div>
        )
    }
}