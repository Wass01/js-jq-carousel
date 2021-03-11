$(document).ready(function (){
  slideImg();
});

function slideImg() {
  var image = $(".images > .active");
  var circle = $(".nav > .active");

  var imgFirst = $("img .first");
  var imgLast = $("img .last");
  var iFirst = $("i .first");
  var iLast = $("i .last");

  // scorrimento dx
  $(".next > i").click(function (){
    image.removeClass("active");
    circle.removeClass("active");

    if (image.hasClass("last")) {
      imgFirst.addClass("active");
      iFirst.addClass("active");
    } else {
      image.next().addClass("active");
      circle.next().addClass("active");
    }
  });

}
