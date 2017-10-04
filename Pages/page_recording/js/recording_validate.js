var firstName, phone, selectedCar, validateButton, elem, checkForm, fail;
  firstName = document.getElementsByClassName('car')[0];
  phone = document.getElementsByClassName('phone')[0];
  selectedCar = document.getElementsByClassName('content__cars')[0];
  validateButton = document.getElementsByClassName('content__form_confirm')[0];
  checkForm = document.getElementsByClassName('content__form_radiobutton')[0];
  elem = document.createElement('div');

var namePattern, phonePattern;
  namePattern = /[а-яё]{3,12}/i;
  phonePattern =/[0-9]{12}/;

  validateButton.addEventListener('click', validate);

function validate(){
  if(namePattern.test(firstName.value) == false){
      fail = "Неверное имя.";
      firstName.parentNode.appendChild(elem);
  } else if(phonePattern.test(phone.value) == false){
      fail = "Неправильный номер.";
      phone.parentNode.appendChild(elem);
  } else if (selectedCar.options.selectedIndex == 0){
      fail = "Автомобиль не выбран.";
      selectedCar.parentNode.appendChild(elem);
  }
  else if(!!document.querySelector(".content__radio_repair:checked") == false){
      fail = "Выберите вид ремонта.";
      checkForm.appendChild(elem);
  }
      if(fail){
        errorShow()
    }
}

function errorShow() {
    elem.innerHTML = fail;
    elem.style.fontSize = '14px';
    elem.style.backgroundColor = '#fa8b7a';
    elem.style.width = '105px';
    elem.style.borderRadius = '3px';
    elem.style.float = 'right';
    elem.style.margin = '5px 0 0 10px';
}
