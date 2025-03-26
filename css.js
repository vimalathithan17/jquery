$(document).ready(function() {

    // **1. Change CSS Properties**
    $("#btn-css").click(function() {
        $("#box").css({
            "background-color": "orange",
            "border-radius": "10px",
            "color": "white",
            "font-size": "18px",
            "text-align": "center"
        });
    });

    // **2. Add, Remove, Toggle, and Check Class**
    $("#btn-class").click(function() {
        $("#box").toggleClass("highlight border rounded");
    });

    $("#btn-has-class").click(function() {
        let hasClass = $("#box").hasClass("highlight");
        alert(hasClass ? "Box has 'highlight' class!" : "Box does not have 'highlight' class!");
    });

    // **3. Get and Set Dimensions**
    $("#btn-dimensions").click(function() {
        let width = $("#box").width();
        let height = $("#box").height();
        let innerWidth = $("#box").innerWidth();
        let outerWidth = $("#box").outerWidth(true);

        alert(
            `Width: ${width}px\n` +
            `Height: ${height}px\n` +
            `Inner Width: ${innerWidth}px (includes padding)\n` +
            `Outer Width: ${outerWidth}px (includes margin)`
        );

        // Increase size
        $("#box").width(width + 20);
        $("#box").height(height + 20);
    });

    // **4. Visibility Methods**
    $("#btn-show").click(function() { $("#box").show(500); });
    $("#btn-hide").click(function() { $("#box").hide(500); });
    $("#btn-toggle").click(function() { $("#box").toggle(500); });

    // **5. Fade Effects**
    $("#btn-fade-in").click(function() { $("#box").fadeIn(500); });
    $("#btn-fade-out").click(function() { $("#box").fadeOut(500); });
    $("#btn-fade-toggle").click(function() { $("#box").fadeToggle(500); });

    // **6. Slide Effects**
    $("#btn-slide-up").click(function() { $("#box").slideUp(500); });
    $("#btn-slide-down").click(function() { $("#box").slideDown(500); });
    $("#btn-slide-toggle").click(function() { $("#box").slideToggle(500); });

});
