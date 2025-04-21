

const game = {
    targetNumber: null,
    attempts: 0,
    
    init() {
        this.targetNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
        this.updateMessage('');
    },
    
    makeGuess(guess) {
        this.attempts++;
        
        if (guess === this.targetNumber) {
            this.updateMessage(`Congratulations! You got it in ${this.attempts} tries!`, 'success');
            return true;
        }
        
        const hint = guess > this.targetNumber ? 'Too high!' : 'Too low!';
        this.updateMessage(hint);
        return false;
    },
    
    updateMessage(text, type = '') {
        const messageEl = document.getElementById('message');
        messageEl.textContent = text;
        messageEl.className = type;
    }
};

// Event Handlers
function handleGuess() {
    const input = document.getElementById('guess');
    const guess = parseInt(input.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        game.updateMessage('Please enter a valid number between 1 and 100');
        return;
    }
    
    game.makeGuess(guess);
    input.value = '';
    input.focus();
}

function resetGame() {
    game.init();
    document.getElementById('guess').value = '';
}

// Initialize game on load
game.init();