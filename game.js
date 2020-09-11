const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min,max){
    return Math.round(Math.random()*(max-min)+min);
}
function randomHoles(holes){
    const index = Math.floor(Math.random()*holes.length);
    const hole = holes[index];
    if(hole===lastHole){ //===means checking data type
        return randomHoles(holes);
    }
    lastHole = hole;
    return hole;
}
function peep(){
    const time = randomTime(500,1000);
    const hole = randomHoles(holes);
    hole.classList.add('up');
    setTimeout(()=>{ //arrow-function
        hole.classList.remove('up');
        if(!timeUp){
            peep(); //recursion
        }
    },time);
}
function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(()=>timeUp = true,15000);
}
function whack(e){
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}
moles.forEach(mole=>mole.addEventListener('click',whack));