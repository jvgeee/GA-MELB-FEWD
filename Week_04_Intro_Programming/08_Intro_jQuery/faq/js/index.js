$("li p").slideUp(0).parents("li").addClass("collapsed");

$("#q1").click(handleQ1);

function handleQ1() {
  var isCollapsed = $("#q1").hasClass("collapsed");

  if (isCollapsed == true) {
    $("#q1").removeClass("collapsed");
    $("#q1 p").slideDown();
  }
  else {
    $("#q1").addClass("collapsed");
    $("#q1 p").slideUp();
  }
}
