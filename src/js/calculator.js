// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//       this.previousOperandTextElement = previousOperandTextElement
//       this.currentOperandTextElement = currentOperandTextElement
//       this.clear()
//     }
  
//     clear() {
//       this.currentOperand = ''
//       this.previousOperand = ''
//       this.operation = undefined
//     }
  
//     delete() {
//       this.currentOperand = this.currentOperand.toString().slice(0, -1)
//     }
  
//     appendNumber(number) {
//       if (number === '.' && this.currentOperand.includes('.')) return
//       this.currentOperand = this.currentOperand.toString() + number.toString()
//     }
  
//     chooseOperation(operation) {
//       if (this.currentOperand === '') return
//       if (this.previousOperand !== '') {
//         this.compute()
//       }
//       this.operation = operation
//       this.previousOperand = this.currentOperand
//       this.currentOperand = ''
//     }
  
//     compute() {
//       let computation
//       const prev = parseFloat(this.previousOperand)
//       const current = parseFloat(this.currentOperand)
//       if (isNaN(prev) || isNaN(current)) return
//       switch (this.operation) {
//         case '+':
//           computation = prev + current
//           break
//         case '-':
//           computation = prev - current
//           break
//         case '*':
//           computation = prev * current
//           break
//         case '÷':
//           computation = prev / current
//           break
//         default:
//           return
//       }
//       this.currentOperand = computation
//       this.operation = undefined
//       this.previousOperand = ''
//     }
  
//     getDisplayNumber(number) {
//       const stringNumber = number.toString()
//       const integerDigits = parseFloat(stringNumber.split('.')[0])
//       const decimalDigits = stringNumber.split('.')[1]
//       let integerDisplay
//       if (isNaN(integerDigits)) {
//         integerDisplay = ''
//       } else {
//         integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
//       }
//       if (decimalDigits != null) {
//         return `${integerDisplay}.${decimalDigits}`
//       } else {
//         return integerDisplay
//       }
//     }
  
//     updateDisplay() {
//       this.currentOperandTextElement.innerText =
//         this.getDisplayNumber(this.currentOperand)
//       if (this.operation != null) {
//         this.previousOperandTextElement.innerText =
//           `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//       } else {
//         this.previousOperandTextElement.innerText = ''
//       }
//     }
//   }
  
  
//   const numberButtons = document.querySelectorAll('[data-number]')
//   const operationButtons = document.querySelectorAll('[data-operation]')
//   const equalsButton = document.querySelector('[data-equals]')
//   const deleteButton = document.querySelector('[data-delete]')
//   const allClearButton = document.querySelector('[data-all-clear]')
//   const previousOperandTextElement = document.querySelector('[data-previous-operand]')
//   const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
//   const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
//   numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       calculator.appendNumber(button.innerText)
//       calculator.updateDisplay()
//     })
//   })
  
//   operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       calculator.chooseOperation(button.innerText)
//       calculator.updateDisplay()
//     })
//   })
  
//   equalsButton.addEventListener('click', button => {
//     calculator.compute()
//     calculator.updateDisplay()
//   })
  
//   allClearButton.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
//   })
  
//   deleteButton.addEventListener('click', button => {
//     calculator.delete()
//     calculator.updateDisplay()
//   })
  
//   document.addEventListener('keydown', function (event) {
//     let patternForNumbers = /[0-9]/g;
//     let patternForOperators = /[+\-*\/]/g
//     if (event.key.match(patternForNumbers)) {
//       event.preventDefault();
//       calculator.appendNumber(event.key)
//       calculator.updateDisplay()
//     }
//     if (event.key === '.') {
//       event.preventDefault();
//       calculator.appendNumber(event.key)
//       calculator.updateDisplay()
//     }
//     if (event.key.match(patternForOperators)) {
//       event.preventDefault();
//       calculator.chooseOperation(event.key)
//       calculator.updateDisplay()
//     }
//     if (event.key === 'Enter' || event.key === '=') {
//       event.preventDefault();
//       calculator.compute()
//       calculator.updateDisplay()
//     }
//     if (event.key === "Backspace") {
//       event.preventDefault();
//       calculator.delete()
//       calculator.updateDisplay()
//     }
//     if (event.key == 'Delete') {
//       event.preventDefault();
//       calculator.clear()
//       calculator.updateDisplay()
//     }
  
