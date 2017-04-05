var total = 0;

$('#entry').submit(enter);

function enter(e) {
  var entry = $('#newEntry').val();
      // Try commenting parseFloat out
      entry = parseFloat(entry);

  // Show what toFixed does to a number
  var currency = '$' + entry.toFixed(2);
   
  $('#entries').append('<li>' + currency + '</li>');
  
  total += entry;
  

 $('#total').html('$' + total.toFixed(2));
  
 $('#newEntry').val('');


  e.preventDefault();
  // or return false;
}

/*
function currencyFormat(number) {
  var currency = number.toFixed(2);
  return "$" + currency;
}
*/


$('#entry2').submit(function(){
  var entry = $('#newEntry').val();
      // Try commenting parseFloat out
      entry = parseFloat(entry);

  // Show what toFixed does to a number
  var currency = '$' + entry.toFixed(2);
   
  $('#entries').append('<li>' + currency + '</li>');
  
  total += entry;
  

 $('#total').html('$' + total.toFixed(2));
  
 $('#newEntry').val('');


  e.preventDefault();
});