// let logout = document.getElementsByClassName('logout')[0];
// let cityDd = document.getElementsByClassName('city-dd')[0];
// let marketDd = document.getElementsByClassName('market-dd')[0];
// let panelsBtn = document.getElementsByClassName('buttons')[0];
// let filtersBtn = document.getElementsByClassName('filters-btn')[0];
// let graphicsBtn = document.getElementsByClassName('graphics-btn')[0];
// let filtersPanel = document.getElementsByClassName('filters')[0];
// let graphicsPanel = document.getElementsByClassName('graphics')[0];
// let cesiumMap = document.getElementsByClassName('cesiumMap')[0];
// let cesiumContainer = document.getElementById('cesiumContainer');
// let centerBtn = document.getElementsByClassName('btn-centrar')[0];

// let viewWidth = 72;
// let panelsWidth = 28;
// let graphicsPanelLeft;

// let madBtn = document.getElementsByClassName('mad')[0];
// let bcnBtn = document.getElementsByClassName('bcn')[0];
// let cityBtns = document.getElementsByClassName('city-btns')[0];
// let chooseCity = document.getElementsByClassName('bg-mad-bcn')[0];
// let madridBtn = document.getElementById('madrid-btn');
// let barnaBtn = document.getElementById('barna-btn');
// let resultsBtn = document.getElementsByClassName('results-btn')[0];
// let resultsBtnTxt = document.querySelectorAll('.results-btn h5')[0];

// let priceMin;
// let priceMax;
// let availabilityMin;
// let availabilityMax;
// let builtMin;
// let builtMax;

// window.onload = function() {
//   getCookieData().then((response) => {});
//   initMap();
// }

// // Filters
// function setOption(Dd) {
//   Dd.selectedOption = Dd.options[0].value;
// }

// filtersBtn.onclick = function() {
//   if (filtersPanel.style.left !== "-100%") {
//     filtersPanel.style.left = "-100%";
//     filtersBtn.style.backgroundColor = "#9b9b9b";
//     viewWidth += 28;
//     panelsWidth -= 28;
//     cesiumMap.style.width = viewWidth + 'vw';
//     cesiumContainer.style.width = viewWidth + 'vw';
//     panelsBtn.style.left = panelsWidth + 'vw';
//     if (graphicsPanel.style.left === "28vw") {
//       graphicsPanel.style.left = "0%";
//     }
//   } else {
//     filtersPanel.style.left = "0%";
//     filtersBtn.style.backgroundColor = "#006c4b";
//     viewWidth -= 28;
//     panelsWidth += 28;
//     cesiumMap.style.width = viewWidth + 'vw';
//     cesiumContainer.style.width = viewWidth + 'vw';
//     panelsBtn.style.left = panelsWidth + 'vw';
//     if (graphicsPanel.style.left === "0%") {
//       graphicsPanel.style.left = "28vw";
//     }
//   }
// }

// graphicsBtn.onclick = function() {
//   graphicsPanelLeft = parseFloat(window.getComputedStyle(graphicsPanel).getPropertyValue('left'));
//   if (graphicsPanelLeft >= 0) {
//     graphicsPanel.style.left = "-100%";
//     graphicsBtn.style.backgroundColor = "#9b9b9b";
//     viewWidth += 28;
//     panelsWidth -= 28;
//     cesiumMap.style.width = viewWidth + 'vw';
//     cesiumContainer.style.width = viewWidth + 'vw';
//     panelsBtn.style.left = panelsWidth + 'vw';
//   } else {
//     if (filtersPanel.style.left !== "-100%") {
//       graphicsPanel.style.left = "28vw";
//     } else {
//       graphicsPanel.style.left = "0%";
//     }
//     graphicsBtn.style.backgroundColor = "#006c4b";
//     viewWidth -= 28;
//     panelsWidth += 28;
//     cesiumMap.style.width = viewWidth + 'vw';
//     cesiumContainer.style.width = viewWidth + 'vw';
//     panelsBtn.style.left = panelsWidth + 'vw';
//   }
// }

