$(document).ready(function(){
    $("#scroll-to-top").click(function(){
        var target = $(this).attr('data-target');

        $('html').animate({
            scrollTop: 0
        });
    });

    $('.scroll-to-target').click(function(e){
        event.preventDefault();

        var href = $(this).attr('href');
        var offsetHref = $(href).offset().top;

        $('html').animate({
            scrollTop: offsetHref - 50
        });

    })
})