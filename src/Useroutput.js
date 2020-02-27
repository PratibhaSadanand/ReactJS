import React from 'react';

import './Useroutput.css';

const Useroutput =(props) =>{
    return (
        <div className="UserOutput">
            <p>Hello! Max i'm <b>{props.Username}</b> and i'm really Enjoying your teaching</p>
            <p>Learning is Fun</p>
        </div>
    )
}

export default Useroutput;