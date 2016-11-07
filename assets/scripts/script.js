$(document).ready(function ($) {
  // ===== Resizing index header
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

  // ===== Assign links to Feature Images
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

  //ScrollReveal
  if (detectIE() > 9 || detectIE() == false) {
    window.sr = ScrollReveal().reveal('#sr', { duration: 1000, mobile: true, origin: 'top', scale: 1 });
  } else {
    $('#sr').css({"visibility":"visible"});
  }
});
