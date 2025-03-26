$(document).ready(function() {
    $("#btn").click(function() {
        // **1. Basic Selectors**
        $("#para1").addClass("highlight");  // Select by ID
        $(".para").addClass("border");     // Select by class
        $("p").css("color", "blue");       // Select by element
        $("*").css("font-family", "Arial"); // Select all elements

        // **2. Hierarchy Selectors**
        $("#container p").css("font-weight", "bold");  // Descendant selector
        $("#container > p").css("text-decoration", "underline"); // Direct child selector
        $("p + span").css("color", "green");  // Adjacent sibling
        $(".para ~ p").css("background-color", "lightgray"); // General sibling

        // **3. Attribute Selectors**
        $("input[name]").css("border", "2px solid blue");  // Select by attribute
        $("input[name='username']").css("background-color", "lightyellow"); // Exact match
        $("input[class^='check']").css("border", "2px dashed orange"); // Starts with
        $("input[class*='special']").css("border", "2px dotted purple"); // Contains substring

        // **4. Form Selectors**
        $(":text").css("border", "2px solid green");  // Select text inputs
        $(":checkbox").css("width", "20px");         // Select checkboxes
        $(":radio").css("height", "20px");           // Select radio buttons
        $(":checked").parent().css("background-color", "lightpink");  // Select checked elements
        $(":input").css("padding", "5px");  // Select all form inputs

        // **5. Filtering Selectors**
        $("li:first").css("color", "red");    // First item
        $("li:last").css("color", "blue");    // Last item
        $("li:even").css("background", "#ddd");  // Even index
        $("li:odd").css("background", "#bbb");   // Odd index
        $("p:contains('3')").css("border", "3px solid green");  // Contains text

        // **Extra: Visibility Selectors**
        $(":visible").css("border", "1px solid black");  // Select visible elements
        $(":hidden").show();  // Show hidden elements if any
    });
});
