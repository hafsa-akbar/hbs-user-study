$(document).ready(function(){var e=function(){$('#sticky-menu a[href^="#"], #swiper-menu a[href^="#"]').click(function(){var e=$(this).attr("href");$("html, body").stop().animate({scrollTop:$(e).offset().top-100},function(){location.hash=e})})},t=function(){var e=$(window).scrollTop();$("section[id]").each(function(t,r){var n=$(r).offset().top,i=$(this).outerHeight(!0);if(e>n-70&&e<n+i){var o=$(r).attr("id");$(".one-page-scroll .swiper-slide a.active").removeClass("active"),$(".one-page-scroll .swiper-slide a[href='#"+o+"']").addClass("active")}})};$(function(){$(window).on("scroll",function(){e(),t()})}),$("#menu-toggle").click(function(e){$(".overlay").show(),$("body").css({overflow:"hidden",height:"100%"}),$(".navbarmenu").hasClass("isDown")?($(".navbarmenu").animate({left:"-100%"},500),$(".navbarmenu").removeClass("isDown"),$(".hopopmenu").fadeOut("fast"),$(".searchbar").animate({right:"-100%"},500),$(".searchbar2").animate({"margin-left":"100%"},500),$("body").css({overflow:"visible",height:"auto"})):($(".navbarmenu").animate({left:"0"},500),$(".hopopmenu").fadeIn("fast"),$(".navbarmenu").addClass("isDown"),$(".searchbar").animate({right:"-100%"},500),$(".searchbar2").animate({"margin-left":"100%"},500),$(".coverall").removeClass("overflow-active"),$(".searchbar").removeClass("show")),e.preventDefault()}),$(".searchbtn").click(function(e){$("body").css({overflow:"visible",height:"100%"}),$(".coverall").addClass("overflow-active"),$(".searchbar").hasClass("show")?($(".searchbar").animate({right:"-100%"},500),$(".searchbar2").animate({"margin-left":"100%"},500),$(".searchbar").removeClass("show"),$("body").css({overflow:"visible",height:"auto"}),$(".coverall").removeClass("overflow-active"),$(".adssearch").css({position:"absolute"},5e3)):($(".searchbar").animate({right:"0"},500),$(".searchbar2").animate({"margin-left":"0"},500),$(".searchbar").addClass("show"),$("body").css({overflow:"hidden",height:"100%"}),$(".navbarmenu").animate({left:"-100%"},500),$(".navbarmenu").removeClass("isDown"),$(".hopopmenu").fadeOut("fast"),$(".adssearch").css({position:"fixed"},5e4)),e.preventDefault()}),$(".hopopmenu, .close_menubar").click(function(){}),$(".open-submenu").click(function(){});var r,n,i,o,a,l,s,c=function(){};$(".close_submenu").click(c),$(".overlay-menu").click(c),$(window).scroll(function(){var e=$(".menuheaders"),t=$("#sticky-menu"),r=$("#swiper-menu"),n=$(".swiper-container--menu").outerHeight()+r.offset().top;$(this).scrollTop()>n?(t.addClass("sticky"),e.addClass("sticky"),$("#app").css("padding-top","100px")):(t.removeClass("sticky"),e.removeClass("sticky"),$("#app").css("padding-top","0"))}),new Swiper(".swiper-container--menu",{slidesPerView:"auto"}),new Swiper(".swiper-container--stickymenu",{slidesPerView:"auto"}),new Swiper(".swiper-container--headline",{slidesPerView:1.1,spaceBetween:10,preloadImages:!1,lazy:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{560:{slidesPerView:1.7}}}),new Swiper(".swiper-container--shortcut",{slidesPerView:"5.5",spaceBetween:5,grabCursor:!0,preloadImages:!1,lazy:!0,pagination:{el:".swiper-pagination6",clickable:!0},scrollbar:{el:".swiper-scrollbar",hide:!0}}),new Swiper(".swiper-container--editor",{slidesPerView:2.7,spaceBetween:10,grabCursor:!0,preloadImages:!1,lazy:!0,pagination:{el:".swiper-pagination4",clickable:!0},scrollbar:{el:".swiper-scrollbar",hide:!0}}),new Swiper(".swiper-container--terpopuler",{slidesPerView:2.4,spaceBetween:10,loop:!0,preloadImages:!1,lazy:!0,breakpoints:{450:{slidesPerView:2.4},350:{slidesPerView:1.4}}}),new Swiper(".swiper-container--infografis",{slidesPerView:2.8,spaceBetween:10,loop:!0,preloadImages:!1,lazy:!0,breakpoints:{450:{slidesPerView:2.8},350:{slidesPerView:1.8}}}),(r=jQuery).jscroll={defaults:{debug:!1,autoTrigger:!0,autoTriggerUntil:!1,loadingHtml:"<small>Loading...</small>",padding:0,nextSelector:"a:last",contentSelector:"",pagingSelector:"",callback:!1}},n=function(e,t){var n,i=e.data("jscroll"),o=r.extend({},r.jscroll.defaults,"function"==typeof t?{callback:t}:t,i||{}),a="visible"===e.css("overflow-y"),l=e.find(o.nextSelector).first(),s=r(window),c=r("body"),f=a?s:e,d=r.trim(l.attr("href")+" "+o.contentSelector),h=function(){e.find(".jscroll-inner").length||e.contents().wrapAll('<div class="jscroll-inner" />')},u=function(e){},p=function(){},g=function(){},m=function(){var t=e.find(o.nextSelector).first();t.length&&(o.autoTrigger&&(!1===o.autoTriggerUntil||o.autoTriggerUntil>0)?(u(t),c.height()<=s.height()&&g(),f.unbind(".jscroll").bind("scroll.jscroll",function(){}),o.autoTriggerUntil>0&&o.autoTriggerUntil--):(f.unbind(".jscroll"),t.bind("click.jscroll",function(){})))},v=function(){},b=function(e){};return e.data("jscroll",r.extend({},i,{initialized:!0,waiting:!1,nextHref:d})),h(),(n=r(o.loadingHtml).filter("img").attr("src"))&&(new Image().src=n),m(),r.extend(e.jscroll,{destroy:p}),e},r.fn.jscroll=function(e){return this.each(function(){var t,i=r(this),o=i.data("jscroll");(!o||!o.initialized)&&(t=new n(i,e))})},$("#news-content").jscroll({autoTrigger:!1,loadingHtml:'<div class="loader"><img alt="" src="https://cdn.okezone.com/news/news_2015a/img/ajax-loader.gif" /></div>',nextSelector:"a.btn-lmorex:last"}),$(".to-top").click(function(){}),$(window).scroll(function(){$(this).scrollTop()>400?$(".to-top").fadeIn():$(".to-top").fadeOut()}),i=jQuery,o=window,a=document,s=i(o),i.fn.lazyload=function(e){function t(){var e=0;n.each(function(){var t=i(this);if(!c.skip_invisible||t.is(":visible")){if(i.abovethetop(this,c)||i.leftofbegin(this,c));else if(i.belowthefold(this,c)||i.rightoffold(this,c)){if(++e>c.failure_limit)return!1}else t.trigger("appear"),e=0}})}var r,n=this,c={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:o,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return e&&(l!==e.failurelimit&&(e.failure_limit=e.failurelimit,delete e.failurelimit),l!==e.effectspeed&&(e.effect_speed=e.effectspeed,delete e.effectspeed),i.extend(c,e)),r=c.container===l||c.container===o?s:i(c.container),0===c.event.indexOf("scroll")&&r.bind(c.event,function(){return t()}),this.each(function(){var e=this,t=i(e);e.loaded=!1,(t.attr("src")===l||!1===t.attr("src"))&&t.is("img")&&t.attr("src",c.placeholder),t.one("appear",function(){if(!this.loaded){if(c.appear){var r=n.length;c.appear.call(e,r,c)}i("<img />").bind("load",function(){var r=t.attr("data-"+c.data_attribute);t.hide(),t.is("img")?t.attr("src",r):t.css("background-image","url('"+r+"')"),t[c.effect](c.effect_speed),e.loaded=!0;var o=i.grep(n,function(e){return!e.loaded});if(n=i(o),c.load){var a=n.length;c.load.call(e,a,c)}}).attr("src",t.attr("data-"+c.data_attribute))}}),0!==c.event.indexOf("scroll")&&t.bind(c.event,function(){})}),s.bind("resize",function(){}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&s.bind("pageshow",function(e){}),i(a).ready(function(){t()}),this},i.belowthefold=function(e,t){var r;return(r=t.container===l||t.container===o?(o.innerHeight?o.innerHeight:s.height())+s.scrollTop():i(t.container).offset().top+i(t.container).height())<=i(e).offset().top-t.threshold},i.rightoffold=function(e,t){var r;return(r=t.container===l||t.container===o?s.width()+s.scrollLeft():i(t.container).offset().left+i(t.container).width())<=i(e).offset().left-t.threshold},i.abovethetop=function(e,t){var r;return(r=t.container===l||t.container===o?s.scrollTop():i(t.container).offset().top)>=i(e).offset().top+t.threshold+i(e).height()},i.leftofbegin=function(e,t){var r;return(r=t.container===l||t.container===o?s.scrollLeft():i(t.container).offset().left)>=i(e).offset().left+t.threshold+i(e).width()},i.inviewport=function(e,t){},i.extend(i.expr[":"],{"below-the-fold":function(e){},"above-the-top":function(e){},"right-of-screen":function(e){},"left-of-screen":function(e){},"in-viewport":function(e){},"above-the-fold":function(e){},"right-of-fold":function(e){},"left-of-fold":function(e){}}),$(function(){$("img.lazy").lazyload({effect:"fadeIn",effectspeed:1e3})});var f=function(){};$(".adsheader .close").click(f);var d=0;$(window).scroll(function(){$(window).scrollTop()>=($(document).height()-$(window).height())*.05?0==d&&($(".ads-bottom-fixed").show(),d=1):($(".ads-bottom-fixed").hide(),d=0)}),$(".btn-cls").click(function(){})});