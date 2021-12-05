var calc = {
  number1: 0,
  number2: 0,

  res: 0,

  sum: function () {
    s += this.number1 + this.number2;
    return s;
  },
  div: function () {
    d = this.number1 / this.number2;
    return d;
  },
  mul: function () {
    m = this.number1 * this.number2;
    return m;
  },
  diff: function () {
    di = this.number1 - this.number2;
    return di;
  },
};
var result; // declaration of the variable.
const operator = prompt(
  "Enter operator to perform the calculation ( either +, -, * or / ): "
);
switch (operator) {
  case "+":
    var n1 = parseFloat(prompt("Enter the first number: "));
    var n2 = parseFloat(prompt("Enter the second number: "));
    calc.number1 = n1;
    calc.number2 = n2;
    calc.res = calc.sum();
    // display the result of the Calculator
    window.alert(" Result is " + calc.res);
    break;
  case "-":
    var n1 = parseFloat(prompt("Enter the first number: "));
    var n2 = parseFloat(prompt("Enter the second number: "));
    calc.number1 = n1;
    calc.number2 = n2;
    calc.res = calc.diff();
    // display the result of the Calculator
    window.alert(" Result is " + calc.res);
    break;

  case "*":
    var n1 = parseFloat(prompt("Enter the first number: "));
    var n2 = parseFloat(prompt("Enter the second number: "));
    calc.number1 = n1;
    calc.number2 = n2;
    calc.res = calc.mul();
    // display the result of the Calculator
    window.alert(" Result is " + calc.res);
    break;
  case "/":
    var n1 = parseFloat(prompt("Enter the first number: "));
    var n2 = parseFloat(prompt("Enter the second number: "));
    calc.number1 = n1;
    calc.number2 = n2;
    calc.res = calc.div();
    // display the result of the Calculator
    window.alert(" Result is " + calc.res);
    break;
  default:
    window.alert("The operator is invalid");
    break;
}








