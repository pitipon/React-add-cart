import React from 'react'
import Product from './Product'

const Products = ({ products, onAddToCart }) => {

    // console.log(onAddToCart)
return (
    <div>
        <ul className='item'>
            <li className=''><h5>Products</h5></li>
            {
                products.map(
                    ({id, name, amount, buy}) => (
                        <Product    key={id}
                                    id={id}
                                    name={name}
                                    amount={amount - buy}
                                    onClick={onAddToCart}
                                    btnTxt='Add to Cart' />
                    )
                )
            }
        </ul>
    </div>
)}

export default Products