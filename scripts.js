$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });
    
    // Initialize Bootstrap carousel
    $('.carousel').carousel();

    

    // Navbar Bounce Effect on Scroll
    $(window).on("scroll", function() {
        var navbar = $(".custom-navbar");
        if (navbar.length) { // Ensure navbar exists to prevent errors
            if ($(window).scrollTop() > 50) {
                navbar.addClass("scrolled");
            } else {
                navbar.removeClass("scrolled");
            }
        }
    });
});
