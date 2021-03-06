let userName = prompt("what is your name?");
alert(` Hello ${userName}, welcome to the memory game.
The entire card will be revealed for few seconds afterwhich it will be overlaid.
You have to flip over a card and another till you get a match.
If there is a match; you have a point.
If the next card you flip does not match, a pop up alert notifies you of this and the cards flip back
The game continues until you match all the cards on the board.
Upon completion you get an alert that declares you a star. `)

let starLight = "You are a Star !!";
const backColor= document.querySelector(".star-light");

document.addEventListener('DOMContentLoaded', () => {
  const cardArray=[
 {
     name:"icecream",
     img:"/media/icecream.jpg"
 },
 {
     name:"icecream",
     img:"/media/icecream.jpg",
 },
 {
     name:"biscuit",
     img:"/media/bscuit.jpg",
 },
 {
     name:"biscuit",
     img:"/media/bscuit.jpg",
 },
 {
     name:"burger",
     img:"/media/burger.jpg",
 },
 {
     name:"burger",
     img:"/media/burger.jpg",
 },
 {
     name:"cheese",
     img:"/media/cheese.jpg",
 },
 {
     name:"cheese",
     img:"/media/cheese.jpg",
 },
 {
     name:"chocolate",
     img:"/media/choc.jpg",
 },
 {
     name:"chocolate",
     img:"/media/choc.jpg",
 },
 {
     name:"fruit",
     img:"/media/fruit.jpg",
 },
 {
     name:"fruit",
     img:"/media/fruit.jpg",
 },
];

cardArray.sort(() => 0.5 - Math.random());

const grid =document.querySelector(".grid");
 const myDisplay = document.querySelector(".result");
     let cardSelected = [];
     let cardsSelectedId = [];
     let cardsWon = [];


 // create board****

 function createBoard(){
     for (let i = 0; i < cardArray.length; i++){
         const card = document.createElement("img");
         card.setAttribute("src", "/media/rainbow.jpg")
         card.setAttribute("data-id", i)
         card.addEventListener("click", flipCard)
         grid.appendChild(card);
     }
 }
 
 function checkMatch(){
     const cards = document.querySelectorAll("img");
     const optionOneId = cardsSelectedId[0];
     const optionTwoId = cardsSelectedId[1];
     let alertMe = ["Mismatch", "Try again", "really, try harder!", "the foodie, make a good choice", "Sorry, try again"];
     let feedBack = alertMe[Math.floor(Math.random() * alertMe.length)];
     let R= [Math.floor(Math.random() * 255)+1];
     let G= [Math.floor(Math.random() * 255)+1];
     let B= [Math.floor(Math.random() * 255)+1];
     const randomNumb =`rgb(${R}, ${G}, ${B})`;
    // backColor.style.backgroundColor= randomNumb;
    backColor.style.borderColor= randomNumb;
     if(optionOneId == optionTwoId){
         cards[optionOneId].setAttribute('src', 'images/blank.png')
         cards[optionTwoId].setAttribute('src', 'images/blank.png')
         alert('You have clicked the same image!') 
     }

     else if (cardSelected[0] === cardSelected[1]){
        alert(`${userName}, Good match`);
         cards[optionOneId].setAttribute("src", "/media/white.jpg");
         cards[optionTwoId].setAttribute("src", "/media/white.jpg");
         cards[optionOneId].removeEventListener("click", flipCard)
         cards[optionTwoId].removeEventListener("click", flipCard)
         cardsWon.push(cardSelected)
     } else{
         cards[optionOneId].setAttribute("src", "/media/rainbow.jpg")
         cards[optionTwoId].setAttribute("src", "/media/rainbow.jpg")
        //  alert(feedBack);
         alert(`${userName}, ${feedBack}`);
        //  console.log(feedBack);
     };
     cardSelected = [];
     cardsSelectedId = [];
     myDisplay.textContent = (`Score: ${cardsWon.length}`);
     if(cardsWon.length === cardArray.length/2){
        myDisplay.textContent = (`${starLight} 
        ${userName}, you found all.`);
     };
 }
 function flipCard(){
     let cardId = this.getAttribute("data-id");
     cardSelected.push(cardArray[cardId].name )
     cardsSelectedId.push(cardId)
     this.setAttribute("src", cardArray[cardId].img)
     if (cardSelected.length === 2){
         setTimeout(checkMatch, 500);
     }
 }        
 
 createBoard();

});
