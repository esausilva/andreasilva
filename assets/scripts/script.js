$(document).ready(function(i){var e,h,t=i(window),o=i("body"),a=(i("#logo-main"),0);t.height()<420?(e=parseFloat(t.height())*parseFloat(.81),h=e-100,i("#header").height(e),i("#logo-main").height(h)):(e=parseFloat(t.height())*parseFloat(.91),h=e-238,i("#header").height(e),i("#logo-main").height(h)),i(o).on("mresize",function(){t.height()<420?(e=parseFloat(t.height())*parseFloat(.81),h=e-100,i("#header").height(e),i("#logo-main").height(h)):a>0&&(e=parseFloat(t.height())*parseFloat(.91),h=e-238,i("#header").height(e),i("#logo-main").height(h)),a++}),i("#Design").click(function(){i("#DesignLnk")[0].click()}),i("#FineArts").click(function(){i("#ArtLnk")[0].click()}),i("#Photography").click(function(){i("#PhotographyLnk")[0].click()}),i("#Animation").click(function(){i("#AnimationLnk")[0].click()})});