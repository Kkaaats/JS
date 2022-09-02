const styles = ["Джаз", "Блюз"]; //створити масив з елементами
document.write("<ul>" + "Styles: " + "<li>"); //виводимо початковий масив
let list = styles.join("</li> <li>");
document.write(list);
document.write("</li></ul>");
styles.push("Рок-н-ролл"); //додати елемент в кінець масиву
document.write(
  " 1. До Styles додали останній елемент Рок-н-ролл: " +
    styles.join(", ") +
    ";" +
    "<br>"
);
if (styles.length % 2 === 0) {
  styles[styles.length / 2] = "Классика";
} else {
  styles[(styles.length - 1) / 2] = "Классика";
}
document.write(
  "2. Змінили всередині значення на Классика: " +
    styles.join(", ") +
    ";" +
    "<br>"
);
//видалити перший елемент масиву та показати його
alert(styles.shift());
document.write(
  "3. Видалили перший елемент " + styles.join(", ") + ";" + "<br>"
);
styles.unshift("Рэп", "Регги");
document.write("<hr>");
document.write(
  "Кінцевий результат роботи з масивом: " + styles.join(", ") + "." + "<br>"
);
