/*
Copyright 2014 Manos Malihutsakis (email: manos@malihu.gr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
!function(i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof exports?module.exports=i:i(jQuery)}(function(i){i.event.special.mresize={add:function(){var e=i(this);e.data("mresize")||("static"===e.css("position")&&e.css("position","relative"),e.append("<div class='resize' style='position:absolute; width:auto; height:auto; top:0; right:0; bottom:0; left:0; margin:0; padding:0; overflow:hidden; visibility:hidden; z-index:-1'><iframe style='width:100%; height:0; border:0; visibility:visible; margin:0' /><iframe style='width:0; height:100%; border:0; visibility:visible; margin:0' /></div>").data("mresize",{w:e.width(),h:e.height(),t:null,throttle:100}).find(".resize iframe").each(function(){i(this.contentWindow||this).on("resize",function(){var i=e.data("mresize");(i.w!==e.width()||i.h!==e.height())&&(i.t&&clearTimeout(i.t),i.t=setTimeout(function(){e.triggerHandler("mresize"),i.w=e.width(),i.h=e.height()},i.throttle))})}))},remove:function(){i(this).removeData("mresize").find(".resize").remove()}}});