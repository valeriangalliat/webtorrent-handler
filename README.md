# webtorrent-handler [![npm version](http://img.shields.io/npm/v/webtorrent-handler.svg?style=flat-square)](https://www.npmjs.org/package/webtorrent-handler)

> Integrate BitTorrent resources in your web pages over [WebTorrent].

[WebTorrent]: https://github.com/feross/webtorrent

Overview
--------

**webtorrent-handler** allows you to embed torrent resources (currently
only videos) within web pages.

This is allowed by using [WebTorrent] to stream torrents using WebRTC.

You need to ensure the magnet links you provide are available over
WebRTC (at last one WebRTC/hybrid seeder).

Usage
-----

```html
<video src="movie.webm" data-torrent="{{ torrentId }}"></video>
<script src="webtorrent-handler.min.js"></script>
```

See [`client.add`](https://github.com/feross/webtorrent#clientaddtorrentid-opts-function-ontorrent-torrent-)
for acceptable `torrentId` values.

For example, if you have a file `test.webm`, you can seed it with
[WebTorrent Hybrid] like this:

```sh
webtorrent-hybrid seed test.webm
```

It will be announced on the [default WebTorrent trackers][trackers],
including the WebSocket tracker used by default by WebRTC peers, and you
will get an info hash that you can use as `data-torrent`.

[WebTorrent Hybrid]: https://github.com/feross/webtorrent-hybrid
[trackers]: https://github.com/feross/create-torrent/blob/d695be591959986aaab35df9174bd6d1b1a45e98/index.js#L4-L8
