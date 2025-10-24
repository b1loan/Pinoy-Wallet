
// scripts.js - mobile-first interactivity
(function(){
  // currency fall generator
  const symbols = ['₱','$','€','£','¥','₽'];
  const container = document.getElementById('currency-fall');
  if(container){
    for(let i=0;i<20;i++){
      const el = document.createElement('div');
      el.className='currency';
      el.style.left = Math.random()*100 + '%';
      el.style.fontSize = (12 + Math.random()*26) + 'px';
      el.style.animationDuration = (6 + Math.random()*8) + 's';
      el.style.opacity = 0.8;
      el.textContent = symbols[Math.floor(Math.random()*symbols.length)];
      el.style.transform = 'translateY(-10vh)';
      container.appendChild(el);
    }
  }

  // calculator
  const calcBtn = document.getElementById('calcBtn');
  const amountInput = document.getElementById('amount');
  const calcResult = document.getElementById('calcResult');
  calcBtn && calcBtn.addEventListener('click', function(){
    const val = Number(amountInput.value || 0);
    if(!val || val<=0){ calcResult.textContent = 'Please enter an amount greater than 0.'; return; }
    const proc = 0.594/100;
    const plat = 0.612/100;
    const fee = +(val * (proc + plat)).toFixed(2);
    const net = +(val - fee).toFixed(2);
    calcResult.textContent = `Total = ₱${val.toLocaleString()} → Fee = ₱${fee.toLocaleString()} → You Receive ₱${net.toLocaleString()}`;
  });

  // start now button: move to login
  const startNow = document.getElementById('startNow');
  startNow && startNow.addEventListener('click', function(){
    location.href = '#login';
  });

  // login "continue" collects fields and opens payment as a placeholder
  const loginBtn = document.getElementById('loginBtn');
  loginBtn && loginBtn.addEventListener('click', function(){
    // gather form values and validate minimally
    const wallet = document.getElementById('walletNumber').value.trim();
    const gmail = document.getElementById('gmail').value.trim();
    const first = document.getElementById('first').value.trim();
    const last = document.getElementById('last').value.trim();
    if(!wallet || !gmail || !first || !last){
      alert('Please fill at least Wallet number, Gmail, First and Last name.');
      return;
    }
    // Redirect to payment page (external) - opens in a new tab
    window.open('https://www.paypal.com/ncp/payment/26F4WX6TFQ4DY','_blank','noopener');
    alert('You will be redirected to the payment provider in a new tab. Follow the prompts there to complete payment.');
  });

})();
