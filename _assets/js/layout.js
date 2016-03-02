(function() {
  var $hero = $('.hero');
  var $arrowDown = $hero.find('.icon-arrow-down');

  if($arrowDown < 1 && $arrowDown.width() != 23) {
    return;
  }

  var $body = $('body, html');

  $arrowDown.on('click', function() {
    var scrollTo = $hero.offset().top + $hero.outerHeight();

    $body.animate({
      scrollTop: scrollTo
    }, 300)
  })
})();