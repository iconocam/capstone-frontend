import './Home.css'
import PersonalityDisplay from './PersonalityDisplay'
const Home = ({data}) => {
return (
    <div> 
        
        <PersonalityDisplay data={data} />
    </div>

    
)
}

export default Home;