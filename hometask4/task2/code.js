function checkAge(age) {
  //основний варіант
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}
checkAge(prompt("Ваш вік: ", "18"));

function checkAge(age) {
  //з оператором || (or)
  return age > 18 || confirm("Родители разрешили?"); //ставимо age на першому місці, бо цей оператор
  //перевіряє операнди зліва направа, і якщо перша умова виконується то до другої не доходимо
}
checkAge(prompt("Ваш вік: ", "18"));

function checkAge(age) {
  //з оператором ?
  return age > 18 ? true : confirm("Родители разрешили?"); //тут логіка схожа, перевіряємо спочатку
  //чи дорівнює перша умова тру, якщо ні то пропускаємо та переходимо до правого боку
}
checkAge(prompt("Ваш вік: ", "18"));
