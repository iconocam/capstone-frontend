import React, { useState, useEffect } from "react"
import InfjDisplay from "../components/infjDisplay"
import './Mind.css'
const Mind = () => {
    const [data, setData] = useState([])

useEffect(() => {

    const getINFJ = async () => {
    try {
        const response = await fetch('http://localhost:8000/infj')
        const data = await response.json()
        setData(data)
    } catch(err) {
        console.log(err)
    }
    }

    getINFJ()
}, [])
    return (
        <div> 
        <div id="data">
        <h1>Strategic Architecture</h1>
        <InfjDisplay data={data} />
        </div>
        <div>
            <section>
                Intuition: Intuition is not tangibly grasped and is described as immediate understanding or insight that doesn't rely on conscious reasoning or explicit evidence. Subconscious intuition leads us into the fundamental truth of the universe where as conscious intuition is assembled through a chain manifesting from experiential sequences.
                <h2>Slavoj Žižek,</h2> a Slovenian philosopher and cultural critic, provides unique perspectives on various topics, including intuition. He suggests that what we perceive as intuitive might be shaped by cultural, social, or ideological influences. Žižek's studies often involve dissecting common perceptions to reveal hidden structures and contradictions.
            </section>
        </div>
        
        </div>
    
        
    )
    }
    
    export default Mind;