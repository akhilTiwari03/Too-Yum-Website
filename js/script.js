let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
}

function loader(){
   document.querySelector('.loader').style.display = 'none';
}

function fadeOut(){
   setInterval(loader, 2000);
}

window.onload = fadeOut;

function abc() {
   let name = document.getElementById('name').value;
   let number = document.getElementById('number').innerHTML;
   let email = document.getElementById('email').innerHTML;
   let msg = document.getElementById('msg').innerHTML;
   if(name !="" && number != null && email != null  && msg != null) {
   
      alert("Thanks for Contacting Us! We'll get back  to you shortly.");
   }
   else {
      alert("Please Fill the complete details!");
   }
}