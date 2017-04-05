// When document is ready...
// Define var total;
// When form is submitted...
    
    // Get the value of #newEntry
    // Convert it to a number with ONLY 2 decimal places
    // Create a new <li> in #entries which 
    //        equals the value of the form + "$"

    // Add the new entry value to the total
    // Clear the value in #newEntry

$(document).ready(start);

function start(){
    var total = 0;

    $("#entry").submit(processData);

    function processData(){
        
        var entry = $('#newEntry').val();
        var entryNumber = Number(entry);

        var processedNumber = entryNumber.toFixed(2);

        $('#entries').append('<li>$' + processedNumber + '</li>');
        
        total += entryNumber;

        console.log(total);

        $('#total').html('$' + total.toFixed(2));

        $('#newEntry').val('');

        return false;
    }
}



