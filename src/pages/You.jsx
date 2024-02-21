import React, {useState} from 'react';
import './You.css'

const You = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const toggleVisibility = (cardNumber) => {
    if (cardNumber === 1) {
        setIsVisible1(!isVisible1);
    } else if (cardNumber === 2) {
        setIsVisible2(!isVisible2);
    }
    };
    return (
        <div> 
            <h1>Who You Are Within</h1>
            <div className="intro">
    
        <p>There are a few crucial aspects to consider when determining who you inherently are, this process requires introspection and individuation.
        As a person individuates, they gain a clearer sense of self separate from others around them.
        </p>
        </div>

        <div className="cards-container">
            <div className='cards'>
            <button onClick={() => toggleVisibility(1)}>Toggle  Card 1</button>
                {isVisible1 && (
                <>
                <p>ENXX</p>
                <ol>Voice of Reason</ol>
                </>)}
            </div>
            <div className='cards'>
            <button onClick={() => toggleVisibility(2)}>Toggle Card 2</button>
        {isVisible2 && (
            <>
                <p>INXX</p>
                <ol>Flow State</ol>
                </>)}
            </div>
        </div>









        </div>
    
        
    )
    }
    
    export default You;