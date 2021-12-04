 console.log('tictactoe');

 var gameBoxes = document.querySelectorAll('.game-box');
 var playAgainBtnWrap = document.querySelector('.play-again-btn-wrapper');
 var playAgainBtn = document.querySelector('.play-again-btn');
 var playAgainBtnP = document.querySelector('.play-again-btn-txt');
 var playerBoxOne = document.querySelector('.player-box-one');
 var playerBoxTwo = document.querySelector('.player-box-two');

 var playerOne = {name: 'Player 1', choices:[], icon: 'coffee' };
 var playerTwo = {name: 'Player 2', choices:[], icon: 'bagel' };
 var winningCombos = [[1,2,3], [1,5,9], [1,4,7], [4,5,6], [7,8,9], [2,5,8], [3,6,9], [3,5,7]];
 var counter = 0;
 var isGameDone = false;
 var userClicked;

 playerBoxOne.className = 'player-box-animate';

function addElement(str) {
    // console.log('add element');
    // console.log(str);

    var newHeading = document.createElement("h1");
    var newContent = document.createTextNode(str);

    newHeading.className = 'alert-message';
    newHeading.style.textAlign = 'center';
    
    newHeading.appendChild(newContent);

    var currentDiv = document.querySelector('.main');
    document.body.insertBefore(newHeading, currentDiv);

   playAgainBtnWrap.style.display = 'block';
}

function shakeImage(arr) {

    for (let i = 0; i < arr.length; i++) {
        var boxNum = arr[i];
        
        for (let i = 0; i < gameBoxes.length; i++) {
            var box = gameBoxes[i];
            
            if (Number(box.dataset.number) == boxNum) {
                var item = box.firstElementChild;

                item.className = 'player-icon-move';
            }
        }
    }   
}

function gameCheck(player, choice) {

    // console.log('game check');
    // console.log(player);
    // console.log(choice);

    for (let i= 0; i < winningCombos.length; i++) {
        var combo = winningCombos[i];

        var isComboWithinUserChoices = combo.every(number => choice.includes(number));

        var result = choice.filter(function(num) {return combo.includes(num)} )

        //console.log(result); 
        // console.log(combo);
        // console.log(choice);
        // console.log(isComboWithinUserChoices);

        if (isComboWithinUserChoices) {
            playerBoxOne.className = 'player-box-one';
            playerBoxTwo.className = 'player-box-two';

            isGameDone = true;

            addElement(`${player} wins!`);
            shakeImage(result);

            for (let i = 0; i < gameBoxes.length; i++) {
                var box = gameBoxes[i];

                box.removeEventListener('click', handleClick)
            }             
        }    
    }
}

function handleClick(event) {
    userClicked = event.target;
    var playerIcon = document.createElement('img');

    playerIcon.className = 'player-icon';
      
    // console.log(counter);
    // console.log(playerOne);

    if (userClicked.innerHTML !== '') {
        // console.log('inner html is NOT null');
        return;
    } else {
        // console.log('inner html is null');

        counter++;

        if (counter %2 !== 0) {
            
            playerIcon.src = 'images/coffee-icon.webp';
            userClicked.appendChild(playerIcon);

            playerBoxOne.className = 'player-box-one';
            playerBoxTwo.className = 'player-box-animate';
    
            playerOne.choices.push(Number(userClicked.dataset.number));
    
            // console.log(playerOne.name + ' picks: ' + playerOne.choices);
    
            gameCheck(playerOne.name, playerOne.choices);
            
        } else {
    
            playerIcon.src = 'images/bagel-icon.webp';
            userClicked.appendChild(playerIcon);

            playerBoxTwo.className = 'player-box-two';
            playerBoxOne.className = 'player-box-animate';
    
            playerTwo.choices.push(Number(userClicked.dataset.number));
    
            // console.log(playerTwo.name + ' picks: ' + playerTwo.choices);
    
            gameCheck(playerTwo.name, playerTwo.choices);       
        }
    
        if (counter == gameBoxes.length && isGameDone != true) {
            playerBoxOne.className = 'player-box-one';
            playerBoxTwo.className = 'player-box-two';

            addElement(`It's a draw!`);

            for (let i = 0; i < gameBoxes.length; i++) {
                var box = gameBoxes[i];
    
                box.removeEventListener('click', handleClick)
            }    
        }
    }

    return userClicked;
}

function handleReset() {
    window.location.reload();
}

gameBoxes.forEach(box => 
    box.addEventListener('click', handleClick)
    );

playAgainBtn.addEventListener('click', handleReset);
playAgainBtnP.addEventListener('click', handleReset);