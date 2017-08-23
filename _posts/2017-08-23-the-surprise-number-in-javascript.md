---
title: The Surprising Number in JavaScript
tags:
  - Programing Language
---

Did you know you can not have a number larger than $$ 2^{53}-1 $$ in JavaScript?

You might try this in Chrome Developer Console and want to tell me that it works in  Chrome.

It works because you are lucky.

## What is a Number?

Let's take a step back and review what is a number. Is $$2^{53}$$ a number in JavaScript?

```js
Number.isInteger(2**53) // true
```

It works out right. But can there be potential issues?

Yes, it's not _safe_.
It's not safe because the number you hold
may lose its percision if it's larger than the magical $$2^{53}$$.

Your user may complain they lose their money when they type a large number.
`9007199254740992`. You may lose your rocket in the sky because its position goes wrong.

That's why you don't trust the input and the reason you remember to check.

```js
Number.isSafeInteger(2**53) // false
```

Chrome represents integer more than ECMAScript required because its implementation details in V8.

If you read the great MDN, you'll find:

> According to the ECMAScript standard, there is only one number type: the double-precision 64-bit binary format IEEE 754 value (number between $$-(2^{53}-1)$$ and $$2^{53}-1$$). There is no specific type for integers. In addition to being able to represent floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN (not-a-number).

You are not using Python, C/C++ or Ruby. There isn't a type for integer in JavaScript.
Your integer at your hand
is just a `Number` in JavaScript. JavaScript is weak in typing opposing to other
dynamic language in which allows you to represent infinite large number.

The standard says that it's a IEEE 754 value.

If you use Python and Ruby, you pay the price when you use large number which probably you rarely make use of. So does the copy on right (CoW) in string to C++. But you are benifit to know
such information. It indicates you optimize for the right direction.
You don't optimize for the extreme large number if you don't encounter it frequently.
You optimize string view rather than CoW in C++17.
But in JavaScript, Python and Ruby. You enjoyed the fact that they has a type (class or object).

Such OO concept helps you encapsulate logic or anything.

In JavaScript, you also have bizarre pieces like `+Infinity`, `-Infinity`, `NaN` and our famous equality table along with the `Number` object.

<img src="/assets/images/2017/js-equality-table.png">

### Grown? Designed?

Why is that?

JavaScript starts as a prototype project and designed by one person in 1995.

It was the browser war time. So there is 
Netscape (former Mozilla), Microsoft and hackers (KHTML & WebKit). In particular, Brendan Eich was recruited by Netscape and
assigned the task to design the language with the the goal of embedding Scheme.
Netscape believed it would be important. And here came the other major vendors.
With the collaboration with Sun, the language in development should looks like Java to compete with Microsoft.

Such a important job is not held by a group of proferssoers as you might imagine.
The desiner at the time was only Brendan Eich. He invented the
prototype in 10 days, in May 1995.

#### A story from make

Let's have some perspecitve. It's 1995. Web is little to be known. People talks about Java, C++, Unix, internet, HTML and etc.

It was different.

You have a
internet community and your lovely package manager like npm and bundler nowadays.
Everything are done for you and you believed there is somebody who will take care
something. You can talk about projects and think about the faults that your fellow
made so that you can fix in your new project.

Non of that happens for Brendan Eich.

I'm about to get the point but let's talk about `make` instead.
Do you know what we still suffer in making a C/C++ project? Because we
still uses Makefile. `make` was a program in Unix to define how the dependency of
objects file should be resolved.
It was written by one person and intended
to be shared with friends.
The inventor went on ahead and starts command with tab without think too much.
The tab in a makefile is treat different than spaces.
It's a fine choice at the time and they came up the idea to include it into the standard UNIX package. Would that be wonderful, right?

So wrong. We suffer because of those ten guys.

The code aged but you can not revert time. The code is the logic that you don't want to redo. It becomes dominant then you couldn't change it without breaking things.
C++ pays the price for compatability. Python pays the price too. They pay it differently.

People can't love what they don't know. People want to be part of something.

From JavaScript 1.0 to ECMAScript 2017, the JavaScript could not be redesigned
because it was put on the market for way too long.
It's grown to this position. It was designed but it can not be designed now to gain
the same dominance.

#### JavaScript

Douglas Crockford, the creator of JSON said,

> JavaScript is built on some very good ideas and a few very bad ones.

A committe of experts in programming language may still deliver obscure syntax
for a programing language.
Could you blame JavaScript for a 10 day one man project?

But why we suffer from this? Can we reboot it like Python 3? Probabaly no.
Because we don't have a choice. It's bundled with the browser and DOM.
We live in an aftermath with survival like Chrome, Firefox and Safari.
Chrome shows the power of programming in user browser and we can never go back.
Node.js is on the market for years.

JavaScript has grown. It evolves. Years.

## It's terrible? The take away

Lie on your back. LOOK at how it's successful as a language. It's universal now.

We all know there is no perfect language. JavaScript is no different.
JavaScript can be really surprised
in types. But don't you happy with the first-class functions? closures? object literals? And performance?

So as a programmer, why not setup your linter if you have committed the very same
mistakes many times.
Just do more coding.

And don't design without thinking. Do think twice when you design. Someone may suffer . You may suffer.

_Thanks my friend @lextm for reviewing the draft._
