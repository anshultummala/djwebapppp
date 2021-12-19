function setup(){
c1 = createCanvas(650, 500)
c1.center()
v1 = createCapture(VIDEO)
v1.hide()
pn = ml5.poseNet(v1, modelLoaded)
pn.on("pose", gotPoses)
}
function modelLoaded(){
    console.log("model has loaded")
}
function draw(){
    image(v1, 0, 0, 650, 500)   
fill("red")
if(scorelw > 0.2){
circle(lwx, lwy, 50);
if(lwy>0 && lwy<=100)
{
    document.getElementById("volumet").innerHTML = "volume = 0.1"
    song.setVolume(0.1);

}

else if(lwy>100  && lwy<300)
{
    document.getElementById("volumet").innerHTML = "volume = 0.5"
    song.setVolume(0.5);

}
else if(lwy>300  && lwy<400){
    document.getElementById("volumet").innerHTML = "volume = 0.8"
    song.setVolume(0.8);

}
else if(lyw>400  ){

    document.getElementById("volumet").innerHTML = "volume = max"
    song.setVolume(1);

}
}
if(scorerw>0.2){
circle(rwx, rwy, 50);
if(rwy>0  && rwy<100)
{
document.getElementById("speedt").innerHTML = "speed = 0.5"
song.rate(0.5);

}
else if(rwy>100  && rwy<=300){
document.getElementById("speedt").innerHTML = "speed = 1.5"
song.rate(1.5);

}
else if(rwy>300  && rwy<400){
document.getElementById("speedt").innerHTML = "speed = 2"
song.rate(2);

}
else if(rwy>400  ){
    document.getElementById("speedt").innerHTML = "speed = 2.5"
    song.rate(2.5);

}
}
}

song = "";
rwx = 0;
lwy = 0;
rwy = 0;
lwx = 0;
scorerw = 0;
scorelw = 0;
function gotPoses(results){
if(results.length>0){
    console.log(results);
    rwx = results[0].pose.rightWrist.x;
    rwy = results[0].pose.rightWrist.y;
    lwx = results[0].pose.leftWrist.x;
    lwy = results[0].pose.leftWrist.y;
    scorerw = results[0].pose.keypoints[10].score;
scorelw = results[0].pose.keypoints[9].score;
console.log("score of rightwrist = " + scorerw);
console.log("score of leftwrist = " + scorelw);
    console.log("rightWristx = " +  rwx)
    console.log("rightWristy = " + rwy)
    console.log("leftWristx = " + lwx)
    console.log("leftWristy = " + lwy)

}


}
function preload(){
    song = loadSound("music.mp3");
}
function start(){
song.play()
song.setVolume(1)
song.rate(1)




}