$(document).ready(function (){
  slideImg();
});

function slideImg() {
  var slideDx = $(".next > i");
  var slideSx = $(".prev > i");
  var image = $(".images > img");

  slideDx.click(function (){
    if (image.hasClass("active")) {
      image.removeClass("active").next().addClass("active");
    } else {
      image.removeClass("active").next();
    }

  });
}
