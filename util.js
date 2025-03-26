$(document).ready(function() {
    
    // **1. Array/Object Manipulation**
    
    // $.each() - Iterating over an array
    $("#btn-each").click(function() {
        let output = "";
        $.each([10, 20, 30], function(index, value) {
            output += "Index " + index + ": " + value + "<br>";
        });
        $("#output").html(output);
    });

    // $.map() - Transforming an array
    $("#btn-map").click(function() {
        let numbers = [1, 2, 3, 4];
        let squared = $.map(numbers, function(value) {
            return value * value;
        });
        $("#output").html("Original: " + numbers + "<br>Mapped: " + squared);
    });

    // $.grep() - Filtering an array
    $("#btn-grep").click(function() {
        let numbers = [10, 20, 25, 30, 35];
        let filtered = $.grep(numbers, function(value) {
            return value > 25;
        });
        $("#output").html("Filtered (greater than 25): " + filtered);
    });

    // **2. Type Checking**
    $("#btn-typecheck").click(function() {
        let output = "";
        output += "$.isArray([1,2,3]): " + $.isArray([1,2,3]) + "<br>";
        output += "$.isFunction(function() {}): " + $.isFunction(function() {}) + "<br>";
        output += "$.isNumeric('123'): " + $.isNumeric("123") + "<br>";
        output += "$.type(42): " + $.type(42) + "<br>";
        $("#output").html(output);
    });

    // **3. Data Handling**
    $("#btn-data").click(function() {
        let str = "  Hello World  ";
        let obj1 = { name: "Alice", age: 25 };
        let obj2 = { age: 30, city: "New York" };
        let arr1 = [1, 2, 3];
        let arr2 = [4, 5, 6];

        let output = "";
        output += "Trimmed String: '" + $.trim(str) + "'<br>";
        output += "Merged Object: " + JSON.stringify($.extend({}, obj1, obj2)) + "<br>";
        output += "Merged Array: " + $.merge(arr1, arr2) + "<br>";
        $("#output").html(output);
    });

    // **4. Deferred/Promises**
    $("#btn-deferred").click(function() {
        let deferred = $.Deferred();

        deferred.done(function(msg) {
            $("#output").html("Deferred resolved: " + msg);
        });

        setTimeout(function() {
            deferred.resolve("Success!");
        }, 2000);
    });

    // **5. Other Utilities**
    $("#btn-other").click(function() {
        function greet() {
            return "Hello, " + this.name;
        }

        let person = { name: "John" };
        let boundGreet = $.proxy(greet, person);

        let output = "";
        output += "Current Time: " + $.now() + "<br>";
        output += "Using $.proxy(): " + boundGreet() + "<br>";
        $("#output").html(output);
    });

});
