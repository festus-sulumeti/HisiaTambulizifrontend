import { useState } from 'react';
import '../styling/Userhome.css';
import '../styling/mediaqueries/Userhome.css';

const Userhome = () => {
  
  const [startVideo, setStartVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
          <button className="stop-button" onClick={handleStopVideo}>
            Stop Video
          </button>
        </div>
      )}
    </div>
  );
};

export default Userhome;
