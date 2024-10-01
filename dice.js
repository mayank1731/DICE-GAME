document.getElementById('start').addEventListener('click', () => {
    const rollDice = function() {
        return Math.floor(Math.random() * 6) + 1;
    }

    const player1 = rollDice();
    const player2 = rollDice();

    
    function createDot(element, dotClass) {
        const dot = document.createElement('div');
        dot.className = 'dot ' + dotClass;
        element.appendChild(dot);
    }

    function showDice(element, number) {
        element.innerHTML = "";

        if (number === 1) {
            createDot(element, "dot-1");
        } else if (number === 2) {
            createDot(element, "dot-2");
            createDot(element, "dot-2");
        } else if (number === 3) {
            createDot(element, "dot-3");
            createDot(element, "dot-3");
            createDot(element, "dot-3");
        } else if (number === 4) {
            createDot(element, "dot-4");
            createDot(element, "dot-4");
            createDot(element, "dot-4");
            createDot(element, "dot-4");
        } else if (number === 5) {
            createDot(element, "dot-5");
            createDot(element, "dot-5");
            createDot(element, "dot-5");
            createDot(element, "dot-5");
            createDot(element, "dot-5");
        } else if (number === 6) {
            createDot(element, "dot-6");
            createDot(element, "dot-6");
            createDot(element, "dot-6");
            createDot(element, "dot-6");
            createDot(element, "dot-6");
            createDot(element, "dot-6");
        }
    }


    showDice(document.getElementById('player1-dice'), player1);
    showDice(document.getElementById('player2-dice'), player2);

   
    const winnerElement = document.getElementById('result');
    if (player1 > player2) {
        winnerElement.innerText = 'Player 1 Wins!';
        winnerElement.style.fontSize = "70px";
    } else if (player1 < player2) {
        winnerElement.innerText = 'Player 2 Wins!';
        winnerElement.style.fontSize = "70px";
    } else {
        winnerElement.innerText = 'It\'s a Draw!';
        winnerElement.style.fontSize = "70px";
    }
});
