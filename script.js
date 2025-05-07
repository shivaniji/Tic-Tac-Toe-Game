let boxes =document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn= true;
const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],

];

const ResetGame = () => {
  turn = true;
  enabledBoxes(); 
  msgcontainer.classList.add("hide");
};
boxes.forEach ((box)=> {
  box.addEventListener("click", () => {
   console.log("box was clicked")
   if (turn){
    box.innerText="O";
    turn=false
   }else{
    box.innerText="X";
    turn=true

   }
   box.disabled=true;
   checkWin();
  });
});

const disabledBoxes=()=>{
  for (let box of boxes){
    box.disabled=true;
  }
};

const enabledBoxes=()=>{
  for (let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}


const showWinner=(winner)=>{
  msg.innerText=`congratulations, winner ${winner} `;
  msgcontainer.classList.remove("hide");
  disabledBoxes();
}

const checkWin = () => {
  for (let pattern of winPatterns) {
    let post1Val = boxes[pattern[0]].innerText;
    let post2Val = boxes[pattern[1]].innerText;
    let post3Val = boxes[pattern[2]].innerText;
    if (post1Val != "" && post2Val != "" && post3Val != ""){
      if(post1Val ===  post2Val && post2Val === post3Val){
        console.log("Winner",post1Val);
       
        showWinner(post1Val);

      }

    }
      
  }
}

newGame.addEventListener("click",ResetGame);
reset.addEventListener("click",ResetGame);