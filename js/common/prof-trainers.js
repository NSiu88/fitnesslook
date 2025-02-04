import Accordion from 'accordion-js';
import projects from '../../json/prof-trainers/projects.json';
import './prof-trainers/video.js';
import { renderProjectsGallery } from './prof-trainers/projects.js';
import { setPagination } from './prof-trainers/slider-pagination.js';
import { removeElements, addListeners } from './prof-trainers/util.js';
import { setNavigation } from './prof-trainers/navigation.js';
import { setSlider, setSmallSlider, setSimpleSlider, settingSliderAdaptive, updateSliderAdaptive } from './prof-trainers/slider.js';
import { settingAccordion, settingAccordionAdaptive, settingMobileAccordionAdaptive, closeAllAccordions, settingAccordionInSlider } from './prof-trainers/accordion.js';
import { renderProductsGallery } from './prof-trainers/products.js';
import { getData } from './prof-trainers/api.js';
import { getDataStructure } from './prof-trainers/data.js';

// Remove section

removeElements([
  'a[data-type="calc-example"]',
  '#sertificates-button',
  '#delivery-button',
  '#garantee-card-button',
  '#projects-info-download',
  '#project-subtitle-pdf',
  '#sale-button'
]);

getData((products) => {
  const productsList = getDataStructure(products);
  renderProductsGallery(productsList);
  productsList.forEach(({ id }) => {
    setSmallSlider(`#product-list-${id}`, `#product-list-buttons-${id}`, { responsive: { 768: { items: 2, gutter: 32, edgePadding: 32 } } });
  });
});

renderProjectsGallery(projects);

// Sliders

const sliderIntro = document.querySelector('#slider-intro') && document.querySelector('#slider-intro-buttons') && setSlider('#slider-intro', '#slider-intro-buttons', { gutter: 32, controlsContainer: '#slider-intro-controls', autoHeight: true });
updateSliderAdaptive(sliderIntro);

const sliderBest = setSlider('#slider-best', '#slider-best-buttons', { gutter: 32, controlsContainer: '#slider-best-controls', autoHeight: true });
updateSliderAdaptive(sliderBest);

const progectsGallery = setSimpleSlider('#slider-projects-details', { controlsContainer: '#slider-projects-details-buttons' });
setPagination(progectsGallery);

const orderSmallSlider = setSmallSlider('#slider-order-small', '#slider-order-small-buttons');
settingSliderAdaptive(orderSmallSlider);

const bestFitnessSmallSlider = setSmallSlider('#slider-bestfit-small', '#slider-bestfit-small-buttons');
settingSliderAdaptive(bestFitnessSmallSlider);

const whySmallSlider = setSmallSlider('#slider-why-small', '#slider-why-small-buttons');
settingSliderAdaptive(whySmallSlider);

const projectsSmallSlider = setSmallSlider('#slider-projects-small', '#slider-projects-small-buttons');
settingSliderAdaptive(projectsSmallSlider);

// Accordions

const accordionIntro = new Accordion(Array.from(document.querySelectorAll('.accordion-intro')), settingAccordionInSlider(sliderIntro));
settingAccordionAdaptive(accordionIntro, sliderIntro);

const accordionAbout = new Accordion(Array.from(document.querySelectorAll('#accordion-about')), settingAccordion({ showMultiple: true }));
settingAccordionAdaptive(accordionAbout);

const accordionBest = new Accordion(Array.from(document.querySelectorAll('.accordion-best')), settingAccordionInSlider(sliderBest));
settingAccordionAdaptive(accordionBest, sliderBest);

const accordionGarantee = new Accordion(Array.from(document.querySelectorAll('.garantee-list')), settingAccordion({ showMultiple: true }));
settingAccordionAdaptive(accordionGarantee);

const accordionsMain = new Accordion(Array.from(document.querySelectorAll('.accordion-main')), settingAccordionInSlider(progectsGallery));

new Accordion(Array.from(document.querySelectorAll('.accordion-questions')), settingAccordion());

// Accordions in slider

sliderBest.events.on('indexChanged', () => {
  settingMobileAccordionAdaptive(accordionBest, sliderBest);
});

sliderIntro.events.on('indexChanged', () => {
  settingMobileAccordionAdaptive(accordionIntro, sliderIntro);
});

progectsGallery.events.on('indexChanged', () => {
  closeAllAccordions(accordionsMain);
});

// Navigation

setNavigation('#navigation-in');

// Buttons click

/* eslint-disable */
addListeners('button[data-type="calc-button"]', () => $('#callmeform').show())
addListeners('button[data-type="call-button"]', () => $('#callmeform').show())
/* eslint-enable */

window.addEventListener('load', () => {
  sliderBest.updateSliderHeight();
  progectsGallery.updateSliderHeight();
  sliderIntro.updateSliderHeight();
});
