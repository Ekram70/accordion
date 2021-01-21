$(document).ready(function(){
  $(".btn").click(function(){
    $("*").removeClass("active");
    //This line is used for hide other toggle and show current one.
    // $(".accordion--submenu").css("display","none");
    $(this).addClass("active");
    $(".active + .accordion--submenu").toggle();
  });
});

$(document).ready(function(){
  $(".btn--last").click(function(){
    $(".accordion--submenu").hide();
  });
});