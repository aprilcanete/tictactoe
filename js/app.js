 console.log('tictactoe');

 var playerOne = {name: 'player 1', choices:[] };
 var playerTwo = {name: 'player 2', choices:[] };
 var gameBoxes = document.querySelectorAll('.game-box');
 var winningCombos = [[1,2,3], [1,5,9], [1,4,7], [4,5,6], [7,8,9], [2,5,8], [3,6,9],
            [3,5,7]];
 var counter = 0;
 var isGameDone = false;

function addElement(str) {
    var newHeading = document.createElement("h1");
    var newContent = document.createTextNode(str);

    var newDiv = document.createElement('div');
    var newImg = document.createElement('img');
    var newTxt = document.createElement('h2');
    var newTextContent = document.createTextNode(`Play again!`);

    newDiv.className = 'alert-msg-wrapper';
    newTxt.className = 'play-again-btn-txt';

    newImg.src = 'images/play-again-btn.gif'
    newImg.className = 'play-again-btn';

    newHeading.style.textAlign = 'center';
    
    newTxt.appendChild(newTextContent);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newTxt);
    newHeading.appendChild(newContent);

    var currentDiv = document.querySelector('.main');
    document.body.insertBefore(newHeading, currentDiv);
    // document.body.insertBefore(newDiv, currentDiv);

    currentDiv.after(newDiv);

}

function gameCheck(player, choice) {

        for (let i= 0; i < winningCombos.length; i++) {
            var combo = winningCombos[i];

            var isComboWithinUserChoices = combo.every(number => choice.includes(number));
           
            // console.log(combo);
            // console.log(choice);
            // console.log(isComboWithinUserChoices);

            if (isComboWithinUserChoices) {
               // console.log('this is working!');
                isGameDone = true;

                addElement(`${player} wins!`);
            }    
        }
}

function handleClick(event) {
    var userClicked = event.target;
    var playerIcon = document.createElement("img");
    
    counter++;

    console.log(counter);
    //console.log(playerOne);

    if (counter %2 !== 0) {
        userClicked.style.backgroundColor = 'purple';
        // playerIcon.src = "images/bagel-icon.webp";
        // userClicked.appenChild(playerIcon);

        playerOne.choices.push(Number(userClicked.dataset.number));

        //console.log(playerOne.name + ' picks: ' + playerOne.choices);

        gameCheck(playerOne.name, playerOne.choices);
        
    } else {
        userClicked.style.backgroundColor = 'salmon';
        // playerIcon.src = "images/coffee-icon.webp";
        // userClicked.appenChild(playerIcon);

        playerTwo.choices.push(Number(userClicked.dataset.number));

        //console.log(playerTwo.name + ' picks: ' + playerTwo.choices);

        gameCheck(playerTwo.name, playerTwo.choices);
        
    }

    if (counter == gameBoxes.length && isGameDone != true) {
        addElement(`It's a draw!`);
    }

   

}


gameBoxes.forEach(box => 
    box.addEventListener('click', handleClick)
    );