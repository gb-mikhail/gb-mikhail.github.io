<<<<<<< HEAD
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
                window.scrollTo(0, i);
                i += 10;
                if (i == 800) clearInterval(int);
            }, 2);
        };
        downButton.addEventListener('click', handler)
    }
};
    window.onload = myObj.init();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBteU9iaiA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNsaWRlcigpO1xyXG4gICAgICAgIHRoaXMuZG93bkJ1dHRvbigpO1xyXG4gICAgfSxcclxuICAgIHNsaWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYWdpbmF0aW9uQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1ib3hfX3BhZ2luYXRpb24nKTtcclxuXHJcbiAgICAgICAgcGFnaW5hdGlvbkJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwYWdpbmF0aW9uLXBpbicpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRQYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzaWJsaW5ncyA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldFBhcmVudCwgYWN0aXZlQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2libGluZ0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gdGFyZ2V0UGFyZW50Lmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRQYXJlbnRbbl0gIT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRQYXJlbnRbbl0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nTGlzdC5wdXNoKHRhcmdldFBhcmVudFtuXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpYmxpbmdMaXN0O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2libGluZ3NBcnIgPSBzaWJsaW5ncyh0YXJnZXQsIHRhcmdldFBhcmVudCwgJ3BhZ2luYXRpb24tcGluX2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uLXBpbl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGRvd25CdXR0b246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb3duQnV0dG9uJyk7XHJcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBpID0gMTAwO1xyXG4gICAgICAgICAgICB2YXIgaW50ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBpKTtcclxuICAgICAgICAgICAgICAgIGkgKz0gMTA7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSA4MDApIGNsZWFySW50ZXJ2YWwoaW50KTtcclxuICAgICAgICAgICAgfSwgMik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcclxuICAgIH1cclxufTtcclxuICAgIHdpbmRvdy5vbmxvYWQgPSBteU9iai5pbml0KCk7XHJcblxyXG4iXX0=
=======
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
                window.scrollTo(0, i);
                i += 10;
                if (i == 800) clearInterval(int);
            }, 2);
        };
        downButton.addEventListener('click', handler)
    }
};
    window.onload = myObj.init();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBteU9iaiA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNsaWRlcigpO1xyXG4gICAgICAgIHRoaXMuZG93bkJ1dHRvbigpO1xyXG4gICAgfSxcclxuICAgIHNsaWRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYWdpbmF0aW9uQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1ib3hfX3BhZ2luYXRpb24nKTtcclxuXHJcbiAgICAgICAgcGFnaW5hdGlvbkJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwYWdpbmF0aW9uLXBpbicpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRQYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzaWJsaW5ncyA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldFBhcmVudCwgYWN0aXZlQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2libGluZ0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gdGFyZ2V0UGFyZW50Lmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRQYXJlbnRbbl0gIT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRQYXJlbnRbbl0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nTGlzdC5wdXNoKHRhcmdldFBhcmVudFtuXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpYmxpbmdMaXN0O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2libGluZ3NBcnIgPSBzaWJsaW5ncyh0YXJnZXQsIHRhcmdldFBhcmVudCwgJ3BhZ2luYXRpb24tcGluX2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uLXBpbl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGRvd25CdXR0b246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb3duQnV0dG9uJyk7XHJcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBpID0gMTAwO1xyXG4gICAgICAgICAgICB2YXIgaW50ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBpKTtcclxuICAgICAgICAgICAgICAgIGkgKz0gMTA7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSA4MDApIGNsZWFySW50ZXJ2YWwoaW50KTtcclxuICAgICAgICAgICAgfSwgMik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcclxuICAgIH1cclxufTtcclxuICAgIHdpbmRvdy5vbmxvYWQgPSBteU9iai5pbml0KCk7XHJcblxyXG4iXX0=
>>>>>>> ef051dd7bc41daa11b1c9b83b05e728917c7dd22
