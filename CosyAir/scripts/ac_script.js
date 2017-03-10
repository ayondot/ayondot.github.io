$(document).ready(function(){
	$('#back2top').hide();
	$('#showSearch').hide();
	$('#search').css('top','24px');

	var searchspan_clicked = false;
	$('#searchspan').on('click',function(){
		$('#search').hide();
		$('#showSearch').fadeToggle(800,function(){
			searchspan_clicked = !searchspan_clicked;
			if(searchspan_clicked) {
				$('#search').css('top','-40px').show();
			}
			else $('#search').css('top','24px').show();
		});
	});


	$('.sub_section ul').hide();
	
	$('div.products').hide();

	$('#productspage h2').css('margin-bottom','15px');

	$('.sub_section h2').on('click',function(){
		 var el = $(this);
		el.siblings().slideToggle(800);
	});

	$('#productspage h2').last().next().fadeIn(800);

	$('#productspage h2').on('click',function(){
		$('#productspage h2').last().next().hide();
		 var el = $(this);
		el.next().slideToggle(800);
	});



	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
			$('#back2top').fadeIn(1000);
		} else {
			$('#back2top').fadeOut(750);
		}
	});

	$('#back2top').click(function () {
		$('body,html').animate({scrollTop: 0}, 800);
		return false;
	});

	$('nav li').on('click',function(){
		$('nav li.current').removeClass('current');
		$(this).addClass('current');	
	});
		
});

