---
title: Recursions in Javascript
category: "code"
cover: recursions.jpg
author: getter hiss

---

Have you worked with recursions before? If not, here is my simple breakdown on what they are and how to use them.



### What are recursions?
Recursions are JavaScript's "self-calling" functions. They are used for tasks that you can break down into simple sub-functions that are repeated until the desired result.

[Mozilla Developer Network](https://developer.mozilla.org/en-US/) (MDN) defines it like this:

***" [Recursion] An act of a function calling itself. Recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (continues recursion)."***

### Not too far from iterations..
You might instantly think, that this sounds awfully a lot like loops ([for example *for loops*](https://getterhiss.com/loops/)) that also deliver a similar result. They both execute the code several times. Nevertheless, recursions have their place and time. Not all algorithms can be solved with simple iteration loops. One of the goals in programming is to write elegant, light and readable code, which is why it's good to know how to write recursions.

## The building blocks of a recursion

The simple build of an recursion looks like this

```js
function spellMe(word, n = 0) {
    if (n === word.length) {  // base case, terminate ☠️
        return;     
    }
    
    console.log(word[n]);   // Do some work 🤖

    spellMe(word, n+1);    // self-calling the function 🔁
 }
 
 spellMe('hello');         // call the function
``` 
Would output:

```js
h
e
l
l
o
```
#### Recursions can be easily divided into five checkpoints:

1. **Name the function**
2. **Mark the base case**
3. **Define the default properties**
4. **Do some work**
5. **Self-call the function again**

### Mark the Base Case
After naming the function, the first thing to remember when writing any kind of repetitive code, is to make sure it doesn't end up running to infinity. With recursions, the base case defines the moment when the function returns a value and doesn't proceed to call itself again.

#### *"The base case is a condition in the simplest line of code that determines the end of the recursion."*

It's important to note, that the base case should be defined on top of the function. Also, think of other possibilities depending on the task, that would lead to returning the value without another round of work.
If you forget..you'll know when that happens when you see an error that states:

**`Uncaught RangeError: Maximum call stack size exceeded`**


### Define the default properties
The usual syntax for a Javascript function call allows you to enter properties in the parentheses, that will be passed into the function body. When making a recursion, consider entering properties that are true for each round of work. Therefore, think of ways to define them giving enough flexibility to change if the function requires it.


### Define the work to do
Find the minimum pieces of work that will solve the task after n rounds of repetition. With recursions, every move is connected to a specific conditional statement. Think of conditions when you want to proceed to do the work, and if not, place those conditions before the syntax for the function itself.

### Self-call the function

The second call for the function inside itself is the key for recursion. Make sure you add it in the right order and add some changes to the arguments so you don't just overwrite the same function call.

## Recursions in action

Here is a simple example - a function that will count down from a positive integer N until 0.

```js
function countDown(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    return countDown(n - 1);
}
countDown(10);
```
1. The **base case** here is the condition that states: **if n reaches zero, return, and don't call the function again.**
```js
 if (n === 0) {
 return;
    }
```
2. The default property here is simply `n`, that represents a positive integer passed in with the function call.
3. The sub-function here is  `console.log(n);`
4. Self-calling the function again **with** a change in the argument `return countDown(n - 1);`
This step really depends in which way your property is adjusted in the next round of the function call.

This is a very basic example for recursions. As you are probably thinking, it could be easily solved with an iteration too. My goal was simply to show the way recursions work, so I encourage you to try out recursions for more complex algorithms.

## Find out more
I merely touched the surface when it comes to recursions, but this should be enough to start practicing them in real cases.
If you are already comfortable with writing basic cases, the next steps would be to read more on *what is a call stack and how it acts in recursions*, which I found was explained really well in a more technical article on [The Coding Delight](https://www.thecodingdelight.com/understanding-recursion-javascript/) (Jay also gives excellent exercises for practice!)

And again, don't forget to visit one of my favorite places on Web - the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)

