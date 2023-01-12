const randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
const randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2");
const title = document.querySelector("#title");

if (randomNumber1 === 1){
    dice1.setAttribute("src", "./images/dice1.png")
}else if (randomNumber1 === 2){
    dice1.setAttribute("src", "./images/dice2.png")
}else if (randomNumber1 === 3){
    dice1.setAttribute("src", "./images/dice3.png")
}else if (randomNumber1 === 4){
    dice1.setAttribute("src", "./images/dice4.png")
}else if (randomNumber1 === 5){
    dice1.setAttribute("src", "./images/dice5.png")
}else if (randomNumber1 === 6){
    dice1.setAttribute("src", "./images/dice6.png")
}

if (randomNumber2 === 1){
    dice2.setAttribute("src", "./images/dice1.png")
}else if (randomNumber2 === 2){
    dice2.setAttribute("src", "./images/dice2.png")
}else if (randomNumber2 === 3){
    dice2.setAttribute("src", "./images/dice3.png")
}else if (randomNumber2 === 4){
    dice2.setAttribute("src", "./images/dice4.png")
}else if (randomNumber2 === 5){
    dice2.setAttribute("src", "./images/dice5.png")
}else if (randomNumber2 === 6){
    dice2.setAttribute("src", "./images/dice6.png")
}

if (randomNumber1 > randomNumber2){
    title.innerHTML = "Player 1 Won";
}else if (randomNumber1 < randomNumber2){
    title.innerHTML = "Player 2 Won";
}else{
    title.innerHTML = "Draw";
}