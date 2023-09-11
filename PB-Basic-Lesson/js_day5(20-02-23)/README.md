# Logical Operator

## Are of three type:- 

### && And operator 
### || or operator
### ! not operator

### &&(and) operator table
| a  | b | result |
| ------------- | ------------- | ------------- |
| true  | true  | true  |
| true  | false  | false |
| false  | true  | false  |
| false  | false  | false |

### Example 
```python
logical And
console.log(true && true); // true
console.log(true && false); // false
```

### || (or) operator table
| a  | b | result |
| ------------- | ------------- | ------------- |
| true  | true  | true  |
| true  | false  | true |
| false  | true  | true  |
| false  | false  | false |

### Example 
```python
logical Or
console.log(true || true); // true
console.log(true || false); // true
```

### ! (not) operator table
| a  | result | 
| ------------- | ------------- | 
| true  | false  |  
| false  | true  |  

### Example
```python
logical NOT
console.log(!true); // false
```

## Ternary operator
### A ternary operator evaluates a condition and executes a block of code based on the condition.

### Its syntax is:

## condition ? expression1 : expression2

The ternary operator evaluates the test condition.

If the condition is true, expression1 is executed.
If the condition is false, expression2 is executed.
The ternary operator takes three operands, hence, the name ternary operator. 
It is also known as a conditional operator.

## example
### ternary operator program to check pass or fail

```python
let marks = prompt('Enter your marks :');

// check the condition
let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);
```

### Difference between if else or ternary:-
line of code is reduced and looks simple to write.
But if there are multiple conditions always go for if-else