function preload()
{

}

function setup(){
    canvas=createCanvas(500,400);
    canvas.position(450,200);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    tint(tint_color);
    
    image(video,100,80,300,250);

    stroke(168, 10, 10);
    fill(168, 10, 10);
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);


    stroke(40, 168, 82);
    fill(50, 168, 82);

    rect(60, 27, 380, 25);
    rect(60, 345, 380, 25);
    rect( 35, 27, 25, 340);
    rect( 450, 27, 25, 340);
}


function take_snapshot(){
    save('your_image.png');
}

function filter_tint()
{
    tint_color=document.getElementById("color_name").value;
}