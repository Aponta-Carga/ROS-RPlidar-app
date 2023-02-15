import React, { useState } from 'react';
import ROSLIB from 'roslib';

const PointCloudSaverButton = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const ros = new ROSLIB.Ros({
    url: 'http://schneider:11311/'
  });

  const buttonClickHandler = () => {
    const pub = new ROSLIB.Topic({
      ros: ros,
      name: '/pont_cloud_saver_controller',
      messageType: 'std_msgs/Float32'
    });

    const message = new ROSLIB.Message({
      data: 1 // Change to false if needed
    });

    pub.publish(message);

    setIsButtonPressed(true);
  };

  return (
    <div>
      <button onClick={buttonClickHandler} disabled={isButtonPressed}>
        {isButtonPressed ? 'Button pressed!' : 'Press me!'}
      </button>
    </div>
  );
};

export default PointCloudSaverButton;
