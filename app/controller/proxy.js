import http from 'http';
import httpProxy from 'http-proxy';
import { wshost, wsport } from "../util/constants.js";

/**
 * Code below will proxy the workspace's websocket
 */
var proxy = new httpProxy.createProxyServer({
  target: {
    host: wshost,
    port: wsport
  }
});
export var proxyServer = http.createServer(function (req, res) {
  proxy.web(req, res);
});
proxyServer.on('upgrade', function (req, socket, head) {
  let t = req.url;
  if(validateToken(token)){
    console.log("Beginning WS proxy.")
    proxy.ws(req, socket, head);
  }
});
proxyServer.on('close', function (req, socket, head){
  console.log("Close event detected. Immolating")
  immolate();
});