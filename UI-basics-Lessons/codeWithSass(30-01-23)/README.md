
#Introduction to SCSS (and Sass)
“CSS with superpowers,” SCSS (or Sass) offers a way to write styles for websites with more enhanced CSS syntax. In general, browsers do not know how to process SCSS features, such as functions, mixins, and nesting. We’ll need to convert them to regular CSS files to run them in the browser

## What’s the difference between SCSS and Sass?

| SCSS  | Sass |
| :-------------: | :-------------: |
| Stands for Sassy CSS  | Stands for Syntactically Awesome Style Sheets  |
| Similar to CSS (uses curly braces and semicolons)  | Uses strict indentation (like Python)  |
|Any valid CSS is valid SCSS  |  CSS code cannot be used as SASS|
|    .scss extension |   .sass extension    |

## Documentation
Use this url [Sass](https://sass-lang.com/guide) to read Sass documentation.

## An example of SCSS:

```python
body {
  background-color:#000;
  color:#fff;
}
```

## An example of Sass.
```python
body 
  background-color:#000;
  color:#fff;

```

## Why SCSS?

 CSS is cool, but not quite cool enough. The creators of SCSS had a lot of ideas to make developers’ lives easier and decided to build them into an entirely new language. Actually, to be clear, Sass was the original version of this new language; SCSS is an improved version they created later.

 ## Comments in SCSS

Both // (single-line) and /* */ (multi-line) comments are allowed in SCSS.

## Features of Sass

1.Nesting

### Code with CSS
```python
nav {
  background-color:#333;
  padding:1em;
}
nav ul {
  margin:0;
  padding:0;
  list-style:none;
}
nav ul li {
  display:inline-block;
}   
```

## Code with SCSS
```python

nav {
  background-color:#333;
  padding:1em;
  ul {
    margin:0;
    padding:0;
    list-style:none;
    li {
      display:inline-block;
    }
  }
}

```

## Using & in nesting
& used with the hover pseudo-class. This is called a Parent Selector.

```python

button {
  background-color: #535353;
  color: #000;
  &:hover {
    background-color: #000;
    color: #fff;
  }
}


```


## Variables
Variables store data. In SCSS, you can save any CSS value (even with units) in variables. Variables are defined using the $ symbol.

```python
$my-font: Nunito, sans-serif;
$my-font-color: #ffd969;
$content-width: 660px;


```


Variable usage:
```python
body {
  font-family: $my-font;
  color: $my-font-color;
  content {
    width: $content-width;
  }
} 
```


### Mixins

A mixin is a group of CSS declarations that can be reused. The syntax is similar to functions in JavaScript. Instead of the function keyword, use the @mixin directive. You can have arguments too. Calling the mixin is done via the @include statement.

### Here’s how to use mixins to position elements to absolute center:

```python
@mixin absolute-center() {
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
}
.element-1 {
  @include absolute-center();
}
```

First, we defined the absolute-center mixin. Then, we used it in multiple blocks.

### @import
The examples below demonstrate how to chunk files and import them into one parent file using @import.

main.scss

```python


body {
  padding:0;
  margin:0;
}
body, html {
  width:100%;
  min-height:100%;
}

```
style.scss

```python
@import 'main';

content {
  max-width:660px;
  // and more styles
}
```

Assuming that both main.scss and style.scss are in the same folder, we can import one to another, as shown above.