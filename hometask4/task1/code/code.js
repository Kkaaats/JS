const Products = [
  //створюємо масив та виводимо його
  "tea",
  "coffee",
  "juice",
  "lemonade",
  "water",
  "cocoa",
  "milk",
  "cocktail",
];

document.write("Початковий масив: " + Products.join(" - ") + "<br><br>");

function fn(array) {
  //функція, яка приймає на вхід масив
  for (let i = 0; i <= array.length; i++) {
    //пробігаємо всі елементи від першого до останнього
    if ((i + 1) % 2 === 0) {
      // для парних колір жовтий (додала одиничку, щоб отримати парний індекс, бо перший індекс 0)
      document.write(array[i].fontcolor("yellow"));
    } else {
      //для непарних рожевий
      document.write(array[i].fontcolor("pink"));
    }
    document.write(" - ");
  }
}

function map(fn, array) {
  //функція де викликаємо функцію фн
  document.write("Модифікований масив: " + "</br>");
  fn(array);
}

map(fn, Products); //викликаємо функцію з нашим масивом
