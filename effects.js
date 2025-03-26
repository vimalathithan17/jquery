$(document).ready(function() {

    // **1. Show / Hide / Toggle**
    $("#btn-show").click(function() {
        $("#box").show(500); // Show with 500ms speed
    });

    $("#btn-hide").click(function() {
        $("#box").hide(500); // Hide with 500ms speed
    });

    $("#btn-toggle").click(function() {
        $("#box").toggle(500); // Toggle visibility
    });

    // **2. Fade Effects**
    $("#btn-fadein").click(function() {
        $("#box").fadeIn(500);
    });

    $("#btn-fadeout").click(function() {
        $("#box").fadeOut(500);
    });

    $("#btn-fadetoggle").click(function() {
        $("#box").fadeToggle(500);
    });

    $("#btn-fadeto").click(function() {
        $("#box").fadeTo(500, 0.5); // Fade to 50% opacity
    });

    // **3. Slide Effects**
    $("#btn-slidedown").click(function() {
        $("#box").slideDown(500);
    });

    $("#btn-slideup").click(function() {
        $("#box").slideUp(500);
    });

    $("#btn-slidetoggle").click(function() {
        $("#box").slideToggle(500);
    });

    // **4. Animate**
    $("#btn-animate").click(function() {
        $("#box").animate({
            width: "200px",
            height: "200px",
            marginLeft: "50px",
            opacity: 0.7
        }, 1000);
    });

    // **5. Stop Animation**
    $("#btn-stop").click(function() {
        $("#box").stop(); // Stops the current animation
    });

    // **6. Delayed Animation**
    $("#btn-delay").click(function() {
        $("#box").delay(1000).animate({ width: "150px", height: "150px" }, 1000);
    });

});
