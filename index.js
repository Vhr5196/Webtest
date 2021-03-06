const express = require("express"); //importing express module
const bodyParser = require("body-parser");
const app = express(); //create an express object

app.use(bodyParser.urlencoded({
  extended: true
}));
let obj = {
  "errorCode": 0,
  "data": {
    "questionRound": "001",
    "question": [{
        "questionId": 1,
        "radio": true,
        "content": "What is your age？",
        "option": [{
            "A": "18-25"
          },
          {
            "B": "26-30"
          },
          {
            "C": "30 and above"
          }
        ]
      },
      {
        "questionId": 2,
        "radio": true,
        "content": "What language do you prefer to read on webpage for understanding the event?",
        "option": [{
            "A": "English"
          },
          {
            "B": "Hinglish"
          },
          {
            "C": "other.[Input answer] "
          }
        ]
      },
      {
        "questionId": 3,
        "radio": true,
        "content": "What type of event designs do you like?",
        "option": [{
            "A": "Cool/Trendy"
          },
          {
            "B": "Cute"
          },
          {
            "C": "Simple"
          },
          {
            "D": "other.[Input answer]"
          }
        ]
      },
      {
        "questionId": 4,
        "radio": true,
        "content": "Are the events easy to understand?",
        "option": [{
            "A": "Yes"
          },
          {
            "B": "No did not undertand the event"
          },
          {
            "C": "Little difficult but understood"
          }
        ]
      },
      {
        "questionId": 5,
        "radio": true,
        "content": "Which was your fav. event in APRIL ?",
        "option": [{
            "A": "http://kkimg.kktv9.com/activity/730/20200517125003_781.png"
          },
          {
            "B": "http://kkimg.kktv9.com/activity/730/20200517124939_779.png"
          },
          {
            "C": "http://kkimg.kktv9.com/activity/730/20200517125025_753.png"
          },
          {
            "D": "http://kkimg.kktv9.com/activity/730/20200517125044_342.png"
          }
        ]
      },
      {
        "questionId": 6,
        "radio": true,
        "content": "Which was your fav. event design in APRIL?",
        "option": [{
            "A": "http://kkimg.kktv9.com/activity/730/20200517125003_781.png"
          },
          {
            "B": "http://kkimg.kktv9.com/activity/730/20200517124939_779.png"
          },
          {
            "C": "http://kkimg.kktv9.com/activity/730/20200517125025_753.png"
          },
          {
            "D": "http://kkimg.kktv9.com/activity/730/20200517125044_342.png"
          }
        ]
      },
      {
        "questionId": 7,
        "radio": true,
        "content": "How usually do you come to know about events on the app?",
        "option": [{
            "A": "Through Employees/whatsapp group promotion"
          },
          {
            "B": "By Checking banner"
          },
          {
            "C": "through room icon"
          },
          {
            "D": "through other users"
          }
        ]
      },
      {
        "questionId": 8,
        "radio": true,
        "content": "what are your favourite rewards other than  Gems and beans?",
        "option": [{
            "A": "Entrances "
          },
          {
            "B": "Profile frame/badge"
          },
          {
            "C": "Slider banner"
          },
          {
            "D": "other.[Input answer]"
          }
        ]
      },
      {
        "questionId": 9,
        "radio": true,
        "content": "what kind of events do you like to participate in?",
        "option": [{
            "A": "Lucky draw/ Games"
          },
          {
            "B": "Events which include view time of users on talent broadcasts"
          },
          {
            "C": "Contest with backpack gifts"
          },
          {
            "D": "other.[Input answer]"
          }
        ]
      },
      {
        "questionId": 10,
        "radio": true,
        "content": "What kind of gifts do you like?",
        "option": [{
            "A": "Gifts with long animation which relates to your culture"
          },
          {
            "B": "Gifts with cute/romantic animations"
          },
          {
            "C": "Gift animation don't matter much"
          }
        ]
      },
      {
        "questionId": 11,
        "radio": true,
        "content": "Other than Beans/gems count,on what basis do you want us to make competition on?",
        "option": [{
            "A": "Likes on SK posts"
          },
          {
            "B": "Number of Followers"
          },
          {
            "C": "other.[Input answer]"
          }
        ]
      }
    ]
  }
}

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/data", function(req, res) {
  res.json(obj);
});

app.post("/", function(req, res) {
  console.log(req.body.newItem);
});


app.listen(3000, function() {
  console.log("server is up and running on 3000");

});
