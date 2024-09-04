import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, Info } from 'lucide-react'; 
import axios from 'axios'; 
import "../styling/Userhome.css"


function Userhome() {
  const [inputValue, setInputValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/submit', { data: inputValue });
      setResponseMessage(response.data.message || 'Data submitted successfully');
    } catch (error) {
      setResponseMessage('Error submitting data');
    }
  };

  return (
    <div className="userhome-container">
      <header className="userhome-header">
        <h1 className="userhome-heading">Welcome to Emotion Recognition from Speech</h1>
        <p className="userhome-description">
          We're excited to have you on board! Explore our features and learn more about our technology.
        </p>
      </header>
      
      <section className="userhome-content">
        <div className="userhome-info">
          <h2 className="info-heading">About the Project</h2>
          <p className="info-description">
            Our model detects human emotions such as happiness, anger, and fear from audio recordings of speech. This can revolutionize customer service, mental health monitoring, and entertainment by providing deeper insights into human emotions.
          </p>
        </div>
        
        <div className="userhome-links">
          <Link to="/profile" className="userhome-link">
            <User className="link-icon" />
            Profile
          </Link>
          <Link to="/settings" className="userhome-link">
            <Settings className="link-icon" />
            Settings
          </Link>
          <Link to="/about" className="userhome-link">
            <Info className="link-icon" />
            About Us
          </Link>
        </div>
        
        <div className="userhome-form">
          <h2 className="form-heading">Submit Your Data</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter your data here..."
              className="form-input"
            />
            <button type="submit" className="form-button">Submit</button>
          </form>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
      </section>
    </div>
  );
}

export default Userhome;