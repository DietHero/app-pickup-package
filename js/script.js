import searchValue from "./searchValue.js"

export const inputNumber = document.querySelector('.input__phone')
export const inputCode = document.querySelector('.input__code')
export const inputError = document.querySelector('.screen__second-error')
const buttonStart = document.querySelector('.button__start')
export const buttonPickUp = document.querySelector('.button__pick-up')
const buttonNext = document.querySelector('.button__next')
const buttonFinish = document.querySelector('.button__finish')
const firstScreen = document.querySelector('.screen__first')
const secondScreen = document.querySelector('.screen__second')
const thirdScreen = document.querySelector('.screen__third')
const form = document.querySelector('form')



inputNumber.oninput = function () {
    if (this.value.length > 9) {
        this.value = this.value.slice(0, 9);
    }
}
inputCode.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
}

form.addEventListener(
    'input',
    searchValue
)

buttonStart.addEventListener(
    'click', () => {


        firstScreen.style.display = 'none';
        secondScreen.style.display = 'block';
        thirdScreen.style.display = 'none';
    }
)

buttonPickUp.addEventListener(
    'click', () => {
        buttonPickUp.disabled = true;
        buttonPickUp.innerHTML = '<i class="fa fa-spinner fa-spin"></i>'
        setTimeout(function () {
            buttonPickUp.disabled = false;
            firstScreen.style.display = 'none';
            secondScreen.style.display = 'none';
            thirdScreen.style.display = 'block';
        }, 1000)
    }
)

buttonNext.addEventListener(
    'click', () => {

        firstScreen.style.display = 'none';
        secondScreen.style.display = 'block';
        thirdScreen.style.display = 'none';
        inputNumber.value = '';
        inputCode.value = '';
        buttonPickUp.disabled = true;
        buttonPickUp.innerHTML = 'Odbierz paczkę'
        buttonPickUp.style.opacity = '50%'
    }
)

buttonFinish.addEventListener(
    'click', () => {

        firstScreen.style.display = 'block';
        secondScreen.style.display = 'none';
        thirdScreen.style.display = 'none';
        inputNumber.value = '';
        inputCode.value = '';
        buttonPickUp.disabled = true;
        buttonPickUp.innerHTML = 'Odbierz paczkę'
        buttonPickUp.style.opacity = '50%'
    }
)
