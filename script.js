// Confetti effect
const confettiContainer = document.getElementById('confetti');
const colors = ['#ff0', '#ff69b4', '#00ffff', '#adff2f', '#ffa500'];
const numConfetti = 100;

for (let i = 0; i < numConfetti; i++) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti-piece');
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.top = Math.random() * -100 + 'vh';
  const size = Math.random() * 8 + 4;
  confetti.style.width = size + 'px';
  confetti.style.height = size + 'px';
  confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
  confetti.style.animationDelay = Math.random() * 2 + 's';
  confettiContainer.appendChild(confetti);
}

// Popup functionality for the ID and address fields
const idInput = document.getElementById('id');
const addressInput = document.getElementById('address');
const understandBtn = document.getElementById('understandBtn');
const understandBtn2 = document.getElementById('understandBtn2');

idInput.addEventListener('click', function() {
  document.getElementById('idWarningPopup').style.display = 'block';
});

addressInput.addEventListener('click', function() {
  document.getElementById('addressWarningPopup').style.display = 'block';
});

understandBtn.addEventListener('click', function() {
  document.getElementById('idWarningPopup').style.display = 'none';
});

understandBtn2.addEventListener('click', function() {
  document.getElementById('addressWarningPopup').style.display = 'none';
});
