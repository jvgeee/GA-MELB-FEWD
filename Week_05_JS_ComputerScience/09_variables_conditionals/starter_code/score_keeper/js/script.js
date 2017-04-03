var total = 0;

$('#zero').click(function(){
    total = 0;
    $('#result').html(total);
});

$('#add5').click(function(){
    total = total + 5;
    $('#result').html(total);
});

$('#add10').click(function(){
    total += 10;
    $('#result').html(total);
});

$('#sub1').click(function(){
    total -= 1;
    $('#result').html(total);
});

