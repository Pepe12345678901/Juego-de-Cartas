// script.js
document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const winnerScreen = document.getElementById('winnerScreen');

    const numbers = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    numbers.sort(() => 0.5 - Math.random());

    let firstCard = null;
    let secondCard = null;
    let pairsFound = 0;

    function createCard(number) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.number = number;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    }

    function flipCard() {
        if (this === firstCard || this.classList.contains('flipped')) return;

        this.classList.add('flipped');
        this.textContent = this.dataset.number;

        if (!firstCard) {
            firstCard = this;
        } else {
            secondCard = this;
            checkMatch();
        }
    }

    function checkMatch() {
        if (firstCard.dataset.number === secondCard.dataset.number) {
            pairsFound++;
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            firstCard = null;
            secondCard = null;

            if (pairsFound === 6) {
                winnerScreen.style.display = 'block';
            }
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                firstCard.textContent = '';
                secondCard.textContent = '';
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    }

    numbers.forEach(createCard);
});