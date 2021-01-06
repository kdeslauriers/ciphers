/* Uses the ASCII table and does not wrap back to A and Z if we go outside of the range.
It handles the all characters.
*/
function encryptCaesarV1(){
	var msg = document.getElementById('message').value;
	var shift = parseInt(document.getElementById('shift').value);

	var encryptedMsg = '';
	for (var i=0; i<msg.length; i++){
		encryptedMsg += String.fromCharCode(msg.charCodeAt(i)+shift);
	}

	document.getElementById('encryptedMessageCaesar').innerHTML = encryptedMsg;
}


/*
The original Caesar Cipher. It wraps around the alphabet and keeps spaces. 
This version only works for upper case.
*/
function encryptCaesarV2(){
	var msg = document.getElementById('message').value;
	var shift = parseInt(document.getElementById('shift').value);

	var encryptedMsg = '';
	for (var i=0; i<msg.length; i++){
		
		var newChar = msg.charCodeAt(i)+shift;
		if (newChar - shift == 32)
			newChar = 32;
		else if (newChar > 90)
			newChar -= 26;
		else if (newChar < 65)
			newChar += 26;

		encryptedMsg += String.fromCharCode(newChar);
	}

	document.getElementById('encryptedMessageCaesar').innerHTML = encryptedMsg;
}

function encryptSubstitution(){
	var plainAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
	var key = document.getElementById('key').value;
	var msg = document.getElementById('message').value;


	var chiperAlphabet = '';

	for (var i=0; i<key.length; i++){
		var nextLetter = key.charAt(i);
		if (chiperAlphabet.indexOf(nextLetter)<0)
			chiperAlphabet += nextLetter;
	}

	for (var i=0; i<plainAlphabet.length; i++){
		var nextLetter = plainAlphabet.charAt(i);
		if (chiperAlphabet.indexOf(nextLetter)<0)
			chiperAlphabet += nextLetter;
	}

	chiperAlphabet += ' ';
	
	var encryptedMsg = '';
	for (var i=0; i<msg.length; i++){
		var nextLetter = msg.charAt(i);
		var index = plainAlphabet.indexOf(nextLetter);
		encryptedMsg += chiperAlphabet.charAt(index);

	}

	document.getElementById('encryptedMessageSubstitution').innerHTML = encryptedMsg;


}