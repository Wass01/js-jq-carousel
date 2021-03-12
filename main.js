$(document).ready(function (){
  allClick();
});



// functions
function allClick() {
  $(".next > i").click(function (){
    nextDx();
  });


  $(".prev > i").click(function (){
    prevSx();
  });


  $(document).keyup(function(e) {
    if(e.keyCode == 39){
      nextDx();
    }

    if(e.keyCode == 37){
      prevSx();
    }
  });
}







function nextDx() {
  // scorrimento dx
  var image = $(".images img.active");
  var circle = $(".nav i.active");

  var imgFirst = $("img.first");
  var iFirst = $("i.first");

  // se immagine ha classe last è all'ultima foto
  if (image.hasClass("last")) {
    image.removeClass("active");
    circle.removeClass("active");

    imgFirst.addClass("active");
    iFirst.addClass("active");
  } else {
    // cambio immagini tra di loro
    image.removeClass("active");
    circle.removeClass("active");

    image.next().addClass("active");
    circle.next().addClass("active");
  }
}

function prevSx() {
  // scorrimento sx
  var image = $(".images img.active");
  var circle = $(".nav i.active");

  var imgLast = $("img.last");
  var iLast = $("i.last");

  // se immagine ha classe first è alla prima foto
  if (image.hasClass("first")) {

    image.removeClass("active");
    circle.removeClass("active");

    imgLast.addClass("active");
    iLast.addClass("active");
  } else {
      // cambio immagini tra di loro
    image.removeClass("active");
    circle.removeClass("active");

    image.prev().addClass("active");
    circle.prev().addClass("active");
  }
}