// function toggleLogout() {
//   if(logout.style.display === "block") {
//     logout.style.display="none";
//   } else {
//     logout.style.display="block";
//   }
// }

// async function loadOptionsWithCookie(city) {
//   // Reset filters
//   resetFilters(city)

//   if (city == "Madrid") {
//     zoomToMadrid();
//     barnaBtn.classList.remove('city-selected');
//     madridBtn.classList.add('city-selected');
//   } else if (city == "Barcelona") {
//     zoomToBarna();
//     madridBtn.classList.remove('city-selected');
//     barnaBtn.classList.add('city-selected');
//   }

//   cityBtns.classList.remove('hidden');
//   chooseCity.classList.add('hidden');

//   // Load cities from API
//   getEnum("city", {agency:city}).then((response) => {
//     for (const i in response) {
//       if (response[i] != city) { 
//         cityDd.options.push({ text: response[i], value: response[i] });
//       }
//     }
//     setOption(cityDd);
//     updateResultsCount();
//   }).catch((err) => {
//       console.log(err.message)
//   })

//   // Load markets of the default city from API
//   getEnum("market", {city:city}).then((response) => {
//     for (const i in response) {
//       marketDd.options.push({ text: response[i], value: response[i] });
//     }
//     setOption(marketDd);
//   }).catch((err) => {
//       console.log(err.message)
//   })

//   // Set Slider filters
//   setSliderFilters(city)
//   return true
// }

// function toggleCitySelected(e) {
//   if (!e.classList.contains('city-selected')) {
//       if (madridBtn.classList.contains('city-selected')) {
//         selectCity("Barcelona")
//       } else {
//         selectCity("Madrid")
//       }
//   }
// }

// function toggleBuildingCard(e) {
//   if (!e.classList.contains('labelSelected')) {
//     if (e.classList.contains('general')) {
//       e.classList.add('labelSelected');
//       document.getElementsByClassName('label')[1].classList.remove('labelSelected');
//       document.getElementsByClassName('panel')[0].classList.remove('panelHidden');
//       document.getElementsByClassName('panel')[1].classList.add('panelHidden');
//     } else {
//       e.classList.add('labelSelected');
//       document.getElementsByClassName('label')[0].classList.remove('labelSelected');
//       document.getElementsByClassName('panel')[0].classList.add('panelHidden');
//       document.getElementsByClassName('panel')[1].classList.remove('panelHidden');
//     }
//   }
// }

// function closeBuildingCard() {
//   //console.log(document.getElementsByClassName('buildingCard')[0])
//   document.getElementsByClassName('buildingCard')[0].style.display= 'none';
//   removeSelected()
// }

// function openBuildingCard() {
//   //console.log(document.getElementsByClassName('buildingCard')[0])
//   document.getElementsByClassName('buildingCard')[0].style.display= 'block';
// }

// function loadOptions(city) {
//   // We can't load the map until we have the API cookie
//   if (!islogin) {
//       getCookieData().then((response) => {
//         loadOptionsWithCookie(city).then((response) => {
//         }).catch((err) => {
//             console.log(err.message)
//         })
//       });
//   }
//   else{
//     loadOptionsWithCookie(city).then((response) => {
//     }).catch((err) => {
//         console.log(err.message)
//     })
//   }
// }

// // Initial city selection
// function selectCity(city) {
//   loadMap(city);
// }

// madBtn.onclick = function() {
//     let city = "Madrid"
//     setSliderFilters(city)
//     selectCity(city)
// }

// bcnBtn.onclick = function() {
//     let city = "Barcelona"
//     setSliderFilters(city)
//     selectCity(city)
// }

// centerBtn.onclick = function() {
//   ZoomToVisibleData();
// }

// function getCurrentFilters() {
//   filters = {}
//   if (cityDd.selectedOption) {
//     filters.city = cityDd.selectedOption
//   }
//   if (marketDd.selectedOption) {
//     filters.market = marketDd.selectedOption
//   }
//   if (priceMin) {
//     filters.min_asking_rent = priceMin
//   }
//   if (priceMax) {
//     filters.max_asking_rent = priceMax
//   }
//   if (availabilityMin) {
//     filters.min_available_surface = availabilityMin
//   }
//   if (availabilityMax) {
//     filters.max_available_surface = availabilityMax
//   }
//   if (builtMin) {
//     filters.min_surface = builtMin
//   }
//   if (builtMax) {
//     filters.max_surface = builtMax
//   }
//   //console.log(filters)
//   return filters
// }

