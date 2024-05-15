import React, { Component } from 'react'
interface Product{
    id:number
    name:string
    price:number
    quantity:number
}
interface Props {
    product:Product
  }
export default class Bt5_Childer extends Component<Props> {
  render() {
    const {product} =this.props
    return (
      <div>
        <div>
        <p>id: {product.id}</p>
        <p>Tên: {product.name}</p>
        <p>Giá: {product.price}</p>
        <p>số  lượng: {product.quantity}</p>
        </div>
      </div>
    )
  }
}



