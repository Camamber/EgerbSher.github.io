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
});

