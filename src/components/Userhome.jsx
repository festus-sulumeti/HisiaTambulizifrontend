import { useState } from 'react';
import '../styling/Userhome.css';
import '../styling/mediaqueries/Userhome.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Userhome = () => {
  const [startVideo, setStartVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleStartVideo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setStartVideo(true);
      setIsLoading(false);
    }, 1000); 
  };

  const handleStopVideo = () => {
    setStartVideo(false);
  };

  const handleLogout = () => {
    // Clear user session or authentication data here if necessary

    // Redirect to the home page
    navigate('/'); // Change this path to your actual home route
  };

  return (
    <div className="userhome">
      <h1>Real-Time Emotion Detection</h1>
      {!startVideo ? (
        <button className="start-button" onClick={handleStartVideo}>
          Start Video
        </button>
      ) : isLoading ? (
        <div className="loader"></div> 
      ) : (
        <div className="video-container">
          {/* Display the video feed when startVideo is true */}
          <img src="http://localhost:5000/video_feed" alt="Emotion Detection Feed" />
          <br />
          <button className="stop-button" onClick={handleStopVideo}>
            Stop Video
          </button>
        </div>
      )}
      <br />
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Userhome;
