function decryptMessage(){
	var key = document.getElementById('key').value;
	var msg = document.getElementById('message').value;
	msg = msg.substring(1,msg.length-1);
	var unfoldedMsg = '';

	while(unfoldedMsg.indexOf(key) != 0){
		unfoldedMsg = '';
		for (var i =0; i<msg.length; i+=2){

			unfoldedMsg = unfoldedMsg.substring(0,unfoldedMsg.length/2) + msg.charAt(i+1) + msg.charAt(i) + unfoldedMsg.substring(unfoldedMsg.length/2)
		}
		msg = unfoldedMsg;
	}

	var decryptedMessage = msg.substring(key.length);
	document.getElementById('decryptedMessage').innerHTML = decryptedMessage;
}