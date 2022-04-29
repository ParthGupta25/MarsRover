canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_height = 90;
rover_width = 100;

rover_x = 10;
rover_y = 10;

var mars_imgs = ["http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg",
    "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631210305218C00_DXXX.jpg",
    "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NRB_486270860EDR_F0481570NCAM00323M_.JPG"
]

rndm = Math.floor(Math.random() * 3);

mars_bg = mars_imgs[rndm];
rover_img = "rover.png";

function add() {
    mars_bgImg = new Image();
    mars_bgImg.onload = uploadMarsBg;
    mars_bgImg.src = mars_bg;

    rover_Bg_Img = new Image();
    rover_Bg_Img.onload = uploadRoverImg;
    rover_Bg_Img.src = rover_img;
}

function uploadMarsBg() {
    ctx.drawImage(mars_bgImg, 0, 0, canvas.width, canvas.height);
}

function uploadRoverImg() {
    ctx.drawImage(rover_Bg_Img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    key = e.keyCode;
    console.log(key);

    if (key == 37) {
        left();
        console.log("left");
    }
    if (key == 39) {
        right();
        console.log("right");
    }

    if (key == 38) {
        up();
        console.log("up");
    }

    if (key == 40) {
        down();
        console.log("down");
    }

}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
        uploadMarsBg();
        uploadRoverImg();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
        uploadMarsBg();
        uploadRoverImg();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
        uploadMarsBg();
        uploadRoverImg();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
        uploadMarsBg();
        uploadRoverImg();
    }
}