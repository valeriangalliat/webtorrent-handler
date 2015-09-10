var WebTorrent = require('webtorrent')
var MediaSourceStream = require('mediasource')
var path = require('path')

function findTorrents () {
  return Array.prototype.slice.call(document.querySelectorAll('[data-torrent]'))
}

var client = new WebTorrent({ dht: false })

findTorrents().forEach(function (elem) {
  elem.src = ''

  client.add(elem.dataset.torrent, function (torrent) {
    var file = torrent.files[0]
    var extname = path.extname(file.name).toLowerCase()

    file.createReadStream().pipe(new MediaSourceStream(elem, { extname: extname }))
  })
})
