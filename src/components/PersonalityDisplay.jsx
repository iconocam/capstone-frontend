import './PersonalityDisplay.css'
const PersonalityDisplay = ({data}) => {
    return(
        <div id= "card">
            <h2>Tip of the Iceberg</h2>
            <ul>
                {data.map((personality, index) => (
                    <ol key={index}>{personality.name}, {personality.description} </ol>
                ))}
            </ul>

        
        </div>
    )
}
// can be added to mapped data above
// {personality.link}

export default PersonalityDisplay;