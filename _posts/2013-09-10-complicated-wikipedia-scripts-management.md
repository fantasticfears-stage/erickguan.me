---
title: Complicated Wikipedia Scripts Management
tags:
  - Wiki
  - MediaWiki
---

After [MediaWiki 1.23/wmf3](https://www.mediawiki.org/wiki/MediaWiki_1.23/wmf3) had been deployed to all Wikimedia sites, old collapse element didn't work any more on zhwikipedia. The administrator Liangent deleted the old(2009 or even before)  code using pure JavaScript API on *MediaWiki:Common.js*. Then we tried to solve these mess.

## Upstream

We decided to make use of upstream module - [jQuery.makeCollapsible](https://www.mediawiki.org/wiki/Manual:Collapsible_elements), for reducing maintenance costs. This is something should be done because local maintainers may leave and then a random release may break the local scripts which is really annoy admins. What's more, this module has been already deployed on the zhwikipedia. After diting the class of some templates, it works fine. For the old collapsible element, we ported the code from the manual page and made two default gadgets. Apparently, these code is not maintained. I've spent some time to unify the code.

## Local version

However, jQuery.makeCollapsible generates a alternative toggle block instead of toggling by clicking navigation bar which Chinese wikipedians are familiar with. There's no way to modify the default behavior.

What's worse, Chinese wikipedians depend heavily on the modified NavFrame and some local features.

Thus I fixed a subset features and left the more complicated feature alone.

## Policy

MediaWiki is highly praised for its customizability. For scripts, the core scripts, the site scripts, the skin scripts and the user scripts. It's still manageable by a standalone installation. But Wikimedia is a big project. It's far more complicated for developers to look after all the users around the world especially for small wikis. How could we advance frontend technology for Wikipedia? Providing solving the historical problems, we can easily deploy new styles and new ui styles.

[Lua](https://www.mediawiki.org/wiki/Extension:Scribunto) is considered as a new script language to replace the old template grammar. I'd like to use a script language while we still need the global module for lowering maintenance costs.That is to say, we have to limit the common template usage.
