import React, { useState } from 'react';

const Container = () => {
    const [text, setText]= useState('')    
    return(
        <div>
            <div>
                <h1 onClick={() => setText(texts['title1'])}>Ejemplo 1</h1>
                <h1 onClick={() => setText(texts['title2'])}>Ejemplo 2</h1>
                <h1 onClick={() => setText(texts['title3'])}>Ejemplo 3</h1>
            </div>
            {text && <div>{text}</div>}
        </div>
    )
}


const texts = {
    title1: 'lorem ipsun blablablalbla',
    title2: 'lorem aosbsfoiashfoiuabhsof',
    title3: 'lorem333332436236237'
};


export default Container;