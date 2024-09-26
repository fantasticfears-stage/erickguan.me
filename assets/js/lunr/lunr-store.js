var store = [{
        "title": "Complicated Wikipedia Scripts Management",
        "excerpt":"After MediaWiki 1.23/wmf3 had been deployed to all Wikimedia sites, old collapse element didn’t work any more on zhwikipedia. The administrator Liangent deleted the old(2009 or even before)  code using pure JavaScript API on MediaWiki:Common.js. Then we tried to solve these mess. Upstream We decided to make use of upstream module - jQuery.makeCollapsible, for reducing maintenance costs. This...","categories": [],
        "tags": ["Wiki","MediaWiki"],
        "url": "/2013/complicated-wikipedia-scripts-management",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "Mechanize encoding problem with GBK",
        "excerpt":"I tried to use Mechanize for fetching data in a restricted site, but response html with GBK encoding is overwhelm me. Since Mechanize can store the cookie and detect encoding, it seems I can save a lot of time to fetch data. But I ran into encoding problem soon. I...","categories": [],
        "tags": ["Mechanize"],
        "url": "/2014/mechanize-encoding-problem-with-gbk",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "Failed Attempt to Chinese Speech Recognition Service",
        "excerpt":"It’s obvious that many application supports speech recognition for sentences. Actually, everywhere. But here I want is to convert a Chinese podcast, Teahour.fm, to text for read. It’s about 80 minutes per podcast. There is no silver bullet here. Even the text can be automated converted, it’s still need to...","categories": [],
        "tags": [],
        "url": "/2014/failed-attempt-to-chinese-speech-recognition-service",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "Adding a system call to Linux 3.14",
        "excerpt":"There are plenty of blog posts about adding a system call to Linux 2.6, but they are out of date now. Here is a article about adding a system call to Linux 3.14. I assume you can easily add the system call for further kernel. Shane wrote a great post...","categories": [],
        "tags": ["Linux"],
        "url": "/2014/add-a-system-call-to-linux-3-14",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "Bundle install without VPN in China",
        "excerpt":"EDIT: Recommended mirror site updated in the end. RubyGems got blocked by GFW which blocks everytime you do bundle install. It’s because some of Amazon S3 are blocked by gov. In the mainland China, we can just use mirror provided by Taobao. It’s fast. It sync with RubyGems every fifteen...","categories": [],
        "tags": ["GFW","Bundler"],
        "url": "/2014/bundle-install-without-vpn-in-china",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "Binding ACE editor with Rails form helper",
        "excerpt":"ACE editor only can bind with a div container which means rails form helper can’t help when you want to bind with an attribute. I am going to work through my solution. text_area text_area genererates &lt;textarea&gt; which people can edit its content without any js. And this helper helps you...","categories": [],
        "tags": ["Rails","JavaScript","ACE"],
        "url": "/2014/binding-ace-editor-with-rails-from-helper",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "Ensuring the file uploaded by Refile",
        "excerpt":"Refile is an neat and simple file upload library for Ruby applications. It can be easily to integrated into Rails app. Be advised, I am on its git version 6a25a24059. Recently, I ran into trouble to validate the file exists or uploaded. I went through the AR layer, the model...","categories": [],
        "tags": ["Rails","Ruby","Gem"],
        "url": "/2015/ensure-the-file-uploaded-by-refile",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "Hooray, Webhooks",
        "excerpt":"Webhooks are “user-defined HTTP callbacks” brought by Jeff Lindsay. While it’s augmented for some time, it comes to my sight because of continuous integration like Travis CI at GitHub. Later, Slack made it fancy as every services could pop up messages in the channel as if I was in Enterprise...","categories": [],
        "tags": ["Web"],
        "url": "/2016/hooray-webhooks",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "Bridging ICU with Ruby",
        "excerpt":"Chinese Discourse users have more complains to the text problems. A community software induce users to read and write which certainly deals with texts. Numerous efforts are made along the way such as tokenizers for Chinese. Maintaining a project is not easy. One of feature request for Discourse is Unicode...","categories": [],
        "tags": ["Unicode"],
        "url": "/2017/bridging-icu-with-ruby",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "Copy and Paste Bookmarklet",
        "excerpt":"Inspired by DontFuckWithPaste. But why you ever need an extension taking your 100MB memory when you can have a nice and neat bookmarklet? &gt; Copy &amp; Paste Drag the bookmarklet above into your bookmark bar. If you disable the bookmark bar, right click besides the link bar to get it...","categories": [],
        "tags": ["Tip"],
        "url": "/2017/copy-and-paste-bookmarklet",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "The Surprising Number in JavaScript",
        "excerpt":"Did you know you can not have a number larger than \\(2^{53}-1\\) in JavaScript? You might try this in Chrome Developer Console and want to tell me that it works in Chrome. It works because you are lucky. What is a Number? Let’s take a step back and review what...","categories": [],
        "tags": ["Programming Language"],
        "url": "/2017/the-surprise-number-in-javascript",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "K-Nearest Neighbor Classification in Scikit Learn",
        "excerpt":"K-Nearest Neighbor (k-NN) presents a a simple straightforward instance-based learning. Often, a simple strategy produces a good result as well as acting as baseline performance. This article doesn’t deliver new knowledge but an interpretation and bridge to others’ work. The reader need to understand the very basic of Machine Learning....","categories": [],
        "tags": ["Pattern Recognition","Artificial Intelligence"],
        "url": "/2017/k-nearest-neighbour-in-scikit-learn",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "Digging in Python iterator and enumerate",
        "excerpt":"When a PyTorch DataLoader repeat its data? Why it’s so magical and impossible to see in its code. It is implemented as an iterator in Python. Pythonic but implicit. Use case for i_batch, sample_batched in enumerate(data_loader): print(i_batch, sample_batched) The enumerate is not hard to understand which only returns the sequence...","categories": [],
        "tags": ["Python","Programing language"],
        "url": "/2018/python-iterator",
        "teaser": "/assets/images/2018/erik-eastman-256489-unsplash-200.jpg"
      },{
        "title": "Take it slow in life",
        "excerpt":"Internet profoundly changes human life. I read a magazine when I was a kid. It says “Everything at your fingertip.” This refers to the internet. It finally becomes truth however terrifying reality. People start to live in the matrix and feed on their own biases. Nobody sells happiness. It can’t...","categories": [],
        "tags": ["Psychology","Development"],
        "url": "/2018/take-it-slow-in-life",
        "teaser": "/assets/images/2018/rikke-filbaert-357311-unsplash-200.jpg"
      },{
        "title": "3 steps to start Google Summer of Code with Discourse",
        "excerpt":"Discourse is a wonderful free and open source software for a modern forum. Now it has already powered many projects’ forum. Take a look at where it’s built and others. Why Discourse? Firstly, you need to know what project you are looking for. For example, what’s Discourse? Discourse is an...","categories": [],
        "tags": [],
        "url": "/2018/how-you-start-gsoc-with-discourse",
        "teaser": "/assets/images/2018/gsoc-shirt-200.jpg"
      },{
        "title": "How to have a data science lab in 13 steps?",
        "excerpt":"TL;DR. You have to be passionate and insane. I would not recommend doing it. Research is an exciting thing. The purpose is to produce knowledge. You have the ultimate freedom because the job is about extending knowledge towards unknown. 1. Love Computer Science You have to believe in what you...","categories": [],
        "tags": ["Programing","Science"],
        "url": "/2018/how-to-have-a-data-science-lab",
        "teaser": "/assets/images/2018/antenna-503044-unsplash-200.jpg"
      },{
        "title": "How PyTorch implements DataParallel?",
        "excerpt":"PyTorch can send batches and models to different GPUs automatically with DataParallel(model). How is it possible? I assume you know PyTorch uses dynamic computational graph as well as Python GIL. And PyTorch version is v1.0.1. This is a complicated question and I asked on the PyTorch forum. I got a...","categories": [],
        "tags": ["PyTorch","Python","Programming"],
        "url": "/2019/pytorch-parallel-model",
        "teaser": "/assets/images/2019/Pytorch_logo-200.png"
      },{
        "title": "A decade with Wikipedia",
        "excerpt":"I’ve spent a decade with Wikipedia. I was lucky to know internet when I was young. And it didn’t take me long to know Wikipedia. When I started my journey with Wikipedia at 2008, it was quite new for Chinese too. Growing with Chinese Wikipedia community certainly gave me a...","categories": [],
        "tags": ["Society","Wikimedia"],
        "url": "/2019/a-decade-with-wikipedia",
        "teaser": "/assets/images/2019/jon-tyson-520955-unsplash-200.jpg"
      },{
        "title": "Popular connectors for computers",
        "excerpt":"Pin out tables, some photos and parts of data come from Wikipedia. Computers have various of connectors for their diverse use case. Overtime, old standard become obselete and new connector emerges. Some of them established their ground and dominates in their domains. It’s interesting to note their capability and how...","categories": [],
        "tags": ["Computers"],
        "url": "/2020/popular-connectors-for-computers",
        "teaser": "/assets/images/2020/taylor-vick-M5tzZtFCOfs-unsplash-200.jpg"
      },{
        "title": "WebAssembly vs. JVM: An Informal Peek",
        "excerpt":"Recently, WebAssembly (WASM) has gained traction as a reference runtime, providing a way to run programs written in different programming languages. However, the Java Virtual Machine (JVM) is another popular platform for achieving similar functionality. When it comes to running programs on a virtual machine or compiling them into machine...","categories": [],
        "tags": ["Runtime"],
        "url": "/2023/wasm-jvm-informal-peek",
        "teaser": "/assets/images/2023/garett-mizunaka-unsplash-640.jpg"
      },{
        "title": "Latency values for programmers in 2024",
        "excerpt":"Latency values are important for modern software. A program usually waits for I/O, another thread to complete a task, or a network request to complete. In a system, a database lock will create contention for other database connections. A global interpreter lock will force other threads to wait. These are...","categories": [],
        "tags": ["Latency"],
        "url": "/2024/latency-values",
        "teaser": "/assets/images/2024/ales-krivec-time-640.jpg"
      }]
