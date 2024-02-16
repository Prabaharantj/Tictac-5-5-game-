const boxs=document.querySelectorAll(".box");
const starustxt=document.querySelector(".status");
const restart=document.querySelector("#restart");
let x='<img src="image/x.png.png" style=width:100px>';
let o='<img src="image/o.png.png" style=width:90px>';

let possibility=[
    [0,1,2,3],
    [5,6,7,8],
    [10,11,12,13],
    [15,16,17,18],
    [20,21,22.23],
    [1,2,3,4],
    [6,7,8,9],
    [11,12,13,14],
    [16,17,18,19],
    [21,22,23,24],
    [0,5,10,15],
    [5,10,15,20],
    [1,6,11,16],
    [6,11,16,21],
    [15,11,17,23],
    [0,6,12,18],
    [1,7,13,19],
    [4,8,12,16],
    [8,12,16,20],
    [3,7,11,15],
    [16,12,8,4],
    [20,16,12,8],
    [2,7,12,17],
    [7,12,17,22],
    [3,8,13,18],
    [8,13,18,23],
    [4,9,14,19],
    [9,14,19,24],
    [9,13,17,21],
    [21,17,11,5],
    [5,11,17,23],
    [23,17,11,5],
    [24,18,12,6],
    [0,6,12,18],
    [18,12,6,0],
    [6,12,18,24]
]
let opption=["","","","","","","","","","","","","","","","","","","","","","","","","",];
let currenplayer=x;
let player="X";
let running=false;


initial();
function initial(){
    boxs.forEach(box=>box.addEventListener('click',boxrule));
    restart.addEventListener('click',gamerestate);
    starustxt.textContent=`${player} your turn....`;
    running=true;
}

function boxrule(){
let index=this.dataset.index;
 if(!opption[index]=="" || !running){
    return;
 }
 imageseter(this,index);
 wincheck();
}


 function imageseter(box,index){
      opption[index]=player;
      box.innerHTML=currenplayer;
}
 

function wincheck(){
    let iswon=false;

    for(let i=0; i<possibility.length; i++){
        let conndition=possibility[i];////[0,1,2,3]
        box1=opption[conndition[0]];
        box2=opption[conndition[1]];
        box3=opption[conndition[2]];
        box4=opption[conndition[3]];


       if(box1=="" || box2==""|| box3=="" || box4==""){
            continue;
        }

        if(box1==box2 &&  box2==box3 && box3==box4){
            iswon=true;

            boxs[conndition[0]].classList.add('win');
            boxs[conndition[1]].classList.add('win');
            boxs[conndition[2]].classList.add('win');
            boxs[conndition[3]].classList.add('win');
        }
    }
   
      if(iswon){
        starustxt.textContent=`${player} Win the Game....`;
        running=false;
      }
      else if(!opption.includes("")){
        starustxt.textContent=`Games is Draw`;
        running=false;
      }
     else{
        changeplayer();
     }
    
}

  function changeplayer(){
      player=(player=="X") ? "O":"X";
      starustxt.textContent=`${player} your turn`;
      currenplayer=(currenplayer==x) ? o:x;x

  }


function gamerestate(){
    opption=["","","","","","","","","","","","","","","","","","","","","","","","","",];
    currenplayer=x;
    player="x";
    running=false;
    starustxt.textContent=`${player} your turn`;

    boxs.forEach(box=>{
        box.innerHTML='';
        box.classList.remove();
    })

    window.location.reload();
}