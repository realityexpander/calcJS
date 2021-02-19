    /* We set the clear value. */
    function onClear() {
      calculator.display.value = "";
    }
    /* We set the decimal value. */
    function onPoint() {
      calculator.display.value += ".";
    }
    /* We set the plus value. */
    function onPlus() {
      calculator.display.value += "+";
    }
    /* We set the minus value. */
    function onMinus() {
      calculator.display.value += "-";
    }
    /* We set the multiply value.*/
    function onTimes() {
      calculator.display.value += "*";
    }
    /* We set the divide value. */
    function onDivide() {
      calculator.display.value += "/";
    }
    /* We set the equal value */
    function onResult() {
      calculator.display.value = eval(calculator.display.value);
    }
    /* We set the value of the number of 0 */
    function onZero() {
      calculator.display.value += "0";
    }
    /* We set the value of the number of 1 */
    function onOne() {
      calculator.display.value += "1";
    }
    /* We set the value of the number of 2 */
    function onTwo() {
      calculator.display.value += "2";
    }
    /* We set the value of the number of 3 */
    function onThree() {
      calculator.display.value += "3";
    }
    /* We set the value of the number of 4 */
    function onFour() {
      calculator.display.value += "4";
    }
    /* We set the value of the number of 5 */
    function onFive() {
      calculator.display.value += "5";
    }
    /* We set the value of the number of 6 */
    function onSix() {
      calculator.display.value += "6";
    }
    /* We set the value of the number of 7 */
    function onSeven() {
      calculator.display.value += "7";
    }
    /* We set the value of the number of 8 */
    function onEight() {
      calculator.display.value += "8";
    }
    /* We set the value of the number of 9 */
    function onNine() {
      calculator.display.value += "9";
    }