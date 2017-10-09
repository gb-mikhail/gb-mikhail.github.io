//----------Parallax-START

var parallaxContainer = document.getElementById('parallax'),
    layers = parallaxContainer.children;

window.addEventListener('mousemove', function (e) {
    var pageX = e.pageX,
        pageY = e.pageY,
        initialX = (window.innerWidth / 2) - pageX,
        initialY = (window.innerHeight / 2) - pageY;

    [].slice.call(layers).forEach(function (layer, i) {
        var
            divider = i / 600,
            bottomPosition = (window.innerHeight / 2) * divider,
            positionX = initialX * divider,
            positionY = initialY * divider,
            layerStyle = layer.style,
            transformString = 'translate3d('+ positionX +'px,' + positionY + 'px, 0)';

        layerStyle.transform = transformString;
        layerStyle.bottom = '-' + bottomPosition + 'px';
    });
});

//----------Parallax-END

//----------Navigation-START

$('.navigation__item').on('click', function() {
    var n=$(this).index();
    $(this).children('.navigation__fake-item').addClass('navigation__item_active');
    if (n==0) {
        $(this).children('.navigation__fake-item')
            .css({
                'background-color':'#00175a'
        });
        $('.parallax__shape1,.parallax__shape2')
            .css({
                'fill':'#000'
        });
        $('.wrapper__color')
            .css({
                'background-color':'#03478c',
                'opacity':'.85'
            })
            .animate({
                'opacity':'1'},900);
        $(".company").addClass('parallax__navigation-big-name_active').siblings().removeClass('parallax__navigation-big-name_active');
        $('.animation-block').addClass('blue').animate({
            'width':'1010px',
            'left':'1010px',
            'opacity':'1'
        },900).queue(function () {
            $(this).removeClass('blue').css({
                'width':'100px',
                'left':'-100px',
                'opacity':'.9'
            });
            $(this).dequeue();
        })
    } if(n==1) {
        $(this).children('.navigation__fake-item')
            .css({
                'background-color': '#00b616'
        });
        $('.parallax__shape1,.parallax__shape2')
            .css({
                'fill':'#00b616'
        });
        $('.wrapper__color')
            .css({
                'background-color':'#005213',
                'opacity':'.85'
            })
            .animate({
                'opacity':'1'},900);
        $(".production").addClass('parallax__navigation-big-name_active').siblings().removeClass('parallax__navigation-big-name_active');
        $('.animation-block').addClass('green').animate({
            'width':'1010px',
            'left':'1010px',
            'opacity':'1'
        },900).queue(function () {
            $(this).removeClass('green').css({
                'width':'100px',
                'left':'-100px',
                'opacity':'.9'
            });
            $(this).dequeue();
        })
    } if(n==2) {
        $(this).children(".navigation__fake-item")
            .css({
                'background-color': '#eb0095'
        });
        $('.parallax__shape1,.parallax__shape2')
            .css({
                'fill':'#eb0095'
        });
        $('.wrapper__color')
            .css({
                'background-color':'#7a002a',
                'opacity':'.85'
            })
            .animate({
                'opacity':'1'},900)
        $(".product").addClass('parallax__navigation-big-name_active').siblings().removeClass('parallax__navigation-big-name_active');
        $('.animation-block').addClass('pink').animate({
            'width':'1010px',
            'left':'1010px',
            'opacity':'1'
        },900).queue(function () {
            $(this).removeClass('pink').css({
                'width':'100px',
                'left':'-100px',
                'opacity':'.9'
            });
            $(this).dequeue();
        })
    } if(n==3) {
        $(this).children(".navigation__fake-item")
            .css({
                'background-color': '#d7322b'
        });
        $('.parallax__shape1,.parallax__shape2')
            .css({
                'fill':'#d7322b'
        });
        $('.wrapper__color')
            .css({
                'background-color':'#592716',
                'opacity':'.85'
            })
            .animate({
                'opacity':'1'},900)
        $(".gallery").addClass('parallax__navigation-big-name_active').siblings().removeClass('parallax__navigation-big-name_active');
        $('.animation-block').addClass('red').animate({
            'width':'1010px',
            'left':'1010px',
            'opacity':'1'
        },900).queue(function () {
            $(this).removeClass('red').css({
                'width':'100px',
                'left':'-100px',
                'opacity':'.9'
            });
            $(this).dequeue();
        })
    } if(n==4) {
        $(this).children(".navigation__fake-item")
            .css({
                'background-color': '#810097'
        });
        $('.parallax__shape1,.parallax__shape2')
            .css({
                'fill':'#810097'
        });
        $('.wrapper__color')
            .css({
                'background-color':'#3c0025',
                'opacity':'.85'
            })
            .animate({
                'opacity':'1'},900)
        $(".news").addClass('parallax__navigation-big-name_active').siblings().removeClass('parallax__navigation-big-name_active');
        $('.animation-block').addClass('violet').animate({
            'width':'1010px',
            'left':'1010px',
            'opacity':'1'
        },900).queue(function () {
            $(this).removeClass('violet').css({
                'width':'100px',
                'left':'-100px',
                'opacity':'.9'
            });
            $(this).dequeue();
        })
    }

    $(this).siblings().children(".navigation__fake-item").removeClass('navigation__item_active');
    $(this).siblings().children(".navigation__fake-item").css({'background-color': 'rgba(255,255,255,.5)'});

    $(this).children(".navigation__link").addClass('navigation__link_active');
    $(this).siblings().children(".navigation__link").removeClass('navigation__link_active');

    $('.slider__img').eq(n).addClass('slider__img_active').siblings().removeClass('slider__img_active');
    $('.slider__bg-img').eq(n).addClass('slider__img_active').siblings().removeClass('slider__img_active');
});

