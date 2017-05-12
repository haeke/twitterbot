

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

//list who is currently following you ( twitter username )
bot.get('followers/list', { screen_name: '' },
  function (err, data, response) {
    if (err) {
      console.log(err);
    } else {
      //list the usernames of who follows this user
      data.users.forEach(function (user) {
        console.log(user.screen_name);
      });
    }
  });

//list users who you are following a username
bot.get('friends/list', { screen_name: '' },
  function (err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

//lookup who is following you
bot.get('frienships/lookup', { screen_name: '' },
  function (err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

//follow a user ( maybe follow who is following you? )
bot.get('friendships/create', { screen_name: '' },
      function (err, data, response) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });

//direct message a user
bot.post('direct_messages/new', { screen_name: '', text: 'some text' },
  function (err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
