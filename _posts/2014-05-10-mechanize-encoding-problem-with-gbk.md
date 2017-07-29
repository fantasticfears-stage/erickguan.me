---
title: Mechanize encoding problem with GBK
tags:
  - Mechanize
---

I tried to use Mechanize for fetching data in a restricted site, but response html with GBK encoding is overwhelm me.

Since Mechanize can store the cookie and detect encoding, it seems I can save a lot of time to fetch data. But I ran into encoding problem soon. I reinstall the ruby with readline(OS X 10.9.2) and set the LC.

For a page, I'll normally try this way.

    require 'mechanize'

    agent = Mechanize.new
    page = agent.get TARGET_URL
    page.search('//table') # do everything you like

But I just got random character. When I check about that, it seems Mechanize consider its 'EUC-JP'. So I think I should manually set the encoding. Here is final version which can parse the content.

    require 'mechanize'

    agent = Mechanize.new
    page = agent.get TARGET_URL
    page.encoding = 'GBK'
    converter = Encoding::Converter.new('GBK', 'UTF-8') # Ruby 2.1
    content = converter.convert(page.body)
    document = Nokogiri::HTML(content) # Or your still can't search the right     content without using the encoded content.
    document.search('//table')
