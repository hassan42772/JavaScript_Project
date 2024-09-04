

const scriptURL = 'https://script.google.com/macros/s/AKfycbwcC_WSkrG8Y-bsJEHzmA5MWC9YiMHK7865GRJF1bthgZ9d5SLO1pbclF7pYgAqiRGs/exec'
const form = document.forms['submit-to-google-sheet']
let msg = document.querySelector('.sheet-1')
let emailField = document.querySelector('.email')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Thanks for subscribing!";
        emailField.value = "";
        setInterval(() => {
            msg.innerHTML = "";
        }, 3000);
    })
    .catch(error => console.error('Error!', error.message))
})