var triplesec = require('triplesec');

document.getElementById("encryptBtn").addEventListener("click", encrypt);
document.getElementById("decryptBtn").addEventListener("click", decrypt);

function encrypt(){
payload = document.getElementById("encryptTextInput").value;
key = document.getElementById("encryptKeyInput").value;


triplesec.encrypt ({

    data:          new triplesec.Buffer(payload),
    key:           new triplesec.Buffer(key),
    progress_hook: function (step, iterations, i) { /* ... */ }

}, function(err, buff) {
  
    if (! err) { 
        var ciphertext = buff.toString('hex');
		console.log("Here's your encrypted text: \n \n" + ciphertext + "\n");
    }

});
}


function decrypt(){
	payload = document.getElementById("decryptTextInput").value;
	key = document.getElementById("decryptKeyInput").value;

	triplesec.decrypt ({

    	data:          triplesec.Buffer.from(payload, "hex"),
    	key:           triplesec.Buffer.from(key),
    	progress_hook: function (obj) { /* ... */ }

	}, function (err, buff) {

    	if (! err) {
        	var decryptedText = buff.toString();
        	console.log("Here's your decrypted text: \n \n" + decryptedText + "\n");
    	}

	});
}