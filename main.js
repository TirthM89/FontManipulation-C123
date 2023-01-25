
difference = 0;
right_wrist_x = 0;
left_wrist_x = 0;




function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Pose Net is intialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;

        difference = Math.floor(left_wrist_x - right_wrist_x);

        console.log("Left Wrist X = "+left_wrist_x+" Right Wrist X = "+right_wrist_x+"Difference = "+difference);
    }
}

function draw() {

    background("#6C91C2")
document.getElementById("font_size").innerHTML = "Font Size of text ="+difference+"px";

textSize(difference);
fill("#FFE787");
text("peter",50,400);
}