import {elements} from './base';

export const renderBrandedItem = (item) => {
    console.log(item);
    const markup = `
    <div class="branded-item">
        <p>${item.brandname ? item.brandname : ''}</p>
        <p>${item.foodname}</p>
        <p>${item.calories}</p>
        <p>${item.cholesterol ? item.cholesterol : ''}</p>
        <p>${item.dietary_fiber ? item.dietary_fiber : ''}</p>
        <p>${item.protein}</p>
        <p>${item.total_carbs}</p>
        <p>${item.total_fat}</p>
    </div>
    `
    elements.container.insertAdjacentHTML('afterbegin', markup);

}

export const clearBrandedItem = () => {
    const item = document.querySelector('.branded-item');
   item.parentElement.removeChild(item);
}
