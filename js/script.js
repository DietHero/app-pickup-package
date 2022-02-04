const inputNumber = document.querySelector('.input__phone')
const inputCode = document.querySelector('.input__code')
const inputError = document.querySelector('.screen__second-error')
const buttonStart = document.querySelector('.button__start')
const buttonPickUp = document.querySelector('.button__pick-up')
const buttonNext = document.querySelector('.button__next')
const buttonFinish = document.querySelector('.button__finish')
const firstScreen = document.querySelector('.screen__first')
const secondScreen = document.querySelector('.screen__second')
const thirdScreen = document.querySelector('.screen__third')
const form = document.querySelector('form')

const arr = [
    {
        number: "505000000",
        code: "3333",
    },
    {
        number: "505111111",
        code: "4444",
    },
    {
        number: "505222222",
        code: "5555",
    }
]

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


form.addEventListener('input',
    () => {
        var valueNumber = inputNumber.value;
        var valueCode = inputCode.value;

        for (var i = 0; i<arr.length; i++) {
            var singleNumber = arr[i].number
            var singleCode = arr[i].code
            if (singleNumber == valueNumber && singleCode  == valueCode) {
                buttonPickUp.disabled = false;
                inputError.style.display = 'none';
                break;
            }
            else {
                buttonPickUp.disabled = true;
                inputError.style.display = 'block'
            }
        }

        })


        buttonStart.addEventListener(
            'click', () => {

                firstScreen.style.display = 'none'
                secondScreen.style.display = 'block'
                thirdScreen.style.display = 'none'
            }
        )

        buttonPickUp.addEventListener(
            'click', () => {

                firstScreen.style.display = 'none'
                secondScreen.style.display = 'none'
                thirdScreen.style.display = 'block'
            }
        )

        buttonNext.addEventListener(
            'click', () => {

                firstScreen.style.display = 'none'
                secondScreen.style.display = 'block'
                thirdScreen.style.display = 'none'
                inputNumber.value = ''
                inputCode.value = ''
            }
        )

        buttonFinish.addEventListener(
            'click', () => {

                firstScreen.style.display = 'block'
                secondScreen.style.display = 'none'
                thirdScreen.style.display = 'none'
                inputNumber.value = ''
                inputCode.value = ''
            }
        )



