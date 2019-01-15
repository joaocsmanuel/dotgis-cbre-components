const buttonPincel = document.getElementById('button-pincel');
const buttonLegendsMenu = document.getElementById('menu-buttons-legends');
const arrayId = ['panel-rating', 'panel-availability', 'panel-rent-sell',  'panel-situation', 'panel-ask-rent'];

buttonPincel.addEventListener('click', (e) => {
  const imgPincel = e.target.children[0];
  if (buttonLegendsMenu.style.display === 'block') {
    imgPincel.src = imgPincel.src.replace('pincel-active.png', 'pincel.png');
    buttonLegendsMenu.style.display = 'none';
  } else {
    imgPincel.src = imgPincel.src.replace('pincel.png', 'pincel-active.png');
    buttonLegendsMenu.style.display = 'block';
  }
});

for (var i = 0, len = arrayId.length; i < len; i++) {
  buttonLegendEvent(i, arrayId[i])
}

function buttonLegendEvent(i, htmlButtonsId) {
  const buttons = buttonLegendsMenu.getElementsByTagName('button');
  buttons[i].addEventListener('click', () => {
    document.getElementById(htmlButtonsId).style.display = 'block';
  });
}


$.ajax({
  dataType: 'json',
  type: 'GET',
  url: 'config.json',
  mimeType: 'application/json',
  success: function (data) {
    createHtmlRampColor(data['rating'], 'ramp-color__small', 'ramp-color__small', 'panel-rating', 'panel-ramp');
    createHtmlRampColor(data['availability'], 'ramp-color__large', 'ramp-color__large', 'panel-availability', 'panel-ramp');
    createHtmlRampColor(data['rent-sell'], 'ramp-color__medium', 'ramp-color__medium', 'panel-rent-sell', 'panel-ramp');
    createHtmlRampColor(data['situation'], 'ramp-color__extrasmall', 'ramp-color__textsmall', 'panel-situation', 'panel-ramp__large');

    createHtmlRampGradient(data['asking-rent'], 'ramp-color__xxlarge', 'panel-ask-rent', 'panel-ramp', ['5 €/m2', '20 €/m2']);
  }
});

function createHtmlRampColor(dataLegend, htmlColorClass, htmlTextClass, htmlId, htmlRampClass) {
  const htmlRampClasses = document.getElementById(htmlId).getElementsByClassName(htmlRampClass);
  const htmlButtonClose = document.getElementById(htmlId).getElementsByTagName('button');

  for (var i = 0, len = dataLegend.length; i < len; i++) {
    const rampColor = document.createElement('div');
    rampColor.className = htmlColorClass;
    rampColor.style.backgroundColor = dataLegend[i].color;

    htmlRampClasses[0].appendChild(rampColor);
  }

  for (var i = 0, len = dataLegend.length; i < len; i++) {
    const rampText = document.createElement('div');
    rampText.className = htmlTextClass;
    rampText.innerHTML = dataLegend[i].text;

    htmlRampClasses[1].appendChild(rampText);
  }

  htmlButtonClose[0].addEventListener('click', function () {
    document.getElementById(htmlId).style.display = 'none';
  });
}

function createHtmlRampGradient(dataLegend, htmlColorClass, htmlId, htmlRampClass, arrayText) {
  const htmlRampClasses = document.getElementById(htmlId).getElementsByClassName(htmlRampClass);
  const htmlButtonClose = document.getElementById(htmlId).getElementsByTagName('button');

  const rampColor = document.createElement('div');
  rampColor.className = htmlColorClass;
  rampColor.style.backgroundImage = `linear-gradient(to left, ${dataLegend[0].color}, ${dataLegend[1].color}, ${dataLegend[2].color}, ${dataLegend[3].color})`;

  htmlRampClasses[0].appendChild(rampColor);

  htmlRampClasses[1].style.justifyContent = 'space-between';
  htmlRampClasses[1].style.fontSize = '10px';
  for (var i = 0, len = arrayText.length; i < len; i++) {
    const rampText = document.createElement('div');
    rampText.innerHTML = arrayText[i];

    htmlRampClasses[1].appendChild(rampText);
  }

  htmlButtonClose[0].addEventListener('click', function () {
    document.getElementById(htmlId).style.display = 'none';
  });
}