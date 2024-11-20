// Parse the date from URL
const urlParams = new URLSearchParams(window.location.search);
const estimatedDate = urlParams.get('date');

if (estimatedDate) {
  document.getElementById('result-date').textContent = estimatedDate;
} else {
  document.getElementById('result-date').textContent = 'No data available.';
}

// Back button functionality
document.getElementById('back-button').addEventListener('click', () => {
  window.location.href = 'index.html';
});
