var express = require('express')

var scripts = require('./bin/scripts');

var get_ip = require('ipware')().get_ip;
var ip = require('ip');




var app = express()


app.get('/', function (req, res) {

  var user_agent = require('ua-parser').parse(req.headers['user-agent']);

  res.json({
            Ip_Host:ip.address(),
            IP_Client:get_ip(req).clientIp,
            OS:user_agent.os.toString(),
            Language: scripts.detect_language(req)
          });

});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})
