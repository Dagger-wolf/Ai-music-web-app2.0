function setup(){

    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){

    image(video, 0, 0, 600,500);

}

sound1 = "";
sound2 = "";

function preload(){

    sound1 = loadSound("mp3.mp3");
    sound2 = loadSound("music.mp3");

}