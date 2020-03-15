$("form").submit(e => {
  e.preventDefault();
  console.log($(".name").val());
  if (!isEmail($(".email").val())) {
    alert("not an email");
  } else {
    $.ajax({
      type: "POST",
      url: "https://giorgoslytos.free.beeceptor.com",
      data: {
        name: $(".name").val(),
        email: $(".email").val(),
        message: $(".message").val()
      },
      success: function(response) {
        alert(response);
        response;
      }
    });
    $(".name").val("");
    $(".email").val("");
    $(".message").val("");
  }
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
