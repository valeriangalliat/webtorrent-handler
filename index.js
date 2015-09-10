var WebTorrent = require('webtorrent')

function findTorrents () {
  return Array.prototype.slice.call(document.querySelectorAll('[data-torrent]'))
}

var client = new WebTorrent()

findTorrents().forEach(function (elem) {
  elem.src = ''

  client.add(elem.dataset.torrent, function (torrent) {
    torrent.files[0].renderTo(elem)
  })
})
