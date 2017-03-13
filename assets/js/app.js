//--------------------Start-preloader
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
    };

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

preloader.init();

//--------------------End-preloader



//--------------------start-Swipe-navigation
var swipe = (function(){

    var swipe = function () {
        $('.swipe-button__item').on('click', function () {
            $(this).addClass('swipe-button__item_active').siblings().removeClass('swipe-button__item_active');
            $('body').animate({scrollTop: $('.main_h2').eq($(this).index()).offset().top}, 1000);
        });
    };
    return{
        init:swipe
    }
}());

swipe.init();
//--------------------End-swipe-navigation

//--------------------Start-swipe-button-animation
var swipeAnimation = (function () {

    var swipeAnimation = function (){
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
    };
    return{
        init:swipeAnimation
    }
}());

swipeAnimation.init();

//--------------------End-swipe-button-animation

//--------------------Start-up-button

(function($) {
    $(function() {

        $('.review-block__up-link').click(function() {
            $('html, body').animate({scrollTop: 0},500);
            return false;
        })
    })
})($);
//--------------------End-up-button

//--------------------Start-down-button
(function($) {
    $(function() {

        $('.header__down-button_link').click(function() {
            $('html, body').animate({scrollTop: 765},500);
            return false;
        })
    })
})($);

//--------------------End-down-button

//--------------------start-slider
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
//--------------------END-slider

//--------------------Start-circle-animation
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
//--------------------End-circle-animation

//--------------------Start-burger-button
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
//--------------------End-burger-button

//----------------- parallax-main-page
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
//----------------- END-parallax-main-page

//----------------- Auth-button-main-page
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
//----------------- End-auth-button-main-page

//--------------------Start-Enter-button
var enterButton = document.querySelector('#auth');
var answer = document.querySelector('#login-input__accept');

enterButton.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.txt');
    xhr.send();
    xhr.addEventListener('load', function () {
        answer.innerText = xhr.responseText;
    });
});
//--------------------End-Enter-button

//--------------------Start-map

function initMap () {
    var pointer = new google.maps.LatLng(55.787069, 37.478220),
        center = new google.maps.LatLng(55.786273, 37.418623);

    var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#96d7c8"},{"visibility":"on"}]}];

    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

    var mapSettings = {
        center: center,
        scrollwheel: false,
        zoom: 13,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        streetViewControl: false
    };

    var map = new google.maps.Map(document.getElementById('map'), mapSettings);

    var marker = new google.maps.Marker({
        icon: 'assets/img/decor/map_marker.png',
        position: pointer,
        map: map,
        title: "I'm here!",
        animation: google.maps.Animation.BOUNCE
    });

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
};

//--------------------End-map


