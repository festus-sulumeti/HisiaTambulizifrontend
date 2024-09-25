import { useState } from 'react';
import '../styling/Userhome.css';
import '../styling/mediaqueries/Userhome.css';
import { useAuth } from './Auth/AuthContext'; // Import useAuth

const Userhome = () => {
  const [startVideo, setStartVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = useAuth(); // Get logout function from context

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
    // Clear user session or authentication data
    logout(); // Call logout function from context
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
          <img src="https://emotionrecognitionbackend.onrender.com/video_feed" alt="Emotion Detection Feed" />
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
