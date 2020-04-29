---
layout: single
title: Failed Attempt to Chinese Speech Recognition Service
---

It's obvious that many application supports speech recognition for sentences. Actually, everywhere.

But here I want is to convert a Chinese podcast, [Teahour.fm](http://teahour.fm/), to text for read. It's about 80 minutes per podcast. There is no silver bullet here. Even the text can be automated converted, it's still need to be make it readable for human, editor work.

## Speech Recognition Service for Chinese

I got 3 choices.

1. [Unpublished Google Speech API](https://github.com/gillesdemey/google-speech-v2), it's used for Android and Google services.
2. [Xunfei](http://open.voicecloud.cn/index.php/default/index). Local company, leading Chinese speech recognition. It provides many SDK. But the document is shit and no support for OS X.
3. [CMU Sphinx4](http://cmusphinx.sourceforge.net/). I can find some article about PocketSphinx. Not enough to me to understand the how it works and its API. I beg for documents and examples. I tried it, but ended it with its IndexOutOfBoundsException. Come on, you can't be serious...

Actually, I found more service for speech recognition service. But it's used for sentence. And for mobile app...

## Final choice

I came back to Google Speech API. The limitation is you can't POST big audio file, nor long audio. So I wrote the Ruby script to slice the podcast into 5 seconds piece. And the results is not good.
I can't

1. slice the audio at the correct point, e.g. one sentence for one request. *Exploring Everyday Things with R and Ruby* may include some interesting way to slice the audio.
2. and Google Speech API is not good enough to know Chinese. You just got meaningless word combinations.

## Script

Anyway, here is the script. FFmpeg is to slice the audio to 5 seconds pieces. A offset was added to randomly choose the point.

    require 'curb'
    require 'multi_json'

    # Config
    file_name = 'teahour.m4a'
    start_time = 0
    end_time = 4990
    duration = 5
    offset = 3
    output_name = 'output.flac'
    result_name = 'result.txt'

    # result file
    result_file = File.new(result_name, 'w')

    # Curl
    google_speech_api_url = 'https://www.google.com/speech-api/v2/recognize?output=json&amp;lang=zh-cn&amp;key=AIzaSyCnl6MRydhw_5fLXIdASxkLJzcJh5iX0M4'
    curl = Curl::Easy.new(google_speech_api_url)
    curl.headers['Content-Type'] = 'audio/x-flac; rate=32000'

    (start_time..end_time).step(duration) do |n|
      (0..offset).step(1) do |o|
        # ffmpeg
        command = 'ffmpeg -y -i ' + file_name + ' -f flac -ss ' + (n + o).to_s +
              ' -t ' + duration.to_s + ' ' + output_name
        system command

        # preapre for request
        data = File.read(output_name)
        curl.post_body = data
        begin
          curl.http_post
        rescue
          next
        end

        # parse the result, assumption exist
        json = MultiJson.load(curl.body, symbolize_keys: true)
        result = begin
          json[:result][0][:alternative][0][:transcript]
        rescue
          ''
        end
        result_file.puts(result)
      end
    end

    result_file.close
