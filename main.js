function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
}


function draw(){
image(video,230,150,220,200);

 fill(255, 0 ,0);
 stroke(255, 0 ,0);
 circle(50, 50 ,80);


 fill(0, 128 ,0);
 stroke(0, 128 ,0);
 rect(90, 40 ,460,20);

 rect(90, 40 ,460,20);

 fill(255, 0 ,0);
 stroke(255, 0 ,0);
 circle(580, 50 ,80);

 

 fill(0, 128 ,0);
 stroke(0, 128 ,0);
 rect(40, 85, 20, 460);

 fill(0, 128 ,0);
 stroke(0, 128 ,0);
 rect(570, 85, 20, 460);

 fill(255, 0 ,0);
 stroke(255, 0 ,0);
 circle(50, 450 ,80);


 fill(0, 128 ,0);
 stroke(0, 128 ,0);
 rect(100, 40 ,460,20);

 rect(80, 450 ,460,20);

 fill(255, 0 ,0);
 stroke(255, 0 ,0);
 circle(580, 450 ,80);

}


function take_snapshot(){
    save('intro_pic.png');
}