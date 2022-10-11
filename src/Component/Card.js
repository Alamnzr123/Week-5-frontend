import React from 'react';

import style from '../assets/style.module.css'

const Card = (props) => {
    console.log(props.harga)
    return (
        <>
            {/* bootstrap */}
            <button classNameName={`btn btn-primary ${style.menu}`}>OK</button>

            {/* <div classNameName={style.menu}>
       <h1>Hello world</h1>
        </div> */}

            {/* style module */}
            {/* <div classNameName={`${style.header} ${style.menu}`}>
                <h1>Hello world</h1>
            </div> */}

            <h1>harga {props.harga}</h1>

        </>
    )

}

export default Card;