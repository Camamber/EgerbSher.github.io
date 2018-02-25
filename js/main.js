$(function () {
    var intro = $('.intro'),
        reg = $('.reg');

    setTimeout(function () {
        intro.css({position: 'fixed'});
        reg.css({position: 'fixed'});
        intro.hide(500);
        reg.show(500, function() {
        reg.css({position: 'inherit'});
  });
    }, 4000);


    $(".reg-button a").hover(function() {
        $(".reg-button").css("background", "url(\"img/mazok.png\") center no-repeat");
        $(".reg-button").css("background-size","auto 12vmax");
    },
    function() {
        $(".reg-button").css({background: "none"});
    });
});



