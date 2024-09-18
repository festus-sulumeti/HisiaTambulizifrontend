import '../styling/Userhome.css'
import React, { useState } from 'react';
;

const Userhome = () => {
  // State to control when to display the video feed
  const [startVideo, setStartVideo] = useState(false);

  // Function to toggle the video stream
  const handleStartVideo = () => {
    setStartVideo(true);
  };

  return (
    <div className="userhome">
      <h1>Real-Time Emotion Detection</h1>
      {!startVideo ? (
        <button className="start-button" onClick={handleStartVideo}>
          Start Video
        </button>
      ) : (
        <div className="video-container">
          {/* Display the video feed when startVideo is true */}
          <img src="http://localhost:5000/video_feed" alt="Emotion Detection Feed" />
        </div>
      )}
    </div>
  );
};

export default Userhome;
