$(document).ready(function () {
    $('.nav-link ').click(function(e) {

        $('.nav-link').removeClass('active');

       // var $parent = $(this).parent();
        //$parent.addClass('active');
        $(this).addClass("active");
        if($(".nav-link.index1_link").length>=1){
       e.preventDefault();
        
       $('#homelink').click(function(e){
        window.scrollTo(0,-1);
       });
       $('#aboutuslink').click(function(e){
        window.scrollTo(0,400);
       });
       $('#whatwedolink').click(function(e){
        window.scrollTo(0,1130);
       });
       $('#blogslink').click(function(e){
        window.scrollTo(0,2370);
       });
       $('#contactuslink').click(function(e){
        window.scrollTo(0,3900);
       });
    }
    });
});

// $("a").click(function(){
//   var pageId = $(this).attr("data-page");
//   $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 1000);
// });

// $(function(){
//   $('a[href*=\\#]:not([href=\\#])').on('click', function(){
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
//     if(target.length){
//       $('html,body').animate({
//         scrolltop: target.offset().top
//       }, 1000);
//       return false;
//     }
//   });
// });

// $('#aboutus1').click(function(){
//     $(document).scrollTop(500) 
//     });