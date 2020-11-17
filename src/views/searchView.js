import {elements} from './base'
export const searchView = (commonFoods, brandedFoods) =>{

    commonFoods.forEach(food => {
        const commonMarkup = `
        <li class="${food.food_name}">${food.food_name} <img src="images/chevron.png"/></li>
      `
      elements.commonResult.insertAdjacentHTML('beforeend', commonMarkup);
    })


    brandedFoods.forEach(food => {
        const brandedMarkup = `
        <li class="b${food.nix_item_id}">${food.food_name} <img src="images/chevron.png"/></li>
      `
      elements.brandedResult.insertAdjacentHTML('beforeend', brandedMarkup);
    })
     
}

export const clearSearch =()=> {
  elements.commonResult.innerHTML = '';
  elements.brandedResult.innerHTML = '';
}

export const tdeeALert =()=> {
  const markup = `
  <img class="check" src="images/checkmark.png"/>
  `
  const markupTwo = `
  <p class="alert"><i>submitted</i></p>
  `
  elements.tdeeBtn.style.display = "none";
  
  elements.tdeeForm.insertAdjacentHTML('beforeend', markup);
  elements.tdeeForm.insertAdjacentHTML('afterbegin', markupTwo);


}