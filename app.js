// File: frontend/app.js
function selectOption(option) {
    document.getElementById('airtimeFields').classList.add('hidden');
    document.getElementById('dataFields').classList.add('hidden');
    document.getElementById('moneyFields').classList.add('hidden');
  
    if (option === 'airtime') {
      document.getElementById('airtimeFields').classList.remove('hidden');
    } else if (option === 'data') {
      document.getElementById('dataFields').classList.remove('hidden');
    } else if (option === 'money') {
      document.getElementById('moneyFields').classList.remove('hidden');
    }
  
    document.getElementById('selectedOption').value = option;
  }
  
  function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('giftForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  
    fetch('http://localhost:5000/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(result => {
      document.getElementById('responseMsg').innerText = result.message || 'Submitted!';
      form.reset();
    })
    .catch(err => {
      document.getElementById('responseMsg').innerText = 'Error submitting. Try again.';
      console.error(err);
    });
  }
  