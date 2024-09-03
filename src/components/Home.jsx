import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, BarChart, Calendar } from "lucide-react"; // Import additional icons
import "../styling/Home.css" // Import the CSS file


const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">
        Emotion Recognition from Speech
      </h1>
      <p className="home-description">
        Our project aims to develop a model that can detect human emotions like happiness, anger, and fear from audio recordings of speech.
      </p>
      <br />
      <p>
        This technology can have a wide range of applications in areas such as customer service, mental health monitoring, and entertainment.
      </p>
      <div className="home-buttons">
        <Link
          className="home-button"
          to={"/login"}
        >
          Login <ArrowRight className="arrow-icon" />
        </Link>
      </div>
      <div className="home-features">
        <div className="feature-item">
          <CheckCircle className="feature-icon" />
          <div className="feature-text">
            <h3 className="feature-title">Audio Processing</h3>
            <p className="feature-description">
              Use advanced speech processing libraries like PyAudio and Librosa to extract meaningful data from audio recordings.
            </p>
          </div>
        </div>
        <div className="feature-item">
          <BarChart className="feature-icon" />
          <div className="feature-text">
            <h3 className="feature-title">Data Analysis</h3>
            <p className="feature-description">
              Analyze extracted data to identify patterns and detect emotions using neural networks trained on emotional speech datasets.
            </p>
          </div>
        </div>
        <div className="feature-item">
          <Calendar className="feature-icon" />
          <div className="feature-text">
            <h3 className="feature-title">Model Training</h3>
            <p className="feature-description">
              Train models using TensorFlow and Keras to improve accuracy and effectiveness in emotion detection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;