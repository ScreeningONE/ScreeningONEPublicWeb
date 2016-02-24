(function() {
  var $testimonials = $('.testimonials');

  if($testimonials.length < 1) {
    return;
  }

  var $testimonialWrapper = $testimonials.find('.slider-wrapper')
  var $sliderMoveLeft = $testimonials.find('.move-left');
  var $sliderMoveRight = $testimonials.find('.move-right');

  var $users = $testimonials.find('ul.users li');
  var $slider = $testimonials.find('ul.slider li');

  var $window = $(window);
  var $sliderWidth = $testimonialWrapper.width();
  var $firstSlide = $slider.first();

  function updateControlArrows(selected) {
    var userSelected = selected[0];

    if(userSelected.index() != 0 && $sliderMoveLeft.hasClass('hide-arrow')) {
      $sliderMoveLeft.removeClass('hide-arrow');
    } else if(userSelected.index() == 0 && !$sliderMoveLeft.hasClass('hide-arrow')) {
      $sliderMoveLeft.addClass('hide-arrow');
    }

    if(userSelected.index() != $users.length - 1 && $sliderMoveRight.hasClass('hide-arrow')) {
      $sliderMoveRight.removeClass('hide-arrow');
    } else if(userSelected.index() == $users.length - 1 && !$sliderMoveRight.hasClass('hide-arrow')) {
      $sliderMoveRight.addClass('hide-arrow');
    }
  }

  function getSelected(type) {
    var userSelected = $users.siblings('.selected');
    var sliderSelected = $slider.siblings('.selected');

    if(userSelected.length > 0 && sliderSelected.length > 0) {
      if(userSelected.index() != sliderSelected.index()) {
        sliderSelected.removeClass('selected');
        sliderSelected = $($slider[userSelected.index()]);
      }
    } else if(userSelected.length > 0) {
      sliderSelected = $($slider[userSelected.index()]);
    } else if(sliderSelected.length > 0) {
      userSelected = $($users[sliderSelected.index()]);
    } else {
      userSelected = $users.first();
      sliderSelected = $slider.first();
    }

    if(type) {
      var tmpUser;
      var tmpSlider;

      if(type == 'next') {
        tmpUser = userSelected.next();
        tmpSlider = sliderSelected.next();
      } else if(type == 'prev') {
        tmpUser = userSelected.prev();
        tmpSlider = sliderSelected.prev();
      }

      if(tmpUser && tmpSlider) {
        userSelected = tmpUser;
        sliderSelected = tmpSlider;
      }
    }

    return [userSelected, sliderSelected];
  }

  function setSelected(selected) {
    $users.removeClass('selected');
    $slider.removeClass('selected');

    var userSelected = selected[0];
    var sliderSelected = selected[1];

    userSelected.addClass('selected');
    sliderSelected.addClass('selected');

    var slideWidth = sliderSelected.width();
    var newMargin = -(sliderSelected.index() * slideWidth);
    $firstSlide.css('margin-left', newMargin);

    updateControlArrows(selected);
  }

  $sliderMoveLeft.on('click', function(e) {
    if($sliderMoveLeft.hasClass('hide-arrow')) {
      return;
    }

    setSelected(getSelected('prev'));
  });

  $sliderMoveRight.on('click', function(e) {
    if($sliderMoveRight.hasClass('hide-arrow')) {
      return;
    }

    setSelected(getSelected('next'));
  });

  $users.on('click', function(e) {
    var userSelected = $(e.target);
    var sliderSelected = $($slider[userSelected.index()]);

    setSelected([userSelected, sliderSelected]);
  })

  setSelected(getSelected());

})();