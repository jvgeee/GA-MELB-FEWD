$(document).ready(function(){
    var animals = ["Cat", "Cow", "Alpaca", "Canary", "Sloth", "Lion", "Giraffe", "Kangaroo", "Rhino"];
    populateDropDown(animals);
});

function populateDropDown(animalArray) {
  $(animalArray).each(function(index, element){
      $("select").append("<option value='" + element + "'>" + element + "</option>");
  });
}


// Pseudo Code:
// When document is ready...
// Make an array of our animal names
// Then get each animal, and add a new option to 
//    the dropdown menu

// Don't use populateDropDown function first, but then use a different array 
//    and selector to show the power of refactoring