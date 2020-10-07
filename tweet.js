var Twit = require('twit');
var fs =require('fs');

var T = new Twit({
  consumer_key:         'gjwdN2Z4xM5To0JFVikDb3D2J',
  consumer_secret:      'ZHMYFMVrkx3JloLjWkmMrUu6r0TGApl31Sdv9Zmwf6QS1Cb1t9',
  access_token:         '344709996-RS6wRH2sRLJL3ALE4oCKBvM3pBGFQL26Zey94c2p',
  access_token_secret:  'FabF65itYQIy8nE9sWMFJSS0dYEnmxSHVgldTTcy7Qlau',
  //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var stream = T.stream('statuses/filter')

stream.on('tweet', function (tweet) {
  console.log(tweet)
})

//
//  filter the twitter public stream by the word 'mango'.
//
// var stream = T.stream('statuses/filter', { track: 'modi' });
// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// });
// T.get('search/tweets', { q: 'modi since:2018-03-28', count: 10 }, function(err, data, response) {
//   var i=0;
//   while(i<10)
//   {
//     console.log(data.statuses[i].text);
//     console.log(data.statuses[i].user.screen_name);
//     i++;
//   }
//   //console.log(data)
// })


// T.get('followers/ids', { screen_name: 'tolga_tezel' },  function (err, data, response) {
//   console.log(data)
// });
