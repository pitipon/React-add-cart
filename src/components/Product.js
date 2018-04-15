import React from 'react'

const Product = ({id, name, amount, onClick, btnTxt}) => {
    // console.log(onClick)
return (
    <li className=''>
        <div className=''>
            {name}
            <span>, Amount {amount}</span>
        </div>
        <button className='' onClick={()=>onClick(id)}> {btnTxt} </button>
    </li>
)}

export default Product