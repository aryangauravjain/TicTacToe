console.log("Welcone to Tic Tac Toe")
//let music=new Audio("music.mp3");
let turn_music=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn="X"
let isgameover=false;

//function to change turn
function changeTurn(){
    return turn==="X" ? "0":"X";
}
//function for cheaking the win
const cheakWin= ()=>{
    let boxtexts=document.getElementsByClassName('textbox');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!=='')){
            document.querySelector(".info").innerText=boxtexts[e[0]].innerText+" Won"
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
        }
    })
}
//Game Logic
  let boxes=document.querySelectorAll(".box");
  Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.textbox');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText= turn;
            turn=changeTurn();
            turn_music.play();
            cheakWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    })
  })
// let boxtexts=document.querySelectorAll(".textbox");
// for(var i=0;i<boxtexts.length;i++){
//     boxes[i].addEventListener('click',()=>{
//         //let text=boxtexts[i].innerText;
//         if(boxtexts[i].innerText===''){
//             boxtexts[i].innerText=turn;
//             turn=changeTurn();
//             //turn_music.play();
//             cheakWin();
//             if(!isgameover){
//                document.getElementsByClassName("info").innerText="Turn For "+turn; 
//             }
//         }
//     });
// }
//adding evenlistner to reset
var reset=document.querySelector("#reset");
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll(".textbox");
    Array.from(boxtexts).forEach(element=>{
        element.innerText=''
        isgameover=false;
        turn="X";
        document.getElementsByClassName("info")[0].innerHTML="Turn For "+turn;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
    });
})