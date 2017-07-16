var myObj = {
    init: function () {
        this.slider();
        this.downButton();
    },
    slider: function () {
        var paginationBox = document.querySelector('.slider-box__pagination');

        paginationBox.addEventListener('click', function (e) {
            if (e.target.className === 'pagination-pin') {
                var target = e.target;
                var targetParent = e.target.parentNode.children;

                var siblings = function (target, targetParent, activeClass) {
                    var siblingList = [];
                    for (var n = targetParent.length - 1; n >= 0; n--) {
                        if (targetParent[n] != target) {
                            targetParent[n].classList.remove(activeClass);
                            siblingList.push(targetParent[n]);
                        }
                    }
                    return siblingList;
                };

                var siblingsArr = siblings(target, targetParent, 'pagination-pin_active');

                target.classList.add('pagination-pin_active');
            }
        });
    },
    downButton: function () {
        var downButton = document.querySelector('#downButton');
        var handler = function (e) {
            e.preventDefault();
            var i = 100;
            var int = setInterval(function(){
                if (window.innerWidth < 481) {
                    if (i == 690) {
                        window.scrollTo(0, i);
                        clearInterval(int);
                    }
                }
                if (window.innerWidth < 330) {
                    if (i == 570) {
                        window.scrollTo(0, i);
                        clearInterval(int);
                    }
                }

                window.scrollTo(0, i);
                i += 10;
                if (i == 800) clearInterval(int);
            }, 2);
        };
        downButton.addEventListener('click', handler)
    }
};
    window.onload = myObj.init();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15T2JqID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyKCk7XHJcbiAgICAgICAgdGhpcy5kb3duQnV0dG9uKCk7XHJcbiAgICB9LFxyXG4gICAgc2xpZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhZ2luYXRpb25Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWJveF9fcGFnaW5hdGlvbicpO1xyXG5cclxuICAgICAgICBwYWdpbmF0aW9uQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3BhZ2luYXRpb24tcGluJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldFBhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW47XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNpYmxpbmdzID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0UGFyZW50LCBhY3RpdmVDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaWJsaW5nTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSB0YXJnZXRQYXJlbnQubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFBhcmVudFtuXSAhPSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFBhcmVudFtuXS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmdMaXN0LnB1c2godGFyZ2V0UGFyZW50W25dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2libGluZ0xpc3Q7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzaWJsaW5nc0FyciA9IHNpYmxpbmdzKHRhcmdldCwgdGFyZ2V0UGFyZW50LCAncGFnaW5hdGlvbi1waW5fYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb24tcGluX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZG93bkJ1dHRvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkb3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rvd25CdXR0b24nKTtcclxuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGkgPSAxMDA7XHJcbiAgICAgICAgICAgIHZhciBpbnQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNDgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gNjkwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDMzMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDU3MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGkpO1xyXG4gICAgICAgICAgICAgICAgaSArPSAxMDtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IDgwMCkgY2xlYXJJbnRlcnZhbChpbnQpO1xyXG4gICAgICAgICAgICB9LCAyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKVxyXG4gICAgfVxyXG59O1xyXG4gICAgd2luZG93Lm9ubG9hZCA9IG15T2JqLmluaXQoKTtcclxuXHJcbiJdfQ==
