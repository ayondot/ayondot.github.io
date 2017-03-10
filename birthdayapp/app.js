var timer;
	var timeLen = 5000;
	var slides = 11;
	var colour_no = 0;
	var bg_no = 0;
	var varbg_img = ["bg1","bg2","bg3"];
	var varColors = ["hsla(34, 78%, 91%, 0.4)", "hsla(0, 0%, 50%, 0.4)","hsla(206, 38%, 57%, 0.4)", 
						"hsla(203, 66%, 16%, 0.4)", "hsla(160, 51%, 60%, 0.4)", "hsla(60, 56%, 91%, 0.4)"];
	var wishes = []; // array of wishes
	var numWishes = 0;

	Ayo = {
		Wish: "Many Happy Returns",
		Author: "Ayo Komolafe" 
	}

	Odun = {
		Wish: "Happy Birthday brother Biodun",
		Author: "Odunayo Komolafe" 
	}

	Yemi = {
		Wish: "E ku odun bros!",
		Author: "Opeyemi Komolafe" 
	}

	wishes.push(Ayo,Odun,Yemi); // pushing default wishes to the wishes array

	function nextSlide(){
		clearTimeout(timer);
		var current = parseInt($("#counter").html());

		if(current < slides){
			var nextSlide = current + 1;
		}else{
			var nextSlide = 1;
		} 
		
		// Set rear image to next slide(still not visible)
		$("#slide_back img").attr("src","images" + nextSlide + ".jpg");

		// Hide front image...
		$("#slide_front").stop(true,true);
		$("#slide_front").animate({opacity:"0"},700,"linear",function(){
			// Change front image src(current image is still hidden)
			$("#slide_front img").attr("src","images" + nextSlide + ".jpg");

			//change background image of body  and colour of footer
			colour_no = Math.floor(Math.random() * varColors.length);
			$("footer").css("background-color",varColors[colour_no]);

			bg_no = Math.floor(Math.random() * varbg_img.length);
			$("body").css("background-image","url(" + varbg_img[bg_no] + ".jpg)");

			numWishes = Math.floor(Math.random() * wishes.length);
			$("#wish").html(wishes[numWishes].Wish);
			$("#author").html(wishes[numWishes].Author);
			

			// Display front image src(current image is still hidden)
			$("#slide_front").css("opacity","1");
			// Change jumpers
			$("#jumpers li.current").removeAttr("class");
			$("#jumpers #" + nextSlide).attr("class","current");
			// Update counter
			$("#counter").html(nextSlide); 
			//Set timer for next image
			timer = setTimeout("nextSlide()",timeLen);

		});
	}

	function prevSlide(){
		clearTimeout(timer);
		var current = parseInt($("#counter").html());

		if(current == 1){
			var nextSlide = slides;
		}else{
			var nextSlide = current - 1;
		} 

		// Set rear image to next slide(still not visible)
		$("#slide_back img").attr("src","images" + nextSlide + ".jpg");

		// Hide front image...
		$("#slide_front").stop(true,true);
		$("#slide_front").animate({opacity:"0"},700,"linear",function(){
			// Change front image src(current image is still hidden)
			$("#slide_front img").attr("src","images" + nextSlide + ".jpg");

			// Display front image src(current image is still hidden)
			$("#slide_front").css("opacity","1");
			// Change jumpers
			$("#jumpers li.current").removeAttr("class");
			$("#jumpers #" + nextSlide).attr("class","current");
			// Update counter
			$("#counter").html(nextSlide); 
			//Set timer for next image
			timer = setTimeout("nextSlide()",timeLen);

		});
	}

	function jump(slide){
		clearTimeout(timer);
		// Set rear image to next slide(still not visible)
		$("#slide_back img").attr("src","images" + slide + ".jpg");

		// Hide front image...
		$("#slide_front").stop(true,true);
		$("#slide_front").animate({opacity:"0"},700,"linear",function(){
			// Change front image src(current image is still hidden)
			$("#slide_front img").attr("src","images" + slide + ".jpg");

			// Display front image src(current image is still hidden)
			$("#slide_front").css("opacity","1");
			// Change jumpers
			$("#jumpers li.current").removeAttr("class");
			$("#jumpers #" + slide).attr("class","current");
			// Update counter
			$("#counter").html(slide); 
			//Set timer for next image
			timer = setTimeout("nextSlide()",timeLen);

		});
	}

	function init(){
		$("#loading").css("display","none");
		$("#slider_wrapper,footer").css("display","block");
		timer = setTimeout("nextSlide()",timeLen); 
	}

	function appendwish(){
		$("#submit").click(function(e){
			e.preventDefault();
			wishes.push({});
			var lastwish = wishes.length - 1;
			wishes[lastwish].Wish = $("#text").val();
			wishes[lastwish].Author = $("#name").val();
			$("#text").val(""); 
			$("#name").val("");
		});
	}
	
	$(document).ready(function(){
		setTimeout("init()",2000); 
		$("#add_your_wish").click(function(){
           $("#wish_form").slideToggle("slow");
     	});
     	appendwish();
	});