const logItems = function (array) {
  elementNumber = 1;
  for (const elementName of array) {
    console.log(`${elementNumber} - ${elementName} `);
    elementNumber += 1;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(["Eugene", "Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
