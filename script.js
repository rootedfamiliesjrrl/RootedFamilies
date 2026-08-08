const menuButton=document.getElementById('menuButton');
const navigation=document.getElementById('navigation');

menuButton.addEventListener('click',()=>{
  const open=navigation.classList.toggle('open');
  menuButton.classList.toggle('active',open);
  menuButton.setAttribute('aria-expanded',String(open));
  document.body.classList.toggle('menu-open',open);
});

document.querySelectorAll('#navigation a').forEach(link=>{
  link.addEventListener('click',()=>{
    navigation.classList.remove('open');
    menuButton.classList.remove('active');
    menuButton.setAttribute('aria-expanded','false');
    document.body.classList.remove('menu-open');
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.1});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('bookingForm').addEventListener('submit',event=>{
  event.preventDefault();

  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const date=document.getElementById('date').value;
  const hours=document.getElementById('hours').value;
  const type=document.getElementById('type').value;
  const message=document.getElementById('message').value.trim();

  const subject=encodeURIComponent('Rooted Families Booking Request - '+name);
  const body=encodeURIComponent(`Hello Rooted Families,

I would like to request a photography session.

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Preferred Date: ${date}
Session Length: ${hours}
Session Type: ${type}

Session Details:
${message || 'Not provided'}

I understand that a $30 security deposit is required and that all fees and security deposits are final and non-refundable.

Thank you.`);

  window.location.href='mailto:rootedfamiliesjrrl@gmail.com?subject='+subject+'&body='+body;
});

document.getElementById('year').textContent=new Date().getFullYear();
