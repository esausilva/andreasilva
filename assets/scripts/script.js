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
      headerHeight = parseFloat(windowObj.height()) * parseFloat(.75);
      logoMainHeight = headerHeight - 100;

      $('#header').height(headerHeight);
      $('#logo-main').height(logoMainHeight);
  } else {
      headerHeight = parseFloat(windowObj.height()) * parseFloat(.50);
      logoMainHeight = headerHeight - 138;
      
      $('#header').height(headerHeight);
      $('#logo-main').height(logoMainHeight);
  }

  //Resize when body changes height or mobile changes from portrait to landscape 
  $(body).on("mresize", function () {
    if (windowObj.height() < 420) {
      headerHeight = parseFloat(windowObj.height()) * parseFloat(.75);
      logoMainHeight = headerHeight - 100;

      $('#header').height(headerHeight);
      $('#logo-main').height(logoMainHeight);
    } else {
      if (resizeCount > 0) {
        headerHeight = parseFloat(windowObj.height()) * parseFloat(.50);
        logoMainHeight = headerHeight - 138;

        $('#header').height(headerHeight);
        $('#logo-main').height(logoMainHeight);
      }
    }

    resizeCount++;
  });

  // ===== Assign links to Feature Images
  $('#Design').click(function () {
    $('#DesignLnk')[0].click();
  });

  $('#Art').click(function () {
    $('#ArtLnk')[0].click();
  });

  $('#Photography').click(function () {
    $('#PhotographyLnk')[0].click();
  });

  $('#Animation').click(function () {
    $('#AnimationLnk')[0].click();
  });
});

/*
$('.top-stats .panel').click(function () {
  $('#open-dashboards')[0].click();
});
*/
