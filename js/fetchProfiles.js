let files = [
  {
    name: 'Kostas',
    url: 'img/team/Kostas.jpg'
  },
  {
    name: 'Maria',
    url: 'img/team/Maria.jpg'
  },
  {
    name: 'George',
    url: 'img/team/George.jpg'
  },
  {
    name: 'Katerina',
    url: 'img/team/Katerina.jpg'
  }
];
for (const file of files) {
  let div = document.createElement('div');
  div.className = 'text-center position-relative profile-image';
  div.style.backgroundImage = "url('" + file.url + "')";
  let p = document.createElement('p');
  p.innerHTML = file.name;
  p.className = 'text-light custom-label';
  div.appendChild(p);
  document.getElementsByClassName('profile-images')[0].appendChild(div);
}
