console.log("Welcome to TIC TAC TOE");
let music = new Audio("./audio/music.mp3");
let audioTurn = new Audio("./audio/ting.mp3");
let audioGameover = new Audio("./audio/gameover.mp3");
let turn = "X";
let gameOver = false;

// Function to Change the Turn
const changeTurn = () =>{
    return turn === "X" ?"0":"X";
}

// Function to Check for a win
    // [0 1 2]  Winning Possibility   [0 1 2]
    // [3 4 5]  ======>>>             [3 4 5]
    // [6 7 8]                        [6 7 8]
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
   let wins =  [
        [0, 1, 2, 5, 15, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 5, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 45],
    ];

    wins.forEach( e =>{
        // if not blank then e[0] wins boxtext[e[0]].innerText !== "")
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&  (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            gameOver = true;
            
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;

            document.querySelector('.line').style.width = "20vw";
            fun();
        }
    })
   
    
}

// Game Logic 
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
                
            }
        }
    })
})



// Add Listener to Reset
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
        document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;

        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";

        document.querySelector('.line').style.width = "0";
    
})

 
