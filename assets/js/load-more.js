$(".project-item").hide();

$(".project-item").slice(0, 6).show();

$(".show-more").click(() => {
    $(".project-item:hidden").slice(0, 4).fadeIn();
    
    if( $(".project-item:hidden").length == 0 ){
        $(".show-more").fadeOut();
    }
})