'use strict';

let https = require('https');

const options = {
  host: 'api.travis-ci.org',
  port: 443,
  path: '/repo/ScreeningONE%2FScreeningONEPublicWeb/requests',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Travis-API-Version': 3,
    'Authorization': 'token ' + process.env.TRAVIS_TOKEN
  }
};

module.exports.handler = function(event, context, cb) {
  const req = https.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
    res.on('end', function() {
      cb(null, { message: 'Finished sending message to travis' });
    });
  });

  req.on('error', cb);
  req.write(JSON.stringify({request: {branch: 'master', message: 'update from contentful'}}));
  req.end();
};
