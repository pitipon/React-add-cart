import React from 'react'

const Product = ({id, name, amount, onClick, btnTxt}) => (
    <li className=''>
        <div className=''>
            {name}
            <span>{amount}</span>
        </div>
        <button className='' onClick={()=>onClick(id)}> {btnTxt} </button>
    </li>
)

export default Product