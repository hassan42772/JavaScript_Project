let InputField = document.querySelector('#password');
let strength = document.querySelector('#strength');
let ShowButton = document.querySelector('.submit');
let passwordStrength = document.querySelector('#password-strength');
let icon = document.querySelector('.fa-eye');
let iconSlash = document.querySelector('.fa-eye-slash');
let passStrength = document.querySelector('.Password-strength');
let firstletter = document.querySelector('.first-letter');

InputField.addEventListener('input', function () {
    if (InputField.value.length > 0) {
        passwordStrength.style.display = 'block';

        if (InputField.value.length < 6) {
            strength.innerHTML = 'Weak';
            strength.style.color = 'red';
            ShowButton.style.top = '196px';
            InputField.style.border = '3px solid red';
            icon.style.color = 'red';
            iconSlash.style.color = 'red';
            passStrength.style.color = 'red';
            firstletter.style.color = 'red';
        }

        if (InputField.value.length <= 9 && InputField.value.length >= 6) {
            strength.innerHTML = 'Medium';
            strength.style.color = 'orange';
            ShowButton.style.top = '196px';
            InputField.style.border = '3px solid orange';
            icon.style.color = 'orange';
            iconSlash.style.color = 'orange';
            passStrength.style.color = 'orange';
            firstletter.style.color = 'orange';
        }

        if (InputField.value.length > 9) {
            strength.innerHTML = 'Strong';
            strength.style.color = 'green';
            ShowButton.style.top = '196px';
            InputField.style.border = '3px solid green';
            icon.style.color = 'green';
            iconSlash.style.color = 'green';
            passStrength.style.color = 'green';
            firstletter.style.color = 'green';
        }
    } else {
        passwordStrength.style.display = 'none';
        InputField.style.border = ''; // Reset border to default
    }
});


ShowButton.addEventListener('click', function () {
    if (InputField.type === 'password') {
        InputField.type = 'text';
        ShowButton.innerHTML = '<i class="fa-solid fa-eye"></i>';
       
    } else {
        InputField.type = 'password';
        ShowButton.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    
    }
});
