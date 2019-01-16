// const containerRectangle = document.getElementsByClassName('container-rectangle');
const buttonCharts = document.getElementsByClassName('button-chart button-chart__editar');

$('.container-rectangle')
  .mouseover(function () {
    buttonEditar = $(this).find($('img')[0]);
    $(this).find($('img')[0]).show();
  })
  .mouseout(function () {
    $(this).find($('img')[0]).hide();
    $(this).find($('.menu-chart')[0]).hide();
  });

buttonCharts[0].addEventListener('click', function (e) {
  const buttonsMenu = e.target.nextElementSibling;

  if (buttonsMenu.style.display === 'grid') {
    buttonsMenu.style.display = 'none';
  } else {
    buttonsMenu.style.display = 'grid';
  }
});