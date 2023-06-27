// Match the img with randomNum 
let randomNumber1 =Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);

let randomNumber2 =Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

// change the h1 text content according to the dice result
if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").textContent = "Draw!";
}
else if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent = "Player1 wins! 🚩";
}
else
{
    document.querySelector("h1").textContent = "Player2 wins! 🚩";
}


