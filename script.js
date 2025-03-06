// Select elements from the DOM
const workoutForm = document.getElementById("workout-form");
const workoutList = document.getElementById("workout-list");
const exerciseInput = document.getElementById("exercise");
const setsInput = document.getElementById("sets");
const repsInput = document.getElementById("reps");

// Event listener for the form submission
workoutForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get input values
    const exercise = exerciseInput.value;
    const sets = setsInput.value;
    const reps = repsInput.value;

    // Create a new list item for the log
    const workoutItem = document.createElement("li");
    workoutItem.textContent = `${exercise}: ${sets} sets of ${reps} reps`;

    // Append the new workout to the list
    workoutList.appendChild(workoutItem);

    // Clear the input fields
    exerciseInput.value = "";
    setsInput.value = "";
    repsInput.value = "";
});
