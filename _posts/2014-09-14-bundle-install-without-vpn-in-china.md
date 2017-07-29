---
title: Bundle install without VPN in China
tags:
  - GFW
  - Bundler
---

EDIT: Recommended mirror site updated in the end.

[RubyGems](https://rubygems.org) got blocked by GFW which blocks everytime you do `bundle install`. It's because some of Amazon S3 are blocked by gov.

In the mainland China, we can just use mirror provided by Taobao. It's fast. It sync with RubyGems every fifteen minutes.

The mirror [ruby.taobao.org](https://ruby.taobao.org) has a detail usage guide. Here I want to demonstrate how to use it as a mirror instead of gem source.

## Mirror

Sometime you'll find you can't remove rubygems source or change `Gemfile`. What you can do is to simply add a mirror for bundler.

`bundle config mirror.https://rubygems.org https://ruby.taobao.org`

You can find Bundler mirror documentation [here](http://bundler.io/v1.7/bundle_config.html).

## Updated mirror

Taobao mirror has troubles becaus of security policies that only employees can access servers which is needed for maintenance work at Taobao. Core maintainers left Taobao recent years which cause all kinds of troubles.

Therefore, a new mirror is considered to operate separately under control of serveral core members at [Ruby China](https://ruby-china.org/). QCloud will sponsor servers and CDN from Tencent. It's going to offer "realtime" synchronization, 400+ global CDNs and two servers operated outside China which ensures CDN server can query the data.

Here is some related links (in Chinese of course):

- Issues: [https://ruby-china.org/topics/29250](https://ruby-china.org/topics/29250)
- Github: [https://github.com/ruby-china/rubygems-mirror](https://github.com/ruby-china/rubygems-mirror)
- Mirror site: [http://gems.ruby-china.org/](http://gems.ruby-china.org/)

### Commands

`gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/`

`bundle config mirror.https://rubygems.org https://gems.ruby-china.org`