//   });
// calculator version 1 -- the above commented code was my initial code that outputs the same result, but for this requirements, I'll have to go with the codes down below
class formatHours{
  constructor(_hours){
    this.Hrs = _hours;
    this.ampm = _hours;
  }

  amPm(){
    if(this.ampm > 12){
      return this.ampm = "P.M";
    }else if(this.ampm < 12 ){
      return this.ampm = `A.M`;
    }
  }

  format12(){
    if(this.Hrs >= 12){
      if(this.Hrs == 12){
        return this.Hrs;
      }
      else{
        return this.Hrs = this.Hrs - 12;
      }
    }else{
      if(this.Hrs == 0){
        return this.Hrs + 12;
      }else{
        return this.Hrs;
      }
    }
  }

}

function startMyTime() { 
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  if (m < 10) { 
      m = "0" + m;
  }
  if (s < 10) { 
      s = "0" + s;
  }


  let regular = new formatHours(h, m, s);
  let chosenFormat = document.getElementById('hourFormat').value;
  let regularHrs = regular.format12();
  let formatOfTime = regular.amPm();
  if(chosenFormat == "regular"){
      document.getElementById("display-time").innerHTML = `${regularHrs}:${m}:${s}`;
      document.getElementById('ampm').innerHTML = `${formatOfTime}`;
      t = setTimeout('startMyTime()', 500);
  }
  else{
      document.getElementById("display-time").innerHTML = `${h}:${m}:${s}`;
      document.getElementById('ampm').innerHTML = ``;
      t = setTimeout('startMyTime()', 500);
  }
}

class Calculator {
  constructor() {
    this.result = 0;
    this.calMem = [];
    this.operations = [];
    this.input = 0;
  }
  add(firstnum, secondnum) {
    return firstnum + secondnum;
  }

  subtract(firstnum, secondnum) {
    return firstnum - secondnum;
  }

  multiply(firstnum, secondnum) {
    return firstnum * secondnum;
  }

  divide(firstnum, secondnum) {
    return firstnum / secondnum;
  }

  getOperationResults() {
    return this.result;
  }

  displayResults() {
    this.getInput();

    this.calMem.push(parseInt(this.input));
    this.result = 0;
    for (let i = 0; i < this.calMem.length - 1; i++) {
      if (this.operations[i]) {
        switch (this.operations[i]) {
          case "+":
            this.calMem[i + 1] = this.add(this.calMem[i], this.calMem[i + 1]);
            break;
          case "-":
            this.calMem[i + 1] = this.subtract(
              this.calMem[i],
              this.calMem[i + 1]
            );
            break;
          case "*":
            this.calMem[i + 1] = this.multiply(
              this.calMem[i],
              this.calMem[i + 1]
            );
            break;
          case "/":
            this.calMem[i + 1] = this.divide(
              this.calMem[i],
              this.calMem[i + 1]
            );
            break;
        }
      }
    }

    document.getElementById("screen").value =
      this.calMem[this.calMem.length - 1];
    console.log(this.calMem[this.calMem.length - 1]);
    this.result = this.calMem[this.calMem.length - 1];
    this.calMem = [];
    this.operations = [];
    this.input = "";
  }

  getInput() {
    this.input = parseInt(document.getElementById("screen").value);
  }

  setCalculatorOperation(op) {
    this.getInput();
    this.calMem.push(parseInt(this.input));
    this.operations.push(op);
    document.getElementById("screen").value = "";
  }

  digitClicked(no) {
    console.log(no);
    document.getElementById("screen").value += no;
  }

  cls() {
    document.getElementById("screen").value = "";
    this.calMem = [];
    this.operations = [];
    this.input = "";
    this.result = 0;
  }
}

let calculator = new Calculator();

window.addEventListener("keypress", function (event) {
  var isNumber = isFinite(event.key);
  event.preventDefault();
  if (isNumber) {
    calculator.digitClicked(`${event.key}`);
  } else if (event.key == "Enter" || event.key == "=") {
    calculator.displayResults();
  } else if (
    event.key == "+" ||
    event.key == "-" ||
    event.key == "/" ||
    event.key == "*"
  ) {
    calculator.setCalculatorOperation(`${event.key}`);
  } else if (event.key == "C" || event.key == "c") {
    calculator.cls();
  }
});