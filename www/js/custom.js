$(document).ready(function(){
            setTimeout(function(){
            $('.element').addClass('bgactive');
            },500);

            setTimeout(function(){
            $('.prfimgtxt').css("opacity","1");
             },1000);

$("item").click(function() {
});
setTimeout(function(){
             $(".items > li > a").click(function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.hasClass("expanded")) {
        $this.removeClass("expanded");
    } else {
        $(".items a.expanded").removeClass("expanded");
        $this.addClass("expanded");
        $(".sub-items").filter(":visible").slideUp("normal");
    }
    $this.parent().children("ul").stop(true, true).slideToggle("normal");
});

$(".sub-items a").click(function() {
    $(".sub-items a").removeClass("current");
    $(this).addClass("current");
});

});
},1000);
// $(document).ready(function(){
// setTimeout(function(){
//             $('.element').css("height","200px");
//             },500);           

// });








