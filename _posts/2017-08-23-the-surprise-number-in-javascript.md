---
title: The Surprising Number in JavaScript
tags:
  - Programing Language
---

Did you know you can not have a number larger than 2^53-1 in JavaScript?

You might try this in Chrome and yell at me that it's OK for Chrome.

## What is a Number?

Let's take a step back and reflect what is a number. Is 2^53 a number in JavaScript?

```js
Number.isInteger(2**53) // true
```

So what's the matter? Because it's not _safe_.

```js
Number.isSafeInteger(2**53) // false
```

Chrome represents more than that because its implementation details in V8.

If you read great MDN, you'll find:

> According to the ECMAScript standard, there is only one number type: the double-precision 64-bit binary format IEEE 754 value (number between -(253 -1) and 253 -1). There is no specific type for integers. In addition to being able to represent floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN (not-a-number).

You are not use Python, C/C++ or Ruby. There isn't a type for integer. The integer
is just a `Number` in JavaScript. JavaScript is weak in typing opposing to other
dynamic language that they allow you to represent infinite large number you can.
It simply says IEEE 754.

If you use Python and Ruby, you pay the price when you use large number but it's
rare to happen just like copy on right (CoW) in C++. But you are benifit to know
this is a integer because they often has a type (class) for it.

Besides, you have `+Infinity`, `-Infinity`, `NaN` and our famous equality table along with the `Number` object.

<img src="/assets/images/2017/js-equality-table.png">

### Grown? Design?

Why is that?

JavaScript starts as a prototype project and designed by one person in 1993.

It's the browser war time. So there is 
Netscape (former Mozilla), Microsoft and hackers (KHTML & WebKit). Brendan Eich was recruited and
assigned the task to design the language with the the goal of embedding Scheme.
With the collaboration with Sun, it should looks like Java to compete with Microsoft.
The desiner at the time was Brendan Eich. He invented the
prototype in 10 days, in May 1995.

#### A story from make

Let's have some perspecitve. It's 1995. Web is little to be known. People talks about Java, C++, Unix, internet, HTML and etc. Not like right now. You have a
internet community and your lovely package manager like npm and bundler.

I'm about to get the point but let's talk about `make`.
Do you know what we still suffer in making a C/C++ project? Because we
still uses Makefile. `make` was a program that written by one person and intended
to be shared with friends. He went on ahead and starts command with tab. And 
tab is treat different than spaces. It's a fine choice at the time and it's not a 
bad idea to include it into the standard UNIX package, right?

So wrong. We suffer because of those ten guys.

It's grown not designed.

#### JavaScript

Douglas Crockford, the creator of JSON said,

> JavaScript is built on some very good ideas and a few very bad ones.

Imagine even a committe of experts in programming language can deliver obscure syntax.
Could you blame JavaScript for a 10 day one man project?

But why we suffer from this? Python 3 designs the language again and make a huge
price for its community. But how JavaScript can't change at all.

Because you don't have a choice. It's bundled with the browser and there were 2
browser wars in the history. You live in an aftermath with the survival. Chrome
shows the power of programming in user browser and we can never goes back.

That simply because JavaScript is grown.

## It's terrible? The take away

LOOK at how it's successful as a language. It's universal now.
We all know there is no perfect language. So it is.
JavaScript can be really surprised
in types. But don't you happy with the first-class functions? closures? object literals? And speed?

As a programmer, don't you have your linter if you committed the very same mistakes?
Just do more coding.
