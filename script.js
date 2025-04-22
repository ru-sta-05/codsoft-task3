let expression = '';

function appendNumber(number) {
  expression += number;
  document.getElementById('result').value = expression;
}

function appendOperator(operator) {
  expression += operator;
  document.getElementById('result').value = expression;
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    const result = new Function('return ' + expression)();
    document.getElementById('result').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

document.addEventListener('keydown', (e) => {
  const resultField = document.getElementById('result'); 
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    expression += e.key;
    resultField.value = expression;
  } else if (e.key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (e.key === 'Backspace') {
    expression = expression.slice(0, -1);
    resultField.value = expression;
  } else if (e.key === 'Escape') {
    clearResult();
  }
});
