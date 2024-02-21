import React, {useState} from 'react';
import './You.css'

const You = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);


    const toggleVisibility = (cardNumber) => {
        switch (cardNumber) {
        case 1:
            setIsVisible1(!isVisible1);
            break;
        case 2:
            setIsVisible2(!isVisible2);
            break;
        case 3:
            setIsVisible3(!isVisible3);
            break;
        case 4:
            setIsVisible4(!isVisible4);
            break;
        case 5:
            setIsVisible5(!isVisible5);
            break;
            case 6:
            setIsVisible6(!isVisible6);
            break;
        default:
            break;
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
            <div className='cards'>
            <button onClick={() => toggleVisibility(3)}>Toggle Card 3</button>
        {isVisible3 && (
            <>
            <p>ISXX</p>
            <ol>Analyst</ol>
            </>)}
            </div>
            <div className='cards'>
            <button onClick={() => toggleVisibility(4)}>Toggle Card 4</button>
        {isVisible4 && (
            <>
            <p>ISTP</p>
            <ol>Encapsulating</ol>
            </>)}
            </div>
            <div className='cards'>
            <button onClick={() => toggleVisibility(5)}>Toggle Card 5</button>
        {isVisible5 && (
            <>
            <p>ENTP</p>
            <ol>Conceptualizer</ol>
            </> )}
            </div>
            <div className='cards'>
            <button onClick={() => toggleVisibility(6)}>Toggle Card 6</button>
        {isVisible6 && (
            <>
            <p>ESFP</p>
            <ol>Intermittence</ol>
            </> )}
            </div>
        </div>
        <section id="sectionone">
        
            <div id="grant">
            <h3 id="how">How To Find Yourself </h3>
                <br/>
                <li>
                    Meditation Upon Thought
                </li>
                <li>
                    Accepting and Letting Go
                </li>
                <li>
                    Anger Redundance
                </li>
                <li>
                    Let Nature Flow Accordingly
                </li>
                <li>
                    Artistic Expression
                </li>
            
                </div>
                <div id="informational">
                <div className="icon">
                <i className="fas fa-info-circle"></i>
                </div>
                The journey of self-discovery involves perpetual learning, with the mind serving as the catalyst for change. As one engages in a continuous experiential interface, the paradigm undergoes a transformative shift. This process is a dynamic and ongoing exploration, where the mind plays a pivotal role in shaping perspectives and fostering personal growth.
                </div>
                
        </section>








        </div>
    
        
    )
    }
    
    export default You;