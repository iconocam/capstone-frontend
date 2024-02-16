const PersonalityDisplay = ({data}) => {
    return(
        <div style= {cardStyle}>
            <h2>Tip of the Iceberg</h2>
            <ul>
                {data.map((personality, index) => (
                    <li key={index}>{personality.name}, {personality.description}, {personality.link}</li>
                ))}
            </ul>
        </div>
    )
}

const cardStyle = {
    backgroundColor: 'black',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
};
export default PersonalityDisplay;