import Accordion from 'accordion-js';
import { settingAccordionAdaptive, closeAllAccordions } from './delivery/accordion.js';
import { getData } from './delivery/api.js';
import setPopup from './delivery/popup.js';
import initMap from './delivery/map.js';
import './delivery/modal.js';
import './delivery/form.js';
import { renderCitiesDelivery } from './delivery/regions.js';
import { setNavigation } from "./delivery/navigation.js";
import { setSlider, setTableSlider, setSimpleSlider } from './delivery/slider.js';

getData((regions) => {
  renderCitiesDelivery(regions);
});

// Navigation

setNavigation('#navigation-in');
setNavigation('#cost-regions');
setNavigation('#global-up');
setNavigation('#receiving-up');
setNavigation('#receiving-close-up', () => closeAllAccordions(accordionDelivery));

ymaps.ready(initMap);
setPopup();

// Sliders

setSimpleSlider('#slider-cost-delivery-buttons', '#slider-cost-delivery');
setSimpleSlider('#slider-cost-lifting-buttons', '#slider-cost-lifting');
setSimpleSlider('#slider-delivery-type-buttons', '.receiving-type__main-slider');

const sliderTable = document.querySelector('#slider-table') && document.querySelector('#slider-table-buttons') && setTableSlider('#slider-table', {
  controlsContainer: '#slider-table-buttons',
});

const sliderTableNoElevator = document.querySelector('#slider-table-no-elevator') && document.querySelector('#slider-table-buttons-no-elevator') && setTableSlider('#slider-table-no-elevator', {
  controlsContainer: '#slider-table-buttons-no-elevator',
});

const sliderPickup = document.querySelector('#pickup-slider') && document.querySelector('#pickup-slider-buttons') && setSlider('#pickup-slider', {
  controlsContainer: "#pickup-slider-buttons",
  controls: true,
  nav: false
});


// Accordions

const accordionDelivery = new Accordion(Array.from(document.querySelectorAll('.accordion--delivery')));
settingAccordionAdaptive(accordionDelivery);

const accordionFaq = new Accordion(Array.from(document.querySelectorAll('.accordion--faq')));

settingAccordionAdaptive(accordionDelivery);


