$(document).ready(function(i){function e(){var i=window.navigator.userAgent,e=i.indexOf("MSIE ");if(e>0)return parseInt(i.substring(e+5,i.indexOf(".",e)),10);var n=i.indexOf("Trident/");if(n>0){var t=i.indexOf("rv:");return parseInt(i.substring(t+3,i.indexOf(".",t)),10)}var r=i.indexOf("Edge/");return r>0?parseInt(i.substring(r+5,i.indexOf(".",r)),10):!1}var n,t,r=i(window),a=i("body"),o=(i("#logo-main"),0);r.height()<420?(n=parseFloat(r.height())*parseFloat(.81),t=n-100,i("#header").height(n),i("#logo-main").height(t)):(n=parseFloat(r.height())*parseFloat(.92),t=n-238,i("#header").height(n),i("#logo-main").height(t)),i(a).on("mresize",function(){r.height()<420?(n=parseFloat(r.height())*parseFloat(.81),t=n-100,i("#header").height(n),i("#logo-main").height(t)):o>0&&(n=parseFloat(r.height())*parseFloat(.92),t=n-238,i("#header").height(n),i("#logo-main").height(t)),o++}),i("#GraphicDesign").click(function(){i("#DesignLnk")[0].click()}),i("#FineArt").click(function(){i("#ArtLnk")[0].click()}),i("#Photography").click(function(){i("#PhotographyLnk")[0].click()}),i("#Animation").click(function(){i("#AnimationLnk")[0].click()}),e()>9||0==e()?window.sr=ScrollReveal().reveal("#sr",{duration:1e3,mobile:!0,origin:"top",scale:1}):i("#sr").css({visibility:"visible"})});