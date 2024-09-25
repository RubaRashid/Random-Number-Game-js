
var random = Math.ceil( Math.random() * 100);

function game(){
    var input = document.getElementById("input").value;
    if(input >= random){
        alert("your input Number is too high");
    }
    else if (input <= random){
        alert("Your input Number is too low");
    }
    else{
        alert("Congragulation! You Guess the correct Number");
    } 
}





