// Navbar Change
$(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $(".navbar").addClass("customNav");
    } else {
        $(".navbar").removeClass("customNav");
    }
});

// Active class in navbar
$(document).ready(function() {
    var url = window.location.href;
    $('.nav-custom-list a[href="url"]').parent().addClass('active');
    $('.nav-custom-list a').filter(function() {
        return this.href == url;
    }).parent().addClass('active');
});

// Translate option
$(document).ready(function() {
    $(".translate-btn").click(function() {
        $(".main-cover-e").addClass("trans-visible");
        $(".main-cover").addClass("trans-invisible");
    })
})