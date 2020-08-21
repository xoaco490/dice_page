var diceRandomNumber1 = Math.floor(Math.random()*6)+1 //Genera el num aleatorio
var ranDiceImgSource1 ="images/dice"+diceRandomNumber1+".png" //images/dice+x+.png
document.querySelectorAll("img")[0].setAttribute("src",ranDiceImgSource1);//cambia el img de el primer dado
diceRandomNumber1 = Math.floor(Math.random()*6)+1;//Genera el num aleatorio
var ranDiceImgSource2 ="images/dice"+diceRandomNumber1+".png"//images/dice+x+.png
document.querySelectorAll("img")[1].setAttribute("src",ranDiceImgSource2);//cambia el img de el segundo dado
if(ranDiceImgSource1>ranDiceImgSource2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}else if(ranDiceImgSource1<ranDiceImgSource2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}else{
    document.querySelector("h1").innerHTML = "It's a draw!🎌"
}
