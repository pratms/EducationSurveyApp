var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require('mongodb')
var mongojs = require('mongojs');
var routes = require('./routes/index');
var users = require('./routes/users');


var app = express();

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.post('/view1', function(req, res) {
    console.log(req.body.search);
    res.end();
    var accountSid = 'AC5b3a64ad844dfbb918812897bcf2a1ce'; 
    var authToken = '8c055fe15f07533ff69388be72b93b16';  

    var twilio = require('twilio');
    var client = new twilio.RestClient(accountSid, authToken);
if (req.body.search) 
{
  var num = req.body.search;


client.messages.create({
    body: 'How satisfied are you with the quality of education in your area. Type your AreaCode option \n A.Extermely Satisfied \n B.Moderately Satisfied \n C. Not at all Satisfied \n (eg. 11111 A) send us a reply',
    to: num,  
    from: '+16466528019' 
}, function(err) {
    console.log(err);
}
);

};
});

app.get('/posts', function(req, res)
{
   db.details.find(function(err, data) 
  {

     console.log(data);
     res.json(data);
  });



});


app.get('/', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
       if (req.body.Body == 'Start') {
      twiml.message('How satisfied are you with the quality of education in your area. Type your AreaCode option \n A.Extermely Satisfied \n B.Moderately Satisfied \n C. Not at all Satisfied \n (eg. 11111 A) send us a reply');
     }
     else
     {
      var string = req.body.Body;
        var from = req.body.From;

      string = string.split(" ");
      var stringArray = new Array();
      for(var i =0; i < string.length; i++)
      {
      stringArray.push(string[i]);

      }
      var str = stringArray[1].toLowerCase();

      var zip = stringArray[0];

   if (str == 'a') {
            twiml.message('Thanks for your feedback');
            
          db.details.insert( { number: from, zip: zip, response: "Extermely Satisfied"  } )

    } 
    
    else if(str == 'b') {
        twiml.message('Thanks for your feedback');
        
        db.details.insert( { number: from, zip: zip, response: "Moderately Satisfied"  } )
    
     } 
     else if(str == 'c') 
     {

        twiml.message('Thanks for your feedback');
        
        db.details.insert( { number: from, zip: zip, response: "Not at all Satisfied"  } )
     }

     else 
     {
        twiml.message('Invalid Response try again.');
    }



     }

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

app.post('/', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
       if (req.body.Body == 'Start') {
      twiml.message('How satisfied are you with the quality of education in your area. Type your AreaCode option \n A.Extermely Satisfied \n B.Moderately Satisfied \n C. Not at all Satisfied \n (eg. 11111 A) send us a reply');
     }
     else
     {
      var string = req.body.Body;
        var from = req.body.From;

      string = string.split(" ");
      var stringArray = new Array();
      for(var i =0; i < string.length; i++)
      {
      stringArray.push(string[i]);

      }
      var str = stringArray[1].toLowerCase();

      var zip = stringArray[0];

   if (str == 'a') {
            twiml.message('Thanks for your feedback');
            
          db.details.insert( { number: from, zip: zip, response: "Extermely Satisfied"  } )

    } 
    
    else if(str == 'b') {
        twiml.message('Thanks for your feedback');
        
        db.details.insert( { number: from, zip: zip, response: "Moderately Satisfied"  } )
    
     } 
     else if(str == 'c') 
     {

        twiml.message('Thanks for your feedback');
        
        db.details.insert( { number: from, zip: zip, response: "Not at all Satisfied"  } )
     }

     else 
     {
        twiml.message('Invalid Response try again.');
    }



     }

        
 
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
