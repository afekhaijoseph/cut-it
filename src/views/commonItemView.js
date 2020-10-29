import {elements} from './base';

export const renderCommonItem = (item) => {
    console.log(item);

//consider writing about dietary fiber

    const markup = `
    <div class="common-item">
        <h2>${item.foodname}</h2>
        <div>

            <p><i>This food item contains</i></p>
            <h2><span class="item-calories">${item.calories}</span> <span> calories </span></h2>
            <p>and it therefore consumes <span class="item-percent">${item.percentage}</span>% of your total daily caloric intake</p>
            <img src="${item.photo}" style = "width: 350px">
            <select class="common-unit-options">
             ${item.serving_measures.map(e => e.measure === item.serving_unit ? `<option selected> ${e.measure} </option>` : `<option> ${e.measure} </option>`) }
            </select>
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
    elements.container.insertAdjacentHTML('beforeend', markup);

}


export const clearCommonItem = () => {
    const item = document.querySelector('.common-item');
   item.parentElement.removeChild(item);
  }

export const updateCalories = (calories) => {
    const calorieTag = document.querySelector('.item-calories');
    calorieTag.textContent = calories;

}

export const percentageUpdate = (percent) => {
    const percentageTag = document.querySelector('.item-percent');
    percentageTag.textContent = percent;
}