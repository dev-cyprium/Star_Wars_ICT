$(document).ready(function() {
  var sendvic = $("#sandwich");
  var iks = $("#x");
  var glMeni = $(".gl-meni");
  var aniSpeed = 500;
  createFromTemplate();

  $("#strelica").click(function() {
    $("html").animate({scrollTop: 0}, 200);
    $("#strelica").fadeOut();
  });

  $(document).scroll(function() {
    if($("html").scrollTop() == 0) {
      $("#strelica").fadeOut();
    }
    $("#strelica").show();
  });

  sendvic.click(function() {
    glMeni.animate({
      right:0
    }, aniSpeed , function() {
      sendvic.hide();
    });

  });

  iks.click(function() {
    sendvic.show();
    glMeni.animate({
      right:"-28rem"
    }, aniSpeed);
  });

  modal();
});

function createFromTemplate() {
  var temp = '<button class="fas fa-chevron-circle-up" id="strelica"></buttons>';
  var element = $(temp);
  $("body").append(element);
}

function modal() {
  var modal = $(".login-modal");
  modal.hide();
  $(".log-reg").click(function() {
    modal.fadeIn(1000);
  });

  $("#close").click(function() {
    modal.fadeOut(1000);
  });

  $(document).click(function(e) {
    if(!$(e.target).closest(".login-modal,.log-reg").length) {
   $("body").find(".login-modal").fadeOut(1000);
 }
  })
}
