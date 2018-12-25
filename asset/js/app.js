$(document).ready(function () {
    // untuk scroll to top
    $("#scroll-to-top").click(function () {
        var target = $(this).attr('data-target');

        $('html').animate({
            scrollTop: 0
        });
    });

    // untuk scroll sesuai target
    $('.scroll-to-target').click(function (e) {
        event.preventDefault();

        var href = $(this).attr('href');
        var offsetHref = $(href).offset().top;

        $('html').animate({
            scrollTop: offsetHref - 50
        });
    });

    // event window scroll untuk navbar dan thumbnail
    $(window).scroll(function () {
        var windowScrollPos = $(this).scrollTop();

        // untuk navbar
        var namaPos = $('#nama').offset().top;
        var navbar = $('.navbar');

        if (windowScrollPos >= namaPos) {
            navbar.addClass('navbar-transparent');
            navbar.removeClass('navbar-transparent-balik');
        } else {
            navbar.addClass('navbar-transparent-balik');
            navbar.removeClass('navbar-transparent');
        }

        // untuk thumbnail
        var thumbnail = $('.img-portofolio .thumbnail');
        var imgPortofolioPos = $('.img-portofolio').offset().top;

        if (windowScrollPos >= imgPortofolioPos - 500) {
            $.each(thumbnail, function (index) {
                setTimeout(function () {
                    thumbnail.eq(index).addClass('muncul');
                }, 300 * index);
            });
        }
    });
});