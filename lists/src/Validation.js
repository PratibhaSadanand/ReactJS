import React from 'react';

const Validation=(props)=>
{
    let validationmessage='Text Long Enough!'

    if(props.textLength<=5)
    {
        validationmessage='Text Too Short!'
    }
    return(
    
    <p>{validationmessage}</p>

    );
};

export default Validation;