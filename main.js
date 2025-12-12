let slides = document.querySelectorAll('.carousel-slide');
let current = 0;

document.querySelector('.next').addEventListener('click', ()=>{
  slides[current].classList.remove('active');
  current = (current+1) % slides.length;
  slides[current].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', ()=>{
  slides[current].classList.remove('active');
  current = (current-1 + slides.length) % slides.length;
  slides[current].classList.add('active');
});

// auto-slide
setInterval(()=>{
  slides[current].classList.remove('active');
  current = (current+1) % slides.length;
  slides[current].classList.add('active');
}, 4000);

  document.querySelectorAll('.field input, .field textarea').forEach(el=>{
    // add placeholder to enable :placeholder-shown detection
    if(!el.placeholder) el.placeholder = " ";
  });

  // simple validation + action
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name, email = form.email, message = form.message;
    let ok = true;
    [name, email, message].forEach(f=>{
      f.classList.remove('invalid');
      if(!f.value.trim()) { f.classList.add('invalid'); ok = false; }
    });

    if(!ok){
      note.textContent = 'Please fill all fields.';
      return;
    }

    // here you can send the data with fetch/ajax or show success
    note.textContent = 'Message sent — we will contact you soon! شكراً ❤️';
    form.reset();
  });

  // WhatsApp quick order (example number)
  document.getElementById('waBtn').addEventListener('click', ()=>{
    // replace number with your real one if needed
    const number = '212622633779';
    window.open(`https://wa.me/${number}`, '_blank');
  });

 const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

