$(function(){
    var slideContainer = $('.slider_container');
    $('.slider_container .slider .slide:first-child').addClass('active-slide');


    $(slideContainer).each(function(index, container){
        var slideCount = 0;
        var slides = $(this).children('.slider').find('.slide').length;


        var colCheck = $(this).children('.slider').find('.slide').is('[class*="col-lg-"]');
        var num;
        var col;

        if(!colCheck){
            col = $(this).children('.slider').find('.slide').closest('[class*=col-]').attr("class");
            num = col.match(/\d+/)[0];


        }else{
            col = $(this).children('.slider').find('.slide').closest('[class*=col-lg-]').attr("class");
            num = col.match(/col-lg-\d+/)[0];
            num = num.match(/\d+/)[0]
        }



        if(slides >= 12 / num){
            var navigationContainer = $("<div>").addClass('slider-navigation');
            $(this).append(navigationContainer);
            $(this).find('.slider-navigation').append('<div class="slidebar"><div class="slidebar-prop"></div></div>');
            $(this).find('.slider-navigation').append('<div class="nav nav--left inactive"></div>');
            $(this).find('.slider-navigation').append('<div class="nav nav--right "></div>');
        }
        if(slides === 1){
            $(container).find('.nav--right').addClass('inactive');
        }

        $('.slidebar-prop').css({
            width: 0
        });

        $(container).find('.slider-navigation .nav--right').click(function(){
            if (!$(this).hasClass("inactive")) {
                var slidesTotal = $(this).parents('.slider_container').find('.slide').length;
                slides = slidesTotal - 12 / num;


                $(container).find(".active-slide").removeClass('active-slide').next().addClass('active-slide');



                slideCount++;


                if (slideCount === slides) {
                    $(this).addClass('inactive');
                    $(this).parent().find('.nav--left').removeClass('inactive');
                } else if (slideCount < slides) {
                    $(this).removeClass('inactive');
                    $(this).parent().find('.nav--left').removeClass('inactive');
                }
                if (slideCount >= slides) {
                    slideCount = slides;
                }

                $(container).children('.slider').animate({
                    scrollLeft: $(this).parents('.slider_container').find('.slide').outerWidth() * slideCount +"px"
                }, 350);


                $(container).find('.slidebar .slidebar-prop').animate({
                    width: 100 / slides * slideCount + "%"
                }, 350);


            }

        });
        $(container).find('.slider-navigation .nav--left').click(function(){
            if (!$(this).hasClass("inactive")){
                $(container).find(".active-slide").removeClass('active-slide').prev().addClass('active-slide');

                slideCount--;
                if(slideCount === 0){
                    $(this).addClass('inactive');
                    $(this).parent().find('.nav--right').removeClass('inactive');
                }else if(slideCount > 0){
                    $(this).removeClass('inactive');
                    $(this).parent().find('.nav--right').removeClass('inactive');
                }
                if(slideCount <= 0){
                    slideCount = 0;
                }
                $(container).children('.slider').animate({
                    scrollLeft: $(this).parents('.slider_container').find('.slide').outerWidth() * slideCount +"px"
                }, 350);


                $(container).find('.slidebar .slidebar-prop').animate({
                    width: 100 / slides * slideCount + "%"
                }, 350);
            }
        });
    });
});

