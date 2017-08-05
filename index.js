var Twit = require('twit');


var bot = new Twit({
  consumer_key: process.env.CODEDIGGERBOT_CONSUMER_KEY,
  consumer_secret: process.env.CODEDIGGERBOT_CONSUMER_SECRET,
  access_token: process.env.CODEDIGGERBOT_ACCESS_TOKEN,
  access_token_secret: process.env.CODEDIGGERBOT_ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000
});


function dailyTweeter() {
  bot.get('search/tweets', {
    q: 'angular4 OR reactjs OR nodejs OR rxjs OR javascript',
    result_type: 'recent' /*result_type:'popular'*/,
    count: 1
  }, (err, data, response) => {
    if (err) {
      console.log(err);
    } else {
      data.statuses.forEach((s) => {
        let cleansedTwit = s.text.replace('RT', '').trim();
        bot.post('statuses/update', {status: cleansedTwit}, (err, data, response) => {
          if (err) {
            console.log(err);
          } else {
            console.log(s.text + 'was tweeted.');
          }
        });
      })
    }
  });
}



setInterval(function(){
  dailyTweeter();
}, 60*1000);
