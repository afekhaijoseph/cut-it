import {elements} from './base'
export const searchView = (commonFoods, brandedFoods) =>{

    commonFoods.forEach(food => {
        const commonMarkup = `
        <li class="${food.food_name}">${food.food_name} </li>
      `
      elements.commonResult.insertAdjacentHTML('beforeend', commonMarkup);
    })


    brandedFoods.forEach(food => {
        const brandedMarkup = `
        <li class="b${food.nix_brand_id}">${food.food_name} </li>
      `
      elements.brandedResult.insertAdjacentHTML('beforeend', brandedMarkup);
    })
     
}

export const clearSearch =()=> {
  elements.commonResult.innerHTML = '';
  elements.brandedResult.innerHTML = '';
}
