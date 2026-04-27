const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    // Calculate degrees for each hand
    // 0 degrees is straight up (12 o'clock position)

    // Second hand: 360 degrees / 60 seconds = 6 degrees per second
    // Add milliseconds for super smooth second hand movement
    const secondDegrees = (seconds * 6) + (milliseconds * (6 / 1000));

    // Minute hand: 360 degrees / 60 minutes = 6 degrees per minute
    // Add (seconds * 0.1) for minute hand to move smoothly between minute marks
    const minuteDegrees = (minutes * 6) + (seconds * 0.1) + (milliseconds * (0.1 / 1000));

    // Hour hand: 360 degrees / 12 hours = 30 degrees per hour
    // Use hours % 12 for 12-hour format
    // Add (minutes * 0.5) for hour hand to move smoothly between hour marks
    // Add (seconds * (0.5 / 60)) for second hand influence
    const hourDegrees = ((hours % 12) * 30) + (minutes * 0.5) + (seconds * (0.5 / 60)) + (milliseconds * (0.5 / (60 * 1000)));

    // Apply transformations
    // The translateX(-50%) must be combined with the rotate() to maintain centering
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

// Initial call to set the clock to the current time immediately
updateClock();
// Update the clock every millisecond for continuous, smooth animation
setInterval(updateClock, 1);