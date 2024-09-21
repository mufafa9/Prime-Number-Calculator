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
        inputField.value = parseInt(inputField.value || 0) - 1;
    }

    // Enter key to check if the number is prime
    if (event.key === "Enter") {
        checkPrime();
    }
});

function checkPrime() {
    let num = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

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
