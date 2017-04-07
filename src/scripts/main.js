$(document).ready(function(){



    // Бургер

    $('.menu__btn').on("click", function () {
        $('.menu__navigation').slideToggle();
        $('.menu__btn').toggleClass('active');
    });




});