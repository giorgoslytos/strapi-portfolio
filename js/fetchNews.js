$.ajax({
  method: "GET",
  url:
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=3ae61f29fda84c3cbc229339d87d5787",
  success: response => {
    // response.articles.length
    for (let i = 0; i < 6; i++) {
      let image = getImage(response.articles[i].urlToImage);
      let node =
        "\
        <!-- start -->\
        <div class='col-md-4'>\
          <div class='shadow p-0 border my-3'>\
          <div\
          class='card-img-top" +
        i +
        "'\
          style='width: 100%;\
        height: 200px;\
        background-size: cover;\
        background-repeat: no-repeat;\
        background-position: 50% 50%;'\
        ></div>\
            <div class='card-body'>\
              <h5 class='card-title text-primary-color-light title-overflow'>\
                " +
        response.articles[i].title +
        "\
              </h5>\
              <p class='card-text description-overflow'>\
                " +
        response.articles[i].description +
        "\
              </p>\
            </div>\
            <div class='card-footer'>\
              <a href='" +
        response.articles[i].url +
        "' class=''\
          target='_blank'>Read more</a>\
            </div>\
          </div>\
        </div>\
        <!-- end -->";
      $(".blog").append(node);
      $(".card-img-top" + i).css("background-image", 'url("' + image + '")');
    }
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrown);
  }
});
function getImage(img) {
  let image = "img/breakingnews.png";
  if (img !== null) {
    image = img;
  }
  return image;
}
