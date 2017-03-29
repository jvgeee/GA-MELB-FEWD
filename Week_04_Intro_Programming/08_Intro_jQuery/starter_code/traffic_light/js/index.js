//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function(){

    function clear(){
        $(".bulb").attr("class", "bulb");
    }

    $('#stopButton').click(function(){
        clear();
        $("#stopLight").addClass("red");
    });
   
    $('#slowButton').click(function(){
        clear();
        $("#slowLight").addClass("orange");
    }));
 
    $('#goButton').click(function(){
        clear();
        $("#goLight").addClass("green");
    });

})