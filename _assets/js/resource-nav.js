(function() {
  var $resourceNav = $('.downloadable-resources-nav');

  if($resourceNav.length < 1) {
    return;
  }

  var $body = $('body, html');

  $resourceNav.on('click', 'a', function(e) {
    e.preventDefault();

    var element = $(this);
    var scrollTo = $(element.attr('href')).offset().top;

    $body.animate({
      scrollTop: scrollTo
    }, 300);
  })
})();