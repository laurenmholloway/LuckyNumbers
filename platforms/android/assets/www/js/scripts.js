
function generateWB(ball){
    var ball = document.getElementById(ball);
    ball.style.animation = "none";
    var randomNumber = Math.ceil(Math.random()*68);
    ball.innerHTML = randomNumber;
}
function generatePB(){
    var ball = document.getElementById('power');
    ball.style.animation = "none";    
    var randomNumber = Math.ceil(Math.random()*25);
    ball.innerHTML = randomNumber;
}
