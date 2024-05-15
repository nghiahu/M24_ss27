import React from 'react'
import Product from './Product'
interface Product{
    name:string
    id:number
    price:number
}
interface Props{
    product:Product[];
}
export default function Products(props:Props) {
    const{product}=props
  return (
    <div>Products
        <ul>
            {product.map((item,index) =>{
                return <li key={index}>Sản phẩm {item.name} giá {item.price}</li>
            })}
        </ul>
        <Product></Product>
    </div>
  )
}
