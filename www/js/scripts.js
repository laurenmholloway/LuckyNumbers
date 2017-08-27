
var whiteBalls = [];

function generateWB(ball){
    var ball = document.getElementById(ball);
    ball.style.animation = "none";
    var randomNumber = Math.ceil(Math.random()*68);
    var isABall = true;
    while(isABall){
        
        if(whiteBalls.indexOf(randomNumber) != -1){
            whiteBalls.push(randomNumber);
            ball.innerHTML = randomNumber;
            isABall = false;
        }
        else{
            randomNumber = Math.ceil(Math.random()*68);
        }
        
    }
        
}
function generatePB(){
    var ball = document.getElementById('power');
    ball.style.animation = "none";    
    var randomNumber = Math.ceil(Math.random()*25);
    ball.innerHTML = randomNumber;
}

function resetBalls(){
    for(var ball in whiteBalls){
        whiteBalls.pop();
    }
}