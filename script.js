let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        count++;
        box.disabled = true;
        let win = checkwin();
        if(count==9 &&!win){
            gamedraw();
        }
    });
});



const gamedraw = () =>{
    msg.innerText = "The Game was Draw";
    msgContainer.classList.remove("hide");
    disableboxes();
}
const resetGame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    msgContainer.classList.add("hide");
}

const enableboxes = () => {
    for( let box of boxes){
       box.disabled = false;
       box.innerText = '';
    }
}
const disableboxes = () => {
     for( let box of boxes){
        box.disabled = true;
     }
}



const showWin = (winner) =>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const checkwin = () =>{
    for(let pattern of winPatterns){
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;
        if(a!=""&&b!=""&&c!=""){
            if(a==b&&b==c){
                console.log("Winner is",a);
                showWin(a);
                return true;
            }
        }
    } 
}



reset.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);