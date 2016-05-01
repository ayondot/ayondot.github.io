
$(document).ready(function(){

function yScroll(){
	header = document.getElementById('header2');
	top = document.getElementById('back2top');
	yPos = window.pageYOffset; 
	
	if (yPos > 50) {
		header.style.position = "fixed";
		header.style.top = "0px";
	} else{
		header.style.position = "relative";
	}
	
	}
	window.addEventListener("scroll",yScroll);

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) {
				$('#back2top').fadeIn(1000);
			} else {
				$('#back2top').fadeOut(750);
			}
		});

		$('#back2top,#search2').click(function () {
			$('body,html').animate({scrollTop: 0}, 800);
			return false;
		});
	});
	
	$("#button1").click(function(){
	$("#para1").slideToggle(1000,function(){
	if($("#button1").val() =="More")
	$("#button1").val("Less");
	else $("#button1").val("More");
     })
	 })
	 
	 $("#button2").click(function(){
	$("#para2").slideToggle(1000,function(){
	if($("#button2").val() =="More")
	$("#button2").val("Less");
	else $("#button2").val("More");
     })
	 })
	
});

function showImage(object,url)
	{
		object.src=url;
	}