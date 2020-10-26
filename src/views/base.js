export const elements = {
    searchInput : document.querySelector('.search-field'),
    searchBtn : document.querySelector('.search-btn'),
    commonResult : document.querySelector('.common-food-result'),
    brandedResult : document.querySelector('.branded-food-result'),
    outerContainer : document.querySelector('.outer-container'),
    container : document.querySelector('.container'),
    tdeeInput : document.querySelector('.tdee-field'),
    tdeeForm : document.querySelector('.tdee-form'),
    tdeeBtn : document.querySelector('.tdee-btn')
}

export const addLoader = (parent) => {
    const markup = `
    <div class="loader">
    <img src="https://img.icons8.com/metro/26/000000/spinner-frame-5.png"/>
    </div>`
  
    parent.insertAdjacentHTML('afterbegin', markup);
  }
  
  export const clearLoader = () => {
    const loader = document.querySelector('.loader');
    if(loader) loader.parentElement.removeChild(loader);
  }

