$(document).ready(function() {

    // Applying jQuery Method Chaining
    $("#btn-chain").click(function() {
        $("#box")
            .css("background-color", "orange")  // Change color
            .slideUp(1000)                      // Slide up
            .slideDown(1000)                    // Slide down
            .animate({ width: "200px", height: "200px" }, 1000)  // Resize
            .fadeOut(1000)                      // Fade out
            .fadeIn(1000)                       // Fade in
            .text("Chained!");                  // Change text
    });

    // Reset Button
    $("#btn-reset").click(function() {
        $("#box")
            .stop(true, true)  // Stop ongoing animations
            .attr("style", "") // Remove all inline styles
            .text("Box");      // Reset text
    });

});
