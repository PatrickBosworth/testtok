// replace these values with those generated in your TokBox Account
var apiKey = "45942552";
var sessionId = "1_MX40NTk0MjU1Mn5-MTUxODI1NzI5ODc0OH40RXJRT2JiQ0k5V0htRVVoZ2tRdGxvT01-fg";
var token = "T1==cGFydG5lcl9pZD00NTk0MjU1MiZzaWc9NzQ4ODJkOGFmYTgzYjY1ZjhiODI3MzFmZmIyM2NkMWUwN2NkN2M1NDpzZXNzaW9uX2lkPTFfTVg0ME5UazBNalUxTW41LU1UVXhPREkxTnpJNU9EYzBPSDQwUlhKUlQySmlRMGs1VjBodFJWVm9aMnRSZEd4dlQwMS1mZyZjcmVhdGVfdGltZT0xNTE4MjU3MzEzJm5vbmNlPTAuNzk3NTgzMTUwMDYwMDEzMiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTE4MjYwOTE2JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();
// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
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
