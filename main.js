$(document).ready(function (){
  slideImg();
});

// creo funzione dove inserire codice
function slideImg() {

  // scorrimento dx
  $(".next > i").click(function (){
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
  });


 // scorrimento sx
  $(".prev > i").click(function (){
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
  });

}
