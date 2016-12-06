$(document).ready(function ($) {
  //  Resizing index header =================================
  var windowObj = $(window);
  var logoMain = $('#logo-main');
  var logoMainHeight;

  function logoHeight(headerHeight) {
    if (windowObj.height() < 420) {
        logoMainHeight = headerHeight - 100;
        
        logoMain.height(logoMainHeight);
    } else {
        logoMainHeight = headerHeight - 238;
        
        logoMain.height(logoMainHeight);
    }
  }
 
  function fullscreen(){
    var navHeight = $('nav').height();
    var headerHeight = windowObj.height() - (navHeight - 5);
    $('#header').css({
      width: windowObj.width(),
      height: headerHeight
    });

    logoHeight(headerHeight - 35);
  }

  fullscreen();

  windowObj.resize(function() {
    fullscreen();         
  });

  // Assign links to Feature Images =============================
  $('#GraphicDesign').click(function () {
    $('#DesignLnk')[0].click();
  });

  $('#FineArt').click(function () {
    $('#ArtLnk')[0].click();
  });

  $('#Photography').click(function () {
    $('#PhotographyLnk')[0].click();
  });

  $('#Animation').click(function () {
    $('#AnimationLnk')[0].click();
  });

  // ScrollReveal =============================================
  function detectIE() {
      var ua = window.navigator.userAgent;

      var msie = ua.indexOf('MSIE ');
      if (msie > 0) {
          // IE 10 or older => return version number
          return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');
      if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');
      if (edge > 0) {
          // Edge (IE 12+) => return version number
          return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      }

      // other browser
      return false;
  }

  if (detectIE() > 9 || detectIE() == false) {
    window.sr = ScrollReveal().reveal('#sr', { duration: 1000, mobile: true, origin: 'top', scale: 1 });
  } else {
    $('#sr').css({"visibility":"visible"});
  }

  // Smooth scroll same page anchor ==============================
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // Contact Form ================================================
  $('#contact-form').validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      message: "required" 
    },
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
      message: "Please enter a message"
    },
    submitHandler: function(form, e) {
      e.preventDefault();
      var $contactForm = $('#contact-form');

      var $submit = $('input:submit', $contactForm);
      var defaultSubmitText = $submit.val();

      $.ajax({
        url: '//formspree.io/andreasilva.design@outlook.com',
        method: 'POST',
        data: $contactForm.serialize(),
        dataType: 'json',
        beforeSend: function() {
          $contactForm.prepend('<div class="alert alert-info" role="alert">Sending message…</div>');
          $submit.attr('disabled', true).val('Sending message…');
        },
        success: function(data) {
          $('.alert-info').remove();
          $contactForm.prepend('<div class="alert alert-success" role="alert">Message sent!</div>');
          $submit.val('Message sent!');
          $contactForm[0].reset();
          setTimeout(function() {
            $('.alert-success').remove();
            $submit.attr('disabled', false).val(defaultSubmitText);
          }, 5000);
        },
        error: function(err) {
          $('.alert-info').remove();
          $contactForm.prepend('<div class="alert alert-danger" role="alert">Ops, there was an error. Please try again in 5 seconds.</div>');
          $submit.val('Ops, there was an error.');
          setTimeout(function() {
            $('.alert-error').remove();
            $submit.attr('disabled', false).val(defaultSubmitText);
          }, 5000);
        }
      });
    }
  });
});
