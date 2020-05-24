var HttpsProxyAgent = require('https-proxy-agent');
var proxyConfig = [{
  context:'/*',
  target: 'elasticsearch.tpconnects.com',
  secure: false,
  changeOrigin: true,
  proxy:'elasticsearch.tpconnects.com',
  port:'443'
}];

function setupForCorporateProxy(proxyConfig) {
  var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    var agent = new HttpsProxyAgent(proxyServer);
    console.log('Using corporate proxy server: ' + proxyServer);
    proxyConfig.forEach(function(entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);