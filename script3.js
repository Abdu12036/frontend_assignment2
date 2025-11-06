// Task 9: Lazy Loading Images
$(document).ready(function () {
  function lazyLoad() {
    $(".gallery img").each(function () {
      const img = $(this);
      const imgTop = img.offset().top;
      const scrollBottom = $(window).scrollTop() + $(window).height();

      if (scrollBottom > imgTop - 100 && img.attr("data-src")) {
        img.attr("src", img.attr("data-src"));
        img.removeAttr("data-src");
        img.hide().fadeIn(800); 
      }
    });
  }
  
  lazyLoad();

  $(window).on("scroll", lazyLoad);
});



