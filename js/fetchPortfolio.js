let files2 = [
  {
    name: 'fata morgana',
    imageUrl: 'img/portfolio/FataMorgana.png',
    url:
      'http://fata-morgana.s3-website.eu-central-1.amazonaws.com/?fbclid=IwAR1MWd09cq-ai6VylP2UGViCajLBFbOVSvzjq_rxrFVSIH6m5NGRGCFf-uk'
  },
  {
    name: 'HSLColorSelector',
    imageUrl: 'img/portfolio/HSLColorSelector.png',
    url: 'https://giorgoslytos.github.io/hslcolorselector/'
  },
  {
    name: 'Greek News',
    imageUrl: 'img/portfolio/GreekNews.png',
    url: 'https://giorgoslytos.github.io/GreekNews/'
  }
];
for (const file of files2) {
  let element =
    "<a href='" +
    file.url +
    "' target='_blank'>\
          <div class='text-center position-relative portfolio-project m-2'\
          style='  \
          background-image: url(" +
    file.imageUrl +
    ");\
        '>\
        <p class='text-light portfolio-label'\
        >" +
    file.name +
    '</p>\
        </div></a>';
  $('.portfolio-div').append(element);
}
