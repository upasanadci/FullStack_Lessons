# Accessing properties

## Property accessors provide access to an object's properties by using the dot notation or the bracket notation.

```
 object.propertyName
 object[expression]
```

## Dot notation

In the object.propertyName syntax, the propertyName must be a valid JavaScript identifier which can also be a reserved word. For example, object.$1 is valid, while object.1 is not.

## Bracket notation

In the object[expression] syntax, the expression should evaluate to a string or Symbol that represents the property's name. So, it can be any string literal, for example, including '1foo', '!bar!', or even ' ' (a space).

- One difference between these two notations is how the property name is specified. With dot notation, the property name must be a valid identifier (i.e., a string that can be used as a variable name). With bracket notation, the property name can be any string, including those that are not valid identifiers (such as property names with spaces or special characters).

- Another difference is that you can use a variable inside the brackets to access a property dynamically, whereas you can't use a variable with dot notation. For example:

```
  const person = {
    name: 'John',
    age: 30
  };

  const propertyName = 'name';

  console.log(person[propertyName]);  // John
```

# Object.keys()

## The Object.keys() method returns an array of a given object's names.

```
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
```

# Object.values()

## The Object.values() method returns an array of a given object's values.

```
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]

```

# Object.entries()

```
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj));
// [ ['foo', 'bar'], ['baz', 42] ]
```

# The for...in loop

## The for...in loop is a type of loop in JavaScript used to iterate over the properties of an object.

```
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) { // prop is referring to each key inside the object.
  console.log(`${prop} = ${obj[prop]}`); =>"a = 1"
                                           "b = 2"
                                           "c = 3"
}


```

# Self study : Object.assign()

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
