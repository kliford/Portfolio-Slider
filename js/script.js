
//Portfolio JS
var newSelection = ""; 
var quality = 27; /*number of block in two lines*/

function portfolioBlock() {
  if($(".ih-item").parent().is( ".new1" )){
    $(".new1 .ih-item").unwrap();
  }
  var divs = $(".ih-item:visible");
  for(var i = 0; i < divs.length; i+=quality) {
    divs.slice(i, i+quality).wrapAll("<div class='new1'></div>");
  }
  var newBl = $(".new1");
  var new1 = new Array;
  newBl.each( function( index, el) {
    blockPort(el);
  });
}

function blockPort(el) {
  var arrDiv = $('.ih-item:visible', el);
    if (arrDiv.length>25) {
      arrDiv[0].classList.add("first-li"); //add a clas for the first big block
      arrDiv[14].classList.add("second-li"); //add a clas for the second big block
      arrDiv[26].classList.add("next-li"); //add a clas for the last big block
    } else if (arrDiv.length>13) {
      arrDiv[0].classList.add("first-li");//add a clas for the first big block
      arrDiv[14].classList.add("second-li");//add a clas for the second big block
    } else {
      arrDiv[0].classList.add("first-li");//add a clas for the first big block
    } 
 }

portfolioBlock();

$(".menu_portfolio li a").click(function(){
  $(".work_portfolio").fadeTo(200, 0.10);
  if($(".ih-item").parent().is( ".new1" )){
    $(".new1 .ih-item").unwrap();
  }  
  $(".menu_portfolio li a").removeClass("active");
  $(this).addClass("active");
  newSelection = $(this).attr("rel");
  $(".ih-item").not("."+newSelection).hide();
  $("."+newSelection).show();
  $(".ih-item").removeClass('first-li');//remove a clas for the first big block
  $(".ih-item").removeClass('second-li');//remove a clas for the first big block
  $(".ih-item").removeClass('next-li');//remove a clas for the first big block
  portfolioBlock();
  $(".work_portfolio").fadeTo(600, 1);
});