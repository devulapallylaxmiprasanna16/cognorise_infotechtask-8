function calculateBMI() {
    // Get the input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid weight and height.';
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display the result
    document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
}
