import {elements} from './base';

export const renderItem = item => {
    console.log(item.calories);
    const markup = `
    <div>
        <p>${item.brandname}</p>
        <p>${item.foodname}</p>
        <p>${item.calories}</p>
        <p>${item.cholestrol}</p>
        <p>${item.dietary_fiber}</p>
        <p>${item.protein}</p>
        <p>${item.total_carbs}</p>
        <p>${item.total_fat}</p>

    </div>
    `
    elements.container.insertAdjacentHTML('afterbegin', markup);

}