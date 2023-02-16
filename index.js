$(document).ready(function(){
  console.log("Document ready!!!");

  ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
  });
  
  ros.on('connection', function() {
    console.log('Connected to ROS Bridge server!');
  });
  
  ros.on('error', function(error) {
    console.log('Error connecting to ROS Bridge server:', error);
  });
  
  ros.on('close', function() {
    console.log('Disconnected from ROS Bridge server.');
  });

});

// Variáveis globais
var ros;

function sendMessage() {
  
  console.log("Connection established!!");

  var message = new ROSLIB.Message({
    data: 1.0
  });
  
  var topic = new ROSLIB.Topic({
    ros: ros,
    name: '/point_cloud_controller',
    messageType: 'std_msgs/Float32'
  });
  
  topic.publish(message);
}

// var listener = new ROSLIB.Topic({
//   ros : ros,
//   name : '/listener',
//   messageType : 'std_msgs/String'
// });

// listener.subscribe(function(message) {
//   console.log('Received message on ' + listener.name + ': ' + message.data);
//   listener.unsubscribe();
// });