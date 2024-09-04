let imgbox = document.querySelector('.Main-container');
let orginal = document.querySelector('.img-container');
let orginalImg = document.querySelector('.orginalImg');
let arrowButton = document.querySelector('.arrow');

console.log(orginalImg)

orginal.style.width = imgbox.offsetWidth + 'px';
let letspace = imgbox.offsetLeft;
console.log(imgbox.offsetWidth);
console.log(imgbox.offsetLeft)
orginalImg.style.width = imgbox.offsetWidth + 'px'; 
imgbox.addEventListener('mousemove', (e) => {
    let boxwidth = (e.pageX - letspace) + 'px';
    orginal.style.width = boxwidth;
    arrowButton.style.left = boxwidth;
});