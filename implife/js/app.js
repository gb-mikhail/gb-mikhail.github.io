$(document).ready(function(){function n(){$(this).toggleClass("open"),$(".wrap-button-down").toggleClass("rotate"),$(".sub-menu__top-list").slideToggle(300),$(".sub-menu__top-list").css("display","flex")}$(".main-menu-btn_icon").on("click",function(){$(this).toggleClass("open"),$(".dropdown-menu").slideToggle(300),$(".dropdown-menu").css("display","flex")}),$(".wrap-button-down").on("click",n),$(".main-slider").on("init reInit afterChange",function(n,t,e,i){var s=(e||0)+1,a=$(".counter__first-num"),o=$(".counter__slash"),l=$(".counter__second-num");a.text("0"+s),o.text("/"),l.text("0"+t.slideCount)}),$(".main-slider").slick({speed:300,arrows:!0,slidesToShow:1,appendArrows:".slider__buttons",prevArrow:'<div class="prev-arrow"></div>',nextArrow:'<div class="next-arrow"></div>'}),window.sr=ScrollReveal({reset:!0}),sr.reveal(".sub-box",{duration:400,delay:100,origin:"bottom",distance:"30px",easing:"cubic-bezier(0.6, 0.2, 0.1, 1)"}),sr.reveal(".product-box",{duration:400,delay:100,origin:"bottom",distance:"30px",easing:"cubic-bezier(0.6, 0.2, 0.1, 1)"}),sr.reveal(".box__classic-img",{duration:400,delay:200,origin:"bottom",distance:"20px",easing:"cubic-bezier(0.7, 0.1, 0.2, 1)"}),$(function(){$(".nav-top__link").each(function(){var n=window.location.href,t=this.href;null!=n.match(t)&&($(this).addClass("nav-top__link_active"),$(this).hasClass("nav-top__link_products")&&($("#product-nav").siblings().removeClass("nav-active"),$("#product-nav").addClass("nav-active")),$(this).hasClass("nav-top__link_company")&&($("#company-nav").siblings().removeClass("nav-active"),$("#company-nav").addClass("nav-active")))}),$(".nav-bottom__link").each(function(){var n=window.location.href,t=this.href;null!=n.match(t)&&($(this).addClass("nav-bottom__link_active"),$(this).hasClass("nav-bottom__link_company")&&($("#company-nav").siblings().removeClass("nav-active"),$("#company-nav").addClass("nav-active")))})}),function(t){jQuery.fn.lightTabs=function(e){return this.each(function(){i=0,showPage=function(n){t(".list-content").children(".list-content-box").hide(),t(".list-content").children(".list-content-box").eq(n).show(),t(".sub-menu__top-list").children(".sub-menu__item").removeClass("sub-menu__item_active"),t(".sub-menu__top-list").children(".sub-menu__item").eq(n).addClass("sub-menu__item_active")},showPage(0),t(".sub-menu__top-list").children(".sub-menu__item").each(function(n,e){t(e).attr("data-page",i),i++}),t(".sub-menu__top-list").children(".sub-menu__item").click(function(){showPage(parseInt(t(this).attr("data-page"))),t(document).width()<="1200"&&n()})})}}(jQuery),$(".sub-menu-top").lightTabs()});