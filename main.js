$(document).ready(function (){
  slideImg();
});

function slideImg() {
  var slideDx = $(".next > i");
  var slideSx = $(".prev > i");
  var image = $(".images > .first");

  slideDx.click(function (){
    image.removeClass("active").next().addClass("active");
    
  });
}
