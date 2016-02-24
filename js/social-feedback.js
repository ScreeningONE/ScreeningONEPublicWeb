(function() {
  var $tweetGallery = $('.tweet-gallery');

  if($tweetGallery.length < 1) {
    return;
  }

  var $tweetMoveLeft = $tweetGallery.find('.move-left');
  var $tweetMoveRight = $tweetGallery.find('.move-right');
  var $tweets = $tweetGallery.find('ul.tweets li');

  var $window = $(window);
  var $tweetWidth = $tweetGallery.width();
  var $firstTweet = $tweets.first();

  function updateControlArrows(selected) {
    if(selected.index() != 0 && $tweetMoveLeft.hasClass('hide-arrow')) {
      $tweetMoveLeft.removeClass('hide-arrow');
    } else if(selected.index() == 0 && !$tweetMoveLeft.hasClass('hide-arrow')) {
      $tweetMoveLeft.addClass('hide-arrow');
    }

    if(selected.index() != $tweets.length - 1 && $tweetMoveRight.hasClass('hide-arrow')) {
      $tweetMoveRight.removeClass('hide-arrow');
    } else if(selected.index() == $tweets.length - 1 && !$tweetMoveRight.hasClass('hide-arrow')) {
      $tweetMoveRight.addClass('hide-arrow');
    }
  }

  function getSelected() {
    var selected = $tweets.siblings('.selected');
    if(selected.length == 0) {
      selected = $firstTweet;
    }

    return selected;
  }

  function setSelected(oldSelected, selected) {
    if(oldSelected && oldSelected.hasClass('selected')) {
      oldSelected.removeClass('selected');
    }

    if(!selected.hasClass('selected')) {
      selected.addClass('selected');
    }

    var selectedWidth = selected.width();
    var firstTweetPos = ($tweetWidth / 2) - (selectedWidth / 2);
    var newMargin = firstTweetPos - (selected.index() * (selectedWidth + 30));
    $firstTweet.css('margin-left', newMargin);

    updateControlArrows(selected);
  }

  $tweetMoveLeft.on('click', function(e) {
    if($tweetMoveLeft.hasClass('hide-arrow')) {
      return;
    }

    var selected = getSelected();
    var prevSelected;
    if(!(prevSelected = selected.prev())) {
      return;
    }

    setSelected(selected, prevSelected);
  });

  $tweetMoveRight.on('click', function(e) {
    if($tweetMoveRight.hasClass('hide-arrow')) {
      return;
    }
    var selected = getSelected();
    var nextSelected;

    if(!(nextSelected = selected.next())) {
      return;
    }

    setSelected(selected, nextSelected);
  });

  $window.resize(function() {
    $tweetWidth = $tweetGallery.width();
    setSelected(null, getSelected());
  });

  setSelected(null, getSelected());
})();