$(document).ready(function(){
    $(".scroll-to-the-top").hide();

    $(function (){
        $(window).scroll(function (){
            if ($(this).scrollTop() > 100){
                $('.scroll-to-the-top').fadeIn();
            } else{
                $('.scroll-to-the-top').fadeOut();
            }
        });

        $('.scroll-to-the-top').click(function (){
            $('body,html').animate({
                scrollTop:0
            }, 800);
            return false;
        });
    });
});
