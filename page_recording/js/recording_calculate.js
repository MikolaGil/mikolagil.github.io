var selectedCar, repairType, button, client, testButton;
    selectedCar = document.getElementsByClassName('content__cars')[0];
    repairType = document.getElementsByClassName('content__radio_repair');
    button = document.getElementsByClassName('content__form_confirm')[0];
    testButton = document.getElementById('test');


testButton.addEventListener('click', alertt);
function alertt() {
    client = {
        car: carInfo(),
        coefficient: coefficientValue(),
        repairType: selectedRepair(),
        repairPrice: repairPrice()
        // dateOfRepair: spentTime()
    };
    console.log(client);
}

function carInfo() {
  var index = selectedCar.options.selectedIndex;
    switch (index){
      case 1 : car = "Mercedes";
        break;
      case 2 : car = "BMW";
        break;
      case 3 : car = "Mazda";
        break;
      case 4 : car = "Opel";
        break;
      case 5 : car = "Nissan";
        break;
        default: car = " ";
  }
  return car;
}

function coefficientValue() {
    var car = carInfo();
    if (car === 'Mercedes'){
        coefficient = 1.5;
    } else if (car === 'BMW'){
        coefficient = 2;
    } else if (car === 'Mazda'){
        coefficient = 2.5;
    } else if (car === 'Opel'){
        coefficient = 3;
    } else if (car === 'Nissan'){
        coefficient = 3.5;
    } else {
        coefficient = 1;
    }
    return coefficient;
}

function selectedRepair() {
        var repairChosen = typeOfRepair();
    switch (repairChosen){
        case 1 : repair = "Диагностика и ремонт двигателя";
            break;
        case 2 : repair = "Диагностика и ремонт подвески";
            break;
        case 3 : repair = "Замена масла и фильтров";
            break;
        case 4 : repair = "Электроника";
            break;
        case 5 : repair = "Ремонт кузова";
            break;
        case 6 : repair = "Шиномонтаж";
            break;
        default: repair = "Не выбран";
    }
    return repair;
}

function repairPrice() {
    var repair = selectedRepair();
    if (repair === 'Диагностика и ремонт двигателя'){
        repairPrice = 1.5;
    } else if (repair === 'Диагностика и ремонт подвески'){
        repairPrice = 2;
    } else if (repair === 'Замена масла и фильтров'){
        repairPrice = 2.5;
    } else if (repair === 'Электроника'){
        repairPrice = 3;
    } else if (repair === 'Ремонт кузова'){
        repairPrice = 3.5;
    } else if (repair === 'Шиномонтаж'){
        repairPrice = 4;
    } else {
        repairPrice = 1;
    }
    return repairPrice;
}

function typeOfRepair() {
    for (i = 0; i < repairType.length; i++) {
        if (repairType[i].checked) {
            var repairSelected = i + 1;
        }
    }
    return repairSelected;
}
///////////////////Current day for calendar
var now, day, month, year, today, date;
    date = document.getElementsByClassName('calendar')[0];
    now = new Date();
    day = now.getDate();
    month = now.getMonth() + 1;
    year = now.getFullYear();
    today = year + "-" + month + "-0" + day;

window.addEventListener('DOMContentLoaded', dateCurrentMin);
function dateCurrentMin() {
    date.min = today;
    date.value = today;
    return today
}
//////////////Price for express repair
function spentTime() {
    var repairDay = date.value.split("-")[2];
    if (day >= repairDay - 1 ){
        dayPrice = 1.3;
    }else {
        dayPrice = 1;
    }
    return dayPrice
}

function calculate(a, b, c) {
    var totalSum = client.dayPrice * client.repairPrice * client.Car * 10;
   return price;
}
