/******************
 * YOUR CODE HERE *
 ******************/
const calculate = function(num1, num2, operator) {
  if(operator === '+' || operator === 'plus' || operator === 'added to') {
    return Number(num1) + Number(num2);
  } 
  else if(operator === '-' || operator === 'minus' || operator === 'subtracted from') {
    return Number(num1) - Number(num2);
  }
  else if(operator.toLowerCase() === 'x' || operator === 'times' || operator === 'multiplied by') {
    return Number(num1) * Number(num2);
  }
  else if(operator === '/' || operator === 'divided by') {
    return Number(num1) / Number(num2);
  }
  else if(operator === '%' || operator === 'modulus' || operator === 'mod') {
    return Number(num1) % Number(num2);
  }
  else {
    return `Sorry, that's not a mathematical operation!`;
  }
}

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;