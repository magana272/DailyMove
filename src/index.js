const btn  = document.getElementById("btn")
const Quote = require('inspirational-quotes');
var p = document.getElementById("message");

function GenerateMessage(){
  return Quote.getRandomQuote();
}

function GetMotivationalQuote(){
   p = document.getElementById("message");
   p.innerHTML = GenerateMessage();
   console.log(p.innerHTML)

}
const buttonClickHandler = () => {
  GetMotivationalQuote();
}

if (btn){
  btn.addEventListener('click', buttonClickHandler);
}

