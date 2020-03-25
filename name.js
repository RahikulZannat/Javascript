"use strict"

function name(){
	var name= document.getElementById('name').value;
	var word=name.html().split('');

	document.write(wordCount);
	if(name=="")
	{
		alert("Can not be empty")
	}
	else if(wordCount.length<2){
		alert("Contains at least two words");
	}
	else document.getElementById('message').innerHTML="OK";
	}
}

