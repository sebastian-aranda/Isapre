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
	var sliderItemWidth = $('.content-slide-item').outerWidth();

	$('a').on("click", function(e){
		e.preventDefault();
		var target = $(this).attr('href').slice(1);

		var active_pos = $('.active').index();
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
});

/*
$(window).on('hashchange',function(){
	var active_pos = $('.active').index();
	alert(active_pos);
	//$('.content-slide-item').each();    
});*/