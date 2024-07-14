// converter.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('converter-form');
    const resultArea = document.getElementById('result-area');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const usdValue = document.getElementById('usd-value').value;

        // Validate input
        if (usdValue === '') {
            resultArea.textContent = 'Please enter amount';
            return;
        }
        if (isNaN(usdValue)) {
            resultArea.textContent = 'Please enter a valid number';
            return;
        }

        const usdAmount = parseFloat(usdValue);
        const conversionRate = 83.50; // Example conversion rate, can be updated with real-time API

        const inrAmount = usdAmount * conversionRate;

        resultArea.textContent = `Converted Amount: ₹${inrAmount.toFixed(2)}`;
    });

    // Add rollover effect
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('mouseover', function () {
            input.style.backgroundColor = '#555';
        });
        input.addEventListener('mouseout', function () {
            input.style.backgroundColor = '#444';
        });
    });
});
