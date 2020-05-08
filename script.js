const email = document.querySelector('#email');
const errorImg = document.querySelector('.error');
const btn = document.querySelector('button');
const msg = document.querySelector('.message');

function checkEmail() {
  let characterCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!characterCheck.test(email.value)) {
    errorImg.classList.add('showError');
    email.classList.add('errBorder');
    msg.classList.add('errorP');

    setTimeout(() => {
      errorImg.classList.remove('showError');
      email.classList.remove('errBorder');
      msg.classList.remove('errorP');
    }, 3000);
  } else {
    email.value = '';
  }
}

btn.addEventListener('click', checkEmail);
