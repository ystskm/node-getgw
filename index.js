/***/
// [node-getgw] index.js
var NULL = null, TRUE = true, FALSE = false;
var g = global;
var net = require('net');
module.exports = getGw;
function getGw(IP, options) {
  var opts = options || { };
  if(opts.port == NULL) {
    opts.port = 53;
  }
  return new Promise((rsl, rej)=>{
    dns.lookupService(IP, opts.port, (e, r)=>{ e ? rej(e): rsl(r) });
  });
}
