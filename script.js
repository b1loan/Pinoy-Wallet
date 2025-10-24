// Mobile-first interactive behavior
(function(){
  const loginModal = document.getElementById('loginModal');
  const openLogin = document.getElementById('openLogin');
  const closeLogin = document.getElementById('closeLogin');
  const cancelLogin = document.getElementById('cancelLogin');
  const startNow = document.getElementById('startNow');
  const loginForm = document.getElementById('loginForm');
  const amountInput = document.getElementById('amount');
  const displayTotal = document.getElementById('displayTotal');
  const displayFee = document.getElementById('displayFee');
  const displayNet = document.getElementById('displayNet');

  function showModal(){
    loginModal.setAttribute('aria-hidden','false');
  }
  function hideModal(){
    loginModal.setAttribute('aria-hidden','true');
  }
  openLogin.addEventListener('click', showModal);
  startNow.addEventListener('click', showModal);
  closeLogin.addEventListener('click', hideModal);
  cancelLogin.addEventListener('click', hideModal);

  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    // simple form capture demo — replace with real backend integration
    const data = new FormData(loginForm);
    const obj = {};
    for(const [k,v] of data.entries()) obj[k]=v;
    alert('Proceeding to payment...\n(REMOVE ALERT IN PRODUCTION)\n' + JSON.stringify(obj,null,2));
    // in production, redirect to your secure flow
    hideModal();
  });

  // Calculator logic using the precise fees you provided
  const processingRate = 0.00594; // 0.594%
  const platformRate = 0.00612; // 0.612%
  function compute(amount){
    const totalFee = amount * (processingRate + platformRate);
    const net = amount - totalFee;
    return {total: amount, fee: totalFee, net: net};
  }
  function formatPHP(n){
    return '₱' + Number.parseFloat(n || 0).toLocaleString('en-PH',{minimumFractionDigits:2,maximumFractionDigits:2});
  }
  amountInput.addEventListener('input', function(){
    const val = parseFloat(this.value.replace(/[^0-9.]/g,'')) || 0;
    const out = compute(val);
    displayTotal.textContent = formatPHP(out.total);
    displayFee.textContent = formatPHP(out.fee);
    displayNet.textContent = formatPHP(out.net);
  });

  // Falling currency animation generator
  const symbols = ['₱','$','€','£','¥','₽'];
  const container = document.getElementById('currency-fall');
  function spawn(){
    const el = document.createElement('div');
    el.className='coin';
    el.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    const size = 14 + Math.random()*18;
    el.style.fontSize = size + 'px';
    el.style.left = (Math.random()*100) + 'vw';
    el.style.opacity = 0.5 + Math.random()*0.6;
    el.style.animationDuration = (4 + Math.random()*6) + 's';
    el.style.animationDelay = (Math.random()*-6) + 's';
    container.appendChild(el);
    // remove after animation
    setTimeout(()=> el.remove(), 12000);
  }
  // spawn a few and then interval
  for(let i=0;i<12;i++) spawn();
  setInterval(spawn, 900);

  // Ensure PayPal link opens new tab (already set in HTML), but attach safe noopener
  const paypal = document.getElementById('paypalLink');
  if(paypal) paypal.setAttribute('rel','noopener noreferrer');

  // Accessibility: close modal on ESC
  document.addEventListener('keydown', function(e){
    if(e.key==='Escape') hideModal();
  });

  // Prevent non-mobile from showing heavy animation (desktop hidden anyway)
  function isMobile(){
    return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
  }
  if(!isMobile()){
    // remove animations to save CPU
    container.innerHTML = '';
  }
})();
