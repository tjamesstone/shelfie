import React, {Component} from 'react'

 export default class Form extends Component{
    constructor(){
        super()
        this.state = {
            editting: false,
            defaultImg: false,
            name: '',
            price: 0,
            imgurl: ''
        }

        // this.ClearFields = this.ClearFields.bind('this')
    }

    handleChangeName (val){
        this.setState({
            name: val
        })
    }
    handleChangePrice(val){
        this.setState({
            price: val
        })
    }
    handleChangeImgurl(val){
        this.setState({
            imgurl: val
        })
    }

    postNewProduct(){

    }

    clearInputBoxes = () => {
        this.setState({
            name: ''
        })
        this.setState({
            price: 0
        })
        this.setState({
            imgurl: ''
        })
    }

  

    render(){
        console.log(this.state.name)
        return(
            <div className='form'>
                <div className="form_image_preview">

                </div>
                <div className="imgurl">
                Image URL:
                    <input 
                    onChange={ (e) => this.handleChangeImgurl(e.target.value) }
                    type="text" className="img"/>
                </div>
                <div className="productname">
                    Product Name:
                    <input 
                    onChange={ (e) => this.handleChangeName(e.target.value) }
                    type="text" className="product"/>
                </div>
                <div className="price">
                    Price:
                    <input 
                    onChange={ (e) => this.handleChangePrice(e.target.value) }
                    type="number" className="price"/>
                </div>
                <div className="buttons">
                    <button 
                    onClick={this.clearInputBoxes}
                   
                    
                    className="cancel">
                        Cancel
                    </button>
                    <button className="addtoinv">
                        Add to Inventory
                    </button>
                </div>
            </div>
        )
    }
}