var Validation = (function () {
    var errorField = document.querySelector('.input-error-msg'),
        captchaError = document.querySelector('.welcome__error'),
        formContainer = document.querySelector('.form__container');

    var _init = function (form) {
        var elems = form.elements;

        console.log(elems);
        return _validate(elems) ? true : false;
    };

    function _validate(inputs) {

        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].tagName === 'BUTTON') continue;

            var elem = inputs[i];

            if (elem.value == '') {
                console.log(elem);
                return _showError(elem)
            }

            if (elem.type === 'checkbox' || elem.type === 'radio') {

                if (elem.checked && elem.value === 'yes') {
                    return true;
                }
                if (!elem.checked) {
                    captchaError.style.display = 'flex';
                }
            }
        }

        return true;

    };

    function _showError(elem) {
        var text = elem.getAttribute('placeholder').toLowerCase();
        var position = elem.parentNode.offsetTop + elem.parentNode.offsetHeight;

        elem.parentNode.classList.add('input-group_error');
        errorField.style.display = 'block';
        errorField.innerText = 'Вы не ввели ' + text;

        // if (position > formContainer.offsetHeight)
        errorField.style.top = position + 'px';
    }

    function _clearError(elem) {
        console.log(elem);
        elem.parentNode.classList.remove('input-group_error');
        errorField.style.display = 'none';
    }


    return {
        init: _init,
        clear: _clearError
    }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtcHJlbG9hZGVyXHJcbnZhciBwcmVsb2FkZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIHZhciBwZXJjZW50c1RvdGFsID0gMDtcclxuICAgIHZhciBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJyk7XHJcblxyXG4gICAgdmFyIGltZ1BhdGggPSAkKCcqJykubWFwKGZ1bmN0aW9uIChuZHgsIGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgYmFja2dyb3VuZCA9ICQoZWxlbWVudCkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyk7XHJcbiAgICAgICAgdmFyIGlzSW1nID0gJChlbGVtZW50KS5pcygnaW1nJyk7XHJcbiAgICAgICAgdmFyIHBhdGggPSAnJztcclxuXHJcbiAgICAgICAgaWYgKGJhY2tncm91bmQgIT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBiYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNJbWcpIHtcclxuICAgICAgICAgICAgcGF0aCA9ICQoZWxlbWVudCkuYXR0cignc3JjJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGF0aCkgcmV0dXJuIHBhdGg7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc2V0UGVyY2VudHMgPSBmdW5jdGlvbih0b3RhbCwgY3VycmVudCkge1xyXG4gICAgICAgIHZhciBwZXJjZW50cyA9IE1hdGguY2VpbChjdXJyZW50IC8gdG90YWwgKiAxMDApO1xyXG5cclxuICAgICAgICAkKCcucHJlbG9hZGVyX19wZXJjZW50cycpLnRleHQocGVyY2VudHMgKyAnJScpO1xyXG5cclxuICAgICAgICBpZiAocGVyY2VudHMgPj0gMTAwKSB7XHJcbiAgICAgICAgICAgIHByZWxvYWRlci5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgbG9hZEltYWdlcyA9IGZ1bmN0aW9uKGltYWdlcykge1xyXG5cclxuICAgICAgICBpZiAoIWltYWdlcy5sZW5ndGgpIHByZWxvYWRlci5mYWRlT3V0KCk7XHJcblxyXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uKGltZywgaSwgaW1hZ2VzKXtcclxuICAgICAgICAgICAgdmFyIGZha2VJbWFnZSA9ICQoJzxpbWc+Jywge1xyXG4gICAgICAgICAgICAgICAgYXR0ciA6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmMgOiBpbWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmYWtlSW1hZ2Uub24oJ2xvYWQgZXJyb3InLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgICAgICAgICAgc2V0UGVyY2VudHMoaW1hZ2VzLmxlbmd0aCwgcGVyY2VudHNUb3RhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpbWdzID0gaW1nUGF0aC50b0FycmF5KCk7XHJcblxyXG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGltZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpKTtcclxuXHJcbnByZWxvYWRlci5pbml0KCk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLXByZWxvYWRlclxyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tc3RhcnQtU3dpcGUtbmF2aWdhdGlvblxyXG52YXIgc3dpcGUgPSAoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc3dpcGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLnN3aXBlLWJ1dHRvbl9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc3dpcGUtYnV0dG9uX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3N3aXBlLWJ1dHRvbl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJCgnLm1haW5faDInKS5lcSgkKHRoaXMpLmluZGV4KCkpLm9mZnNldCgpLnRvcH0sIDEwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OnN3aXBlXHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG5zd2lwZS5pbml0KCk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtc3dpcGUtbmF2aWdhdGlvblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LXN3aXBlLWJ1dHRvbi1hbmltYXRpb25cclxudmFyIHN3aXBlQW5pbWF0aW9uID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc3dpcGVBbmltYXRpb24gPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnN3aXBlLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoJy5zd2lwZS1idXR0b25fX2xlZnQtbmF2JykuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6ICcwJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuc3dpcGUtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkbWVzc2FnZSA9ICQoJy5zd2lwZS1idXR0b25fX2xlZnQtbmF2Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRtZXNzYWdlLmNzcygnZGlzcGxheScpICE9ICdibG9jaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5b3VyQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ2NsaWNrLm15RXZlbnQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXlvdXJDbGljayAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc3dpcGUtYnV0dG9uX19sZWZ0LW5hdicpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS51bmJpbmQoJ2NsaWNrLm15RXZlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3VyQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybntcclxuICAgICAgICBpbml0OnN3aXBlQW5pbWF0aW9uXHJcbiAgICB9XHJcbn0oKSk7XHJcblxyXG5zd2lwZUFuaW1hdGlvbi5pbml0KCk7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLXN3aXBlLWJ1dHRvbi1hbmltYXRpb25cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1TdGFydC11cC1idXR0b25cclxuXHJcbihmdW5jdGlvbigkKSB7XHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcucmV2aWV3LWJsb2NrX191cC1saW5rJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LDUwMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSkoJCk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtdXAtYnV0dG9uXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtZG93bi1idXR0b25cclxuKGZ1bmN0aW9uKCQpIHtcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5oZWFkZXJfX2Rvd24tYnV0dG9uX2xpbmsnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogNzY1fSw1MDApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pKCQpO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLUVuZC1kb3duLWJ1dHRvblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLXN0YXJ0LXNsaWRlclxyXG4kKCcuc2xpZGVyX19idXR0b24tdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbj0kKCcuc2xpZGVyX19pdGVtX2FjdGl2ZScpLmluZGV4KCk7XHJcbiAgICB2YXIgbT0kKCcuc2xpZGVzaG93X19saXN0JykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoO1xyXG4gICAgaWYobj09bS0xKXtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X19ibG9jaycpLmVxKDApLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fZG93bicpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV91cCcpLmVxKDEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIGlmKG49PW0tMil7XHJcbiAgICAgICAgJCgnLnNsaWRlc2hvd19faXRlbScpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X19ibG9jaycpLmVxKG4rMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV9kb3duJykuZXEobikuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV91cCcpLmVxKDApLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgICQoJy5zbGlkZXNob3dfX2l0ZW0nKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXItY29tbWVudF9fYmxvY2snKS5lcShuKzEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fZG93bicpLmVxKG4pLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fdXAnKS5lcShuKzIpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgfVxyXG59KTtcclxuJCgnLnNsaWRlcl9fYnV0dG9uLWRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbj0kKCcuc2xpZGVyX19pdGVtX2FjdGl2ZScpLmluZGV4KCk7XHJcbiAgICB2YXIgbT0kKCcuc2xpZGVzaG93X19saXN0JykuY2hpbGRyZW4oJ2xpJykubGVuZ3RoO1xyXG4gICAgaWYobj09MCl7XHJcbiAgICAgICAgJCgnLnNsaWRlc2hvd19faXRlbScpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlci1jb21tZW50X19ibG9jaycpLmVxKG0tMSkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9faXRlbV9kb3duJykuZXEobS0yKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX3VwJykuZXEoMCkuYWRkQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICB9ZWxzZSBpZihuPT0xKXtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfX2Jsb2NrJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX2Rvd24nKS5lcShtLTEpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fdXAnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICAkKCcuc2xpZGVzaG93X19pdGVtJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyLWNvbW1lbnRfX2Jsb2NrJykuZXEobi0xKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuc2xpZGVyX19pdGVtX2Rvd24nKS5lcShuLTIpLmFkZENsYXNzKCdzbGlkZXJfX2l0ZW1fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zbGlkZXJfX2l0ZW1fdXAnKS5lcShuKS5hZGRDbGFzcygnc2xpZGVyX19pdGVtX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxufSk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FTkQtc2xpZGVyXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtY2lyY2xlLWFuaW1hdGlvblxyXG52YXIgYW5pbWF0ZUNzcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2hlY2tEaXN0YW5jZSA9IGZ1bmN0aW9uIChzY3JvbGxUb3AsIGVsZW0pIHtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gZWxlbS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgdmFyIHdpbmRvd01hcmdpbiA9IE1hdGguY2VpbCgkKHdpbmRvdykuaGVpZ2h0KCkgLyAxKTtcclxuICAgICAgICB2YXIgdG9wQm9yZGVyID0gb2Zmc2V0IC0gc2Nyb2xsVG9wIC0gd2luZG93TWFyZ2luO1xyXG4gICAgICAgIHZhciBib3R0b21FZGdlID0gZWxlbS5vdXRlckhlaWdodCh0cnVlKSArIG9mZnNldDtcclxuICAgICAgICB2YXIgYm90dG9tQm9yZGVyID0gc2Nyb2xsVG9wICsgd2luZG93TWFyZ2luIC0gYm90dG9tRWRnZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvcEJvcmRlciA8PTAgJiYgYm90dG9tQm9yZGVyIDw9MDtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGFuaW1hdGlvbkFjdGlvbnMgPSB7XHJcbiAgICAgICAgaHRtbCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaHRtbCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3NzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjc3MnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGpzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdqcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGhwIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwaHAnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG15c3FsIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdteXNxbCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm9kZWpzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdub2RlanMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vbmdvIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdtb25nbycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2l0IDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdnaXQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGd1bHAgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2d1bHAnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1zID0gJCgnLmFuaW1hdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tEaXN0YW5jZShzY3JvbGxUb3AsICR0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uVHlwZSA9ICR0aGlzLmRhdGEoJ2FuaW1hdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25BY3Rpb25zW2FuaW1hdGlvblR5cGVdLmNhbGwoJHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuYW5pbWF0ZUNzcy5pbml0KCk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtY2lyY2xlLWFuaW1hdGlvblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LWJ1cmdlci1idXR0b25cclxudmFyIGlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4kKCcuaGVhZGVyX19idXJnZXItbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0FjdGl2ZSA9ICFpc0FjdGl2ZTtcclxufSk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1FbmQtYnVyZ2VyLWJ1dHRvblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLSBwYXJhbGxheC1tYWluLXBhZ2VcclxudmFyIHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4JyksXHJcbiAgICBsYXllcnMgPSBwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHBhZ2VYID0gZS5wYWdlWCxcclxuICAgICAgICBwYWdlWSA9IGUucGFnZVksXHJcbiAgICAgICAgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIHBhZ2VYLFxyXG4gICAgICAgIGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC0gcGFnZVk7XHJcblxyXG4gICAgW10uc2xpY2UuY2FsbChsYXllcnMpLmZvckVhY2goZnVuY3Rpb24gKGxheWVyLCBpKSB7XHJcbiAgICAgICAgdmFyXHJcbiAgICAgICAgICAgIGRpdmlkZXIgPSBpIC8gMTAwLFxyXG4gICAgICAgICAgICBib3R0b21Qb3NpdGlvbiA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcixcclxuICAgICAgICAgICAgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICBsYXllclN0eWxlID0gbGF5ZXIuc3R5bGUsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgnKyBwb3NpdGlvblggKydweCwnICsgcG9zaXRpb25ZICsgJ3B4LCAwKSc7XHJcblxyXG4gICAgICAgICAgICBsYXllclN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgICAgICAgbGF5ZXJTdHlsZS5ib3R0b20gPSAnLScgKyBib3R0b21Qb3NpdGlvbiArICdweCc7XHJcbiAgICB9KTtcclxufSk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0gRU5ELXBhcmFsbGF4LW1haW4tcGFnZVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLSBBdXRoLWJ1dHRvbi1tYWluLXBhZ2VcclxuJCgnLmF1dGgtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5mbGlwLWNvbnRhaW5lcicpLmNzcyh7XHJcbiAgICAgICAgICAgICd0cmFuc2Zvcm0nOidyb3RhdGVZKDE4MGRlZyknLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtLXN0eWxlJzoncHJlc2VydmUtM2QnLFxyXG4gICAgICAgICAgICAndHJhbnNpdGlvbic6Jy44cycsXHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6J3JlbGF0aXZlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5hdXRoLWJ1dHRvbicpLmhpZGUoKVxyXG4gICAgICAgICQoJy5mbGlwLWNvbnRhaW5lcl9fd3JhcHBlcicpLmNzcyh7XHJcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonMy40Mzc1cmVtJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbik7XHJcblxyXG4kKCcjYmFjay10by1tYWluLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuZmxpcC1jb250YWluZXInKS5jc3Moe1xyXG4gICAgICAgICAgICAndHJhbnNmb3JtJzoncm90YXRlWSgzNjBkZWcpJyxcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1zdHlsZSc6J3ByZXNlcnZlLTNkJyxcclxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nOicuOHMnLFxyXG4gICAgICAgICAgICAncG9zaXRpb24nOidyZWxhdGl2ZSdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuYXV0aC1idXR0b24nKS5zaG93KCk7XHJcbiAgICAkKCcuZmxpcC1jb250YWluZXJfX3dyYXBwZXInKS5jc3Moe1xyXG4gICAgICAgICdtYXJnaW4tdG9wJzonMHB4J1xyXG4gICAgfSlcclxuICAgIH1cclxuKTtcclxuXHJcbiQoKS5vbignY2xpY2snKTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLSBFbmQtYXV0aC1idXR0b24tbWFpbi1wYWdlXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnQtRW50ZXItYnV0dG9uXHJcbnZhciBlbnRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRoJyk7XHJcbnZhciBhbnN3ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4taW5wdXRfX2FjY2VwdCcpO1xyXG5cclxuZW50ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgeGhyLm9wZW4oJ0dFVCcsICd0ZXN0LnR4dCcpO1xyXG4gICAgeGhyLnNlbmQoKTtcclxuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGFuc3dlci5pbm5lclRleHQgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgfSk7XHJcbn0pO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLUVudGVyLWJ1dHRvblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVN0YXJ0LW1hcFxyXG5cclxuZnVuY3Rpb24gaW5pdE1hcCAoKSB7XHJcbiAgICB2YXIgcG9pbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTUuNzg3MDY5LCAzNy40NzgyMjApLFxyXG4gICAgICAgIGNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTUuNzg2MjczLCAzNy40MTg2MjMpO1xyXG5cclxuICAgIHZhciBzdHlsZXMgPSBbe1wiZmVhdHVyZVR5cGVcIjpcImFkbWluaXN0cmF0aXZlXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHQuZmlsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzQ0NDQ0NFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJsYW5kc2NhcGVcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiNmMmYyZjJcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicG9pXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWRcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOi0xMDB9LHtcImxpZ2h0bmVzc1wiOjQ1fV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmhpZ2h3YXlcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmFydGVyaWFsXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLmljb25cIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInRyYW5zaXRcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcIndhdGVyXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjOTZkN2M4XCJ9LHtcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX1dO1xyXG5cclxuICAgIHZhciBzdHlsZWRNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShzdHlsZXMsXHJcbiAgICAgICAge25hbWU6IFwiU3R5bGVkIE1hcFwifSk7XHJcblxyXG4gICAgdmFyIG1hcFNldHRpbmdzID0ge1xyXG4gICAgICAgIGNlbnRlcjogY2VudGVyLFxyXG4gICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgICAgICB6b29tOiAxMyxcclxuICAgICAgICBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbWFwVHlwZUlkczogW2dvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLCAnbWFwX3N0eWxlJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxyXG4gICAgICAgIHpvb21Db250cm9sT3B0aW9uczoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uLlJJR0hUX1RPUFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwgbWFwU2V0dGluZ3MpO1xyXG5cclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBpY29uOiAnYXNzZXRzL2ltZy9kZWNvci9tYXBfbWFya2VyLnBuZycsXHJcbiAgICAgICAgcG9zaXRpb246IHBvaW50ZXIsXHJcbiAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgdGl0bGU6IFwiSSdtIGhlcmUhXCIsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uQk9VTkNFXHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXAubWFwVHlwZXMuc2V0KCdtYXBfc3R5bGUnLCBzdHlsZWRNYXApO1xyXG4gICAgbWFwLnNldE1hcFR5cGVJZCgnbWFwX3N0eWxlJyk7XHJcbn07XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tRW5kLW1hcFxyXG5cclxuXHJcbnZhciBWYWxpZGF0aW9uID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlcnJvckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWVycm9yLW1zZycpLFxyXG4gICAgICAgIGNhcHRjaGFFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lX19lcnJvcicpLFxyXG4gICAgICAgIGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fY29udGFpbmVyJyk7XHJcblxyXG4gICAgdmFyIF9pbml0ID0gZnVuY3Rpb24gKGZvcm0pIHtcclxuICAgICAgICB2YXIgZWxlbXMgPSBmb3JtLmVsZW1lbnRzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtcyk7XHJcbiAgICAgICAgcmV0dXJuIF92YWxpZGF0ZShlbGVtcykgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIF92YWxpZGF0ZShpbnB1dHMpIHtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGlucHV0c1tpXS50YWdOYW1lID09PSAnQlVUVE9OJykgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbSA9IGlucHV0c1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtLnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfc2hvd0Vycm9yKGVsZW0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZWxlbS50eXBlID09PSAncmFkaW8nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0uY2hlY2tlZCAmJiBlbGVtLnZhbHVlID09PSAneWVzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXB0Y2hhRXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBfc2hvd0Vycm9yKGVsZW0pIHtcclxuICAgICAgICB2YXIgdGV4dCA9IGVsZW0uZ2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gZWxlbS5wYXJlbnROb2RlLm9mZnNldFRvcCArIGVsZW0ucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ncm91cF9lcnJvcicpO1xyXG4gICAgICAgIGVycm9yRmllbGQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgZXJyb3JGaWVsZC5pbm5lclRleHQgPSAn0JLRiyDQvdC1INCy0LLQtdC70LggJyArIHRleHQ7XHJcblxyXG4gICAgICAgIC8vIGlmIChwb3NpdGlvbiA+IGZvcm1Db250YWluZXIub2Zmc2V0SGVpZ2h0KVxyXG4gICAgICAgIGVycm9yRmllbGQuc3R5bGUudG9wID0gcG9zaXRpb24gKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9jbGVhckVycm9yKGVsZW0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtKTtcclxuICAgICAgICBlbGVtLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtZ3JvdXBfZXJyb3InKTtcclxuICAgICAgICBlcnJvckZpZWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogX2luaXQsXHJcbiAgICAgICAgY2xlYXI6IF9jbGVhckVycm9yXHJcbiAgICB9XHJcbn0pKCk7Il19
