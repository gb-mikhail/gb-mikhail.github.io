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

var isActive = false;

$('.navigation__item').on('click', function() {
    if (isActive) {
        $('.navigation__fake-item').removeClass('.navigation__item_active');
    } else {
        $('.navigation__fake-item').addClass('.navigation__item_active');
    }

    isActive = !isActive;
});

//----------Navigation-END
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tUGFyYWxsYXgtU1RBUlRcclxuXHJcbnZhciBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheCcpLFxyXG4gICAgbGF5ZXJzID0gcGFyYWxsYXhDb250YWluZXIuY2hpbGRyZW47XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBwYWdlWCA9IGUucGFnZVgsXHJcbiAgICAgICAgcGFnZVkgPSBlLnBhZ2VZLFxyXG4gICAgICAgIGluaXRpYWxYID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgLSBwYWdlWCxcclxuICAgICAgICBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIHBhZ2VZO1xyXG5cclxuICAgIFtdLnNsaWNlLmNhbGwobGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChsYXllciwgaSkge1xyXG4gICAgICAgIHZhclxyXG4gICAgICAgICAgICBkaXZpZGVyID0gaSAvIDYwMCxcclxuICAgICAgICAgICAgYm90dG9tUG9zaXRpb24gPSAod2luZG93LmlubmVySGVpZ2h0IC8gMikgKiBkaXZpZGVyLFxyXG4gICAgICAgICAgICBwb3NpdGlvblggPSBpbml0aWFsWCAqIGRpdmlkZXIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcixcclxuICAgICAgICAgICAgbGF5ZXJTdHlsZSA9IGxheWVyLnN0eWxlLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlM2QoJysgcG9zaXRpb25YICsncHgsJyArIHBvc2l0aW9uWSArICdweCwgMCknO1xyXG5cclxuICAgICAgICBsYXllclN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcclxuICAgICAgICBsYXllclN0eWxlLmJvdHRvbSA9ICctJyArIGJvdHRvbVBvc2l0aW9uICsgJ3B4JztcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vLS0tLS0tLS0tLVBhcmFsbGF4LUVORFxyXG5cclxuLy8tLS0tLS0tLS0tTmF2aWdhdGlvbi1TVEFSVFxyXG5cclxudmFyIGlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4kKCcubmF2aWdhdGlvbl9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgJCgnLm5hdmlnYXRpb25fX2Zha2UtaXRlbScpLnJlbW92ZUNsYXNzKCcubmF2aWdhdGlvbl9faXRlbV9hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLm5hdmlnYXRpb25fX2Zha2UtaXRlbScpLmFkZENsYXNzKCcubmF2aWdhdGlvbl9faXRlbV9hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0FjdGl2ZSA9ICFpc0FjdGl2ZTtcclxufSk7XHJcblxyXG4vLy0tLS0tLS0tLS1OYXZpZ2F0aW9uLUVORCJdfQ==
