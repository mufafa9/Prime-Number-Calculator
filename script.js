document.getElementById("numberInput").addEventListener("keydown", function(event) {
    let inputField = document.getElementById("numberInput");

    // Arrow Up to increase the number
    if (event.key === "ArrowUp") {
        event.preventDefault();
        inputField.value = parseInt(inputField.value || 0) + 1;
    }

    // Arrow Down to decrease the number
    if (event.key === "ArrowDown") {
        event.preventDefault();
        inputField.value = Math.max(0, parseInt(inputField.value || 0) - 1); // Prevent negative numbers
    }

    // Enter key to check if the number is prime
    if (event.key === "Enter") {
        checkPrime();
    }
});

/**
 * Checks if the number in the input field is a prime number.
 * If the number is a prime number, the result element's innerHTML is set to the number and the phrase "is a prime number!".
 * If the number is not a prime number, the result element's innerHTML is set to the number and the phrase "is not a prime number.".
 * Input validation is performed: if the number is not a number, the result element's innerHTML is set to "Please enter a valid number.".
 * If the number is less than 2, the result element's innerHTML is set to the number and the phrase "is not a prime number.".
 * The function uses a for loop to check all numbers up to the square root of the number to see if the number is divisible by any of them.
 * If the number is divisible by any of the numbers, the function sets a variable to false and breaks out of the loop.
 * If the number is not divisible by any of the numbers, the function sets a variable to true.
 * The function then checks the value of the variable and sets the result element's innerHTML accordingly.
 */
function checkPrime() {
    let num = parseInt(document.getElementById("numberInput").value);
    let result = document.getElementById("result");

    // Input validation
    if (isNaN(num)) {
        result.innerHTML = "Please enter a valid number.";
        return;
    }

    if (num < 2) {
        result.innerHTML = num + " is not a prime number.";
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.innerHTML = num + " is a prime number!";
    } else {
        result.innerHTML = num + " is not a prime number.";
    }
}
