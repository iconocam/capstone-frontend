import './PersonalityDisplay.css'
const PersonalityDisplay = ({data}) => {
    return(
        <div id= "card">
            <h2>Tip of the Iceberg</h2>
            <ul>
                {data.map((personality, index) => (
                <ol key={index}>
                
                <div>
                    <h3>{personality.name}</h3>
                <p>{personality.description}</p>
                </div>
                </ol>
                ))}
            
        
            </ul>
        
            <img src="public/infjlostwizard.jpg" alt="Image description" className="bottom-image" />


            <div>
            <section>
        <h1>INXX Complements</h1>
        <div className="info-cards">
            <div className="info-card" id="synergy1">
                <div className="icon">
                <i className="fas fa-lightbulb"></i>
                </div>
                <b>Synergy</b>: INFJs provide valuable insights into human dynamics and emotional intelligence, helping INTJs navigate social aspects of their projects. INTJs, in turn, contribute strategic planning and organizational skills, assisting INFJs in turning their visions into well-executed plans.
            </div>
            <div className="info-card" id="synergy2">
            <div className="icon">
                <i className="fas fa-lightbulb"></i>
                </div>
                <b>Synergy</b>: INFJs and INTJs can collaborate to address problems from multiple angles. While INFJs bring creativity and empathy, INTJs contribute logical analysis, resulting in well-rounded and effective solutions.
            </div>
            <div className="info-card" id="synergy3">
            <div className="icon">
                <i className="fas fa-lightbulb"></i>
                </div>
                <b>Synergy</b>: INFJs and INTJs form a balanced team. INFJs enhance relationships, and INTJs can guide the team toward achieving long-term goals.
            </div>
            <div className="info-card" id="synergy4">
            <div className="icon">
                <i className="fas fa-lightbulb"></i>
                </div>
                <b>Synergy</b>: While these potential synergies exist, it's essential to recognize that individual variations within each personality type play a significant role.
            </div>
            {/* <img src="public/cognitionchart.png" alt="Image description" className="bottom-image" /> */}
        </div>
    </section>
            </div>
            </div>

        
    )
}
// can be added to mapped data above
// {personality.link}

export default PersonalityDisplay;