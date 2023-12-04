import projects from '../../../json/projects.json';
import hits from '../../../json/trainers.json';
import { renderProjectsGallery } from './projects.js';
import { renderProductsGallery } from './products.js';
import { setSlider, setSmallSlider, settingSliderAdaptive } from './slider.js';
import Accordion from 'accordion-js';
import {settingAccordion, settingAccordionAdaptive} from './accordion.js';
import { setPagination } from './slider-pagination.js'



renderProjectsGallery(projects);
renderProductsGallery(hits);

hits.forEach(({id})=>{
  setSmallSlider(`#product-list-${id}`, `#product-list-buttons-${id}`);
})

if (document.querySelector('.slider-intro') && document.querySelector('.intro__buttons-block')) {
  setSlider('.slider-intro', '.intro__buttons-block');
}

if (document.querySelector('.slider-best') && document.querySelector('.best__buttons-block')) {
  setSlider('.slider-best', '.best__buttons-block');
}

const progectsGallery = setSmallSlider('.slider-projects__slider', '.slider-projects__buttons', { loop: false });
setPagination(progectsGallery);


const orderMobSlider = setSmallSlider('#slider-order-small', '#slider-order-small-buttons');
settingSliderAdaptive (orderMobSlider);

setSlider('.slider-questions', '.questions__buttons-block');

const bestSmallSlider=setSmallSlider('#slider-best-small', '#slider-best-small-buttons');
settingSliderAdaptive (bestSmallSlider);

setSmallSlider('.slider-mob-why__slider', '.slider-mob-why__buttons');
setSmallSlider('.slider-mob-projects__slider', '.slider-mob-projects__buttons');


const accordionIntro = new Accordion('.accordion-intro', settingAccordion({showMultiple: true}));
settingAccordionAdaptive(accordionIntro);

const accordionAbout = new Accordion('.accordion-about', settingAccordion({showMultiple: true}));
settingAccordionAdaptive(accordionAbout);

const accordionBest =  new Accordion(Array.from(document.querySelectorAll('.accordion-best')), settingAccordion({showMultiple: true}));
settingAccordionAdaptive(accordionBest);

new Accordion(Array.from(document.querySelectorAll('.accordion-main')));


// const accordionQuestions =  new Accordion('.accordion-questions', settingAccordion());


