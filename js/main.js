$('.input-group.date').datepicker({
    format: "dd/mm/yyyy",
    weekStart: 0,
    startView: 2,
    clearBtn: true,
    language: "es",
    autoclose: true
});

/*
$(function(){
	var active_pos = $('.active').index();
	$('a').on("click", function(e){
		e.preventDefault();
		var target = $(this).attr('href').slice(1);
		$('.content-slide-item').each(function(){
			if ($(this).attr('id') == target){
				$(this).animate({width: '100%'});
				$(this).addClass('active');
			}
			else{
				$(this).animate({width: '0'});
				$(this).removeClass('active');
			}
		});
	});
});*/

$(function(){
	$('a').on("click", function(e){
		e.preventDefault();

		var sliderItemWidth = $('.content-slide-item').outerWidth();
		var target = $(this).attr('href').slice(1);

		var active_pos = $('.content-slide-item.active').index();
		var new_pos;
		$('.content-slide-item').each(function(){
			if ($(this).attr('id') == target){
				new_pos = $(this).index();
				$(this).addClass('active');
			}
			else
				$(this).removeClass('active');
				
		});

		if (new_pos < active_pos)
			$('.content-slide').animate({left: '+='+sliderItemWidth*Math.abs(active_pos-new_pos)}, 500);
		else if (new_pos > active_pos)
			$('.content-slide').animate({left: '-='+sliderItemWidth*Math.abs(active_pos-new_pos)}, 500);
	});

	var fadeSpeed = 2000;

	$('#contact-prev').on("click", function(){
		var actual_step = $('.contact-step.active').index();
		var new_step = actual_step-1;

		var nElements = $('.contact-form .contact-step').length;		
		if (new_step<0) return;

		$('.contact-step.active').fadeOut(fadeSpeed);
		$('.contact-step').each(function(){
			if ($(this).index() == new_step){
				$(this).addClass('active');
				$(this).fadeIn(fadeSpeed);
			}
			else{
				$(this).removeClass('active');
			}
		});
	});

	$('#contact-next').on("click", function(){
		var actual_step = $('.contact-step.active').index();
		var new_step = actual_step+1;

		var nElements = $('.contact-form .contact-step').length;
		if (new_step>(nElements-1)) return;

		$('.contact-step.active').fadeOut(fadeSpeed);
		$('.contact-step').each(function(){
			if ($(this).index() == new_step){
				$(this).addClass('active');
				$(this).fadeIn(fadeSpeed);
			}
			else{
				$(this).removeClass('active');
			}
		});
	});
});


/*
$(window).on('hashchange',function(){
	var active_pos = $('.active').index();
	alert(active_pos);
	//$('.content-slide-item').each();    
});*/