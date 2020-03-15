let slided = false;
$(".navbar-toggler").click(function(e) {
  if (!slided) {
    $(".navbar-collapse").slideDown("slow", "swing", function() {
      slided = true;
    });
  } else {
    $(".navbar-collapse").slideUp("slow", "swing", function() {
      slided = false;
    });
  }
});
// Pull to Refresh Library
const ptr = PullToRefresh.init({
  mainElement: "body",
  onRefresh() {
    window.location.reload();
  }
});
