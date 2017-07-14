var myObj = {
    init: function () {
        this.slider();
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
    }
};
    window.onload = myObj.init();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbXlPYmogPSB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2xpZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhZ2luYXRpb25Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWJveF9fcGFnaW5hdGlvbicpO1xyXG5cclxuICAgICAgICBwYWdpbmF0aW9uQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3BhZ2luYXRpb24tcGluJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldFBhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW47XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNpYmxpbmdzID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0UGFyZW50LCBhY3RpdmVDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaWJsaW5nTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSB0YXJnZXRQYXJlbnQubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFBhcmVudFtuXSAhPSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFBhcmVudFtuXS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmdMaXN0LnB1c2godGFyZ2V0UGFyZW50W25dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2libGluZ0xpc3Q7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzaWJsaW5nc0FyciA9IHNpYmxpbmdzKHRhcmdldCwgdGFyZ2V0UGFyZW50LCAncGFnaW5hdGlvbi1waW5fYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb24tcGluX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbiAgICB3aW5kb3cub25sb2FkID0gbXlPYmouaW5pdCgpO1xyXG5cclxuIl19
