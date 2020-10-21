/******************
 * YOUR CODE HERE *
 ******************/

const calculate = function(num1, num2, operator) {
  let result = 0;
  if(operator === '+' || operator === 'plus' || operator === 'added to') {
    result = Number(num1) + Number(num2);
  } 
  else if(operator === '-' || operator === 'minus' || operator === 'subtracted from') {
    result = Number(num1) - Number(num2);
  }
  else if(operator.toLowerCase() === 'x' || operator === 'times' || operator === 'multiplied by') {
    result = Number(num1) * Number(num2);
  }
  else if(operator === '/' || operator === 'divided by') {
    result = Number(num1) / Number(num2);
  }
  else if(operator === '%' || operator.startsWith('mod')) {
    result = Number(num1) % Number(num2);
  }
  else {
    result = `Sorry, that's not a mathematical operation!`;
  }
  return result;
}

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;