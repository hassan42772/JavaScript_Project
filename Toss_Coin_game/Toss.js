let coin = document.querySelector('.coin');
let btn = document.querySelector('.button');
let result = document.querySelector('#result');
console.log(result);


btn.addEventListener('click', function() {
    
    coin.style.animation = 'flip 2s infinite linear';
    setTimeout(function() {
        let RandonNumber = Math.floor(Math.random() * 2);
        if(RandonNumber === 0) {
            result.innerHTML = 'HEADS';
        }
        else if(RandonNumber === 1) {
            result.innerHTML = 'TAILS'; 
        }
        coin.style.animation = '';
        btn.innerHTML = 'Flip Again';
    }, 4000);


});


