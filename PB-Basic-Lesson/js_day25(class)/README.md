
# Classes in JavaScript

### Topics to be covered
- What are classes
- Why should we use them
- What does a class look like
- Naming convention
- Methods

## Class defination how to create an Instance from class Object

 ![Class](https://dmitripavlutin.com/static/262db61c59f663901d75fbe5c60ec28d/c2d7e/instances-3.png)

### What are classes
- Classes are one of the features introduced in the ES6 version of JavaScript.
- A JavaScript class is a blueprint for creating objects.
- A class encapsulates data functions that manipulate data.
....quite hard to get your head around the first time!

### Why should we use classes
#### Re-useability
Classes are designed to be re-used

A class is essentially a template - we can't usually use it directly. We must create a copy (instance). We work with the copy.

![Class Example](https://suryasumatera.com/wp-content/uploads/2020/04/2020031400163071868d05b7fff5009d785e8cb61890d3.png)

![Class example](https://linuxhint.com/wp-content/uploads/2021/08/word-image-1.jpeg)



### What does a class look like
```python
class Animal {
}

```

Classes are just like objects - we can store methods and properties on them

In fact, we could represent our classes as objects

However, classes give us a few extra advantages (more on this later)

## Naming conventions when writing a class

---

Class names should be capitalized!

`Animal {} ✔️️`

not

`animal {} ❌`

Instances should NOT be capitalized!

`const dog = new Animal() ✔️️`

not

`const Dog = new Animal() ❌`


## Methods

---

A class consists of methods and properties

Methods are essentially just functions. We call them methods because they belong to an object (the class).

---

## The Constructor Method

---

Classes can include a special method called the **constructor**

This method is special because it runs automatically when the class is instantiated


