/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores,roundScore,activePlayser, dice;
scores=[0,0];
roundScore=0;
activePlayser=0; //the first player, 1-is the second player
//the random give me number between 0 to 1, i want from 1 to 6
dice=Math.floor(Math.random()*6)+1;
console.log(dice);