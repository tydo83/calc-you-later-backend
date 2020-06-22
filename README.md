# Calc You Later

### Introduction

Today we're going to be building the back end for a basic calculator. Don't worry, it's way easier than it sounds!


### Workflow

This is a test-driven app. You'll do all of your work in `calculate-back-end.js`, and within that file, you'll be making just one function, called `calculate`. Look at the tests in `calculate.test.js` for reference, as well as the test descriptions in your terminal.

### Tips and Tricks

* Note that the numbers are being passed in as strings, but the return value should be in numbers. What's more, some of the math may be funky if you try to do the math while they're still strings. Be sure to look into how to convert a string to a number in JavaScript!
* `if/else` chains and `switch` are good ways to check which operation you were passed. But whether you use those or another operation-checking method, you'll definitely want to branch your logic based on the contents of that string.
