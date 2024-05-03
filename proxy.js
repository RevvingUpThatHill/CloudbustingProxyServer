var http = require('http'),
    httpProxy = require('http-proxy');

let myhost = 'localhost';
let myport = 8443;
// placeholder.
let token = "tokentoken";
/**
 * TODO: Obtain a fresh token from the 
 */
function getNewToken(){
  let spacesAPI = process.env.spacesAPI;
  fetch(spacesAPI+"/token",
    {body:"{\"token\":\""+token+"\"}"});
}
/**
 * TODO: Code required to validate the token provided by req to the one known by this
 * sidecar
 */
function validateToken(req){
  /** 
  if(extractParam(req, "token") === token){
    setTimeout(function(){getNewToken()}, 5000);
    return true;
  }
  */
}
/**
 * TODO: replace this placeholder with the extraction of "token" param
 */
function extractParam(req, key){
  return "tokentoken";
}

/**
 * Code below will proxy the workspace's websocket
 */
var proxy = new httpProxy.createProxyServer({
  target: {
    host: myhost,
    port: myport
  }
});
var proxyServer = http.createServer(function (req, res) {
  proxy.web(req, res);
});
proxyServer.on('upgrade', function (req, socket, head) {
  if(validateToken){
    proxy.ws(req, socket, head);
  }
});
proxyServer.listen(8444);