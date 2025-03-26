$(document).ready(function() {

    // **1. Content Manipulation**
    $("#btn-text").click(function() {
        $("#content").text("Text changed using text()");
    });

    $("#btn-html").click(function() {
        $("#content").html("<b>HTML changed using html()</b>");
    });

    $("#btn-val").click(function() {
        $("#inputField").val("New Value Set");
    });

    // **2. Adding Elements**
    $("#btn-append").click(function() {
        $("#container").append("<p class='text'>Appended Element</p>");
    });

    $("#btn-prepend").click(function() {
        $("#container").prepend("<p class='text'>Prepended Element</p>");
    });

    $("#btn-after").click(function() {
        $("#content").after("<p>Inserted After</p>");
    });

    $("#btn-before").click(function() {
        $("#content").before("<p>Inserted Before</p>");
    });

    $("#btn-appendTo").click(function() {
        $("<p class='text'>Appended using appendTo()</p>").appendTo("#container");
    });

    $("#btn-prependTo").click(function() {
        $("<p class='text'>Prepended using prependTo()</p>").prependTo("#container");
    });

    // **3. Removing Elements**
    $("#btn-remove").click(function() {
        $(".text").remove();
    });

    $("#btn-empty").click(function() {
        $("#container").empty();
    });

    $("#btn-detach").click(function() {
        $("#detachable").detach(); // Removes but keeps event bindings
    });

    // **4. Wrapping Elements**
    $("#btn-wrap").click(function() {
        $("#content").wrap("<div class='highlight'></div>");
    });

    $("#btn-wrapAll").click(function() {
        $("p").wrapAll("<div class='wrapper'></div>");
    });

    $("#btn-unwrap").click(function() {
        $("p").unwrap();
    });

    // **5. Attribute Manipulation**
    $("#btn-attr").click(function() {
        $("#inputField").attr("placeholder", "New Placeholder");
    });

    $("#btn-removeAttr").click(function() {
        $("#inputField").removeAttr("placeholder");
    });

});
