$(document).ready(function(){
  $("img").hover(function(){

    var src=$(this).attr('src');
    var altsrc=$(this).attr('data-alt-src');
    $(this).attr("src", altsrc);
    $(this).attr("data-alt-src", src);
});   
 
}); 