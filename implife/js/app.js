$(document).ready(function(){$(".main-menu-btn_icon").on("click",function(){$(this).toggleClass("open"),$(".dropdown-menu").slideToggle(300),$(".dropdown-menu").css("display","flex")}),$(".main-slider").on("init reInit afterChange",function(n,e,t,o){var r=(t||0)+1,s=$(".counter__first-num"),i=$(".counter__slash"),u=$(".counter__second-num");s.text("0"+r),i.text("/"),u.text("0"+e.slideCount)}),$(".main-slider").slick({speed:300,arrows:!0,slidesToShow:1,fade:!0,prevArrow:'<button class="prevArrow"></button>',nextArrow:'<button class="nextArrow"></button>'})});