let music = new Audio("music.mp3");
let tingSound = new Audio("ting.mp3");
let gameOver = new Audio("gameOver.mp3");

let isGameOver = false;

let turn = "X";
let count = 0;

//Function To Change the turn
const changeTurn = () => {
        return turn === "X" ? "0" : "X";
}

function checkCount (){
    let result = document.querySelector('.result');
    result.innerText = "Draw";
    document.querySelector('.resultBox').classList.add("show");
    document.querySelector('.gameContainer').classList.add("hide");
    document.querySelector('.gameInfo').classList.add("hide");
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "150px";
    count = 0;
}

//Function to Check the winner
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let fullBox = document.querySelectorAll('.boxtext');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
            win.forEach(e => {
                if(boxtext[e[0]].innerText == "" || boxtext[e[1]].innerText !== "" || boxtext[e[2]].innerText !== ""){
                    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
                        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
                        isGameOver = true;
            
                        let result = document.querySelector('.result');
                        result.innerText = "Player " +turn +" has won";
                        document.querySelector('.resultBox').classList.add("show");
                        document.querySelector('.gameContainer').classList.add("hide");
                        document.querySelector('.gameInfo').classList.add("hide");
                        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "150px";
                        count = 0;
                    }
                }
            })
    
}

// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        count += 1;
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            tingSound.play();
            console.log(count);
            if(count === 9){
                checkCount();
            }else{
                checkWin();
            }

            turn = changeTurn();
            if(!isGameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    isGameOver = false;
    document.querySelector('.info').innerText = "Turn For X";
    turn = "X";
    count = 0;
})

replayGame.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    isGameOver = false;
    document.querySelector('.info').innerText = "Turn for X";
    turn="X";
    document.querySelector('.resultBox').classList.remove("show");
    document.querySelector('.gameContainer').classList.remove("hide");
    document.querySelector('.gameInfo').classList.remove("hide");
})
