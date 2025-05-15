// script.js
const facts = [
    "کلمه «قهوه» از واژه عربی «قَهْوَة» گرفته شده است.",
    "دانه‌های قهوه در واقع بذر میوه‌ای به نام «چری قهوه» هستند.",
    "فنلاند به ازای هر نفر بیشترین قهوه را در جهان مصرف می‌کند.",
    "اکسپرسو از لحاظ حجم کافئین کمتری نسبت به قهوهٔ فیلتری دارد.",
    "روزانه بیش از ۲٫۲۵ میلیارد فنجان قهوه در جهان مصرف می‌شود."
  ];
  
  const factBtn = document.getElementById('factBtn');
  const factDisplay = document.getElementById('factDisplay');
  
  factBtn.addEventListener('click', () => {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    factDisplay.textContent = fact;
    factDisplay.classList.remove('hidden');
  });
  
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('ممنون از پیام شما! به زودی پاسخ می‌دهیم.');
    e.target.reset();
  });
  
  document.getElementById('subscribeForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('شما مشترک شدید! منتظر اخبار باشید.');
    e.target.reset();
  });
  