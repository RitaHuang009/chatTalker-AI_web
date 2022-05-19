$(function () {


  /* banner輪播 */
  $("#evaluate_list").flexslider({
    slideshowSpeed: 2000,
    animation: "silde",
    startAt: 1,
    animationSpeed: 500,
    touch: true,
    itemWidth: 350,
    itemMargin: 0,
    minItems: 3,
    maxItems: 3,
  });


  /* GoTop btn */
  $("body").on("click", "#goTop", () => {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(window).scroll(function () {

    $("#goTop").css(
      "opacity",
      $(this).scrollTop() > 400 ? 1 : 0
    );

  });


  // FAQ
  $(".faqList_item").click(function () {

    let me = event.currentTarget;

    $(".faqList_info").slideUp();
    $(".faqList_title").removeClass("active");
    $(me).find(".faqList_info").stop().slideToggle();
    $(me).find(".faqList_title").toggleClass("active");

  });


});