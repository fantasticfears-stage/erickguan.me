---
title: Bridging ICU with Ruby
tags:
  - Unicode
---

Chinese Discourse users have more complains to the text problems. A community
software induce users to read and write which certainly deals with texts.
Numerous efforts are made along the way such as tokenizers for Chinese. Maintaining
a project is not easy.
One of feature request for Discourse is Unicode username. A core technical problem
is visually confusing username. Discourse community may be in a multilingual
community. This is certainly important to deal with. Although username is the
core identify of the user representation. It's more than Unicode.

## Motivation and goals

Somehow, Ruby community doesn't have much tools for Unicode processing. Unicode
normalization is implemented in the core library in 2.2. And what about [Unicode
security problems](http://unicode.org/reports/tr36/)? I don't want to reinvent the
wheel.
[ICU (International Components for Unicode)][icu] is an old and battle-tested
library for the Unicode. A binding with it would worth it. It should have
high performance, easy to maintain and can be deployed with MRI.

There are already some gems.
- [`twitter-cldr-rb` gem](https://github.com/twitter/twitter-cldr-rb) is a pure
Ruby implementation based on [Unicode CLDR](http://cldr.unicode.org/). Adding
feature means implementing algorithm on the unicode document.
- Some existing gems are obsolete.
- The binding with ICU is [discussed in MRI tracker](https://bugs.ruby-lang.org/issues/2034).

## Do it right

Ruby is really different than other programing languages in terms of its string
implementation. [The _Code Set Independent_ (CSI) model](http://yokolet.blogspot.se/2009/07/design-and-implementation-of-ruby-m17n.html)
doesn't set a common internal encoding but stores the bytes presentation
with encoding information. It allows Ruby convert encodings when it involves I/O operations.
Also, Ruby holds the external encoding `Encoding.default_external` which is how Ruby
reads from an IO object. The `IO` object is typically a file (`File` is a subclass of IO).
The `Encoding.default_internal` for new created string is usually UTF-8 from the environment.
[This starts from Ruby 1.9](http://nuclearsquid.com/writings/ruby-1-9-encodings/).

ICU provides [many internationalization features][icu_features]. It operates with strings.
So the most operations happen in memory. But ICU [uses UTF-16 internally](http://userguide.icu-project.org/strings). The conversion will happen if
UTF-8 is used as the default encoding.

Also, ICU's C API uses callback function for error reporting.

A gem with C code can easily access byte arrays. And the conversion in C will be faster
than MRI implementation.

## Design

ICU binding should be as transparent as possible. The user only uses the equivalent Ruby
API of ICU. Its module holds a optional internal encoding for the
returning result (usually a string). Since ruby's string can be any encodings, it have
to be converted to UTF-16 for feeding ICU.

Along the way, [_The Definitive Guide to Ruby's C API_](https://silverhammermba.github.io/emberb/examples/) helps me quite a lot. It's the most clear reference for Ruby's C API I've seen.

[icu]: http://site.icu-project.org/
[rubycsi]: http://yokolet.blogspot.se/2009/07/design-and-implementation-of-ruby-m17n.html
[programmer_unicode]: http://reedbeta.com/blog/programmers-intro-to-unicode/
[icu_features]: http://userguide.icu-project.org/i18n
