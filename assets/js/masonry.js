
// //navbar
// var mn = $(".navbar");
// mns = "fixed-nav";
// hdr = $(".top-wrapper").height();

// $(window).scroll(function () {
//   if ($(this).scrollTop() > hdr) {
//     mn.addClass(mns);
//   } else {
//     mn.removeClass(mns);
//   }
// });

var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  }); 
  });