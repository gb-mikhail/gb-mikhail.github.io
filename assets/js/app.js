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
        $('.slider__item_down').eq(m-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    } else if(n==m-2){
        $('.slideshow__item').eq(n+1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(n).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(0).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }else {
        $('.slideshow__item').eq(n+1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(n).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(n+2).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }
});
$('.slider__button-down').on('click', function () {
    var n=$('.slider__item_active').index();
    var m=$('.slideshow__list').children('li').length;
    if(n==0){
        $('.slideshow__item').eq(m-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(m-2).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(0).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }else if(n==1){
        $('.slideshow__item').eq(n-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_down').eq(m-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
        $('.slider__item_up').eq(n).addClass('slider__item_active').siblings().removeClass('slider__item_active');
    }else {
        $('.slideshow__item').eq(n-1).addClass('slider__item_active').siblings().removeClass('slider__item_active');
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




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LXByZWxvYWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxudmFyIHByZWxvYWRlciA9IChmdW5jdGlvbigpe1xyXG4gICAgdmFyIHBlcmNlbnRzVG90YWwgPSAwO1xyXG4gICAgdmFyIHByZWxvYWRlciA9ICQoJy5wcmVsb2FkZXInKTtcclxuXHJcbiAgICB2YXIgaW1nUGF0aCA9ICQoJyonKS5tYXAoZnVuY3Rpb24gKG5keCwgZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kID0gJChlbGVtZW50KS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKTtcclxuICAgICAgICB2YXIgaXNJbWcgPSAkKGVsZW1lbnQpLmlzKCdpbWcnKTtcclxuICAgICAgICB2YXIgcGF0aCA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoYmFja2dyb3VuZCAhPSAnbm9uZScpIHtcclxuICAgICAgICAgICAgcGF0aCA9IGJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0ltZykge1xyXG4gICAgICAgICAgICBwYXRoID0gJChlbGVtZW50KS5hdHRyKCdzcmMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXRoKSByZXR1cm4gcGF0aDtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBzZXRQZXJjZW50cyA9IGZ1bmN0aW9uKHRvdGFsLCBjdXJyZW50KSB7XHJcbiAgICAgICAgdmFyIHBlcmNlbnRzID0gTWF0aC5jZWlsKGN1cnJlbnQgLyB0b3RhbCAqIDEwMCk7XHJcblxyXG4gICAgICAgICQoJy5wcmVsb2FkZXJfX3BlcmNlbnRzJykudGV4dChwZXJjZW50cyArICclJyk7XHJcblxyXG4gICAgICAgIGlmIChwZXJjZW50cyA+PSAxMDApIHtcclxuICAgICAgICAgICAgcHJlbG9hZGVyLmZhZGVPdXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvYWRJbWFnZXMgPSBmdW5jdGlvbihpbWFnZXMpIHtcclxuXHJcbiAgICAgICAgaWYgKCFpbWFnZXMubGVuZ3RoKSBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG5cclxuICAgICAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbihpbWcsIGksIGltYWdlcyl7XHJcbiAgICAgICAgICAgIHZhciBmYWtlSW1hZ2UgPSAkKCc8aW1nPicsIHtcclxuICAgICAgICAgICAgICAgIGF0dHIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjIDogaW1nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZmFrZUltYWdlLm9uKCdsb2FkIGVycm9yJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRzVG90YWwrKztcclxuICAgICAgICAgICAgICAgIHNldFBlcmNlbnRzKGltYWdlcy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW1ncyA9IGltZ1BhdGgudG9BcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgbG9hZEltYWdlcyhpbWdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIHByZWxvYWRlci5pbml0KCk7XHJcbn0pO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1wcmVsb2FkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1zdGFydC1Td2lwZS1uYXZpZ2F0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJCgnLnN3aXBlLWJ1dHRvbl9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnc3dpcGUtYnV0dG9uX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3N3aXBlLWJ1dHRvbl9faXRlbV9hY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKCcubWFpbl9oMicpLmVxKCQodGhpcykuaW5kZXgoKSkub2Zmc2V0KCkudG9wfSwgMTAwMCk7XHJcbn0pO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1zd2lwZS1uYXZpZ2F0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydC1zd2lwZS1idXR0b24tYW5pbWF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLnN3aXBlLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgJCgnLnN3aXBlLWJ1dHRvbl9fbGVmdC1uYXYnKS5jc3Moe1xyXG4gICAgICAgICAgICAgJ2xlZnQnOiAnMCdcclxuICAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zd2lwZS1idXR0b24nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciAkbWVzc2FnZSA9ICQoJy5zd2lwZS1idXR0b25fX2xlZnQtbmF2Jyk7XHJcblxyXG4gICAgICAgIGlmICgkbWVzc2FnZS5jc3MoJ2Rpc3BsYXknKSAhPSAnYmxvY2snKSB7XHJcbiAgICAgICAgICAgICRtZXNzYWdlLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB5b3VyQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5iaW5kKCdjbGljay5teUV2ZW50JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgheW91ckNsaWNrICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5zd2lwZS1idXR0b25fX2xlZnQtbmF2JykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkudW5iaW5kKCdjbGljay5teUV2ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5b3VyQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1zd2lwZS1idXR0b24tYW5pbWF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LXVwLWJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKGZ1bmN0aW9uKCQpIHtcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5yZXZpZXctYmxvY2tfX3VwLWxpbmsnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sNTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoJCk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtdXAtYnV0dG9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LWRvd24tYnV0dG9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24oJCkge1xyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLmhlYWRlcl9fZG93bi1idXR0b25fbGluaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiA3NjV9LDUwMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKCQpO1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtZG93bi1idXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tc3RhcnQtc2xpZGVyLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kKCcuc2xpZGVyX19idXR0b24tdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbj0kKCcuc2xpZGVyX19pdGVtX2FjdGl2ZScpLmluZGV4KCk7XHJcbiAgICB2YXIgbT0kKCcuc2xpZGVzaG93X19saXN0JykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoO1xyXG4gICAgaWYobj09bS0xKXtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV9kb3duJykuZXEobS0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX3VwJykuZXEoMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9IGVsc2UgaWYobj09bS0yKXtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEobisxKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX2Rvd24nKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX3VwJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgJCgnLnNsaWRlc2hvd19faXRlbScpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV9kb3duJykuZXEobikuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV91cCcpLmVxKG4rMikuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9XHJcbn0pO1xyXG4kKCcuc2xpZGVyX19idXR0b24tZG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBuPSQoJy5zbGlkZXJfX2l0ZW1fYWN0aXZlJykuaW5kZXgoKTtcclxuICAgIHZhciBtPSQoJy5zbGlkZXNob3dfX2xpc3QnKS5jaGlsZHJlbignbGknKS5sZW5ndGg7XHJcbiAgICBpZihuPT0wKXtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEobS0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX2Rvd24nKS5lcShtLTIpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fdXAnKS5lcSgwKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1lbHNlIGlmKG49PTEpe1xyXG4gICAgICAgICQoJy5zbGlkZXNob3dfX2l0ZW0nKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fZG93bicpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV91cCcpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgICQoJy5zbGlkZXNob3dfX2l0ZW0nKS5lcShuLTEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fZG93bicpLmVxKG4tMikuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV91cCcpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG59KTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVORC1zbGlkZXItLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LWNpcmNsZS1hbmltYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgYW5pbWF0ZUNzcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2hlY2tEaXN0YW5jZSA9IGZ1bmN0aW9uIChzY3JvbGxUb3AsIGVsZW0pIHtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gZWxlbS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgdmFyIHdpbmRvd01hcmdpbiA9IE1hdGguY2VpbCgkKHdpbmRvdykuaGVpZ2h0KCkgLyAxKTtcclxuICAgICAgICB2YXIgdG9wQm9yZGVyID0gb2Zmc2V0IC0gc2Nyb2xsVG9wIC0gd2luZG93TWFyZ2luO1xyXG4gICAgICAgIHZhciBib3R0b21FZGdlID0gZWxlbS5vdXRlckhlaWdodCh0cnVlKSArIG9mZnNldDtcclxuICAgICAgICB2YXIgYm90dG9tQm9yZGVyID0gc2Nyb2xsVG9wICsgd2luZG93TWFyZ2luIC0gYm90dG9tRWRnZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvcEJvcmRlciA8PTAgJiYgYm90dG9tQm9yZGVyIDw9MDtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGFuaW1hdGlvbkFjdGlvbnMgPSB7XHJcbiAgICAgICAgaHRtbCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaHRtbCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3NzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjc3MnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGpzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdqcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGhwIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwaHAnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG15c3FsIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdteXNxbCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm9kZWpzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdub2RlanMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vbmdvIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdtb25nbycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2l0IDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdnaXQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGd1bHAgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2d1bHAnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtcyA9ICQoJy5hbmltYXRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrRGlzdGFuY2Uoc2Nyb2xsVG9wLCAkdGhpcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvblR5cGUgPSAkdGhpcy5kYXRhKCdhbmltYXRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQWN0aW9uc1thbmltYXRpb25UeXBlXS5jYWxsKCR0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0pKCk7XHJcblxyXG5hbmltYXRlQ3NzLmluaXQoKTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtY2lyY2xlLWFuaW1hdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydC1idXJnZXItYnV0dG9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxudmFyIGlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4kKCcuaGVhZGVyX19idXJnZXItbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0FjdGl2ZSA9ICFpc0FjdGl2ZTtcclxufSk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtYnVyZ2VyLWJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0gcGFyYWxsYXgtbWFpbi1wYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnZhciBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheCcpLFxyXG4gICAgbGF5ZXJzID0gcGFyYWxsYXhDb250YWluZXIuY2hpbGRyZW47XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBwYWdlWCA9IGUucGFnZVgsXHJcbiAgICAgICAgcGFnZVkgPSBlLnBhZ2VZLFxyXG4gICAgICAgIGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBwYWdlWCxcclxuICAgICAgICBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIHBhZ2VZO1xyXG5cclxuICAgIFtdLnNsaWNlLmNhbGwobGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChsYXllciwgaSkge1xyXG4gICAgICAgIHZhclxyXG4gICAgICAgICAgICBkaXZpZGVyID0gaSAvIDEwMCxcclxuICAgICAgICAgICAgYm90dG9tUG9zaXRpb24gPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICBwb3NpdGlvblggPSBpbml0aWFsWCAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcixcclxuICAgICAgICAgICAgbGF5ZXJTdHlsZSA9IGxheWVyLnN0eWxlLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlM2QoJysgcG9zaXRpb25YICsncHgsJyArIHBvc2l0aW9uWSArICdweCwgMCknO1xyXG5cclxuICAgICAgICAgICAgbGF5ZXJTdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XHJcbiAgICAgICAgICAgIGxheWVyU3R5bGUuYm90dG9tID0gJy0nICsgYm90dG9tUG9zaXRpb24gKyAncHgnO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tIEVORC1wYXJhbGxheC1tYWluLXBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLSBhdXRoLWJ1dHRvbi1tYWluLXBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJCgnLmF1dGgtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLmNzcyh7XHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nOidyb3RhdGVZKDE4MGRlZyknLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtLXN0eWxlJzoncHJlc2VydmUtM2QnLFxyXG4gICAgICAgICAgICAndHJhbnNpdGlvbic6Jy44cycsXHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6J3JlbGF0aXZlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5hdXRoLWJ1dHRvbicpLmhpZGUoKVxyXG4gICAgICAgICQoJy5mbGlwLWNvbnRhaW5lcl9fd3JhcHBlcicpLmNzcyh7XHJcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonMy40Mzc1cmVtJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbik7XHJcblxyXG4kKCcjYmFjay10by1tYWluLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZmxpcC1jb250YWluZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAndHJhbnNmb3JtJzoncm90YXRlWSgzNjBkZWcpJyxcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1zdHlsZSc6J3ByZXNlcnZlLTNkJyxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nOicuOHMnLFxyXG4gICAgICAgICAgICAncG9zaXRpb24nOidyZWxhdGl2ZSdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuYXV0aC1idXR0b24nKS5zaG93KCk7XHJcbiAgICAkKCcuZmxpcC1jb250YWluZXJfX3dyYXBwZXInKS5jc3Moe1xyXG4gICAgICAgICdtYXJnaW4tdG9wJzonMHB4J1xyXG4gICAgfSlcclxuICAgIH1cclxuKTtcclxuXHJcbiQoKS5vbignY2xpY2snKTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0gRW5kLWF1dGgtYnV0dG9uLW1haW4tcGFnZS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbiJdfQ==
