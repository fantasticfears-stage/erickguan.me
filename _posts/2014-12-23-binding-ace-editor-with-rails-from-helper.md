---
title: Binding ACE editor with Rails form helper
tags:
  - Rails
  - JavaScript
  - ACE
---

ACE editor only can bind with a `div` container which means rails form helper can't help when you want to bind with an attribute.
I am going to work through my solution.

### `text_area`
`text_area` genererates `<textarea>` which people can edit its content without any js. And this helper helps you forget about binding with model.

I will get the content from it for ACE. When the js can't work, we can still get a functional editor.

### Binding with ACE

HTML:
```HTML
<div class="source-editor" data-mode="markdown">
  <textarea></textarea>
</div>
```

Script is easy. Work though all the `source-editor`, create a div and bind ACE within it. Then save back to textarea when submit.

You should set css for `textarea` just like the  `div` in the ACE tutorial.
```js
$('.source-editor').each(function() {
  var container = $(this);
  var mode = container.data('mode');
  var editorArea = container.find('textarea');

  // build a edit div for ACE since ACE can't load in a textarea
  var editDiv = $('<div>', {
    position: 'absolute',
      width: editorArea.width(),
      height: editorArea.height(),
      'class': editorArea.attr('class')
    }).insertBefore(editorArea);
  // no need to display textarea
  editorArea.css('display', 'none');

  var editor = ace.edit(editDiv[0]);

  editor.setFontSize('14px');
  editor.setTheme('ace/theme/yesterday');
  editor.getSession().setMode('ace/mode/' + mode);
  editor.getSession().setValue(editorArea.val());

  // save back to the textarea when submit
  editorArea.closest('form').submit(function() {
    editorArea.val(editor.getSession().getValue());
  });
});
```

### More complicated templates

Actually I forged Github-liked toolbar for the ACE editor which needs more HTML structures.

This can be done by Rails view partials. Separated HTML and passing form helper as a parameter. Then write its control logic in the component js.
No need for customized helpers, simple is the best.

```haml
= render partial: 'components/source_editor',  |
  locals: {                                    |
  preview_url: '',                             |
  ace_mode: 'markdown',                        |
  indent_width: %w(2 4 8),                     |
  tab_label: 'Edit content',                   |
  preview_label: 'Preview',                    |
  attribute: f.text_area(:raw) }               |
```
