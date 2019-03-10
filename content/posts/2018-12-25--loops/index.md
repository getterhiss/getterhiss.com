---
title: Learning Algorithms & the ES6 `FOR` loop
category: "code"
cover: loops-js.jpg
author: getter hiss
---

So here I am, geeking over something new I learned while doing my [Udemy course on Algorithms by Stephen Grider](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/).

Besides just being the best resource out there to master algorithms, the teacher, Stephen, also shows you several different angles to approach a problem. It is especially great for anyone who's still respectively new to code, since you might learn methods you haven't been introduced to before.

I am sure you agree, that JavaScript is full of fun surprises in the ways that methods can be used, and all the possibilities to find your way to the solution.

### The classic `for` loop

While first introduced JavaScript, everyone goes through learning the classic `for` loop to iterate over an object -

```js
let arr = ['Mon', 'Tues', 'Fri'];
let weekdays = [];

for (let i = 0; i < arr.length; i++) {
    weekday.push(arr[i] + 'day');
};
return weekdays;

```

The classic `for` loop allows you to set your own conditions when looping through a number of values. While it is a clever techique that even skilled programmers use, it's so easy to forget the correct syntax. 

But the new `for` loop is here to help you out..

### Welcome `for` loops in ES6!

ECMAScript 2015 made Javascript more modern and intuitive to use. `For` loops turned shorter and much cooler. You only have to remember two words to create a statement.

### 1. `For..of` statement

`For..of` can be used to iterate over an Array or String ([as well as Map, Set, Argument](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)).


```js
let word = 'FooBar'
let newWord = '';

for (let char of word) {
	newWord = char + 'o';
};
return newWord;
```

### 2. `For..in` statement

`For..in` can be used to iterate over Objects. As you already know, objects consist of Key-Value pairs, which make them different from Arrays (only values), and therefore should be handled differently.

```js
for (let key in Object) {
	statement
};
```

### The difference being..

**`For..in` catches the keys, `For..of` catches the values!**

All in all, so much easier to remember and use than classic iteration statements. How great is that!

For more in-depth and technical help, read [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)