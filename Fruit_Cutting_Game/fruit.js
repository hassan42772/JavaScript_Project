let randomImg1 = document.querySelector("#image1");
let randomImg2 = document.querySelector("#image2");
let randomImg3 = document.querySelector("#image3");
let randomImg4 = document.querySelector("#image4");
let randomImg5 = document.querySelector("#image5");
let randomImg6 = document.querySelector("#image6");
let randomImg7 = document.querySelector("#image7");
let randomImg8 = document.querySelector("#image8");
let randomImg9 = document.querySelector("#image9");
let btn = document.querySelectorAll("button");
let img = document.querySelectorAll("img");
let timer;
let random;
let random1;
let random2;
let random3;
let random4;
let random5;
let random6;
let random7;
let random8;
let randomNumber;
let score = 0;
random = setInterval(() => {
    randomNumber = Math.floor(Math.random() * 10) + 1;
}, 6000);

img.forEach((button) => {
    button.addEventListener("click", myFunction);
    function myFunction() {
        // if (button.src.includes("Apple-removebg-preview.png") || button.src.includes("banana-removebg-preview.png") || button.src.includes("cherry-removebg-preview.png") || button.src.includes("mango-removebg-preview.png") || button.src.includes("Orange.png") || button.src.includes("pineapple-removebg-preview.png") || button.src.includes("strabery-removebg-preview.png") || button.src.includes("watermellon-removebg-preview (2).png")) {
        //     button.src = "images/wow-removebg-preview.png";
        //     score += 1;
        // }
        if (button.src.includes("Apple-removebg-preview.png")) {
            button.src = "images/wow-removebg-preview.png";
            score += 1;
        }
        else if(button.src.includes("banana-removebg-preview.png")) {
            button.src = "images/wow-removebg-preview.png";
            score += 1;
        }
        else if(button.src.includes("cherry-removebg-preview.png")) {
            button.src = "images/wow-removebg-preview.png"; 
            score += 1;
        }
        else if(button.src.includes("mango-removebg-preview.png")) {
            button.src = "images/wow-removebg-preview.png";
            score += 1;
        }
        else if(button.src.includes("Orange.png")) {
            button.src = "images/wow-removebg-preview.png";
            score += 1;
        }
        else if(button.src.includes("pineapple-removebg-preview.png")) {
            button.src = "images/wow-removebg-preview.png";
            score += 1;
        }
        else if(button.src.includes("strabery-removebg-preview.png")) {
            button.src = "images/wow-removebg-preview.png";
            score += 1;
        }
        else if(button.src.includes("watermellon-removebg-preview.png")) {
            button.src = "images/wow-removebg-preview.png";
            score += 1;
        }

        else if(button.src.includes("boom-removebg-preview.png")) {
            btn.forEach((button) => {
                button.style.animationPlayState = "paused";
            });
            button.src = "images/boom2-removebg-preview.png";
            clearInterval(random1);
            clearInterval(random2);
            clearInterval(random3);
            clearInterval(random4);
            clearInterval(random5);
            clearInterval(random6);
            clearInterval(random7);
            clearInterval(random8);
            let newdiv = document.createElement("div");
            newdiv.innerHTML = `<h1>Game Over</h1>
                    <p>You Score: ${score}</p>
                    <button onclick="location.reload()">Play Again</button>`;
            newdiv.classList.add("newdiv");
            document.body.appendChild(newdiv);
        }
    }
});

random = setInterval(() => {
    if (randomNumber === 1) {
        randomImg1.src = `images/Apple-removebg-preview.png`;
    } else if (randomNumber === 2) {
        randomImg1.src = `images/Banana-removebg-preview.png`;
    } else if (randomNumber === 3) {
        randomImg1.src = `images/cherry-removebg-preview.png`;
    } else if (randomNumber === 4) {
        randomImg1.src = `images/mango-removebg-preview.png`;
    } else if (randomNumber === 5) {
        randomImg1.src = `images/Orange.png`;
    } else if (randomNumber === 6) {
        randomImg1.src = `images/pineapple-removebg-preview.png`;
    } else if (randomNumber === 7) {
        randomImg1.src = `images/strabery-removebg-preview.png`;
    } else if (randomNumber === 8) {
        randomImg1.src = `images/watermellon-removebg-preview.png`;
    } else if (randomNumber === 9) {
        randomImg1.src = `images/boom-removebg-preview.png`;
    } else if (randomNumber === 10) {
        randomImg1.src = `images/boom-removebg-preview.png`;
    }
}, 5100);

