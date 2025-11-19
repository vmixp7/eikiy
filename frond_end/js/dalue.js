// header
$(window).scroll(function () {
  if ($(this).scrollTop() > 120) {
    $(".dalue-header").addClass("menu-bgcolor");
  } else {
    $(".dalue-header").removeClass("menu-bgcolor");
  }
});
$(function () {
  $(".menu ul li.arr").hover(function() {
    $(this).find(".sub-link").show();
  }, function() {
    $(this).find(".sub-link").hide();
  });
  return false;
});
        


// menu
$(function () {
  $(".goto-01").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#gotothe-01").offset().top,
      },
      800,
    );
  });
  $(".goto-02").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#gotothe-02").offset().top - 85,
      },
      800,
    );
  });
  $(".goto-03").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#gotothe-03").offset().top - 85,
      },
      800,
    );
  });
  $(".goto-04").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#gotothe-04").offset().top - 85,
      },
      800,
    );
  });
  $(".goto-05").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#gotothe-05").offset().top - 85,
      },
      800,
    );
  });return false;
});



// service tab
$(function () {
  $(".service .photo").hide();
  $("#info01").show();
  $(".tab-title li").click(function () {
    $(this).parents().find("li").removeClass("choose");
    $(this).addClass("choose");
    return false;
  });
  $("#tab01").click(function () {
    $(this).parents().parents().find(".photo").hide();
    $("#info01").show();
    return false;
  });
  $("#tab02").click(function () {
    $(this).parents().parents().find(".photo").hide();
    $("#info02").show();
    return false;
  });
  $("#tab03").click(function () {
    $(this).parents().parents().find(".photo").hide();
    $("#info03").show();
    return false;
  });
  $("#tab04").click(function () {
    $(this).parents().parents().find(".photo").hide();
    $("#info04").show();
    return false;
  });
  $("#tab05").click(function () {
    $(this).parents().parents().find(".photo").hide();
    $("#info05").show();
    return false;
  });
});
