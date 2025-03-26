$(document).ready(function() {

    // Global AJAX Events
    $(document).ajaxStart(function() {
        $("#loading").show();
    }).ajaxStop(function() {
        $("#loading").hide();
    });

    $(document).ajaxComplete(function() {
        console.log("AJAX request completed");
    });

    $(document).ajaxSuccess(function() {
        console.log("AJAX request successful");
    });

    $(document).ajaxError(function(event, xhr, settings, error) {
        console.log("AJAX error:", error);
        $("#output").html("AJAX Error: " + error);
    });

    // $.get() - Fetch a post
    $("#btn-get").click(function() {
        $.get("https://jsonplaceholder.typicode.com/posts/1")
            .done(function(response) {
                $("#output").html("GET Response:\n" + JSON.stringify(response, null, 4));
            })
            .fail(function(xhr, status, error) {
                $("#output").html("Error: " + error);
            })
            .always(function() {
                console.log("GET request completed");
            });
    });

    // $.post() - Create a post
    $("#btn-post").click(function() {
        $.post("https://jsonplaceholder.typicode.com/posts", {
            title: "New Post",
            body: "This is a test post.",
            userId: 1
        })
        .done(function(response) {
            $("#output").html("POST Response:\n" + JSON.stringify(response, null, 4));
        })
        .fail(function(xhr, status, error) {
            $("#output").html("Error: " + error);
        })
        .always(function() {
            console.log("POST request completed");
        });
    });

    // $.getJSON() - Fetch JSON data
    $("#btn-getjson").click(function() {
        $.getJSON("https://jsonplaceholder.typicode.com/posts/1")
            .done(function(response) {
                $("#output").html("GETJSON Response:\n" + JSON.stringify(response, null, 4));
            })
            .fail(function(xhr, status, error) {
                $("#output").html("Error: " + error);
            })
            .always(function() {
                console.log("GETJSON request completed");
            });
    });

    // PUT request
    $("#btn-put").click(function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "PUT",
            data: JSON.stringify({
                id: 1,
                title: "Updated Post",
                body: "This post has been updated.",
                userId: 1
            }),
            contentType: "application/json",
            dataType: "json"
        })
        .done(function(response) {
            $("#output").html("PUT Response:\n" + JSON.stringify(response, null, 4));
        })
        .fail(function(xhr, status, error) {
            $("#output").html("Error: " + error);
        })
        .always(function() {
            console.log("PUT request completed");
        });
    });

    // DELETE request
    $("#btn-delete").click(function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "DELETE"
        })
        .done(function(response) {
            $("#output").html("DELETE Response:\nPost deleted successfully.");
        })
        .fail(function(xhr, status, error) {
            $("#output").html("Error: " + error);
        })
        .always(function() {
            console.log("DELETE request completed");
        });
    });

    // $.parseJSON() - Parse JSON string
    $("#btn-parsejson").click(function() {
        let jsonString = '{"name": "Alice", "age": 25}';
        let parsed = $.parseJSON(jsonString);
        $("#output").html("Parsed JSON:\n" + JSON.stringify(parsed, null, 4));
    });

    // $.param() - Serialize object to query string
    $("#btn-param").click(function() {
        let obj = { name: "John", age: 30 };
        let queryString = $.param(obj);
        $("#output").html("Serialized Query String:\n" + queryString);
    });

});
