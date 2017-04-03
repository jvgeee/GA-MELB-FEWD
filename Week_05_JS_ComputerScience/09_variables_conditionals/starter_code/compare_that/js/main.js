// When the user clicks the button
// Compare the first input's number
// To the second input's number
// if bigger, write ">" in comparion span
// if smaller, write "<" in comparion span
// if equal, write "===" in comparion span

$('#submit').click(compare);


function compare(){
   var astring = $('#a').val();
   var bstring = $('#b').val();

   var a = Number(astring);
   var b = Number(bstring);
   
   if(a > b){
        $('#comparison').html('>');
   }else if(a < b){
        $('#comparison').html('<');
   }else if(a === b){
        $('#comparison').html('=');
   }else{
        $('#comparison').html('');
   }


}
