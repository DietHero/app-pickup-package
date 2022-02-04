import { inputCode, inputError, inputNumber, buttonPickUp } from "./script.js";

export const searchValue = function () {
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
            inputError.style.display = 'block';
        }
    }
}

export default searchValue