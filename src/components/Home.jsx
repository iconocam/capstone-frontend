import './Home.css'
import Navbar from './navBar'
const Home = (props) => {
return (
    <div> 
        <Navbar />
        <p>{props.message}</p>
    
    </div>

    
)
}

export default Home;