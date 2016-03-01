(function() {
  var $faq = $('.faq-container');

  if($faq.length < 1) {
    return;
  }

  var $categories = $faq.find('.categories-questions');
  var $questions = $categories.find('.questions');
  var $answers = $faq.find('.answers');

  /**
   * Category stuff
   */

  function updateCategoryDisplay() {
    $.each($categories.children(), function(i, el) {
      var element = $(el);
      var questions = element.find('.questions');
      questions.finish();

      if(element.hasClass('open') && !questions.is(":visible")) {
        questions.slideDown();
      } else if (!element.hasClass('open') && questions.is(":visible")) {
        questions.slideUp();
      }
    })
  }

  $categories.on('click', ' > li > .title', function() {
    var element = $(this).parent();
    var questions = element.find('.questions');

    if(element.hasClass('open')) {
      element.removeClass('open');
    } else {
      element.addClass('open');
    }

    updateCategoryDisplay();
  })

  /**
   * Question stuff
   */
  
  function updateQuestionDisplay() {
    var selected = $questions.find('.selected').first();

    var answerQuestion = $answers.find('.question');
    var selectedQuestion = selected.find('.question');

    if(answerQuestion.text() == selectedQuestion.text()) {
      return; // same question
    }

    var answerText = $answers.find('.answer');
    var selectedAnswer = selected.find('.answer');

    answerQuestion.hide().text(selectedQuestion.text()).fadeIn();
    answerText.hide().html(selectedAnswer.html()).slideDown();
  }

  $questions.on('click', ' > li', function() {
    var element = $(this);

    if(element.hasClass('selected')) {
      return;
    }

    $questions.find('.selected').removeClass('selected');
    element.addClass('selected');
    updateQuestionDisplay();
  })

  /**
   * Start
   */
  var firstQuestion = $categories.children().first().find('.questions > li:first-child');

  // Open up all categories if none are opened
  if($categories.find('.open').length < 1) {
    $categories.children().addClass('open');
  }

  // Select first question if none is selected
  if($categories.find('.selected').length < 1) {
    firstQuestion.addClass('selected')
  }

  updateCategoryDisplay();
  updateQuestionDisplay();
})();