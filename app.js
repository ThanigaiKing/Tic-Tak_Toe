const gameBoard=document.querySelector('#gameboard');
const infoDisplay=document.querySelector('#info');
const cells=["","","","","","","","",""];
let go='circle';
infoDisplay.textContent="It is now " + go + "'s chance.";
function createBoard(){
         cells.forEach((cell,index)=>{
           const cellElement= document.createElement('div');
           cellElement.classList.add('square');
           cellElement.id=index;
           cellElement.addEventListener('click',addFunc);
           gameBoard.append(cellElement);
         })
}
createBoard();

//add the circle or cross inside the square div
function addFunc(e)
{
// console.log(e.target);      e.target shows the tag which tag is currently using
 const goDisplay=document.createElement('div');
  const cirElement=goDisplay.classList.add(go);    
  e.target.append(goDisplay);
  console.log(e.target);
  go = go === "circle" ? "cross" : "circle";
  infoDisplay.textContent="It is now " + go + "'s chance.";
  e.target.removeEventListener("click",addFunc);
  checkscore();
}

function checkscore(){
    const allSquares=document.querySelectorAll(".square");
    console.log(allSquares);
    const winningpossible=[[0,1,2],[3,4,5],[6,7,8],
                           [0,3,6],[1,4,7],[2,5,8],
                           [0,4,8],[2,4,6]];
    winningpossible.forEach(array=>{
     const circleWin=array.every(cell=>allSquares[cell].firstChild?.classList.contains('circle'))
     if(circleWin){
        infoDisplay.textContent="Circle Wins! :}|"
        allSquares.forEach(square=>square.replaceWith(square.cloneNode(true)))
     }
    });

    winningpossible.forEach(array=>{
        const crossWin=array.every(cell=>allSquares[cell].firstChild?.classList.contains('cross'))
        if(crossWin){
           infoDisplay.textContent="Cross Wins! :}|"
           allSquares.forEach(square=>square.replaceWith(square.cloneNode(true)))
        }
       });
}
