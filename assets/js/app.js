$(document).ready(function() {
    function loadHeadling() {
        var headlingLogo = $('.headling__logo');
        var headlingH1 = $('.headling__h1');
        var linesCont = $('.lines-container');
        headlingLogo.animate({
            opacity:'1'
        },1800);
        headlingH1.animate({
            opacity:'1'
        },3200);
         linesCont.animate({
            opacity:'1'
        },1800);
    }
    loadHeadling();
    $('.navigation').hide();
    $(document).on('click', function () {
        $('.headling').animate({
            opacity:'0'
        },200);
        $('.lines-container').animate({
            opacity:'0'
        },300);
        $('.navigation').animate({
            opacity:'1'
        },1000);
        $('.full-logo').animate({
            opacity:'1',
            top:'125'
        },400);
        $('.navigation').show();
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgZnVuY3Rpb24gbG9hZEhlYWRsaW5nKCkge1xyXG4gICAgICAgIHZhciBoZWFkbGluZ0xvZ28gPSAkKCcuaGVhZGxpbmdfX2xvZ28nKTtcclxuICAgICAgICB2YXIgaGVhZGxpbmdIMSA9ICQoJy5oZWFkbGluZ19faDEnKTtcclxuICAgICAgICB2YXIgbGluZXNDb250ID0gJCgnLmxpbmVzLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGhlYWRsaW5nTG9nby5hbmltYXRlKHtcclxuICAgICAgICAgICAgb3BhY2l0eTonMSdcclxuICAgICAgICB9LDE4MDApO1xyXG4gICAgICAgIGhlYWRsaW5nSDEuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6JzEnXHJcbiAgICAgICAgfSwzMjAwKTtcclxuICAgICAgICAgbGluZXNDb250LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OicxJ1xyXG4gICAgICAgIH0sMTgwMCk7XHJcbiAgICB9XHJcbiAgICBsb2FkSGVhZGxpbmcoKTtcclxuICAgICQoJy5uYXZpZ2F0aW9uJykuaGlkZSgpO1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5oZWFkbGluZycpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OicwJ1xyXG4gICAgICAgIH0sMjAwKTtcclxuICAgICAgICAkKCcubGluZXMtY29udGFpbmVyJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6JzAnXHJcbiAgICAgICAgfSwzMDApO1xyXG4gICAgICAgICQoJy5uYXZpZ2F0aW9uJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6JzEnXHJcbiAgICAgICAgfSwxMDAwKTtcclxuICAgICAgICAkKCcuZnVsbC1sb2dvJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6JzEnLFxyXG4gICAgICAgICAgICB0b3A6JzEyNSdcclxuICAgICAgICB9LDQwMCk7XHJcbiAgICAgICAgJCgnLm5hdmlnYXRpb24nKS5zaG93KCk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdfQ==
