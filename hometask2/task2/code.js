document.write("Порожній прямокутник: " + "<br>");
const data = prompt("Введіть число");
for (let i = 0; i < data; i++) {
  {
    for (let j = 0; j < data; j++) {
      if (i === 0 || i === data - 1) {
        document.write("*");
      } else {
        if (j === 0 || j === data - 1) {
          document.write("*");
        } else {
          document.write("&nbsp;&nbsp;");
        }
      }
    }
  }
  document.write("<br>");
}

document.write("Трикутник: " + "<br>");
const side = prompt("Введіть число");
if (side < 0) {
  side = prompt("Введіть число", "0");
}
for (let i = 0; i < side; i++) {
  for (let j = 0; j < i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

document.write("Ромб: " + "<br>");
const num = prompt("Введіть число");
for (let i = 0; i <= num; i++) {
  for (let j = 0; j <= side - i; j++) {
    document.write("&nbsp;&nbsp;");
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    document.write("*");
  }
  document.write("<br>");
}
for (let i = num; i >= 0; i--) {
  //тепер цикл в зворотній бік, коли вже наш лічильник досягає
  //максимального значення то робимо теж саме поки він не дійде до нуля
  for (let j = 0; j <= side - i; j++) {
    document.write("&nbsp;&nbsp;");
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    document.write("*");
  }
  document.write("<br>");
}
