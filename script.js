document.getElementById('generateBtn').addEventListener('click', generatePanNumber);

function generatePanNumber() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    if (!firstName || !lastName) {
        alert('Please enter both first and last names.');
        return;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';

    let panNumber = '';

    // First 3 characters are letters
    for (let i = 0; i < 3; i++) {
        panNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // 4th character is the first letter of the last name
    panNumber += lastName.charAt(0).toUpperCase();

    // Next 4 characters are digits
    for (let i = 0; i < 4; i++) {
        panNumber += nums.charAt(Math.floor(Math.random() * nums.length));
    }

    // Last character is a letter
    panNumber += chars.charAt(Math.floor(Math.random() * chars.length));

    document.getElementById('panNumber').textContent = panNumber;
}
