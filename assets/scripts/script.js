$(document).ready(function ($) {
  // ===== Resizing index header
  var windowObj = $(window);
  var body = $('body');
  var logoMain = $('#logo-main');
  var headerHeight;
  var logoMainHeight;
  var resizeCount = 0;

  //First resize if mobile
  if (windowObj.height() < 420) {
      headerHeight = parseFloat(windowObj.height()) * parseFloat(.81);
      logoMainHeight = headerHeight - 100;
      
      $('#header').height(headerHeight);
      $('#logo-main').height(logoMainHeight);
  } else {
      headerHeight = parseFloat(windowObj.height()) * parseFloat(.92);
      logoMainHeight = headerHeight - 238;
      
      $('#header').height(headerHeight);
      $('#logo-main').height(logoMainHeight);
  }

  //Resize when body changes height or mobile changes from portrait to landscape 
  $(body).on("mresize", function () {
    if (windowObj.height() < 420) {
      headerHeight = parseFloat(windowObj.height()) * parseFloat(.81);
      logoMainHeight = headerHeight - 100;

      $('#header').height(headerHeight);
      $('#logo-main').height(logoMainHeight);
    } else {
      if (resizeCount > 0) {
        headerHeight = parseFloat(windowObj.height()) * parseFloat(.92);
        logoMainHeight = headerHeight - 238;

        $('#header').height(headerHeight);
        $('#logo-main').height(logoMainHeight);
      }
    }

    resizeCount++;
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
  if (detectIE() > 9) {
    window.sr = ScrollReveal().reveal('#sr', { duration: 1000, mobile: true, origin: 'top', scale: 1 });
  }
});
