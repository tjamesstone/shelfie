import React, {Component} from 'react'

 export default class Product extends Component{
    render(){
        return(
            <div>
                {/* {console.log(this.props.name)} */}
                
                {this.props.name}
                {this.props.imgurl}
                {this.props.price}
            </div>
        )
    }
}