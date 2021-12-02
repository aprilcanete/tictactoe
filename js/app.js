 console.log('tictactoe');

 var playerOne = [];
 var playerTwo = [];
 var gameBoxes = document.querySelectorAll('.game-box');
 var winningGames = [[1,2,3], [1,5,9], [1,4,7], [4,5,6], [7,8,9], [2,5,8], [3,6,9],
            [3,5,7]];

function gameCheck() {
    for (let i= 0; i < winningGames.length; i++) {
        var game = winningGames[i];

        //console.log('for loop ' + game);
    
        if (game.sort().join(',') == playerOne.sort().join(',')) {
            
            console.log('you win!');
            //console.log('win ' + game);
        }
    }
}

function handleClick(event) {
    var userClicked = event.target;

    userClicked.style.backgroundColor = 'red';

    playerOne.push(userClicked.dataset.number);

    console.log(playerOne);

    gameCheck();

}



//  winningGames.forEach(game =>
//     if (game.sort().join(',') == playerOne.sort.join(',')) {
        
//     }
// );


gameBoxes.forEach(box => 
    box.addEventListener('click', handleClick)
    );