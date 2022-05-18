$(function () {


  /* banner輪播 */
  $("#evaluate_list").flexslider({
    slideshowSpeed: 2000,
    animation: "silde",
    startAt: 1,
    // animationLoop: true,
    // slideshow: true,
    animationSpeed: 500,
    touch: true,
    itemWidth: 350,
    itemMargin: 8,
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


  // FQA
  $(".faqList_item").on("click", event => {
    let me = event.currentTarget;

    const ta = $(".faqList_item div:first-child")
    console.log(ta,!me)


    if (me) {
      $(me).find(".faqList_info").slideToggle();
      $(me).find(".faqList_title").toggleClass("active");
    } else {
      ta.removeClass("active");
    }

  });


});