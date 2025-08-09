const boxes = document.querySelectorAll(".box");
let resBtn  = document.querySelector("#res-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new-btn");
let turnO = true;
let cnt = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const disableBtn = () =>{
    for( box of boxes){
        box.disabled = true;
    }
}
const enableBtn = () =>{
    for( box of boxes){
        box.disabled = false;
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const newGame = ()=>{
    turnO = true;
    cnt = 0;
    for(box of boxes){
        box.innerText = "";
    }
    enableBtn();
    msgContainer.classList.add("hide");
}
const resGame = ()=>{
    cnt = 0;
    turnO = true;
    for(box of boxes){
        box.innerText = "";
    }
    enableBtn();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        cnt++;
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        

    })
})
const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("Winner "+pos1val);
                disableBtn();
                showWinner(pos1val);
            }else if(cnt==9){
                console.log("Draw!");
                disableBtn();
                msg.innerText = "DRAW!, You can start a new Game.";
                msgContainer.classList.remove("hide");
            }
        }
    }
}
newBtn.addEventListener("click",newGame);
resBtn.addEventListener("click",newGame);