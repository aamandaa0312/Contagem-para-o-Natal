// Christmas Countdown
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let christmasDate = new Date(currentYear, 11, 25); // December 25
    
    // If Christmas has passed this year, set for next year
    if (now > christmasDate) {
        christmasDate.setFullYear(currentYear + 1);
    }
    
    const diffInTime = christmasDate.getTime() - now.getTime();
    
    const days = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffInTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffInTime % (1000 * 60)) / 1000);
    
    // Add leading zeros
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // Add animation class
    const countdownItems = document.querySelectorAll('.countdown-item span:first-child');
    countdownItems.forEach(item => {
        item.classList.add('animate');
        setTimeout(() => item.classList.remove('animate'), 1000);
    });
}

// Initial call
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);

// Add snowflakes effect
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄';
    snowflake.style.position = 'fixed';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.top = '-20px';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.animationName = 'fall';
    snowflake.style.animationIterationCount = 'infinite';
    snowflake.style.animationTimingFunction = 'linear';
    snowflake.style.zIndex = '9999';
    snowflake.style.pointerEvents = 'none';
    document.body.appendChild(snowflake);
    
    // Remove snowflake after animation completes
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Create snowflakes periodically
setInterval(createSnowflake, 100);

// Add animation for falling snowflakes
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        to {
            transform: translateY(calc(100vh + 20px)) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);