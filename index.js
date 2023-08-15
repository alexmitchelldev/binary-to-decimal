const binaryNumberInput = document.getElementById("binary-number-input");
const isValidCheck = document.getElementById("is-valid-check");
const isNotValidCross = document.getElementById("is-not-valid-cross");
const textToFade = document.getElementById("textToFade");
const resultText = document.getElementById("result-text");

const convertBinaryToDecimal = () => {
    const number = binaryNumberInput.value;
    const isValidBinaryNumber = /^[0-1]*$/;
    let errorMessage;

    if (!number || !isValidBinaryNumber.test(number)) {
        errorMessage = (!isValidBinaryNumber.test(number)) ? `Invalid binary number.<br>A binary number must only be comprised of 1s and 0s.` : `No number entered.<br>Please enter the binary number you wish to convert.`; 
        binaryNumberInput.value = null;
        displayResult(null, null, errorMessage);
        return;
    }

    let decimal = 0;
    let currentIndex;
    let position = 0;
    
    for (let i = number.length; i > 0; i--) {
        currentIndex = i - 1;

        if (number[currentIndex] === '1') {
            decimal += Math.pow(2, position);
        }
        
        position++;
    }
    
    displayResult(number, decimal);
    return;
}

const displayResult = (number, decimal, error) => {
    resultText.innerHTML = error ? error : `The decimal conversion of the binary number <strong>${number}</strong> is: ${decimal}`;
    textToFade.classList.add("fade-in");
    return;
}

binaryNumberInput.addEventListener("input", () => {
    if (binaryNumberInput.validity.valid) {
        isValidCheck.style.display = "inline";
        isNotValidCross.style.display = "none";
    } else {
        isValidCheck.style.display = "none";
        isNotValidCross.style.display = "inline";
    }

    resultText.innerHTML = null;
    textToFade.classList.remove("fade-in");
});