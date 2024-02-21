import React, { useState, useEffect } from 'react';

const InfjDisplay = () => {
const [infjsData, setInfjsData] = useState([]);

useEffect(() => {
    const getInfjs = async () => {
    try {
        const response = await fetch('http://localhost:8000/infj');
        const data = await response.json();
        setInfjsData(data);
    } catch (err) {
        console.log(err);
    }
    };

    getInfjs();
}, []);

return (
    <div id="card">
    <h2>Combination</h2>
    <ul>
        {infjsData.map((infj, index) => (
        <ol key={index}>
            <div>
            <h3>{infj.Type}</h3>
            <p>{infj.Source}</p>
            </div>
        </ol>
        ))}
    </ul>

      {/* E */}
    </div>
);
};

export default InfjDisplay;