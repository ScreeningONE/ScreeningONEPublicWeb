$(function() {
  var $form = $('.sample-compliance form');

  if($form.length < 1) {
    return;
  }

  var $notice = $('.notice');

  $form.on('submit', function(e) {
    $notice.html('');

    var email = this.email.value;
    var phone = this.phone.value;

    if(email.length < 1 || phone.length < 1) {
      e.preventDefault();
      $notice.html('<p>Please fill in all of the fields.</p>');
      return;
    }

    if(!validateEmail(email)) {
      e.preventDefault();
      $notice.html('<p>Please use valid email.</p>');
      return;
    }
  })

  function validateEmail(email) {
    var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/;
    if (!email) return false;

    if(email.length>254) return false;

    var valid = tester.test(email);
    if(!valid) return false;

    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if(parts[0].length>64) return false;

    var domainParts = parts[1].split(".");
    if(domainParts.some(function(part) { return part.length>63; })) return false;

    return true;
  }
});