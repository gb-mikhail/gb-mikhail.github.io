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




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LXByZWxvYWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxudmFyIHByZWxvYWRlciA9IChmdW5jdGlvbigpe1xyXG4gICAgdmFyIHBlcmNlbnRzVG90YWwgPSAwO1xyXG4gICAgdmFyIHByZWxvYWRlciA9ICQoJy5wcmVsb2FkZXInKTtcclxuXHJcbiAgICB2YXIgaW1nUGF0aCA9ICQoJyonKS5tYXAoZnVuY3Rpb24gKG5keCwgZWxlbWVudCkge1xyXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kID0gJChlbGVtZW50KS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKTtcclxuICAgICAgICB2YXIgaXNJbWcgPSAkKGVsZW1lbnQpLmlzKCdpbWcnKTtcclxuICAgICAgICB2YXIgcGF0aCA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoYmFja2dyb3VuZCAhPSAnbm9uZScpIHtcclxuICAgICAgICAgICAgcGF0aCA9IGJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0ltZykge1xyXG4gICAgICAgICAgICBwYXRoID0gJChlbGVtZW50KS5hdHRyKCdzcmMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXRoKSByZXR1cm4gcGF0aDtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBzZXRQZXJjZW50cyA9IGZ1bmN0aW9uKHRvdGFsLCBjdXJyZW50KSB7XHJcbiAgICAgICAgdmFyIHBlcmNlbnRzID0gTWF0aC5jZWlsKGN1cnJlbnQgLyB0b3RhbCAqIDEwMCk7XHJcblxyXG4gICAgICAgICQoJy5wcmVsb2FkZXJfX3BlcmNlbnRzJykudGV4dChwZXJjZW50cyArICclJyk7XHJcblxyXG4gICAgICAgIGlmIChwZXJjZW50cyA+PSAxMDApIHtcclxuICAgICAgICAgICAgcHJlbG9hZGVyLmZhZGVPdXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvYWRJbWFnZXMgPSBmdW5jdGlvbihpbWFnZXMpIHtcclxuXHJcbiAgICAgICAgaWYgKCFpbWFnZXMubGVuZ3RoKSBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG5cclxuICAgICAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbihpbWcsIGksIGltYWdlcyl7XHJcbiAgICAgICAgICAgIHZhciBmYWtlSW1hZ2UgPSAkKCc8aW1nPicsIHtcclxuICAgICAgICAgICAgICAgIGF0dHIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjIDogaW1nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZmFrZUltYWdlLm9uKCdsb2FkIGVycm9yJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRzVG90YWwrKztcclxuICAgICAgICAgICAgICAgIHNldFBlcmNlbnRzKGltYWdlcy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW1ncyA9IGltZ1BhdGgudG9BcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgbG9hZEltYWdlcyhpbWdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIHByZWxvYWRlci5pbml0KCk7XHJcbn0pO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1wcmVsb2FkZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1zdGFydC1Td2lwZS1uYXZpZ2F0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuJCgnLnN3aXBlLWJ1dHRvbl9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnc3dpcGUtYnV0dG9uX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3N3aXBlLWJ1dHRvbl9faXRlbV9hY3RpdmUnKTtcclxuICAgICQoJ2JvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKCcubWFpbl9oMicpLmVxKCQodGhpcykuaW5kZXgoKSkub2Zmc2V0KCkudG9wfSwgMTAwMCk7XHJcbn0pO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1zd2lwZS1uYXZpZ2F0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydC1zd2lwZS1idXR0b24tYW5pbWF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLnN3aXBlLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgJCgnLnN3aXBlLWJ1dHRvbl9fbGVmdC1uYXYnKS5jc3Moe1xyXG4gICAgICAgICAgICAgJ2xlZnQnOiAnMCdcclxuICAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5zd2lwZS1idXR0b24nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciAkbWVzc2FnZSA9ICQoJy5zd2lwZS1idXR0b25fX2xlZnQtbmF2Jyk7XHJcblxyXG4gICAgICAgIGlmICgkbWVzc2FnZS5jc3MoJ2Rpc3BsYXknKSAhPSAnYmxvY2snKSB7XHJcbiAgICAgICAgICAgICRtZXNzYWdlLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB5b3VyQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5iaW5kKCdjbGljay5teUV2ZW50JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgheW91ckNsaWNrICYmICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5zd2lwZS1idXR0b25fX2xlZnQtbmF2JykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkudW5iaW5kKCdjbGljay5teUV2ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5b3VyQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1zd2lwZS1idXR0b24tYW5pbWF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LXVwLWJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKGZ1bmN0aW9uKCQpIHtcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5yZXZpZXctYmxvY2tfX3VwLWxpbmsnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sNTAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoJCk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtdXAtYnV0dG9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LWRvd24tYnV0dG9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4oZnVuY3Rpb24oJCkge1xyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLmhlYWRlcl9fZG93bi1idXR0b25fbGluaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiA3NjV9LDUwMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKCQpO1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtZG93bi1idXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tc3RhcnQtc2xpZGVyLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kKCcuc2xpZGVyX19idXR0b24tdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbj0kKCcuc2xpZGVyX19pdGVtX2FjdGl2ZScpLmluZGV4KCk7XHJcbiAgICB2YXIgbT0kKCcuc2xpZGVzaG93X19saXN0JykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoO1xyXG4gICAgaWYobj09bS0xKXtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X19ibG9jaycpLmVxKDApLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fZG93bicpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV91cCcpLmVxKDEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIGlmKG49PW0tMil7XHJcbiAgICAgICAgJCgnLnNsaWRlc2hvd19faXRlbScpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X19ibG9jaycpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV9kb3duJykuZXEobikuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV91cCcpLmVxKDApLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgICQoJy5zbGlkZXNob3dfX2l0ZW0nKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXItY29tbWVudF9fYmxvY2snKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fZG93bicpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fdXAnKS5lcShuKzIpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG59KTtcclxuJCgnLnNsaWRlcl9fYnV0dG9uLWRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbj0kKCcuc2xpZGVyX19pdGVtX2FjdGl2ZScpLmluZGV4KCk7XHJcbiAgICB2YXIgbT0kKCcuc2xpZGVzaG93X19saXN0JykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoO1xyXG4gICAgaWYobj09MCl7XHJcbiAgICAgICAgJCgnLnNsaWRlc2hvd19faXRlbScpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X19ibG9jaycpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV9kb3duJykuZXEobS0yKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX3VwJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9ZWxzZSBpZihuPT0xKXtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfX2Jsb2NrJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX2Rvd24nKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fdXAnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfX2Jsb2NrJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX2Rvd24nKS5lcShuLTIpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fdXAnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxufSk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FTkQtc2xpZGVyLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydC1jaXJjbGUtYW5pbWF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxudmFyIGFuaW1hdGVDc3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNoZWNrRGlzdGFuY2UgPSBmdW5jdGlvbiAoc2Nyb2xsVG9wLCBlbGVtKSB7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IGVsZW0ub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIHZhciB3aW5kb3dNYXJnaW4gPSBNYXRoLmNlaWwoJCh3aW5kb3cpLmhlaWdodCgpIC8gMSk7XHJcbiAgICAgICAgdmFyIHRvcEJvcmRlciA9IG9mZnNldCAtIHNjcm9sbFRvcCAtIHdpbmRvd01hcmdpbjtcclxuICAgICAgICB2YXIgYm90dG9tRWRnZSA9IGVsZW0ub3V0ZXJIZWlnaHQodHJ1ZSkgKyBvZmZzZXQ7XHJcbiAgICAgICAgdmFyIGJvdHRvbUJvcmRlciA9IHNjcm9sbFRvcCArIHdpbmRvd01hcmdpbiAtIGJvdHRvbUVkZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0b3BCb3JkZXIgPD0wICYmIGJvdHRvbUJvcmRlciA8PTA7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBhbmltYXRpb25BY3Rpb25zID0ge1xyXG4gICAgICAgIGh0bWwgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2h0bWwnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNzcyA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY3NzJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBqcyA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnanMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBocCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncGhwJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBteXNxbCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbXlzcWwnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vZGVqcyA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm9kZWpzJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb25nbyA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbW9uZ28nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdpdCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZ2l0Jyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBndWxwIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdndWxwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0IDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbXMgPSAkKCcuYW5pbWF0ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1zLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0Rpc3RhbmNlKHNjcm9sbFRvcCwgJHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25UeXBlID0gJHRoaXMuZGF0YSgnYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkFjdGlvbnNbYW5pbWF0aW9uVHlwZV0uY2FsbCgkdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59KSgpO1xyXG5cclxuYW5pbWF0ZUNzcy5pbml0KCk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLWNpcmNsZS1hbmltYXRpb24tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtYnVyZ2VyLWJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnZhciBpc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuJCgnLmhlYWRlcl9fYnVyZ2VyLW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbWVudS1vcGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBY3RpdmUgPSAhaXNBY3RpdmU7XHJcbn0pO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLWJ1cmdlci1idXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tIHBhcmFsbGF4LW1haW4tcGFnZS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXgnKSxcclxuICAgIGxheWVycyA9IHBhcmFsbGF4Q29udGFpbmVyLmNoaWxkcmVuO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgcGFnZVggPSBlLnBhZ2VYLFxyXG4gICAgICAgIHBhZ2VZID0gZS5wYWdlWSxcclxuICAgICAgICBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC0gcGFnZVgsXHJcbiAgICAgICAgaW5pdGlhbFkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgLSBwYWdlWTtcclxuXHJcbiAgICBbXS5zbGljZS5jYWxsKGxheWVycykuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXIsIGkpIHtcclxuICAgICAgICB2YXJcclxuICAgICAgICAgICAgZGl2aWRlciA9IGkgLyAxMDAsXHJcbiAgICAgICAgICAgIGJvdHRvbVBvc2l0aW9uID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICogZGl2aWRlcixcclxuICAgICAgICAgICAgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICBwb3NpdGlvblkgPSBpbml0aWFsWSAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgIGxheWVyU3R5bGUgPSBsYXllci5zdHlsZSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZTNkKCcrIHBvc2l0aW9uWCArJ3B4LCcgKyBwb3NpdGlvblkgKyAncHgsIDApJztcclxuXHJcbiAgICAgICAgICAgIGxheWVyU3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgICAgICAgICBsYXllclN0eWxlLmJvdHRvbSA9ICctJyArIGJvdHRvbVBvc2l0aW9uICsgJ3B4JztcclxuICAgIH0pO1xyXG59KTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLSBFTkQtcGFyYWxsYXgtbWFpbi1wYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0gYXV0aC1idXR0b24tbWFpbi1wYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiQoJy5hdXRoLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZmxpcC1jb250YWluZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAndHJhbnNmb3JtJzoncm90YXRlWSgxODBkZWcpJyxcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1zdHlsZSc6J3ByZXNlcnZlLTNkJyxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nOicuOHMnLFxyXG4gICAgICAgICAgICAncG9zaXRpb24nOidyZWxhdGl2ZSdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuYXV0aC1idXR0b24nKS5oaWRlKClcclxuICAgICAgICAkKCcuZmxpcC1jb250YWluZXJfX3dyYXBwZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6JzMuNDM3NXJlbSdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4pO1xyXG5cclxuJCgnI2JhY2stdG8tbWFpbi1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmZsaXAtY29udGFpbmVyJykuY3NzKHtcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybSc6J3JvdGF0ZVkoMzYwZGVnKScsXHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0tc3R5bGUnOidwcmVzZXJ2ZS0zZCcsXHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzonLjhzJyxcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzoncmVsYXRpdmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmF1dGgtYnV0dG9uJykuc2hvdygpO1xyXG4gICAgJCgnLmZsaXAtY29udGFpbmVyX193cmFwcGVyJykuY3NzKHtcclxuICAgICAgICAnbWFyZ2luLXRvcCc6JzBweCdcclxuICAgIH0pXHJcbiAgICB9XHJcbik7XHJcblxyXG4kKCkub24oJ2NsaWNrJyk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tIEVuZC1hdXRoLWJ1dHRvbi1tYWluLXBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG4iXX0=
