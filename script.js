document.getElementById('estimate-button').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const dateInput = document.getElementById('date').value;
  
    if (isNaN(num1) || isNaN(num2) || !dateInput) {
      alert('Please fill out all fields correctly.');
      return;
    }
  
    // Calculate the average of the two numbers
    const average = (num1 + num2) / 2;
  
    // Subtract the average from the provided date
    const inputDate = new Date(dateInput);
    const estimatedDate = new Date(inputDate.setDate(inputDate.getDate() - average));
  
    // Redirect with query parameters
    window.location.href = `result.html?date=${estimatedDate.toISOString().split('T')[0]}`;
  });
  