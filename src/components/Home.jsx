import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import "../styling /Home.css"


const Home = () => {
    return (
        <div className="home-container">
          <h1 className="home-heading">Emotion Recognition speech</h1>
          <p>Emotion Recognition speech is a web application that uses the Web Speech API to recognize speech and then uses the Microsoft Azure Emotion API to analyze the emotions in the recognized speech.</p>


          <div className="home-buttons">
            <Link to={"/login"}>Login <ArrowRight className= "arrow-icon" /> </Link>
          </div>
        </div>
    )
}

export default Home;