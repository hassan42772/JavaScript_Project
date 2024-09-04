let value1 = document.querySelector('.value1');

let value3 = document.querySelector('.value3');
;
let value5 = document.querySelector('.value5');

function cryptoValue() {
   
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd', options)
        .then(response => response.json())
        .then(data => {
            value1.innerHTML = data.bitcoin.usd;
            value3.innerHTML = data.ethereum.usd;
            value5.innerHTML = data.dogecoin.usd;
        })
        .catch(error => console.log(error));
}

cryptoValue();