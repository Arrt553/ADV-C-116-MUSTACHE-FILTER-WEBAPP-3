
function preload(){
clown_nose = loadImage("8-2-mou");
}
function setup(){
   var canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   posenet = ml5.poseNet(video,modelLoaded);
   posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Model Loaded!");
}

function draw(){
image(video,0,0,300,300);
//stroke(252, 69, 3);//
//circle(noseX,noseY,20);//
//fill(252, 3, 3);//
image(clown_nose,noseX,noseY,50,50);
}
function takeSnapshot(){
    save("myfilterimg.png");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-18;
        noseY = results[0].pose.nose.y-15;
        console.log("nose x=" + noseX);
        console.log("nose y=" + noseY);

    }
}
