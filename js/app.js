 console.log('tictactoe');

 var playerOne = {name: 'player 1', choices:[] };
 var playerTwo = {name: 'player 2', choices:[] };
 var gameBoxes = document.querySelectorAll('.game-box');
 var playAgainBtnWrap = document.querySelector('.play-again-btn-wrapper');
 var playAgainBtn = document.querySelector('.play-again-btn');
 var winningCombos = [[1,2,3], [1,5,9], [1,4,7], [4,5,6], [7,8,9], [2,5,8], [3,6,9],
            [3,5,7]];
 var counter = 0;
 var isGameDone = false;

function addElement(str) {
    var newHeading = document.createElement("h1");
    var newContent = document.createTextNode(str);

    newHeading.className = 'alert-message';
    newHeading.style.textAlign = 'center';
    
    newHeading.appendChild(newContent);

    var currentDiv = document.querySelector('.main');
    document.body.insertBefore(newHeading, currentDiv);

   playAgainBtnWrap.style.display = 'block';
}

function gameCheck(player, choice) {

        for (let i= 0; i < winningCombos.length; i++) {
            var combo = winningCombos[i];

            var isComboWithinUserChoices = combo.every(number => choice.includes(number));
           
            // console.log(combo);
            // console.log(choice);
            // console.log(isComboWithinUserChoices);

            if (isComboWithinUserChoices) {

                isGameDone = true;

                addElement(`${player} wins!`);

                for (let i = 0; i < gameBoxes.length; i++) {
                    var box = gameBoxes[i];

                    box.removeEventListener('click', handleClick)
                }
                     
            }    
        }
}

function handleClick(event) {
    var userClicked = event.target;
    var playerIcon = document.createElement('img');

    playerIcon.className = 'player-icon';
    
    counter++;
    //console.log(counter);
    //console.log(playerOne);


    if (counter %2 !== 0) {
        
        playerIcon.src = 'images/coffee-icon.webp';
        userClicked.appendChild(playerIcon);

        playerOne.choices.push(Number(userClicked.dataset.number));

        //console.log(playerOne.name + ' picks: ' + playerOne.choices);

        gameCheck(playerOne.name, playerOne.choices);
        
    } else {

        playerIcon.src = 'images/bagel-icon.webp';
        userClicked.appendChild(playerIcon);

        playerTwo.choices.push(Number(userClicked.dataset.number));

        //console.log(playerTwo.name + ' picks: ' + playerTwo.choices);

        gameCheck(playerTwo.name, playerTwo.choices);       
    }

    if (counter == gameBoxes.length && isGameDone != true) {
        addElement(`It's a draw!`);
    }
}


function handleReset() {
    window.location.reload();
}


gameBoxes.forEach(box => 
    box.addEventListener('click', handleClick)
    );

playAgainBtn.addEventListener('click', handleReset);