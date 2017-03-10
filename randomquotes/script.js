var quotes = [

	"If you want to achieve greatness stop asking for permission.",

	"Things work out best for those who make the best of how things work out.",

	"Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.",

	"Opportunities don't happen, you create them.",

	"Success is walking from failure to failure with no loss of enthusiasm.",

	"If you don't value your time, neither will others. Stop giving away your time and talents--start charging for it.",

	"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",

	"The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",

	"If you're going through hell, keep going.",

	"Don't raise your voice, improve your argument.",

	"The meaning of life is to find your gift. The purpose of life is to give it away.",

	"If you can't explain it simply, you don't understand it well enough.",

	"When you stop chasing the wrong things, you give the right things a chance to catch you.",

	"A goal is not always meant to be reached; it often serves simply as something to aim at.",

	"You've got to get up every morning with determination if you're going to go to bed with satisfaction.",

	"To accomplish great things, we must not only act, but also dream, not only plan, but also believe.",

	"Our greatest fear should not be of failure but of succeeding at things in life that don't really matter.",

	"Failure is the condiment that gives success its flavor.",

	"You may have to fight a battle more than once to win it." 	

];

function nextQuote(){		
	var numQuotes = Math.floor(Math.random() * quotes.length);
	$("#quote").fadeOut("slow",function(){
		$(this).html(quotes[numQuotes]).fadeIn("slow");
	});		
}

$(document).ready(function(){

	$('#nextquote').on('click',function(){
      nextQuote();
    });

     $('#share').on('click',function(){
    	$text = $("#quote").text(); 
    	$(this).attr("href",'http://www.twitter.com/share?text=' + $text);
	});
});
