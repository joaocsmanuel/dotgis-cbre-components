const buttonCity = document.getElementById('button-city');
const tooltipId = document.getElementById('tooltip-id');
const buttonOk = document.getElementById('button-ok');

buttonCity.addEventListener('click', () => {
  if (tooltipId.style.display === 'flex') {
    tooltipId.style.display = 'none';
  } else {
    tooltipId.style.display = 'flex';
  }
});


buttonOk.addEventListener('click', () => {
  tooltipId.style.display = 'none';
});
