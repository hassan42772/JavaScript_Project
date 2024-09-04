let blackshirt = document.querySelector('.item1');
let whiteshirt = document.querySelector('.item2');
let blueshirt = document.querySelector('.item3');
let redshirt = document.querySelector('.item4');
let image = document.querySelector('.product-image');

let selectblackshirt = document.querySelector('.black');
let selectwhiteshirt = document.querySelector('.red');
let selectblueshirt = document.querySelector('.blue');
let selectredshirt = document.querySelector('.white');

console.log(selectblackshirt);
console.log(selectwhiteshirt);
console.log(selectblueshirt);
console.log(selectredshirt);


blackshirt.addEventListener('click', () => {
  image.src = 'BlackShirt.png';
});

whiteshirt.addEventListener('click', () => {    
  image.src = 'RedShirt.png';
});

blueshirt.addEventListener('click', () => {
  image.src = 'BlueShirt.png';
})

redshirt.addEventListener('click', () => {
    image.src = 'WhiteShirt.png';
});

selectblackshirt.addEventListener('click', () => {

    selectblackshirt.style.border = '2px solid white';
    selectwhiteshirt.style.border = 'none';
    selectblueshirt.style.border = 'none';
    selectredshirt.style.border = 'none';

});

selectwhiteshirt.addEventListener('click', () => {  
    selectwhiteshirt.style.border = '2px solid white';
    selectblackshirt.style.border = 'none';
    selectblueshirt.style.border = 'none';
    selectredshirt.style.border = 'none';
}
);

selectblueshirt.addEventListener('click', () => {       
    selectblueshirt.style.border = '2px solid white';
    selectblackshirt.style.border = 'none';
    selectwhiteshirt.style.border = 'none';
    selectredshirt.style.border = 'none';
});

selectredshirt.addEventListener('click', () => {
    selectredshirt.style.border = '2px solid black';
    selectblackshirt.style.border = 'none';
    selectwhiteshirt.style.border = 'none';
    selectblueshirt.style.border = 'none';
});