---
title: Unicode is more than encoding
tags:
  - Unicode
---

Nowadays, the average users don't have to work with encodings generally and
don't need to know Unicode. Better software, better library and better understanding
contributes a lot. The most basic operations we leant as an programmer is manipulating
characters and strings. By writing the simplest hello world program in different
scripts requires understanding encodings or relies on the programing language structure.

There are some recommend readings:

- [There Ain't No Such Thing as Plain Text
](https://blog.codinghorror.com/there-aint-no-such-thing-as-plain-text/) by
Coding Horror
which shows a email and web encoding case in 2005.
- [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)
](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/) by Joel Spolsky told the
Unicode story from the old C char type in 2003.
- [Unicode on Wikipedia](https://en.wikipedia.org/wiki/Unicode) gives the general
ideas about it.
- [A Programmer’s Introduction to Unicode][programmer_unicode] by Nathan Reed visualizes
the Unicode code point plans and explains it with encodings and combining marks.

## Encodings is not the Unicode

Unicode works on character-level for the world's writing system. It doesn't help
you deal with the language, such as searching Chinese which isn't separated by
the blank. But it reveals the relation between the encodings and characters.

Simply remember:

**There isn't a string without encoding.**

If you ever forgot that or not understood, you won't know why a same string
can't be the same in the byte array.

Many programing languages make use of UTF-x encoding now. It isn't the whole
story. Ruby uses _Code Set Independent_ system for storing strings which basically
stores the encoding with the string. While most programming language mainly uses a
UTF-x to represent the string which is already encoded. The most scary thing
happens as the string may comes from a database, a JSON from HTTP response,
writing to a file and
your javascript literals. Now the string involves with I/O and I/O operates on
byte level. It must related with the encoding. Being arrogant and ignore the
fact that libraries, the operating system and your programing language handles
the encoding in a way, it will eventually bite you.

## Unicode regulates more than code points

A common programming is comparing the string. This problem has
two aspects, one is with encoding above explained. The other is Unicode standard.
Unicode intends to represent character in the writing system. A single code point can
be represented by a series of code points. The abstract layers in the software
also wants to make it easy for the programmers. So now it's time to remind you
for another thing.

> For example, the Vietnamese letter “ệ” can be expressed in five different ways:
- Fully precomposed: U+1EC7 “ệ”
- Partially precomposed: U+1EB9 “ẹ” + U+0302 “◌̂”
- Partially precomposed: U+00EA “ê” + U+0323 “◌̣”
- Fully decomposed: U+0065 “e” + U+0323 “◌̣” + U+0302 “◌̂”
- Fully decomposed: U+0065 “e” + U+0302 “◌̂” + U+0323 “◌̣”

-- _A Programmer’s Introduction to Unicode_, Nathan Reed

**A character have different representation even with the same encoding.**

I won't elaborate more. Here is some further directions to read.

Unicode website offers many readings for the problem and intention. And ICU
has a C/C++/Java implementation for these problems.

[programmer_unicode]: http://reedbeta.com/blog/programmers-intro-to-unicode/
