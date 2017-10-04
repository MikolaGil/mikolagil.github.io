var firstName = document.getElementsByClassName('name')[0],
  phone = document.getElementsByClassName('phone')[0],
  content = document.getElementsByClassName('content__form_division')[0];

  firstName.addEventListener('click', addElement);
  phone.addEventListener('click', addElement);

  function addElement() {
    this.nextElementSibling.style.display == 'block' ?
      this.nextElementSibling.style.display = '' :
      this.nextElementSibling.style.display = 'block';
  }

