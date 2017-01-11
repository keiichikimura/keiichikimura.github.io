 $(function() {
  var h = $(window).height();
 
  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
 
$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});
 
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});
 
function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}
  var showFlag = false;
    var topBtn = $('#page-top');    
    topBtn.css('bottom', '-100px');
    var showFlag = false;

    

    $(function(){
   $('a[href^="#"]').on('click', function(){
      var speed = 900;
      var href= $(this).attr('href');
      var target = $(href == '#' || href == '' ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
    document.addEventListener( "DOMContentLoaded", function() {
        var circularBars = new CircularSkillBar( "#bars .bar" );
    });
    
    jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },6000);
    });
});

    $(function() {
    var $header = $('#top-head');
    // Nav Toggle Button
    $('#nav-toggle').click(function(){
        $header.toggleClass('open');
    });
});


$(function() {
  $('.fadein').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('fadeIn');
    }
    else{
      $(this).stop().removeClass('fadeIn');
    }
  });
});

// sp-contact// 
$(function () {
    
    "use strict";
    
    $(".contact-us").animate({
        
        width: "60%",
        height: "500px"
        
    }, 2000, function () {
        
        $(".contact").slideDown(3000);
    
    });
    
    $(".contact").animate({
        
    
        
      
    }, 2000, function () {
        
        $("form").delay(6000).fadeIn(2000);
    
    });
    
    $(function () {
        
        $(".one").animate({
            
            marginLeft: "100px"
        }, 1000, function () {
            $(".one").delay(500).slideDown(1000);
        });
        
    });

});

$(function () {
    
    "use strict";
    
    $(".three").animate({
        
        marginLeft: "100px"
    
    }, 1000, function () {
        
        $(".three").delay(1000).slideDown(1000);
    
    });

});

$(function () {
    
    "use strict";
    
    $(".two").animate({
        
        marginRight: "100px"
    
    }, 1000, function () {
        
        $(".two").delay(500).slideDown(2000);
    
    });

});

$(function () {
    
    "use strict";
    
    $(".four").animate({
        
        marginRight: "100px"
    
    }, 1000, function () {
        
        $(".four").slideDown(1000);
    
    });

});

$(function () {
    
    "use strict";
    
    $(".five").animate({
        
        margin: "1px"
    
    }, 1000, function () {
        
        $(".five").delay(2000).slideDown(2000);
    
    });

});

$(function () {
    
    "use strict";
    
    $(".six").animate({
        
        marginLeft: "450px"
    
    }, 1000, function () {
        
        $(".six").slideDown(3000);
    
    });

});


$(function () {
    
    "use strict";
    
    $(".seven").animate({
        
        marginRight: "450px"
    
    }, 1000, function () {
        
        $(".seven").slideDown(3000);
    
    });

});
// -------//




    

$(document).ready(function(){
  $('.frame').click(function(){
    $('.top').addClass('open');
    $('.message').addClass('pull');
  })
});

$(function() {
    var showFlag = false;
    var topBtn = $('#page-top');    
    topBtn.css('bottom', '-100px');
    var showFlag = false;
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '10px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 200); 
            }
        }
    });
    
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
    




