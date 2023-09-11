
# Map() reduce() filter()


### Differenece between some higher order function
![click kere](https://i.stack.imgur.com/rPjLb.jpg)

## Map()

```python 
map() creates a new array from calling a function for every array element.
```
### syntax
array.map(function(currentValue, index), thisValue)

| Parameter | Description    | 
| :---:   | :---: | 
| function() | Required.A function to be run for each array element.   | 
|currentValue|Required.The value of the current element.|
| thisValue| Optional.Default value undefined.A value passed to the function to be used as its this value.|

## filter()
```python
The filter() method creates a new array filled with elements that pass a test provided by a function.

```
### syntax
array.filter(function(currentValue,index), thisValue)

| Parameter | Description    | 
| :---:   | :---: | 
| function() | Required.A function to be run for each array element.   | 
|currentValue|Required.The value of the current element.|
| thisValue| Optional.Default value undefined.A value passed to the function as its this value.|

## reduce()
```python
The reduce() method reduces an array of values down to just one value. 
To get the output value, it runs a reducer function on each element of the array
```

### syntax
array.reduce(function(total, currentValue), initialValue)

| Parameter | Description    | 
| :---:   | :---: | 
| total | Required.The initialValue, or the previously returned value of the function.   | 
|currentValue|Required.The value of the current element.|
| initialValue| Optional.A value to be passed to the function as the initial value..|

### Recursion

```python
Recursion is a programming pattern or concept embedded in many programming languages. It is a feature used in creating a function that keeps
calling itself but with a smaller input every consecutive time until the code’s desired result 
from the start is achieved.

```

### Why use Recursion

```python
One major factor that makes recursion stand out is that it gets complex tasks done in a few lines of code as opposed to
when recursion is not employed. And this makes the codebase look simple and elegant thereby saving time and allowing 
the speedy accomplishment of jobs. While also eliminating chunky and bulky codebase.
```

### Example
```python
function factorial(num){
    if(num === 0){
        return 1;
    }
    return num * factorial(num-1) 
}

console.log(factorial(20));

```

In the above example function itself is used to get the output




