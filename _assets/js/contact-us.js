/*
 * If the user selects the 'Forgot Password' option, bypass the normal form
 * action & send a SendPasswordResetRequest instead.
 */

(function() {
  function forgotPasswordSelected($form){
    var values = $form.find(':checked').map(function(i, el){
      return el.value;
    });
    return $.inArray('Forgot Password', values) >= 0;
  }

  function renderError(){
    if($('.alert-danger').length > 0){
      return;
    }

    $('.contact-container .container').prepend(' \
      <div class="alert alert-danger" role="alert"> \
        There was an error trying to submit the form. Please try again. \
      </div>');
  }

  function redirectHome(){
    var url = window.location.href.split('contact')[0] + '?password_reset=true';
    window.location = url;
  }

  $('.contact-form').submit(function(evt){
    var $form = $(evt.currentTarget);

    if(!forgotPasswordSelected($form)){
      return;
    }

    evt.preventDefault();

    var url = "https://www.screeningone.com/Account/SendPasswordResetRequest";
    var data = {
      FirstName: $form.find('#form-firstname').val(),
      LastName: $form.find('#form-lastname').val(),
      Email: $form.find('#form-email').val(),
      CompanyName: $form.find('#form-company').val(),
      Telephone: $form.find('#form-phone').val(),
      City: $form.find('#form-city').val(),
    };

    $.ajax({ type: "POST", url: url, data: data, dataType: 'json'})
    .done(redirectHome)
    .fail(renderError);
  });
})();

