---
title: Hooray, Webhooks
tags:
  - Web
---

Webhooks are "user-defined HTTP callbacks" [brought by Jeff Lindsay][ow]. While it's [augmented][au] for some time, it comes to my sight because of continuous integration like Travis CI at GitHub. Later, Slack made it fancy as every services could pop up messages in the channel as if I was in Enterprise bridge:

![Enterprise bridge](/assets/images/USS_Enterprise_(alternate_reality)_bridge.jpg)

It's also interesting to discover how it can be implemented on Ruby on Rails.

## Case Study: Webhooks at GitHub and Slack

Since GitHub and Slack build great webhooks, it's a good practice to see how they build the service.

### GitHub

GitHub runs central repositories for git and origination services. It offers [webhooks][gw] on organization level and repositories level where user can manage webhooks in the admin panel. GitHub allow users to create "up to 20 webhooks for each event on each installation target". has an [Integrations Directory][gid]

Events are triggered on certain scenario: (highlight)

<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>*</code></td>
<td>Any time any event is triggered. <a href="#wildcard-event">Wildcard Event</a> overwrites other events.</td>
</tr>
<tr>
<td><a href="/v3/activity/events/types/#commitcommentevent"><code>commit_comment</code></a></td>
<td>Any time a Commit is commented on.</td>
</tr>
<tr>
<td><a href="/v3/activity/events/types/#pushevent"><code>push</code></a></td>
<td>Any Git push to a Repository. <strong>default event.</strong>
</td>
</tr>
</tbody>
</table>

Illustrated in adding webhook page on the admin panel:

![Adding webhooks at GitHub](/assets/images/github-add-webhooks.png)

With pre-set configuration, GitHub is responsible for sending payload (JSON) based on [event type](https://developer.github.com/v3/activity/events/types/).

However, the payload size will be small than 5MB, otherwise, it will be discarded. It's user's responsibility to monitor payload size.

A HTTP header of webhooks includes event name, unique ID and signature by HMAC hex digest of the payload which uses hook's secret as a key if secret is set.

GitHub build a great API. Webhook can be managed by its API. For testing reason, GitHub provides a [Ping event to test a hook][gpe], [hook's test endpoint](https://developer.github.com/v3/repos/hooks/#test-a-push-hook).

Service hooks are defined sets of webhooks by the [third party at github-services repo](https://github.com/github/github-services). However, GitHub no longer accepts new service instead of urging new integration service to build OAuth application help managing webhooks. Be noted, GitHub integrations directory is different than services. It's just a directory to help redirecting to third party services who manage webhooks.

#### PubSubHubbub

[This crazy name (PubSubHubbub)][pshb] belongs to an open protocol for distributed publish/subscribe communication on the Internet. Their [specification][pshbs] defines a decoupled flow for webhooks.

[A Wordpress plugin][pshbwp] helps you announce new blog post. And GitHub can [serve as a PubSubHubbub hub][gpshb] for all repositories.

It's designed to [overcome polling for getting feed updates][ps]. GitHub will create a webhook if you request the hub.

### Slack

Slack builds the fancy messaging app for teams. Many integrations and bots are just favorable.

Basically, Slack offers incoming and outgoing webhooks. Slash commands is built on these two webhooks.

In terms of [incoming webhooks][siw], sending a JSON payload and plain text to a hashed url would trigger a message with defined name and icon. Simple as that.
[Outgoing webhooks][sow] come with receiving payload of messages. A payload will be sent when triggered by keywords or a new message on the channel. The integrated services can reply back if they want.

As an extension of outgoing webhooks, slash commands send payload to server and reply messages back to the channel. However, bots are separated from other webhooks. They build upon [Slack API][sa] and [realtime API][sra].

## Considerations

Webhooks are highly application-specific. Event payloads would be transported in secure (HTTPS) or plaintext (Don't care) manner according to the content. Therefore, signature (symmetric key) or a token can be used as a way to authentication. For ambitious applications, they offers a way to package webhooks as a service to minimize the deployment cost of webhooks.

[ow]: http://progrium.com/blog/2007/05/03/web-hooks-to-revolutionize-the-web/
[au]: http://timothyfitz.com/2009/02/09/what-webhooks-are-and-why-you-should-care/
[gid]: https://github.com/integrations
[gw]: https://developer.github.com/webhooks/
[gpe]: https://developer.github.com/webhooks/#ping-event
[sa]: https://api.slack.com/web
[sra]: https://api.slack.com/rtm
[siw]: https://api.slack.com/incoming-webhooks
[sow]: https://api.slack.com/outgoing-webhooks
[pshb]: https://github.com/pubsubhubbub/PubSubHubbub
[pshbs]: http://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html
[pshbwp]: https://wordpress.org/plugins/pubsubhubbub/
[gpshb]: https://developer.github.com/v3/repos/hooks/#pubsubhubbub
[ps]: https://github.com/pubsubhubbub/PubSubHubbub/wiki/Why-Polling-Sucks
