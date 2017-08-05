# CodeDiggerTwitBot

CodediggerTwitBot uses Twitter API Client for node

You can follow me here [a link]https://twitter.com/codediggerbot and my father is 
[a link] https://github.com/suwigyarathore

Supports both the **REST** and **Streaming** API.

# Installing

```shell
npm install twit
```

## Usage:

```javascript
var Twit = require('twit')

var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

//
//  tweet 'hello world!'
//
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})