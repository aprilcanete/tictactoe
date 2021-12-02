 console.log('tictactoe');

 var playerOne = [];
 var playerTwo = [];
 var gameBoxes = document.querySelectorAll('.game-box');
 var winningGames = [[1,2,3], [1,5,9], [1,4,7], [4,5,6], [7,8,9], [2,5,8], [3,6,9],
            [3,5,7]];
 var counter = 0;

function gameCheck(player) {
    for (let i= 0; i < winningGames.length; i++) {
        var game = winningGames[i];
        //var thisPlayer = player;
        

        // console.log('for loop ' + game);
       // console.log(player + '.sort().join(',')');
        
    
        // if (game.sort().join(',') == player.sort().join(',')) {
            
        //     console.log('you win!');
        //     //console.log('win ' + game);
        // }
    }
}

function handleClick(event) {
    var userClicked = event.target;
    var player;
    var playerIcon = document.createElement("img");
    
    counter++;

    console.log(counter);
    //console.log(playerOne);

    if (counter %2 == 0) {
        player = 'playerOne';
        //userClicked.style.backgroundColor = 'red';
        playerIcon.src = "images/coffee-icon.webp";
        userClicked.appenChild(playerIcon);

        playerOne.push(userClicked.dataset.number);

        gameCheck(player);
    } else {
        player = 'playerTwo';
        //userClicked.style.backgroundColor = 'purple';
        playerIcon.src = "images/bagel-icon.webp";
        userClicked.appenChild(playerIcon);

        playerTwo.push(userClicked.dataset.number);

        gameCheck(player);
    }

}

//  winningGames.forEach(game =>
//     if (game.sort().join(',') == playerOne.sort.join(',')) {
        
//     }
// );


gameBoxes.forEach(box => 
    box.addEventListener('click', handleClick)
    );