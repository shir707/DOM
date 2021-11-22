/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores,roundScore,activePlayer,gamePlaying;
init();


//we want to catch when the user click on the roll button
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //1.Random number
    //the random give me number between 0 to 1, i want from 1 to 6
    var dice=Math.floor(Math.random()*6)+1;

    //2.Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3.Update the round score if the rolled number is not one
    if(dice!==1){
        //Add score
        roundScore+=dice;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;
    }
    else{
        //Next player and reset the score

       nextPlayer();

        activePlayer === 0 ? activePlayer=1 : activePlayer=0;
        roundScore=0;
        document.querySelector('#current-0').textContent=0;
        document.querySelector('#current-1').textContent=0;
        //we need to move the dot that says who is play now. in the html is the active next to the class
        //the toggle is like to do remove and after add to the "active"
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

    }

    }
    

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        //1.add the current score to the global score
    scores[activePlayer]+=roundScore;
    //2. update UI
    document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];
    //3.check if the player won the game
    if(scores[activePlayer] >=20){
        document.querySelector('#name-' + activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display='none';
        //giving the display of the winner
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying=false;
    }
    else{
        nextPlayer();

    }

    }
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer=1 : activePlayer=0;
    roundScore=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    //we need to move the dot that says who is play now. in the html is the active next to the class
    //the toggle is like to do remove and after add to the "active"
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}

function init(){
    gamePlaying=true;
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    document.querySelector('.dice').style.display = 'none';
//initialize the score
   document.getElementById('score-0').textContent='0';
   document.getElementById('score-1').textContent='0';
   document.getElementById('current-0').textContent='0';
   document.getElementById('current-1').textContent='0';
   //get the name from winner to player 1 and 2
   document.getElementById('name-0').textContent='Player 1';
   document.getElementById('name-1').textContent='Player 2';
   //removing the winner class
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   document.querySelector('.player-0-panel').classList.remove('active');
   document.querySelector('.player-1-panel').classList.remove('active');
   //set player 1 to be the active player
   document.querySelector('.player-0-panel').classList.add('active');
}
//by clicking the new game button we call the init function
document.querySelector('.btn-new').addEventListener('click',init);
