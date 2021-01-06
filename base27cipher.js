function decryptMessage(){
	var message = document.getElementById('message').value;
	var key = document.getElementById('key').value;
	/*
	var step1 = [];
	for (var i=0; i<msg.length; i++){

		step1[i] = msg.charCodeAt(i) - 65 + 1;
		if (step1[i] == -18)
			step1[i] = 0;
	}

	console.log(step1);

*/


	
	var convertedKey = convert(key.substring(0, 5));
	var decimalKey = convertToDecimal(convertedKey);

	var numSegments = message.length/5;
	
	// 2d array
	var convertedMessage = new Array(numSegments);
	var decryptedMessage = "";
	
	// 1d array
	var decimalMessage = new Array(numSegments);
	for (var i=0; i<numSegments; ++i){
		convertedMessage[i] = convert(message.substring(i*5, i*5+5));
		decimalMessage[i] = convertToDecimal(convertedMessage[i]);
		decimalMessage[i] = (14348907 + decimalMessage[i] - decimalKey)%14348907;	// ensure we do not have negatives.
				
		decryptedMessage += decryptDecimal(decimalMessage[i]);
				
	}
			
			
	var k = decryptedMessage.length-1;
	while (decryptedMessage.charAt(k) == '.'){
		k--;
	}	
	decryptedMessage = decryptedMessage.substring(0, k+1);
			
	document.getElementById('decryptedMessage').innerHTML = decryptedMessage;
}

	function decryptDecimal(number) {
		number = parseInt(number);
		var answer = "";
		var i = 0;
		while(number != 0){
			if (parseInt(number%27) == 0) answer = '.' + answer;
			else answer = String.fromCharCode(parseInt(number%27) + 64) + answer;
			number /= 27;
			number = parseInt(number);
			i++;
		}
		
		if (i != 5) answer = '.' + answer;
		return answer;
	}


	function convertToDecimal(convertedKey) {
		var temp = 0;
		for (var i=0; i<5; ++i){
			temp += convertedKey[i] * Math.pow(27, 4-i);
		}
		return temp;
	}


	function convert(key) {
		var solved = new Array(5);
		
		for (var i=0; i<key.length; ++i){
			solved[i] = key.charCodeAt(i) - 64;
			if (solved[i] < 0) solved[i] = 0;
		}
		
		return solved;
	}