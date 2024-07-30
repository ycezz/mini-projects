document.getElementById('workoutForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const exercise = document.getElementById('exercise').value;
    const duration = document.getElementById('duration').value;
    const date = document.getElementById('date').value;

    const workout = { exercise, duration, date };

    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));

    displayWorkouts();
});

function displayWorkouts() {
    const workoutList = document.getElementById('workoutList');
    workoutList.innerHTML = '';

    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.forEach(workout => {
        const li = document.createElement('li');
        li.textContent = `${workout.date}: ${workout.exercise} for ${workout.duration} minutes`;
        workoutList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', displayWorkouts);