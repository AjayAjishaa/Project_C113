function preLoad()
{
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 240);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 640, 480);
    circle(30, 30, 150);
    circle(610,450,150);
    circle(30, 450, 150);
    circle(610, 30, 150);
}

function take_snapshot()
{
    save('you.png');
}
