

$(function () {


  /* banner輪播 */
  $("#evaluate_list").flexslider({
    slideshowSpeed: 2000,
    animation: "silde",
    animationLoop: true,
    slideshow: true,
    animationSpeed: 500,
    touch: true,
    itemWidth: 352,
    itemMargin: 16,
  });


  /* GoTop btn */
  $("body").on("click", "#goTop", () => {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(window).scroll(function () {

    if ($(this).scrollTop() > 400) {
      $("#goTop").attr("style", "opacity:1;");
    } else {
      $("#goTop").attr("style", "opacity:0;");
    }

  });

  $(".faqList_item").click(function () {
    let me = event.currentTarget;
    $(me).find(".faqList_info").slideToggle();
    $(me).find(".faqList_title").toggleClass("active");
  });


});