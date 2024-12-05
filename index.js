const calendarContainer = document.getElementById('calendar');
const giftMessage = document.getElementById("gift-message");

const randomGifts = [
  { icon: '🍿', text: 'Your gift is a tub of popcorn!' },
  { icon: '🍷', text: 'Your gift is a glass of wine!' },
  { icon: '🍫', text: 'Your gift is a bar of chocolate!' },
  { icon: '🎧', text: 'Your gift is a pair of headphones!' },
  { icon: '📚', text: 'Your gift is a book!' },
  { icon: '🎨', text: 'Your gift is an art kit!' },
  { icon: '🍪', text: 'Your gift is a cookie!' },
  { icon: '☕', text: 'Your gift is a cup of coffee!' },
  { icon: '🍩', text: 'Your gift is a donut!' },
  { icon: '🧸', text: 'Your gift is a teddy bear!' },
  { icon: '🎁', text: 'Your gift is a mystery box!' },
  { icon: '🍎', text: 'Your gift is an apple!' },
  { icon: '🏀', text: 'Your gift is a basketball!' },
  { icon: '🎸', text: 'Your gift is a guitar!' },
  { icon: '🚲', text: 'Your gift is a bicycle!' },
  { icon: '🎶', text: 'Your gift is a music album!' },
  { icon: '🎮', text: 'Your gift is a video game!' },
  { icon: '🍕', text: 'Your gift is a slice of pizza!' },
  { icon: '🧦', text: 'Your gift is a pair of socks!' },
  { icon: '💎', text: 'Your gift is a diamond!' },
  { icon: '🌟', text: 'Your gift is a shining star!' },
  { icon: '🚀', text: 'Your gift is a toy rocket!' },
  { icon: '🕹️', text: 'Your gift is a joystick!' },
  { icon: '🥇', text: 'Your gift is a gold medal!' }
];


for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  let number = document.createElement('p');
  number.innerHTML = i;
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('p');
  description.innerHTML = "Open me!";

  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);

  box.addEventListener('click', function() {
    let christmasGifts = randomGifts[Math.floor(Math.random() * randomGifts.length)];
    giftMessage.innerHTML = `${christmasGifts.text}`;
    box.style.backgroundColor = 'white';
    description.innerHTML = `Opened! ${christmasGifts.icon}`;
    box.style.pointerEvents = 'none';
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  calendarContainer.appendChild(box);
}
