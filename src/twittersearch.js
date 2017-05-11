

// include the twit package installed by npm
var Twit = require('twit');

// created a Twit instance that can be used to make requests using the twitter API
var bot = new Twit({
  consumer_key: process.env.TWITBOT_CONSUMER_KEY,
  consumer_secret: process.env.TWITBOT_CONSUMER_SECRET,
  access_token: process.env.TWITBOT_ACCESS_TOKEN,
  access_token_secret: process.env.TWITBOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

//  search twitter for all tweets contained in the query, a count and date are included
bot.get('search/tweets', { q: 'overwatch since:2011-07-11', count: 100 }, function (err, data, response) {
  console.log(data);
});

//get a list of users who follow a certain account
bot.get('followers/ids', { screen_name: 'apple' },  function (err, data, response) {
  console.log(data);
});
