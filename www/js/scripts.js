function generateWB(ball){
    var ball = document.getElementById(ball);
 
    var randomNumber = Math.ceil(Math.random()*68);
    ball.innerHTML = randomNumber;
}
function generatePB(){
    var ball = document.getElementById('power');

    var randomNumber = Math.ceil(Math.random()*25);
    ball.innerHTML = randomNumber;
}