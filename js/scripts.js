$(document).ready(function () {
    $('.nav-link').click(function () {
        $('#navbarSupportedContent').removeClass('show');
    });
});

$(window).on('load',function (){
    $('#kwarantanna').modal('show');
});
