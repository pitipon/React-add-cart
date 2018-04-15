import React from 'react'

const Product = ({id, name, amount, onClick, btnTxt}) => {
    // console.log(onClick)
return (
    <li className='item'>
        <div className='container'>
            <div className='row'>
                <div className='six columns'>{name}</div>
                <div className='three columns'><div className='circle'><div className='quantity '>{amount}</div></div></div>
                <div className='three columns'><button className='' onClick={()=>onClick(id)}> {btnTxt} </button></div>
            </div>
        </div>
    </li>
)}

export default Product