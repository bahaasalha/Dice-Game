 let currentPlayer0 = document.querySelector("#current--0"); 
 let currentPlayer1 = document.querySelector("#current--1"); 
 let player0 =  document.querySelector(".player--0"); 
 let player1 = document.querySelector(".player--1"); 
 let score0 = document.querySelector("#score--0");
 let score1 = document.querySelector("#score--1");
 let btnRoll = document.querySelector(".btn--roll"); 
 let btnNew = document.querySelector(".btn--new"); 
 let btnHold = document.querySelector(".btn--hold");
 let diceee =document.querySelector(".dice");
 let currentScore , activePlayer , scores ;
 const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    currentScore = 0;
  }
    const init = function () {
        scores = [0, 0];
        currentScore = 0;
        activePlayer = 0;
        score0.textContent = 0;
        score1.textContent = 0;
        currentPlayer0.textContent = 0;
        currentPlayer1.textContent = 0;
        diceee.classList.remove('hidden');
        player0.classList.remove('player--winner');
        playerl.classList.remove('player--winner');
        player0.classList.add('player--active');
        playerl.classList.remove('player--active');
      };
    
//  Events
 btnRoll.addEventListener("click", function(){
 let dice = Math.trunc(Math.random()*6) + 1;
 document.querySelector(".dice").src = `dice-${dice}.png`;
 if(dice !== 1){
  currentScore += dice;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
 }
 else{
   switchPlayer();
 }
 });
// HoLd
btnHold.addEventListener("click", function(){
 scores[activePlayer]+= currentScore; 
 document.getElementById(`score--${activePlayer}`).textContent =
 scores[activePlayer];
 if( scores[activePlayer] >=30){
    diceee.classList.add("hidden");
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); 
 }
else {
    switchPlayer();
  }});

  // New
  btnNew.addEventListener("click", function(){
      init();
  })
