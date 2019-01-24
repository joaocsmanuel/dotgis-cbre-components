const buttonCharts = document.getElementsByClassName('button-chart button-chart__editar');

$('.container-rectangle')
  .mouseover(function () {
    $(this).find($('.container-menu')).show();
  })
  .mouseout(function () {
    $(this).find($('.container-menu')).hide();
  });

buttonCharts[0].addEventListener('click', function (e) {
  const buttonsMenu = e.target.nextElementSibling;

  if (buttonsMenu.style.display === 'grid') {
    buttonsMenu.style.display = 'none';
  } else {
    buttonsMenu.style.display = 'grid';
  }
});