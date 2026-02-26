const dobInput = document.getElementById('dobInput');
const calcBtn = document.getElementById('calcBtn');
const clearBtn = document.getElementById('clearBtn');
const resultDisplay = document.getElementById('resultDisplay');

calcBtn.addEventListener('click', () => {
    const birthDate = new Date(dobInput.value);
    const today = new Date();

    // Check if input is empty or invalid
    if (!dobInput.value || isNaN(birthDate.getTime())) {
        resultDisplay.innerText = "Please select a valid date.";
        return;
    }

    // Set both to midnight to avoid partial day errors
    birthDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // Difference in milliseconds divided by ms in a day (86,400,000)
    const diffInMs = today - birthDate;
    const daysLived = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (daysLived < 0) {
        resultDisplay.innerText = "Error: Birth date is in the future!";
    } else {
        resultDisplay.innerText = `You have lived for ${daysLived.toLocaleString()} days!`;
    }
});

clearBtn.addEventListener('click', () => {
    dobInput.value = "";
    resultDisplay.innerText = "---";
});

function end() {
    if (confirm("Are you sure you want to exit?")) {
        window.close();
        resultDisplay.innerText = "Session ended.";
    }
}