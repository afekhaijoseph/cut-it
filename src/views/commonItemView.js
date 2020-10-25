import {elements} from './base';

export const renderCommonItem = (item) => {
    console.log(item);

//consider writing about dietary fiber

    const markup = `
    <div class="common-item">
        <h2>${item.foodname}</h2>
        <div>
            <p><i>This food item contains</i></p>
            <h2>${item.calories} <span> calories </span></h2>
            <p>and it therefore consumes ${this.percentage}% of your total daily caloric intake</p>
            <img src="${item.photo}" style = "width: 350px">
        </div>
          
        <div "style = display:inline-block">
        <p>Cholesterol : ${item.cholesterol ? item.cholesterol + 'ml/dL' : 'none'}</p>

        <p>Ditery fiber : ${item.dietary_fiber ? item.dietary_fiber : 'none'}</p>
        <p>Carbs : ${item.total_carbs}g</p>
        <p>Protein : ${item.protein}g</p>
        <p>Fat : ${item.total_fat}g</p>
        </div>
    </div>
    `
    elements.container.insertAdjacentHTML('afterbegin', markup);

}


export const clearCommonItem = () => {
    const item = document.querySelector('.common-item');
   item.parentElement.removeChild(item);
  }