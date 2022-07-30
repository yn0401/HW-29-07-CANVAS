let myCanvas = document.getElementById("my-smile");
const WIDTH = myCanvas.width;
const HEIGHT = myCanvas.height;
let pen = myCanvas.getContext("2d");

// Create gradient
var grd = pen.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

let arrowKey = "Stop";
class ballPos {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let body = document.getElementsByTagName("body")[0];

// body.onkeydown = function (e) {

// };

body.onkeyup = function (e) {

    if (e.key == " " || e.code == "Space") {
        if (arrowKey == "Next") {
            console.log("SMile");
            arrowKey = "Stop";
        } else if (arrowKey == "Stop") {
            console.log("SAD");
            arrowKey = "Next"
        }
    }
};

/** 
*
* @param {ballPos} ballPos1
* @param {ballPos} ballPos2
* @param {ballPos} ballPos3
* @param {ballPos} ballPos4
* @param {ballPos} ballPos5
* @param {ballPos} ballPos6
*/
function generateTears(ballPos1, ballPos2, ballPos3, ballPos4, ballPos5, ballPos6) {
    pen.fillStyle = "#42c9ff";
    pen.beginPath();//tròn nhỏ
    pen.arc(ballPos1.x, ballPos1.y, 10, 0, Math.PI * 2);
    pen.fill();
    pen.closePath();

    pen.fillStyle = "#42c9ff";
    pen.beginPath();//tròn nhỏ
    pen.arc(ballPos2.x, ballPos2.y, 6, 0, Math.PI * 2);
    pen.fill();
    pen.closePath();

    pen.fillStyle = "#42c9ff";
    pen.beginPath();//tròn nhỏ
    pen.arc(ballPos3.x, ballPos3.y, 3, 0, Math.PI * 2);
    pen.fill();
    pen.closePath();

    pen.fillStyle = "#42c9ff";
    pen.beginPath();//tròn nhỏ
    pen.arc(ballPos4.x, ballPos4.y, 10, 0, Math.PI * 2);
    pen.fill();
    pen.closePath();

    pen.fillStyle = "#42c9ff";
    pen.beginPath();//tròn nhỏ
    pen.arc(ballPos5.x, ballPos5.y, 6, 0, Math.PI * 2);
    pen.fill();
    pen.closePath();

    pen.fillStyle = "#42c9ff";
    pen.beginPath();//tròn nhỏ
    pen.arc(ballPos6.x, ballPos6.y, 3, 0, Math.PI * 2);
    pen.fill();
    pen.closePath();

    if (ballPos3.y < 290) {
        ballPos3.y += 5;
        ballPos6.y += 5;
    }
    else {
        if (ballPos2.y < 290) {
            ballPos2.y += 5;
            ballPos3.y += 5;
            ballPos5.y += 5;
            ballPos6.y += 5;
        }
        else {

            ballPos1.y += 5;
            ballPos2.y += 5;
            ballPos3.y += 5;
            ballPos4.y += 5;
            ballPos5.y += 5;
            ballPos6.y += 5;

        }
    }
}

let ballPos1 = new ballPos(300, 245);
let ballPos2 = new ballPos(300, 265);
let ballPos3 = new ballPos(300, 275);
let ballPos4 = new ballPos(430, 245);
let ballPos5 = new ballPos(430, 265);
let ballPos6 = new ballPos(430, 275);
const FPS = 40;
let startFrameTime = Date.now();
function ballCry() {
    pen.clearRect(0, 0, WIDTH, HEIGHT);
    let currentFrameTime = Date.now();
    let deltaTime = currentFrameTime - startFrameTime;

    pen.fillStyle = "black";
    pen.strokeStyle = "white";
    let actualFPS = 1000 / deltaTime;
    pen.textStyle = "20px Arial";
    pen.fillText("FPS: " + actualFPS.toFixed(2), 10, 30);

    // set stroke color
    // pen.fillStyle = "#f7e0ca";
 
    pen.beginPath();
    pen.arc(WIDTH / 2, HEIGHT / 2, 200, 0, Math.PI * 2);
    pen.stroke();
    pen.fill();

    if (arrowKey == "Next") {
        pen.fillStyle = "red";
        pen.beginPath();
        pen.arc(300, 200, 40, 0, Math.PI * 2);
        pen.stroke();
        pen.fill();

        
        pen.beginPath();
        pen.arc(430, 200, 40, 0, Math.PI * 2);
        pen.stroke();
        pen.fill();

        pen.beginPath();
        pen.ellipse(380, 350, 70, 45, Math.PI * 1, 0, Math.PI, false);
        pen.stroke();

        generateTears(ballPos1, ballPos2, ballPos3, ballPos4, ballPos5, ballPos6);
        if (ballPos2.y > 290) {
            ballPos1.y = 245;
            ballPos2.y = 265;
            ballPos3.y = 275;
            ballPos4.y = 245;
            ballPos5.y = 265;
            ballPos6.y = 275;
        }
    }
    if (arrowKey == "Stop") {
        pen.fillStyle = "white";
        pen.beginPath();
        pen.arc(300, 200, 40, 0, Math.PI * 2);
        pen.fill();
        pen.stroke();

    
        pen.beginPath();
        pen.arc(430, 200, 40, 0, Math.PI * 2);
        pen.fill(); 
        pen.stroke();

        pen.beginPath();
        pen.ellipse(380, 350, 70, 45, Math.PI * 1, 0, Math.PI, true);
        pen.stroke();

        ballPos1.y = 250;
        ballPos2.y = 265;
        ballPos3.y = 275;
        ballPos4.y = 245;
        ballPos5.y = 265;
        ballPos6.y = 275;
    }


    pen.beginPath();
    pen.fillStyle = "black";
    pen.arc(320, 190, 10, 0, Math.PI * 2);
    pen.stroke();
    pen.fill();

    pen.beginPath();
    pen.fillStyle = "black";
    pen.arc(410, 190, 10, 0, Math.PI * 2);
    pen.stroke();
    pen.fill();

    pen.beginPath();
    pen.fillStyle = "white";
    pen.arc(420, 300, 5, 0, Math.PI * 2);
    pen.stroke();
    pen.fill();

    startFrameTime = currentFrameTime;
}

setInterval(ballCry, 1000 / FPS);
