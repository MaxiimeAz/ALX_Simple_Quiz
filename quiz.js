function checkAnswer() {
    var correctAnswer = "4"; // The correct answer
    var selectedAnswer = document.querySelector('input[name="quiz"]:checked'); // Get selected radio button
    
    var userAnswer; // Declare the variable for user's answer
    if (selectedAnswer) {
        userAnswer = selectedAnswer.value; // Store the user's answer
    } else {
        document.getElementById("feedback").textContent = "Please select an answer."; // Handle no selection
        return; // Exit the function
    }

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done."; // Correct answer
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!"; // Incorrect answer
    }
}

// Add event listener to the Submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
