
var Twit = require('twit');

var bot = new Twit({
  consumer_key: process.env.TWITBOT_CONSUMER_KEY,
  consumer_secret: process.env.TWITBOT_CONSUMER_SECRET,
  access_token: process.env.TWITBOT_ACCESS_TOKEN,
  access_token_secret: process.env.TWITBOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

bot.get('friends/list', { screen_name: 'enemyturetahead' },
  function (err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
