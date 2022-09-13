// header js

$(document).ready(function(){
   
    var h=$('header').height();

    $(window).scroll(function(){
       if( $(window).scrollTop() > h){
           $('header').css('opacity', '.6');
       }
       else{
           $('header').css('opacity' ,'1')
       }
    });

});


// tab bar js

$(document).ready(function(){
    $('#content-one').show();
    $('#content-two').hide();
    $('#content-three').hide();


    $('#tab-one').click(function(){
        $('#tab-one').addClass('active');
        $('#tab-two').removeClass('active');
        $('#tab-three').removeClass('active');

        $('#content-one').show();
        $('#content-two').hide();
        $('#content-three').hide();
    });

    
    $('#tab-two').click(function(){
        $('#tab-one').removeClass('active');
        $('#tab-two').addClass('active');
        $('#tab-three').removeClass('active');

        $('#content-one').hide();
        $('#content-two').show();
        $('#content-three').hide();
    });


    $('#tab-three').click(function(){
        $('#tab-one').removeClass('active');
        $('#tab-two').removeClass('active');
        $('#tab-three').addClass('active');

        $('#content-one').hide();
        $('#content-two').hide();
        $('#content-three').show();
    });
});


// owl carousal js

$('.owl-carousel').owlCarousel({
 
    loop:true,
    margin:10,
    autoPlay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});