const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phn_no = document.getElementById('no').value;
  const subject = document.getElementById('sub').value;
  const message = document.getElementById('message').value;


let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec =>{
      let top = window.scrollY;
      let offset = sec.offsetHeight;
      let id = sec.getAttribute(id);

      if(top >= offset && top < offset + height){
          navlinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a [href*=' + id +']').classList.add('active')
          }

          )
      }
  })
}




menuicon.onclick = () => {
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

  // Send form data to server (replace with your server-side logic)
  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email,no,sub, message })
  })
  .then(response => {
    // Handle response from server
    console.log(response);

    // Display success message or error message to user
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });

});

