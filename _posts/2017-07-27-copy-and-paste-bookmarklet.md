---
title: Copy and Paste Bookmarklet
tags:
  - Tip
---

Inspired by [DontFuckWithPaste](https://github.com/jswanner/DontFuckWithPaste).

But why you ever need an extension taking your 100MB memory when you can have a nice and neat bookmarklet?

<a style="padding: 10px; border: 1px dashed #777; background-image: none;" href="javascript:(function()%7Bconst%20allowCopyAndPaste%20%3D%20(e)%3D%3E%20%7Be.stopImmediatePropagation()%3Breturn%20true%3B%7D%3B%5B'copy'%2C'paste'%5D.forEach(a%20%3D%3E%20%7Bdocument.addEventListener(a%2C%20allowCopyAndPaste%2C%20true)%3B%7D)%7D)()">&gt; Copy & Paste</a>

1. Drag the bookmarklet above into your bookmark bar. If you disable the bookmark bar, right click besides the link bar to get it back.
1. Click when you need copy and paste.
1. It's a fake step. You are done.
