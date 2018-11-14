var store = [{
        "title": "Complicated Wikipedia Scripts Management",
        "excerpt":"After MediaWiki 1.23/wmf3 had been deployed to all Wikimedia sites, old collapse element didn’t work any more on zhwikipedia. The administrator Liangent deleted the old(2009 or even before)  code using pure JavaScript API on MediaWiki:Common.js. Then we tried to solve these mess. Upstream We decided to make use of upstream module - jQuery.makeCollapsible, for reducing maintenance costs. This...","categories": [],
        "tags": ["Wiki","MediaWiki"],
        "url": "https://erickguan.me/2013/complicated-wikipedia-scripts-management",
        "teaser":"https://erickguan.me/assets/images/teaser.jpg"},{
        "title": "Mechanize encoding problem with GBK",
        "excerpt":"I tried to use Mechanize for fetching data in a restricted site, but response html with GBK encoding is overwhelm me. Since Mechanize can store the cookie and detect encoding, it seems I can save a lot of time to fetch data. But I ran into encoding problem soon. I...","categories": [],
        "tags": ["Mechanize"],
        "url": "https://erickguan.me/2014/mechanize-encoding-problem-with-gbk",
        "teaser":"https://erickguan.me/assets/images/teaser.jpg"},{
        "title": "Failed Attempt to Chinese Speech Recognition Service",
        "excerpt":"It’s obvious that many application supports speech recognition for sentences. Actually, everywhere. But here I want is to convert a Chinese podcast, Teahour.fm, to text for read. It’s about 80 minutes per podcast. There is no silver bullet here. Even the text can be automated converted, it’s still need to...","categories": [],
        "tags": [],
        "url": "https://erickguan.me/2014/failed-attempt-to-chinese-speech-recognition-service",
        "teaser":"https://erickguan.me/assets/images/teaser.jpg"},{
        "title": "Adding a system call to Linux 3.14",
        "excerpt":"There are plenty of blog posts about adding a system call to Linux 2.6, but they are out of date now. Here is a article about adding a system call to Linux 3.14. I assume you can easily add the system call for further kernel. Shane wrote a great post...","categories": [],
        "tags": ["Linux"],
        "url": "https://erickguan.me/2014/add-a-system-call-to-linux-3-14",
        "teaser":"https://erickguan.me/assets/images/teaser.jpg"},{
        "title": "Bundle install without VPN in China",
        "excerpt":"EDIT: Recommended mirror site updated in the end. RubyGems got blocked by GFW which blocks everytime you do bundle install. It’s because some of Amazon S3 are blocked by gov. In the mainland China, we can just use mirror provided by Taobao. It’s fast. It sync with RubyGems every fifteen...","categories": [],
        "tags": ["GFW","Bundler"],
        "url": "https://erickguan.me/2014/bundle-install-without-vpn-in-china",
        "teaser":"https://erickguan.me/assets/images/teaser.jpg"},{
        "title": "Binding ACE editor with Rails form helper",
        "excerpt":"ACE editor only can bind with a div container which means rails form helper can’t help when you want to bind with an attribute.I am going to work through my solution. text_area text_area genererates &lt;textarea&gt; which people can edit its content without any js. And this helper helps you forget...","categories": [],
        "tags": ["Rails","JavaScript","ACE"],
        "url": "https://erickguan.me/2014/binding-ace-editor-with-rails-from-helper",
        "teaser":"https://erickguan.me/assets/images/teaser.jpg"},{
        "title": "Ensuring the file uploaded by Refile",
        "excerpt":"Refile is an neat and simple file upload library for Ruby applications. It can be easily to integrated into Rails app. Be advised, I am on its git version 6a25a24059. Recently, I ran into trouble to validate the file exists or uploaded. I went through the AR layer, the model...","categories": [],
        "tags": ["Rails","Ruby","Gem"],
        "url": "https://erickguan.me/2015/ensure-the-file-uploaded-by-refile",
        "teaser":"https://erickguan.me/assets/images/teaser.jpg"},{
        "title": "Hooray, Webhooks",
        "excerpt":"Webhooks are “user-defined HTTP callbacks” brought by Jeff Lindsay. While it’s augmented for some time, it comes to my sight because of continuous integration like Travis CI at GitHub. Later, Slack made it fancy as every services could pop up messages in the channel as if I was in Enterprise...","categories": [],
        "tags": ["Web"],
        "url": "https://erickguan.me/2016/hooray-webhooks",
        "teaser":"https://erickguan.me/assets/images/teaser.jpg"},{
        "title": "Bridging ICU with Ruby",
        "excerpt":"Chinese Discourse users have more complains to the text problems. A communitysoftware induce users to read and write which certainly deals with texts.Numerous efforts are made along the way such as tokenizers for Chinese. Maintaininga project is not easy.One of feature request for Discourse is Unicode username. A core technical...","categories": [],
        "tags": ["Unicode"],
        "url": "https://erickguan.me/2017/bridging-icu-with-ruby",
        "teaser":"https://erickguan.me/assets/images/teaser.jpg"},{
        "title": "Copy and Paste Bookmarklet",
        "excerpt":"Inspired by DontFuckWithPaste. But why you ever need an extension taking your 100MB memory when you can have a nice and neat bookmarklet? &gt; Copy &amp; Paste Drag the bookmarklet above into your bookmark bar. If you disable the bookmark bar, right click besides the link bar to get it...","categories": [],
        "tags": ["Tip"],
        "url": "https://erickguan.me/2017/copy-and-paste-bookmarklet",
        "teaser":"https://erickguan.me/assets/images/teaser.jpg"},{
        "title": "The Surprising Number in JavaScript",
        "excerpt":"Did you know you can not have a number larger than in JavaScript? You might try this in Chrome Developer Console and want to tell me that it works in Chrome. It works because you are lucky. What is a Number? Let’s take a step back and review what is...","categories": [],
        "tags": ["Programming Language"],
        "url": "https://erickguan.me/2017/the-surprise-number-in-javascript",
        "teaser":"https://erickguan.me/assets/images/teaser.jpg"},{
        "title": "K-Nearest Neighbor Classification in Scikit Learn",
        "excerpt":"K-Nearest Neighbor (k-NN) presents a a simple straightforward instance-basedlearning. Often, a simple strategy produces a good result as well as acting asbaseline performance. This article doesn’t deliver new knowledge but an interpretation and bridge toothers’ work. The reader need to understand the very basic of Machine Learning.Especially, code is done...","categories": [],
        "tags": ["Pattern Recognition","Artificial Intelligence"],
        "url": "https://erickguan.me/2017/k-nearest-neighbour-in-scikit-learn",
        "teaser":"https://erickguan.me/assets/images/teaser.jpg"},{
        "title": "Digging in Python iterator and enumerate",
        "excerpt":"When a PyTorch DataLoader repeat its data? Why it’s so magical and impossible to see in its code. It is implemented as an iterator in Python. Pythonic but implicit. Use case for i_batch, sample_batched in enumerate(data_loader): print(i_batch, sample_batched)The enumerate is not hard to understand which only returns the sequence and...","categories": [],
        "tags": ["Python","Programing language"],
        "url": "https://erickguan.me/2018/python-iterator",
        "teaser":"https://erickguan.me/assets/images/2018/erik-eastman-256489-unsplash-200.jpg"}]
