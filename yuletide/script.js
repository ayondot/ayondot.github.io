var timer;
	var timeLen = 9000;
	
	var wishes = [
		"This time of year brings festivities and family fun. It is a time for reminiscing and looking forward.\
		 Wishing you wonderful memories during this joyous season.",

		"During this time of faith and family, may the true meaning of Christmas fill you with joy. \
		Wishing you a Merry Christmas and a blessed New Year.",

		"May God&apos;s blessing shine down upon you and your family this holiday season.\
		 Sending love from our family to yours.",

		 "As you celebrate the miracle of this special season, may your heart be filled with joy and peace.\
		  May these holiday blessings linger in your home and stay with you throughout the year.",

		  "This is a joyous season to take a step back from our busy lives and enjoy time with our loved ones. \
		  Best wishes to you and yours."
	];
	
	function nextWish(){	
		clearTimeout(timer);	
		var numWishes = Math.floor(Math.random() * wishes.length);
		$("#wish").fadeOut("slow",function(){
			$(this).html(wishes[numWishes]).fadeIn("slow");
		});		
		timer = setTimeout("nextWish()",timeLen);
	}

	$(document).ready(function(){
		nextWish();
	});