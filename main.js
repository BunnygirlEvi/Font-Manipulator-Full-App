leftWristX = 0;
rightWristX = 0;
thing = "";
// result = "";

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("PoseNet is Initialized!");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    console.log("rightWristX = " + rightWristX + " leftWristX = " + leftWristX);
    result = floor(leftWristX - rightWristX);
  }
}

function submit() {
  thing = document.getElementById("name").value;
}

function draw() {
  background("#b86af7");
  //textSize(30);
  result = floor(leftWristX - rightWristX);
  textSize(result);
  fill("#c2daff");
  text(thing, 100, 300);
}
