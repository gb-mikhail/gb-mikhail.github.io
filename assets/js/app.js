//--------------------Start-preloader----------------------
var preloader = (function(){
    var percentsTotal = 0;
    var preloader = $('.preloader');

    var imgPath = $('*').map(function (ndx, element) {
        var background = $(element).css('background-image');
        var isImg = $(element).is('img');
        var path = '';

        if (background != 'none') {
            path = background.replace('url("', '').replace('")', '');
        }

        if (isImg) {
            path = $(element).attr('src');
        }

        if (path) return path;
    });

    var setPercents = function(total, current) {
        var percents = Math.ceil(current / total * 100);

        $('.preloader__percents').text(percents + '%');

        if (percents >= 100) {
            preloader.fadeOut();
        }
    }

    var loadImages = function(images) {

        if (!images.length) preloader.fadeOut();

        images.forEach(function(img, i, images){
            var fakeImage = $('<img>', {
                attr : {
                    src : img
                }
            });

            fakeImage.on('load error', function(){
                percentsTotal++;
                setPercents(images.length, percentsTotal);
            });
        });

    };

    return {
        init: function () {
            var imgs = imgPath.toArray();

            loadImages(imgs);
        }
    }
}());

$(function () {
    preloader.init();
});

//--------------------End-preloader----------------------



//--------------------start-Swipe-navigation----------------------

$('.swipe-button__item').on('click', function() {
    $(this).addClass('swipe-button__item_active').siblings().removeClass('swipe-button__item_active');
    $('body').animate({ scrollTop: $('.main_h2').eq($(this).index()).offset().top}, 1000);
});

//--------------------End-swipe-navigation----------------------


//--------------------Start-swipe-button-animation-------------------


$(function () {
    $('.swipe-button').on('click', function () {
         $('.swipe-button__left-nav').css({
             'left': '0'
         })
    });

    $('.swipe-button').click(function (e) {
        var $message = $('.swipe-button__left-nav');

        if ($message.css('display') != 'block') {
            $message.show();

            var yourClick = true;
            $(document).bind('click.myEvent', function (e) {
                if (!yourClick && $(e.target).closest('.swipe-button__left-nav').length == 0) {
                    $message.hide();
                    $(document).unbind('click.myEvent');
                }
                yourClick = false;
            });
        }

        e.preventDefault();
    });
});


//--------------------End-swipe-button-animation-------------------

//--------------------Start-up-button-------------------
(function($) {
    $(function() {

        $('.review-block__up-link').click(function() {
            $('html, body').animate({scrollTop: 0},500);
            return false;
        })

    })
})($);
//--------------------End-up-button-------------------

//--------------------Start-down-button-------------------
(function($) {
    $(function() {

        $('.header__down-button_link').click(function() {
            $('html, body').animate({scrollTop: 765},500);
            return false;
        })

    })
})($);


//--------------------End-down-button-------------------

