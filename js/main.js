const winningSeries = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

const tictactoes = Array.from(document.querySelectorAll('.tictactoe'));
const winner = document.querySelector('.winner');

let player = undefined;

const btn = document.querySelector('.start');
btn.addEventListener('click', () => {
    tictactoes.forEach(item => {
        item.textContent = '';
        item.classList.remove('winner');
    });
    
    player = 'X';
});

tictactoes.forEach(item => item.addEventListener('click', function(){
    if(this.textContent==='' && player){
        this.textContent = player;
        let winnerSeries = evaluateGame();
        if(winnerSeries > -1){  // game over
            winningSeries[winnerSeries].forEach(item => tictactoes[item].classList.add('winner'));
            winner.textContent = tictactoes[winningSeries[winnerSeries][0]].textContent;
            player = undefined;
        }
        else
            player = player==='X'? 'O': 'X';    // change player
    }
}));

function evaluateGame(){
    return winningSeries.findIndex(item => '' !== item
                                        .map(item => tictactoes[item].textContent)
                                        .reduce((prev, curr) => prev!==curr? '': prev)
                                    );
}