import {elements} from './base';

export const renderBrandedItem = (item) => {
    console.log(item);
    const markup = `
    <div class="branded-item">
        <h2>${item.foodname}</h2>
        <div>

            <p><i>This food item contains</i></p>
            <h2><span class="common-item-calories">${item.calories}</span> <span> calories </span></h2>
            <p>and it therefore consumes <span class="common-item-percent">${item.percentage}</span>% of your total daily caloric intake</p>
            <img src="${item.photo}" style = "width: 350px">
        </div>
          
        <div "style = display:inline-block">
        <p>Cholesterol : ${item.cholesterol ? `${item.cholesterol}ml/dL` : 'none'}</p>

        <p>Ditery fiber : ${item.dietary_fiber ? `${item.dietary_fiber}g`   : 'none'}</p>
        <p>Carbs : ${item.total_carbs}g</p>
        <p>Protein : ${item.protein}g</p>
        <p>Fat : ${item.total_fat}g</p>
        </div>
    </div>
    `
 
    elements.container.insertAdjacentHTML('afterbegin', markup);

}

export const clearBrandedItem = () => {
    const item = document.querySelector('.branded-item');
   item.parentElement.removeChild(item);
}



export const updateCalories = (calories) => {
    const calorieTag = document.querySelector('.common-item-calories');
    calorieTag.textContent = calories;

}

export const percentageUpdate = (percent) => {
    const percentageTag = document.querySelector('.common-item-percent');
    percentageTag.textContent = percent;
}