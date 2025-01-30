function updateTime() {
    const utcElement = document.querySelector('.utc-time');
    const now = new Date();
    const utcTime = now.toUTCString();
    utcElement.textContent = `Current UTC Time: ${utcTime}`;
}

// Update UTC time every second
setInterval(updateTime, 1000);

// Initialize time on page load
updateTime();
