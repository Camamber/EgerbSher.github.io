$(function () {
    var reg = $('.reg');
    var dota = $('.dota');
    var cs = $('.csgo');

    dota.click(function() {
  		$('#choosing').hide();
  		$('#cs-grid').hide();
		$('#dota-grid').show();
		localStorage.setItem('game', 1);
	});

    cs.click(function() {
  		$('#choosing').hide();
  		$('#dota-grid').hide();
  		$('#cs-grid').show();
  		localStorage.setItem('game', 2);
	});


    setTimeout(function () {
        reg.fadeIn(500);
    }, 4000);

    if(localStorage.getItem('game')==1){
    	$('#choosing').hide();
		$('#dota-grid').show();
    }
    else if(localStorage.getItem('game')==2){
		$('#choosing').hide();
  		$('#cs-grid').show();
    }


});



