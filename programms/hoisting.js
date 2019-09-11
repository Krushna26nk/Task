
var message = getMessage('Sam');

function getMessage (name) {

  var completeMessage = intro + ' ' + name;
  var intro = 'Hello my name is';
  return completeMessage;
}

console.log('Message: ', message);