var x = 0;
var cell;
var cell1 = document.getElementById("1");
var cell2 = document.getElementById("2");
var cell3 = document.getElementById("3");
var cell4 = document.getElementById("4");
var cell5 = document.getElementById("5");
var cell6 = document.getElementById("6");
var cell7 = document.getElementById("7");
var cell8 = document.getElementById("8");
var cell9 = document.getElementById("9");
var currentPlayer = document.getElementById("currentPlayer");
let seconds=5;
let timer; 
let gameOver=false;
function startTimer() {
    timer = setInterval(function() {
        document.getElementById('counter').textContent = seconds + 's';
        seconds--; 
        if(seconds == -1) {
            clearInterval(timer);
             gameOver=true;
            if(x%2==1){
                currentPlayer.style.color = "rgb(255, 45, 45)";
                currentPlayer.textContent = "Time's up! Player X Wins";
            }
            else if(x%2==0){
                currentPlayer.style.color = "rgb(38, 151, 225)";
                currentPlayer.textContent = "Time's up! Player O Wins";
            }
        }
    }, 1000); 
}

function putSymbol(y) {
    cell = document.getElementById(y.toString());
    if (cell.naturalWidth == 0 && gameOver==false) {
        seconds=5;
        clearInterval(timer);
        startTimer();
        x++;
        if (x % 2 == 1 && seconds > 0) {
            cell.style.display = "block";
            cell.src = "imgs/x.png";
            currentPlayer.textContent = "Current Player: O";
            currentPlayer.style.color = "rgb(38, 151, 225)";
        }
        else if (x % 2 == 0 && seconds > 0) {
            cell.style.display = "block";
            cell.src = "imgs/o.png";
            currentPlayer.textContent = "Current Player: X";
            currentPlayer.style.color = "rgb(255, 45, 45)";
        }
    }
    if((cell1.naturalWidth !=0 && cell1.src==cell2.src && cell2.src==cell3.src) || (cell4.naturalWidth !=0 && cell4.src==cell5.src && cell5.src==cell6.src) || (cell7.naturalWidth !=0 && cell7.src==cell8.src && cell8.src==cell9.src) || (cell1.naturalWidth !=0 && cell1.src==cell4.src && cell4.src==cell7.src) || (cell2.naturalWidth !=0 && cell2.src==cell5.src && cell5.src==cell8.src) || (cell3.naturalWidth !=0 && cell3.src==cell6.src && cell6.src==cell9.src) || (cell1.naturalWidth !=0 && cell1.src==cell5.src && cell5.src==cell9.src) || (cell3.naturalWidth !=0 && cell3.src==cell5.src && cell5.src==cell7.src)){
       if(x%2==1){
        document.getElementById('counter').textContent = "--";
        clearInterval(timer);
        currentPlayer.textContent = "Player X Wins!";
        currentPlayer.style.color = "rgb(255, 45, 45)";
       }
       else if(x%2==0){
         document.getElementById('counter').textContent = "--";
         clearInterval(timer);
        currentPlayer.textContent = "Player O Wins!";
        currentPlayer.style.color = "rgb(38, 151, 225)";
       }
    }
}
function resetGame(){
    cell1.src = "";
    cell1.style.display = "none";
    cell2.src = "";
    cell2.style.display = "none";
    cell3.src = "";
    cell3.style.display = "none";
    cell4.src = "";
    cell4.style.display = "none";
    cell5.src = "";
    cell5.style.display = "none";
    cell6.src = "";
    cell6.style.display = "none";
    cell7.src = "";
    cell7.style.display = "none";
    cell8.src = "";
    cell8.style.display = "none";
    cell9.src = "";
    cell9.style.display = "none";
    currentPlayer.textContent = "Current Player: X";
    currentPlayer.style.color = "rgb(255, 45, 45)";
    x=0;
    gameOver=false;
   document.getElementById('counter').textContent = "--";
   clearInterval(timer);
}