//--------------------start-slider-------------------
$('.slider__button-up').on('click', function () {
    var n=$('.slider__item_active').index();
    var m=$('.slideshow__list').children('li').length;
    if(n==m-1){
        $('.slideshow__item').eq(0).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider-comment__block').eq(0).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(m-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    } else if(n==m-2){
        $('.slideshow__item').eq(n+1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider-comment__block').eq(n+1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(n).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(0).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }else {
        $('.slideshow__item').eq(n+1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider-comment__block').eq(n+1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(n).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(n+2).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }
});
$('.slider__button-down').on('click', function () {
    var n=$('.slider__item_active').index();
    var m=$('.slideshow__list').children('li').length;
    if(n==0){
        $('.slideshow__item').eq(m-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider-comment__block').eq(m-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(m-2).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(0).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }else if(n==1){
        $('.slideshow__item').eq(n-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider-comment__block').eq(n-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(m-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(n).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }else {
        $('.slideshow__item').eq(n-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider-comment__block').eq(n-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(n-2).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(n).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }
});
//--------------------END-slider-------------------

//--------------------Start-circle-animation-------------------

var animateCss = (function () {
    var checkDistance = function (scrollTop, elem) {
        var offset = elem.offset().top;
        var windowMargin = Math.ceil($(window).height() / 1);
        var topBorder = offset - scrollTop - windowMargin;
        var bottomEdge = elem.outerHeight(true) + offset;
        var bottomBorder = scrollTop + windowMargin - bottomEdge;

        return topBorder <=0 && bottomBorder <=0;
    };

    var animationActions = {
        html : function () {
            $(this).addClass('html');
        },
        css : function () {
            $(this).addClass('css');
        },
        js : function () {
            $(this).addClass('js');
        },
        php : function () {
            $(this).addClass('php');
        },
        mysql : function () {
            $(this).addClass('mysql');
        },
        nodejs : function () {
            $(this).addClass('nodejs');
        },
        mongo : function () {
            $(this).addClass('mongo');
        },
        git : function () {
            $(this).addClass('git');
        },
        gulp : function () {
            $(this).addClass('gulp');
        }
    };


    return {
        init : function () {
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                var elems = $('.animate');

                elems.each(function () {
                   var $this = $(this);


                    if (checkDistance(scrollTop, $this)) {
                        var animationType = $this.data('animation');
                        animationActions[animationType].call($this);
                    }
                });

            })
        }
    }


})();

animateCss.init();

//--------------------End-circle-animation-------------------

//--------------------Start-burger-button----------------------

var isActive = false;

$('.header__burger-menu').on('click', function() {
    if (isActive) {
        $(this).removeClass('active');
        $('body').removeClass('menu-open');
    } else {
        $(this).addClass('active');
        $('body').addClass('menu-open');
    }

    isActive = !isActive;
});
//--------------------End-burger-button----------------------

//----------------- parallax-main-page--------------------

var parallaxContainer = document.getElementById('parallax'),
    layers = parallaxContainer.children;

window.addEventListener('mousemove', function (e) {
    var pageX = e.pageX,
        pageY = e.pageY,
        initialX = (window.innerWidth / 2) - pageX,
        initialY = (window.innerHeight / 2) - pageY;

    [].slice.call(layers).forEach(function (layer, i) {
        var
            divider = i / 100,
            bottomPosition = (window.innerHeight / 2) * divider,
            positionX = initialX * divider,
            positionY = initialY * divider,
            layerStyle = layer.style,
            transformString = 'translate3d('+ positionX +'px,' + positionY + 'px, 0)';

            layerStyle.transform = transformString;
            layerStyle.bottom = '-' + bottomPosition + 'px';
    });
});
//----------------- END-parallax-main-page--------------------

//----------------- auth-button-main-page--------------------

$('.auth-button').on('click', function () {
        $('.flip-container').css({
            'transform':'rotateY(180deg)',
            'transform-style':'preserve-3d',
            'transition':'.8s',
            'position':'relative'
        });
        $('.auth-button').hide()
        $('.flip-container__wrapper').css({
            'margin-top':'3.4375rem'
        })
    }
);

$('#back-to-main-button').on('click', function () {
        $('.flip-container').css({
            'transform':'rotateY(360deg)',
            'transform-style':'preserve-3d',
            'transition':'.8s',
            'position':'relative'
        });
        $('.auth-button').show();
    $('.flip-container__wrapper').css({
        'margin-top':'0px'
    })
    }
);

$().on('click');

//----------------- End-auth-button-main-page--------------------

//--------------------Start-Enter-button----------------

var enterButton = document.querySelector('#auth');
var answer = document.querySelector('#myanswer');

enterButton.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.txt');
    xhr.send();
    xhr.addEventListener('load', function () {
        answer.innerText = xhr.responseText;
    });
});

//--------------------End-Enter-button----------------




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtcHJlbG9hZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgcHJlbG9hZGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgcGVyY2VudHNUb3RhbCA9IDA7XHJcbiAgICB2YXIgcHJlbG9hZGVyID0gJCgnLnByZWxvYWRlcicpO1xyXG5cclxuICAgIHZhciBpbWdQYXRoID0gJCgnKicpLm1hcChmdW5jdGlvbiAobmR4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGJhY2tncm91bmQgPSAkKGVsZW1lbnQpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpO1xyXG4gICAgICAgIHZhciBpc0ltZyA9ICQoZWxlbWVudCkuaXMoJ2ltZycpO1xyXG4gICAgICAgIHZhciBwYXRoID0gJyc7XHJcblxyXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kICE9ICdub25lJykge1xyXG4gICAgICAgICAgICBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzSW1nKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSAkKGVsZW1lbnQpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhdGgpIHJldHVybiBwYXRoO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHNldFBlcmNlbnRzID0gZnVuY3Rpb24odG90YWwsIGN1cnJlbnQpIHtcclxuICAgICAgICB2YXIgcGVyY2VudHMgPSBNYXRoLmNlaWwoY3VycmVudCAvIHRvdGFsICogMTAwKTtcclxuXHJcbiAgICAgICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcmNlbnRzICsgJyUnKTtcclxuXHJcbiAgICAgICAgaWYgKHBlcmNlbnRzID49IDEwMCkge1xyXG4gICAgICAgICAgICBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9hZEltYWdlcyA9IGZ1bmN0aW9uKGltYWdlcykge1xyXG5cclxuICAgICAgICBpZiAoIWltYWdlcy5sZW5ndGgpIHByZWxvYWRlci5mYWRlT3V0KCk7XHJcblxyXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uKGltZywgaSwgaW1hZ2VzKXtcclxuICAgICAgICAgICAgdmFyIGZha2VJbWFnZSA9ICQoJzxpbWc+Jywge1xyXG4gICAgICAgICAgICAgICAgYXR0ciA6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmMgOiBpbWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmYWtlSW1hZ2Uub24oJ2xvYWQgZXJyb3InLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgICAgICAgICAgc2V0UGVyY2VudHMoaW1hZ2VzLmxlbmd0aCwgcGVyY2VudHNUb3RhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpbWdzID0gaW1nUGF0aC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGltZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpKTtcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgcHJlbG9hZGVyLmluaXQoKTtcclxufSk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLXByZWxvYWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLXN0YXJ0LVN3aXBlLW5hdmlnYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kKCcuc3dpcGUtYnV0dG9uX19pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdzd2lwZS1idXR0b25fX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc3dpcGUtYnV0dG9uX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgJCgnYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoJy5tYWluX2gyJykuZXEoJCh0aGlzKS5pbmRleCgpKS5vZmZzZXQoKS50b3B9LCAxMDAwKTtcclxufSk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLXN3aXBlLW5hdmlnYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LXN3aXBlLWJ1dHRvbi1hbmltYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuc3dpcGUtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAkKCcuc3dpcGUtYnV0dG9uX19sZWZ0LW5hdicpLmNzcyh7XHJcbiAgICAgICAgICAgICAnbGVmdCc6ICcwJ1xyXG4gICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnN3aXBlLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyICRtZXNzYWdlID0gJCgnLnN3aXBlLWJ1dHRvbl9fbGVmdC1uYXYnKTtcclxuXHJcbiAgICAgICAgaWYgKCRtZXNzYWdlLmNzcygnZGlzcGxheScpICE9ICdibG9jaycpIHtcclxuICAgICAgICAgICAgJG1lc3NhZ2Uuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHlvdXJDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ2NsaWNrLm15RXZlbnQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF5b3VyQ2xpY2sgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLnN3aXBlLWJ1dHRvbl9fbGVmdC1uYXYnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS51bmJpbmQoJ2NsaWNrLm15RXZlbnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHlvdXJDbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLXN3aXBlLWJ1dHRvbi1hbmltYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtdXAtYnV0dG9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24oJCkge1xyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLnJldmlldy1ibG9ja19fdXAtbGluaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSw1MDApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KSgkKTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC11cC1idXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtZG93bi1idXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbigkKSB7XHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuaGVhZGVyX19kb3duLWJ1dHRvbl9saW5rJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IDc2NX0sNTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoJCk7XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1kb3duLWJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1zdGFydC1zbGlkZXItLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiQoJy5zbGlkZXJfX2J1dHRvbi11cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBuPSQoJy5zbGlkZXJfX2l0ZW1fYWN0aXZlJykuaW5kZXgoKTtcclxuICAgIHZhciBtPSQoJy5zbGlkZXNob3dfX2xpc3QnKS5jaGlsZHJlbignbGknKS5sZW5ndGg7XHJcbiAgICBpZihuPT1tLTEpe1xyXG4gICAgICAgICQoJy5zbGlkZXNob3dfX2l0ZW0nKS5lcSgwKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfX2Jsb2NrJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV9kb3duJykuZXEobS0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX3VwJykuZXEoMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9IGVsc2UgaWYobj09bS0yKXtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEobisxKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfX2Jsb2NrJykuZXEobisxKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX2Rvd24nKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX3VwJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgJCgnLnNsaWRlc2hvd19faXRlbScpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X19ibG9jaycpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV9kb3duJykuZXEobikuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV91cCcpLmVxKG4rMikuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9XHJcbn0pO1xyXG4kKCcuc2xpZGVyX19idXR0b24tZG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBuPSQoJy5zbGlkZXJfX2l0ZW1fYWN0aXZlJykuaW5kZXgoKTtcclxuICAgIHZhciBtPSQoJy5zbGlkZXNob3dfX2xpc3QnKS5jaGlsZHJlbignbGknKS5sZW5ndGg7XHJcbiAgICBpZihuPT0wKXtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEobS0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfX2Jsb2NrJykuZXEobS0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX2Rvd24nKS5lcShtLTIpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fdXAnKS5lcSgwKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1lbHNlIGlmKG49PTEpe1xyXG4gICAgICAgICQoJy5zbGlkZXNob3dfX2l0ZW0nKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXItY29tbWVudF9fYmxvY2snKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fZG93bicpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV91cCcpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgICQoJy5zbGlkZXNob3dfX2l0ZW0nKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXItY29tbWVudF9fYmxvY2snKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fZG93bicpLmVxKG4tMikuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV91cCcpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG59KTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVORC1zbGlkZXItLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtY2lyY2xlLWFuaW1hdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnZhciBhbmltYXRlQ3NzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjaGVja0Rpc3RhbmNlID0gZnVuY3Rpb24gKHNjcm9sbFRvcCwgZWxlbSkge1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSBlbGVtLm9mZnNldCgpLnRvcDtcclxuICAgICAgICB2YXIgd2luZG93TWFyZ2luID0gTWF0aC5jZWlsKCQod2luZG93KS5oZWlnaHQoKSAvIDEpO1xyXG4gICAgICAgIHZhciB0b3BCb3JkZXIgPSBvZmZzZXQgLSBzY3JvbGxUb3AgLSB3aW5kb3dNYXJnaW47XHJcbiAgICAgICAgdmFyIGJvdHRvbUVkZ2UgPSBlbGVtLm91dGVySGVpZ2h0KHRydWUpICsgb2Zmc2V0O1xyXG4gICAgICAgIHZhciBib3R0b21Cb3JkZXIgPSBzY3JvbGxUb3AgKyB3aW5kb3dNYXJnaW4gLSBib3R0b21FZGdlO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9wQm9yZGVyIDw9MCAmJiBib3R0b21Cb3JkZXIgPD0wO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYW5pbWF0aW9uQWN0aW9ucyA9IHtcclxuICAgICAgICBodG1sIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdodG1sJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjc3MgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NzcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAganMgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2pzJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwaHAgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3BocCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXlzcWwgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ215c3FsJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBub2RlanMgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ25vZGVqcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9uZ28gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21vbmdvJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnaXQgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2dpdCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3VscCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZ3VscCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1zID0gJCgnLmFuaW1hdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tEaXN0YW5jZShzY3JvbGxUb3AsICR0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uVHlwZSA9ICR0aGlzLmRhdGEoJ2FuaW1hdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25BY3Rpb25zW2FuaW1hdGlvblR5cGVdLmNhbGwoJHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufSkoKTtcclxuXHJcbmFuaW1hdGVDc3MuaW5pdCgpO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1jaXJjbGUtYW5pbWF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LWJ1cmdlci1idXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiQoJy5oZWFkZXJfX2J1cmdlci1tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21lbnUtb3BlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21lbnUtb3BlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQWN0aXZlID0gIWlzQWN0aXZlO1xyXG59KTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1idXJnZXItYnV0dG9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLSBwYXJhbGxheC1tYWluLXBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxudmFyIHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4JyksXHJcbiAgICBsYXllcnMgPSBwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHBhZ2VYID0gZS5wYWdlWCxcclxuICAgICAgICBwYWdlWSA9IGUucGFnZVksXHJcbiAgICAgICAgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIHBhZ2VYLFxyXG4gICAgICAgIGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC0gcGFnZVk7XHJcblxyXG4gICAgW10uc2xpY2UuY2FsbChsYXllcnMpLmZvckVhY2goZnVuY3Rpb24gKGxheWVyLCBpKSB7XHJcbiAgICAgICAgdmFyXHJcbiAgICAgICAgICAgIGRpdmlkZXIgPSBpIC8gMTAwLFxyXG4gICAgICAgICAgICBib3R0b21Qb3NpdGlvbiA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcixcclxuICAgICAgICAgICAgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICBsYXllclN0eWxlID0gbGF5ZXIuc3R5bGUsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgnKyBwb3NpdGlvblggKydweCwnICsgcG9zaXRpb25ZICsgJ3B4LCAwKSc7XHJcblxyXG4gICAgICAgICAgICBsYXllclN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgICAgICAgbGF5ZXJTdHlsZS5ib3R0b20gPSAnLScgKyBib3R0b21Qb3NpdGlvbiArICdweCc7XHJcbiAgICB9KTtcclxufSk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0gRU5ELXBhcmFsbGF4LW1haW4tcGFnZS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tIGF1dGgtYnV0dG9uLW1haW4tcGFnZS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4kKCcuYXV0aC1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmZsaXAtY29udGFpbmVyJykuY3NzKHtcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybSc6J3JvdGF0ZVkoMTgwZGVnKScsXHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0tc3R5bGUnOidwcmVzZXJ2ZS0zZCcsXHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzonLjhzJyxcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzoncmVsYXRpdmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmF1dGgtYnV0dG9uJykuaGlkZSgpXHJcbiAgICAgICAgJCgnLmZsaXAtY29udGFpbmVyX193cmFwcGVyJykuY3NzKHtcclxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOiczLjQzNzVyZW0nXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuKTtcclxuXHJcbiQoJyNiYWNrLXRvLW1haW4tYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLmNzcyh7XHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nOidyb3RhdGVZKDM2MGRlZyknLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtLXN0eWxlJzoncHJlc2VydmUtM2QnLFxyXG4gICAgICAgICAgICAndHJhbnNpdGlvbic6Jy44cycsXHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6J3JlbGF0aXZlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5hdXRoLWJ1dHRvbicpLnNob3coKTtcclxuICAgICQoJy5mbGlwLWNvbnRhaW5lcl9fd3JhcHBlcicpLmNzcyh7XHJcbiAgICAgICAgJ21hcmdpbi10b3AnOicwcHgnXHJcbiAgICB9KVxyXG4gICAgfVxyXG4pO1xyXG5cclxuJCgpLm9uKCdjbGljaycpO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLSBFbmQtYXV0aC1idXR0b24tbWFpbi1wYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydC1FbnRlci1idXR0b24tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgZW50ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0aCcpO1xyXG52YXIgYW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215YW5zd2VyJyk7XHJcblxyXG5lbnRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICB4aHIub3BlbignR0VUJywgJ3Rlc3QudHh0Jyk7XHJcbiAgICB4aHIuc2VuZCgpO1xyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYW5zd2VyLmlubmVyVGV4dCA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLUVudGVyLWJ1dHRvbi0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuIl19
