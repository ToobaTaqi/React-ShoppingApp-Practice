import React from 'react'
import Product from './Product.js'

export default function Productlist(props) {
  return (
    props.product.map((product)=>{
        return <myProps product={product}/>
    })
  )
}
