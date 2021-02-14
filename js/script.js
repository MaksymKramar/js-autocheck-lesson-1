// Задача 1
const productName = 'Дроид';
const pricePerItem = 2000;  
// console.log(productName);
// 'Дроид'

// console.log(pricePerItem);
// 2000

// Задача 2
// Базовый код
let productName = 'Дроид';
let pricePerItem = 2000;
// Пиши код ниже этой строки
productName = 'Ремонтный дроид';
pricePerItem = 3500;

// Задача 3
const topSpeed = 160;
const distance = 617.54;
const login ='mango935';
const isOnline = true;
const isAdmin = false;

// Задача 4
// Базовый код
const pricePerItem = 3500;
const orderedQuantity = 4;

// Пиши код ниже этой строки
const totalPrice = pricePerItem * orderedQuantity;

// Задача 5
// Базовый код
const productName = 'Дроид';
const pricePerItem = 3500;

// Пиши код ниже этой строки
const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;

// Задача 6
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

// Задача 7
// Пиши код ниже этой строки
function sayHi(){console.log('Привет, это моя первая функция!');}
sayHi();

// Задача 8
// Пиши код ниже этой строки
function add(a,b,c) {
  console.log(`Результат сложения равен ${a+b+c}`);
  // Пиши код выше этой строки
}
  
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// Задача 9
function add(a, b, c) {
  //  Пиши код ниже этой строки
  return a+b+c;
  
  
//  Пиши код выше этой строки
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// Задача 10
function makeMessage (name, price) {
  // Пиши код ниже этой строки
   const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
  // Пиши код выше этой строки
  return message;
};

// Задача 11
function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Пиши код ниже этой строки
  const totalPrice = orderedQuantity * pricePerItem;

  // Пиши код выше этой строки
  return totalPrice;
};

// Задача 12
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Пиши код ниже этой строки

message = `Вы заказали дроидов на сумму ${orderedQuantity*pricePerDroid+deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

  // Пиши код выше этой строки
  return message;
}

// Задача 13
function isAdult(age) {
  // Пиши код ниже этой строки
  const passed = age >= 18;

  // Пиши код выше этой строки
  return passed;
}

// Задача 14
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
  const isMatch = SAVED_PASSWORD === password;

  // Пиши код выше этой строки
  return isMatch;
}

// Задача 15
function checkAge(age) {
  let message;

  if (age >= 18) { // Дополни эту строку
    message = 'Вы совершеннолетний человек';
  } else {
    message = 'Вы не совершеннолетний человек';
  }

  return message;
}

// Задача 16
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
if (ordered > available) { message = 'На складе недостаточно товаров!';} else { message =  'Заказ оформлен, с вами свяжется менеджер';}
  // Пиши код выше этой строки
  return message;
}

// Задача 17
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Пиши код ниже этой строки
a += 2;
b -= 4;
c *= 3;
d /= 10;

// Задача 18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Пиши код ниже этой строки
  let totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) { message = 'Недостаточно средств на счету!'; } else { message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`;}
  // Пиши код выше этой строки
  return message;
}

// Задача 19
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Дополни эту строку
    message =  'Отменено пользователем!';
  } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}

// Задача 20
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
if(ordered === 0) {message = 'В заказе еще нет товаров';} else if (ordered > available) {message = 'Слишком большой заказ, на складе недостаточно товаров!';} else {message = 'Заказ оформлен, с вами свяжется менеджер';}
  // Пиши код выше этой строки
  return message;
}

// Задача 21
function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // дополни эту строку

  return isInRange;
}

// Задача 22
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку

  return canAccessContent;
}

// Задача 23
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Дополни эту строку

  return isNotInRange;
}

// Задача 24
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Пиши код ниже этой строки
if (totalSpent >= 50000){discount = GOLD_DISCOUNT;} else if (totalSpent >= 20000 && totalSpent < 50000) {discount = SILVER_DISCOUNT;} else if (totalSpent >= 5000 && totalSpent < 20000) {discount = BRONZE_DISCOUNT;} else {discount = BASE_DISCOUNT;}
  // Пиши код выше этой строки
  return discount;
}

// Задача 25
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки

  message = ordered > available ? 'На складе недостаточно товаров!':'Заказ оформлен, с вами свяжется менеджер';


  // Пиши код выше этой строки
  return message;
}

// Задача 26
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Пиши код ниже этой строки
message = password === ADMIN_PASSWORD ? 'Доступ разрешен' : 'Доступ запрещён, неверный пароль!';
  // Пиши код выше этой строки
  return message;
}

// Задача 27
function getSubscriptionPrice(type) {
  let price;
  // Пиши код ниже этой строки

 switch (type) { // Дополни эту строку
    case 'starter': // Дополни эту строку
      price = 0; // Дополни эту строку
      break;

    case 'professional': // Дополни эту строку
      price = 20; // Дополни эту строку
      break;

    case 'organization': // Дополни эту строку
      price = 50; // Дополни эту строку
      break;
  }

  // Пиши код выше этой строки
  return price;
}

// Задача 28
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case null:
       message = 'Отменено пользователем!';
      break;
    case ADMIN_PASSWORD:
       message = 'Добро пожаловать!';
      break;
  
    default:
      message = 'Доступ запрещён, неверный пароль!';
      break;
  }

  return message;
}

// Задача 29
function getShippingCost(country) {
  let message;
  // Пиши код ниже этой строки
switch (country) {
  case 'Китай' :
    message = `Доставка в ${'Китай'} будет стоить ${100} кредитов`;
    break;
  case 'Чили' :
    message = `Доставка в ${'Чили'} будет стоить ${250} кредитов`;
    break;
  case 'Австралия' :
    message = `Доставка в ${'Австралия'} будет стоить ${170} кредитов`;
    break;
  case 'Ямайка' :
    message = `Доставка в ${'Ямайка'} будет стоить ${120} кредитов`;
    break;

  default:
    message = 'Извините, в вашу страну доставки нет';
    break;
}
  // Пиши код выше этой строки
  return message;
}

// Задача 30
function getNameLength(name) {
  const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

  return message;
}


// Задача 31
const courseTopic = 'JavaSript для начинающих';
// Пиши код ниже этой строки

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
// Последняя буква так рассчитывается
const lastElement = courseTopic[courseTopic.length - 1]; 


// Пиши код выше этой строки

// Задача 32
function getSubstring(string, length) {
   const substring = string.slice(0, length); // Дополни эту строку


  return substring;
}

// Задача 33
function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
if (message.length <= maxLength ){result = `${message}`
} else {result =  message.slice(0, maxLength)  +  `...`};
// Пиши код выше этой строки
  return result;
}

// Задача 34
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
}

// Задача 35
function checkForName(fullName, name) {
 const result = fullName.includes(name); // Дополни эту строку
  return result;
}

// Задача 36
function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  const normalizedMessage = message.toLowerCase();
 result = (normalizedMessage.includes('spam') || normalizedMessage.includes('sale'));
 
  // Пиши код выше этой строки
  return result;
}
