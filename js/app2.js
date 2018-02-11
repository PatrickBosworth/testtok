// replace these values with those generated in your TokBox Account
// var TBapiKey = "45942552";
// var TBsessionId = "2_MX40NTk0MjU1Mn5-MTUxODI2NTc2OTY4NX5WRVdlRGF1NWxYRzBRdHl5WlVZRkp1K2p-fg";
// var TBtoken = "T1==cGFydG5lcl9pZD00NTk0MjU1MiZzaWc9ZmQ0NGU4NjI4ZTAyZWU0ZmIwM2IxOGJhYjViYWU5ZmUyNGZiMjQyNTpzZXNzaW9uX2lkPTJfTVg0ME5UazBNalUxTW41LU1UVXhPREkyTlRjMk9UWTROWDVXUlZkbFJHRjFOV3hZUnpCUmRIbDVXbFZaUmtwMUsycC1mZyZjcmVhdGVfdGltZT0xNTE4MjY1ODAyJm5vbmNlPTAuNjUyNTY3OTU2OTg0MTE4NyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTE4MzUyMjA2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here


$(document).ready(function() {
  $("#startbutton").click(function() {
    var socket = io();
    socket.on('go',(apiKey, sessionId, token) => {
    initializeSession(apiKey,sessionId,token);
    })

  });
});




// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession(apiKey,sessionId,token) {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });


  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