random2 = setInterval(() => {
    timer = 3000;

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === 1) {
        randomImg2.src = `images/Apple-removebg-preview.png`;
    } else if (randomNumber === 2) {
        randomImg2.src = `images/Banana-removebg-preview.png`;
    } else if (randomNumber === 3) {
        randomImg2.src = `images/cherry-removebg-preview.png`;
    } else if (randomNumber === 4) {
        randomImg2.src = `images/mango-removebg-preview.png`;
    } else if (randomNumber === 5) {
        randomImg2.src = `images/Orange.png`;
    } else if (randomNumber === 6) {
        randomImg2.src = `images/pineapple-removebg-preview.png`;
    } else if (randomNumber === 7) {
        randomImg2.src = `images/strabery-removebg-preview.png`;
    } else if (randomNumber === 8) {
        randomImg2.src = `images/watermellon-removebg-preview.png`;
    } else if (randomNumber === 9) {
        randomImg2.src = `images/boom-removebg-preview.png`;
    } else if (randomNumber === 10) {
        randomImg2.src = `images/boom-removebg-preview.png`;
    }
}, 3000);
random1 = setInterval(() => {
    timer = 5200;

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === 1) {
        randomImg3.src = `images/Apple-removebg-preview.png`;
    } else if (randomNumber === 2) {
        randomImg3.src = `images/Banana-removebg-preview.png`;
    } else if (randomNumber === 3) {
        randomImg3.src = `images/cherry-removebg-preview.png`;
    } else if (randomNumber === 4) {
        randomImg3.src = `images/mango-removebg-preview.png`;
    } else if (randomNumber === 5) {
        randomImg3.src = `images/Orange.png`;
    } else if (randomNumber === 6) {
        randomImg3.src = `images/pineapple-removebg-preview.png`;
    } else if (randomNumber === 7) {
        randomImg3.src = `images/strabery-removebg-preview.png`;
    } else if (randomNumber === 8) {
        randomImg3.src = `images/watermellon-removebg-preview.png`;
    } else if (randomNumber === 9) {
        randomImg3.src = `images/boom-removebg-preview.png`;
    } else if (randomNumber === 10) {
        randomImg3.src = `images/boom-removebg-preview.png`;
    }
}, 5200);
random3 = setInterval(() => {
    timer = 5300;

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === 1) {
        randomImg4.src = `images/Apple-removebg-preview.png`;
    } else if (randomNumber === 2) {
        randomImg4.src = `images/Banana-removebg-preview.png`;
    } else if (randomNumber === 3) {
        randomImg4.src = `images/cherry-removebg-preview.png`;
    } else if (randomNumber === 4) {
        randomImg4.src = `images/mango-removebg-preview.png`;
    } else if (randomNumber === 5) {
        randomImg4.src = `images/Orange.png`;
    } else if (randomNumber === 6) {
        randomImg4.src = `images/pineapple-removebg-preview.png`;
    } else if (randomNumber === 7) {
        randomImg4.src = `images/strabery-removebg-preview.png`;
    } else if (randomNumber === 8) {
        randomImg4.src = `images/watermellon-removebg-preview.png`;
    } else if (randomNumber === 9) {
        randomImg4.src = `images/boom-removebg-preview.png`;
    } else if (randomNumber === 10) {
        randomImg4.src = `images/boom-removebg-preview.png`;
    }
}, 5000);
random4 = setInterval(() => {
    timer = 5300;

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === 1) {
        randomImg5.src = `images/Apple-removebg-preview.png`;
    } else if (randomNumber === 2) {
        randomImg5.src = `images/Banana-removebg-preview.png`;
    } else if (randomNumber === 3) {
        randomImg5.src = `images/cherry-removebg-preview.png`;
    } else if (randomNumber === 4) {
        randomImg5.src = `images/mango-removebg-preview.png`;
    } else if (randomNumber === 5) {
        randomImg5.src = `images/Orange.png`;
    } else if (randomNumber === 6) {
        randomImg5.src = `images/pineapple-removebg-preview.png`;
    } else if (randomNumber === 7) {
        randomImg5.src = `images/strabery-removebg-preview.png`;
    } else if (randomNumber === 8) {
        randomImg5.src = `images/watermellon-removebg-preview.png`;
    } else if (randomNumber === 9) {
        randomImg5.src = `images/boom-removebg-preview.png`;
    } else if (randomNumber === 10) {
        randomImg5.src = `images/boom-removebg-preview.png`;
    }
}, 5500);
random5 = setInterval(() => {
    timer = 3000;

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === 1) {
        randomImg6.src = `images/Apple-removebg-preview.png`;
    } else if (randomNumber === 2) {
        randomImg6.src = `images/Banana-removebg-preview.png`;
    } else if (randomNumber === 3) {
        randomImg6.src = `images/cherry-removebg-preview.png`;
    } else if (randomNumber === 4) {
        randomImg6.src = `images/mango-removebg-preview.png`;
    } else if (randomNumber === 5) {
        randomImg6.src = `images/Orange.png`;
    } else if (randomNumber === 6) {
        randomImg6.src = `images/pineapple-removebg-preview.png`;
    } else if (randomNumber === 7) {
        randomImg6.src = `images/strabery-removebg-preview.png`;
    } else if (randomNumber === 8) {
        randomImg6.src = `images/watermellon-removebg-preview.png`;
    } else if (randomNumber === 9) {
        randomImg6.src = `images/boom-removebg-preview.png`;
    } else if (randomNumber === 10) {
        randomImg6.src = `images/boom-removebg-preview.png`;
    }
}, 3000);
random6 = setInterval(() => {
    timer = 4300;

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === 1) {
        randomImg7.src = `images/Apple-removebg-preview.png`;
    } else if (randomNumber === 2) {
        randomImg7.src = `images/Banana-removebg-preview.png`;
    } else if (randomNumber === 3) {
        randomImg7.src = `images/cherry-removebg-preview.png`;
    } else if (randomNumber === 4) {
        randomImg7.src = `images/mango-removebg-preview.png`;
    } else if (randomNumber === 5) {
        randomImg7.src = `images/Orange.png`;
    } else if (randomNumber === 6) {
        randomImg7.src = `images/pineapple-removebg-preview.png`;
    } else if (randomNumber === 7) {
        randomImg7.src = `images/strabery-removebg-preview.png`;
    } else if (randomNumber === 8) {
        randomImg7.src = `images/watermellon-removebg-preview.png`;
    } else if (randomNumber === 9) {
        randomImg7.src = `images/boom-removebg-preview.png`;
    } else if (randomNumber === 10) {
        randomImg7.src = `images/boom-removebg-preview.png`;
    }
}, 4000);
random7 = setInterval(() => {
    timer = 3800;

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === 1) {
        randomImg8.src = `images/Apple-removebg-preview.png`;
    } else if (randomNumber === 2) {
        randomImg8.src = `images/Banana-removebg-preview.png`;
    } else if (randomNumber === 3) {
        randomImg8.src = `images/cherry-removebg-preview.png`;
    } else if (randomNumber === 4) {
        randomImg8.src = `images/mango-removebg-preview.png`;
    } else if (randomNumber === 5) {
        randomImg8.src = `images/Orange.png`;
    } else if (randomNumber === 6) {
        randomImg8.src = `images/pineapple-removebg-preview.png`;
    } else if (randomNumber === 7) {
        randomImg8.src = `images/strabery-removebg-preview.png`;
    } else if (randomNumber === 8) {
        randomImg8.src = `images/watermellon-removebg-preview.png`;
    } else if (randomNumber === 9) {
        randomImg8.src = `images/boom-removebg-preview.png`;
    } else if (randomNumber === 10) {
        randomImg8.src = `images/boom-removebg-preview.png`;
    }
}, 3580);
random8 = setInterval(() => {
    timer = 3000;

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber === 1) {
        randomImg9.src = `images/Apple-removebg-preview.png`;
    } else if (randomNumber === 2) {
        randomImg9.src = `images/Banana-removebg-preview.png`;
    } else if (randomNumber === 3) {
        randomImg9.src = `images/cherry-removebg-preview.png`;
    } else if (randomNumber === 4) {
        randomImg9.src = `images/mango-removebg-preview.png`;
    } else if (randomNumber === 5) {
        randomImg9.src = `images/Orange.png`;
    } else if (randomNumber === 6) {
        randomImg9.src = `images/pineapple-removebg-preview.png`;
    } else if (randomNumber === 7) {
        randomImg9.src = `images/strabery-removebg-preview.png`;
    } else if (randomNumber === 8) {
        randomImg9.src = `images/watermellon-removebg-preview.png`;
    } else if (randomNumber === 9) {
        randomImg9.src = `images/boom-removebg-preview.png`;
    } else if (randomNumber === 10) {
        randomImg9.src = `images/boom-removebg-preview.png`;
    }
}, 3000);
