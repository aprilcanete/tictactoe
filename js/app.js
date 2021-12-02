 console.log('tictactoe');

 var playerOne = 'playerone';
 var playerTwo = 'playertwo';
 var gameBoxes = document.querySelectorAll('.game-box');


function handleClick(event) {
    var userClicked = event.target;

    userClicked.style.backgroundColor = 'red';

}

gameBoxes.forEach(box => 
    box.addEventListener('click', handleClick)
    );