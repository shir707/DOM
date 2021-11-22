/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores,roundScore,activePlayer,gamePlaying;
init();
var lastDice;


//we want to catch when the user click on the roll button
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //1.Random number
    //the random give me number between 0 to 1, i want from 1 to 6
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;

    //2.Display the result
    document.getElementById('dice-1').style.display='block';
    document.getElementById('dice-2').style.display='block';
    //var diceDOM = document.querySelector('.dice');
    //diceDOM.style.display='block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    //3.Update the round score if the rolled number is not one
    if(dice1!==1 && dice2!==1){
        //Add score
        roundScore+=dice1+dice2;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;
    }
    else{
        //Next player and reset the score

       nextPlayer();

    }


    // if(dice===6 && lastDice===6){
    //     //player loses score
    //     scores[activePlayer]=0;
    //     document.querySelector('#score-' + activePlayer).textContent='0';
    //     nextPlayer();
    // }
    // else if(dice!==1){
    //     //Add score
    //     roundScore+=dice;
    //     document.querySelector('#current-' + activePlayer).textContent=roundScore;
    // }
    // else{
    //     //Next player and reset the score

    //    nextPlayer();

    // }
    //lastDice=dice;

     }
    

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        //1.add the current score to the global score
    scores[activePlayer]+=roundScore;
    //2. update UI
    document.querySelector('#score-' + activePlayer).textContent=scores[activePlayer];

    var input=document.querySelector('.final-score').value;
    var winningScore;
    //Undefined, 0 , null or "" are false
    if(input){
        winningScore=input;
    }
    else{
        winningScore=100;
    }

    //3.check if the player won the game
    if(scores[activePlayer] >=winningScore){
        document.querySelector('#name-' + activePlayer).textContent='Winner!';
        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';
        //document.querySelector('.dice').style.display='none';
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
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';
    //we need to move the dot that says who is play now. in the html is the active next to the class
    //the toggle is like to do remove and after add to the "active"
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';

}

function init(){
    gamePlaying=true;
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
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