//----------Navigation-END
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS1QYXJhbGxheC1TVEFSVFxyXG5cclxudmFyIHBhcmFsbGF4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4JyksXHJcbiAgICBsYXllcnMgPSBwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgdmFyIHBhZ2VYID0gZS5wYWdlWCxcclxuICAgICAgICBwYWdlWSA9IGUucGFnZVksXHJcbiAgICAgICAgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGggLyAyKSAtIHBhZ2VYLFxyXG4gICAgICAgIGluaXRpYWxZID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIC0gcGFnZVk7XHJcblxyXG4gICAgW10uc2xpY2UuY2FsbChsYXllcnMpLmZvckVhY2goZnVuY3Rpb24gKGxheWVyLCBpKSB7XHJcbiAgICAgICAgdmFyXHJcbiAgICAgICAgICAgIGRpdmlkZXIgPSBpIC8gNjAwLFxyXG4gICAgICAgICAgICBib3R0b21Qb3NpdGlvbiA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcixcclxuICAgICAgICAgICAgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICBsYXllclN0eWxlID0gbGF5ZXIuc3R5bGUsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgnKyBwb3NpdGlvblggKydweCwnICsgcG9zaXRpb25ZICsgJ3B4LCAwKSc7XHJcblxyXG4gICAgICAgIGxheWVyU3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xyXG4gICAgICAgIGxheWVyU3R5bGUuYm90dG9tID0gJy0nICsgYm90dG9tUG9zaXRpb24gKyAncHgnO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8tLS0tLS0tLS0tUGFyYWxsYXgtRU5EXHJcblxyXG4vLy0tLS0tLS0tLS1OYXZpZ2F0aW9uLVNUQVJUXHJcblxyXG4kKCcubmF2aWdhdGlvbl9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG49JCh0aGlzKS5pbmRleCgpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdmlnYXRpb25fX2Zha2UtaXRlbScpLmFkZENsYXNzKCduYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZScpO1xyXG4gICAgaWYgKG49PTApIHtcclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcubmF2aWdhdGlvbl9fZmFrZS1pdGVtJylcclxuICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6JyMwMDE3NWEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnBhcmFsbGF4X19zaGFwZTEsLnBhcmFsbGF4X19zaGFwZTInKVxyXG4gICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgICdmaWxsJzonIzAwMCdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcud3JhcHBlcl9fY29sb3InKVxyXG4gICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzonIzAzNDc4YycsXHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6Jy44NSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOicxJ30sOTAwKTtcclxuICAgICAgICAkKFwiLmNvbXBhbnlcIikuYWRkQ2xhc3MoJ3BhcmFsbGF4X19uYXZpZ2F0aW9uLWJpZy1uYW1lX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3BhcmFsbGF4X19uYXZpZ2F0aW9uLWJpZy1uYW1lX2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5hbmltYXRpb24tYmxvY2snKS5hZGRDbGFzcygnYmx1ZScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAnd2lkdGgnOicxMDEwcHgnLFxyXG4gICAgICAgICAgICAnbGVmdCc6JzEwMTBweCcsXHJcbiAgICAgICAgICAgICdvcGFjaXR5JzonMSdcclxuICAgICAgICB9LDkwMCkucXVldWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdibHVlJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICd3aWR0aCc6JzEwMHB4JyxcclxuICAgICAgICAgICAgICAgICdsZWZ0JzonLTEwMHB4JyxcclxuICAgICAgICAgICAgICAgICdvcGFjaXR5JzonLjknXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfSBpZihuPT0xKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdmlnYXRpb25fX2Zha2UtaXRlbScpXHJcbiAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnIzAwYjYxNidcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGFyYWxsYXhfX3NoYXBlMSwucGFyYWxsYXhfX3NoYXBlMicpXHJcbiAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2ZpbGwnOicjMDBiNjE2J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy53cmFwcGVyX19jb2xvcicpXHJcbiAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOicjMDA1MjEzJyxcclxuICAgICAgICAgICAgICAgICdvcGFjaXR5JzonLjg1J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6JzEnfSw5MDApO1xyXG4gICAgICAgICQoXCIucHJvZHVjdGlvblwiKS5hZGRDbGFzcygncGFyYWxsYXhfX25hdmlnYXRpb24tYmlnLW5hbWVfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygncGFyYWxsYXhfX25hdmlnYXRpb24tYmlnLW5hbWVfYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLmFuaW1hdGlvbi1ibG9jaycpLmFkZENsYXNzKCdncmVlbicpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAnd2lkdGgnOicxMDEwcHgnLFxyXG4gICAgICAgICAgICAnbGVmdCc6JzEwMTBweCcsXHJcbiAgICAgICAgICAgICdvcGFjaXR5JzonMSdcclxuICAgICAgICB9LDkwMCkucXVldWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdncmVlbicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOicxMDBweCcsXHJcbiAgICAgICAgICAgICAgICAnbGVmdCc6Jy0xMDBweCcsXHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6Jy45J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kZXF1ZXVlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gaWYobj09Mikge1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oXCIubmF2aWdhdGlvbl9fZmFrZS1pdGVtXCIpXHJcbiAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI2ViMDA5NSdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGFyYWxsYXhfX3NoYXBlMSwucGFyYWxsYXhfX3NoYXBlMicpXHJcbiAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2ZpbGwnOicjZWIwMDk1J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy53cmFwcGVyX19jb2xvcicpXHJcbiAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOicjN2EwMDJhJyxcclxuICAgICAgICAgICAgICAgICdvcGFjaXR5JzonLjg1J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6JzEnfSw5MDApXHJcbiAgICAgICAgJChcIi5wcm9kdWN0XCIpLmFkZENsYXNzKCdwYXJhbGxheF9fbmF2aWdhdGlvbi1iaWctbmFtZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdwYXJhbGxheF9fbmF2aWdhdGlvbi1iaWctbmFtZV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuYW5pbWF0aW9uLWJsb2NrJykuYWRkQ2xhc3MoJ3BpbmsnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzonMTAxMHB4JyxcclxuICAgICAgICAgICAgJ2xlZnQnOicxMDEwcHgnLFxyXG4gICAgICAgICAgICAnb3BhY2l0eSc6JzEnXHJcbiAgICAgICAgfSw5MDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygncGluaycpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOicxMDBweCcsXHJcbiAgICAgICAgICAgICAgICAnbGVmdCc6Jy0xMDBweCcsXHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6Jy45J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5kZXF1ZXVlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gaWYobj09Mykge1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oXCIubmF2aWdhdGlvbl9fZmFrZS1pdGVtXCIpXHJcbiAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI2Q3MzIyYidcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcucGFyYWxsYXhfX3NoYXBlMSwucGFyYWxsYXhfX3NoYXBlMicpXHJcbiAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2ZpbGwnOicjZDczMjJiJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy53cmFwcGVyX19jb2xvcicpXHJcbiAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOicjNTkyNzE2JyxcclxuICAgICAgICAgICAgICAgICdvcGFjaXR5JzonLjg1J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6JzEnfSw5MDApXHJcbiAgICAgICAgJChcIi5nYWxsZXJ5XCIpLmFkZENsYXNzKCdwYXJhbGxheF9fbmF2aWdhdGlvbi1iaWctbmFtZV9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdwYXJhbGxheF9fbmF2aWdhdGlvbi1iaWctbmFtZV9hY3RpdmUnKTtcclxuICAgICAgICAkKCcuYW5pbWF0aW9uLWJsb2NrJykuYWRkQ2xhc3MoJ3JlZCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAnd2lkdGgnOicxMDEwcHgnLFxyXG4gICAgICAgICAgICAnbGVmdCc6JzEwMTBweCcsXHJcbiAgICAgICAgICAgICdvcGFjaXR5JzonMSdcclxuICAgICAgICB9LDkwMCkucXVldWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdyZWQnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzonMTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgJ2xlZnQnOictMTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOicuOSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQodGhpcykuZGVxdWV1ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGlmKG49PTQpIHtcclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwiLm5hdmlnYXRpb25fX2Zha2UtaXRlbVwiKVxyXG4gICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyM4MTAwOTcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLnBhcmFsbGF4X19zaGFwZTEsLnBhcmFsbGF4X19zaGFwZTInKVxyXG4gICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgICdmaWxsJzonIzgxMDA5NydcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcud3JhcHBlcl9fY29sb3InKVxyXG4gICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzonIzNjMDAyNScsXHJcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6Jy44NSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOicxJ30sOTAwKVxyXG4gICAgICAgICQoXCIubmV3c1wiKS5hZGRDbGFzcygncGFyYWxsYXhfX25hdmlnYXRpb24tYmlnLW5hbWVfYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygncGFyYWxsYXhfX25hdmlnYXRpb24tYmlnLW5hbWVfYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLmFuaW1hdGlvbi1ibG9jaycpLmFkZENsYXNzKCd2aW9sZXQnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzonMTAxMHB4JyxcclxuICAgICAgICAgICAgJ2xlZnQnOicxMDEwcHgnLFxyXG4gICAgICAgICAgICAnb3BhY2l0eSc6JzEnXHJcbiAgICAgICAgfSw5MDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndmlvbGV0JykuY3NzKHtcclxuICAgICAgICAgICAgICAgICd3aWR0aCc6JzEwMHB4JyxcclxuICAgICAgICAgICAgICAgICdsZWZ0JzonLTEwMHB4JyxcclxuICAgICAgICAgICAgICAgICdvcGFjaXR5JzonLjknXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgICQodGhpcykuc2libGluZ3MoKS5jaGlsZHJlbihcIi5uYXZpZ2F0aW9uX19mYWtlLWl0ZW1cIikucmVtb3ZlQ2xhc3MoJ25hdmlnYXRpb25fX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCkuY2hpbGRyZW4oXCIubmF2aWdhdGlvbl9fZmFrZS1pdGVtXCIpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknfSk7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbihcIi5uYXZpZ2F0aW9uX19saW5rXCIpLmFkZENsYXNzKCduYXZpZ2F0aW9uX19saW5rX2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5zaWJsaW5ncygpLmNoaWxkcmVuKFwiLm5hdmlnYXRpb25fX2xpbmtcIikucmVtb3ZlQ2xhc3MoJ25hdmlnYXRpb25fX2xpbmtfYWN0aXZlJyk7XHJcblxyXG4gICAgJCgnLnNsaWRlcl9faW1nJykuZXEobikuYWRkQ2xhc3MoJ3NsaWRlcl9faW1nX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faW1nX2FjdGl2ZScpO1xyXG4gICAgJCgnLnNsaWRlcl9fYmctaW1nJykuZXEobikuYWRkQ2xhc3MoJ3NsaWRlcl9faW1nX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9faW1nX2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbi8vLS0tLS0tLS0tLU5hdmlnYXRpb24tRU5EIl19
