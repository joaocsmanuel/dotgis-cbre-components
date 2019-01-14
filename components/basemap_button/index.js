var toggleMap = document.getElementById('toggle-map');

toggleMap.addEventListener('click', function (e) {
  var img = e.target.src;
  if (img.indexOf('mapabase.png') != -1) {
    e.target.src = img.replace('mapabase.png', 'ortofoto.png');
  } else {
    e.target.src = img.replace('ortofoto.png', 'mapabase.png');
  }
});