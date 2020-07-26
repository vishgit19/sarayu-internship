
jQuery(function($) {
    var divs = $('.myclass');

    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        if(st===0){
          divs.css({
            'opacity':1
          })
        }
        if(st>400){
        divs.css({
            //'margin-top' : -(st/3)+"px",
            'opacity' : 1 - st/250
        });}
        if(st>100 && st<400){
          divs.css({
              //'margin-top' : (st/3)+"px",
              'opacity' :  st/20
          });}



    });

});
