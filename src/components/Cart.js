import React from 'react'
import Product from './Product'

const Cart = ({ products, onRemove }) => (
    <div>
        <ul className=''>
            <li className=''>Cart</li>
            {
                products.map( ({id, name, buy}) => (
                    <Product    key={id}
                                id={id}
                                name={name}
                                amount={buy}
                                onClick={onRemove}
                                btnTxt='Remove' />
                ))
            }
        </ul>

    </div>
)

export default Cart