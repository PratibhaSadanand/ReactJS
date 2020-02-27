import React from 'react';

const Userinput=(props)=> {
    const inlineStyle={
        border: '3px solid blue',
        
    };
    return <input type='text' 
    style={inlineStyle}
    onChange={props.changed} 
    value={props.currentname}/>
};

export default Userinput;