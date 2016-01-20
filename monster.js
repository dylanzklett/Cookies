


$(document).ready(function(){

	
	
	if (Cookies.get("Snickerdoodle") == null){
		snickerIncrement = 0;
	}else {
		snickerIncrement = parseInt(Cookies.get("Snickerdoodle"));
		$('.snickercount').html(snickerIncrement);
	}
	if (Cookies.get("Oatmeal") == null){
		oatIncrement = 0;
	}else {
		oatIncrement = parseInt(Cookies.get("Oatmeal"));
		$('.oatcount').html(oatIncrement);
	}
	if (Cookies.get("Gingerbread") == null){
		gingerIncrement = 0;
	}else {
		gingerIncrement = parseInt(Cookies.get("Gingerbread"));
		$('.gingerCount').html(gingerIncrement);
	}

	
	$("#oatmeal").on("click", function(){
		oatIncrement = oatIncrement + 1;
		Cookies.set("Oatmeal", oatIncrement);
		console.log("You've eaten: " + oatIncrement + " Oatmeal Cookies!");
		$('.oatcount').html(oatIncrement);
	});

//displays oatmeal cookie eaten count
	
	
	$("#snickerdoodle").on("click", function(){
		snickerIncrement = snickerIncrement + 1;
		Cookies.set("Snickerdoodle", snickerIncrement);
		console.log("You've eaten: " + snickerIncrement + " Snickerdoodle Cookies!");
		$('.snickercount').html(snickerIncrement);
	});

//displays snickerdoodles eaten count
	
	
	$("#gingerbread").on("click", function(){
		gingerIncrement = gingerIncrement + 1;
		// Cookies.set("Gingerbread", gingerIncrement);
		document.cookie = "Gingerbread=" + parseInt(gingerIncrement);
		console.log("You've eaten: " + gingerIncrement + " Gingerbread men! ....you psycho! They had families!");
		$('.gingerCount').html(gingerIncrement);
	});


//displays gingerbread man bodycount
	

	$("#guilt").on("click", function(){
		gingerIncrement = 0;
		oatIncrement = 0;
		snickerIncrement = 0;
		document.cookie = "Oatmeal=0";
		document.cookie = "Snickerdoodle=0";
		document.cookie = "Gingerbread=0";

		$('.gingerCount').html(gingerIncrement);
		$('.snickercount').html(snickerIncrement);
		$('.oatcount').html(oatIncrement);
		console.log("All is forgiven- best of luck to your pancreas.")
	});
});






// if(test){
// 		a
// 	}else{
// 		b
// 	}
// })
// Is equivalent to:
// test?then a:b