// // Count button
// function updateResultsCount(){
//   filters = getCurrentFilters();
//   getMetadata(filters).then((response) => {
//     let count = response.metadata.count
//     resultsBtnTxt.innerHTML = `show ${count} results`;
//   }).catch((err) => {
//     console.log(err.message)
//   })
// }

// const priceSlider = document.getElementsByClassName('price-slider')[0];
// const availabilitySlider = document.getElementsByClassName('availability-slider')[0];
// const builtSlider = document.getElementsByClassName('built-slider')[0];


// cityDd.addEventListener('optionChanged', (event) => {
//   updateResultsCount();
// });
// marketDd.addEventListener('optionChanged', (event) => {
//   updateResultsCount();
// });

// function resetFilters(city) {
//   cityDd.options = [{ text: city, value: city }];
//   marketDd.options = [{ text: "All markets", value: "" }];
//   setOption(cityDd);
//   setOption(marketDd);
//   priceMax = undefined;
//   priceMin = undefined;
//   availabilityMin = undefined;
//   availabilityMax = undefined;
//   builtMin = undefined;
//   builtMax = undefined;
// }

// // Range slider functions
// function rangeSliderConfig(e, rangeInit, rangeFinal, step, formatValue) {
//   e.range = [rangeInit, rangeFinal];
//   e.step = step;
//   e.draggable = true;
//   e.formatValue = (value) => (`${value}${formatValue}`);
//   e.addEventListener('changeEnd', (event) => {
//     if (e === priceSlider) {
//       priceMin = event.detail[0];
//       priceMax = event.detail[1];
//     } else if (e === availabilitySlider) {
//       availabilityMin = event.detail[0];
//       availabilityMax = event.detail[1];
//     } else if (e === builtSlider) {
//       builtMin = event.detail[0];
//       builtMax = event.detail[1];
//     }
//     updateResultsCount();
//   });
// }

// function setSliderFilters(city) {
//   getMetadata({city:city}).then((response) => {
//     document.getElementsByClassName('price-slider')[0].setAttribute("min-value", Math.round(response.metadata.min.asking_rent));
//     document.getElementsByClassName('price-slider')[0].setAttribute("max-value", Math.round(response.metadata.max.asking_rent*(31/30)));
//     rangeSliderConfig(priceSlider, Math.round(response.metadata.min.asking_rent), Math.round(response.metadata.max.asking_rent), Math.round(response.metadata.max.asking_rent/30), '€/m' + String.fromCharCode(178));
//     document.getElementsByClassName('availability-slider')[0].setAttribute("min-value", Math.round(response.metadata.min.available_surface));
//     document.getElementsByClassName('availability-slider')[0].setAttribute("max-value", Math.round(response.metadata.max.available_surface*(31/30)));
//     rangeSliderConfig(availabilitySlider, Math.round(response.metadata.min.available_surface), Math.round(response.metadata.max.available_surface), Math.round(response.metadata.max.available_surface/30), 'm' + String.fromCharCode(178));
//     document.getElementsByClassName('built-slider')[0].setAttribute("min-value", Math.round(response.metadata.min.surface));
//     document.getElementsByClassName('built-slider')[0].setAttribute("max-value", Math.round(response.metadata.max.surface*(31/30)));
//     rangeSliderConfig(builtSlider, Math.round(response.metadata.min.surface), Math.round(response.metadata.max.surface), Math.round(response.metadata.max.surface/30), 'm' + String.fromCharCode(178));
//   }).catch((err) => {
//       console.log(err.message)
//   });
// }
// resultsBtn.onclick = function() {
//   filters = getCurrentFilters();
//   // Display only buildings which match the criteria
//   filterDataByOptions(filters);
// }