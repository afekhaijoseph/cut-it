export const elements = {
    searchContainer:document.querySelector('.search-area__container'),
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
    <div class="loader lds-ellipsis"><div class="load"></div><div></div><div></div><div></div></div>
    `
    if(parent === elements.searchContainer){
      elements.searchBtn.style.display="none";
    }
    parent.insertAdjacentHTML('beforeend', markup);
  }
  
export const clearLoader = () => {
  const loader = document.querySelector('.loader');
  if(loader) loader.parentElement.removeChild(loader);
  elements.searchBtn.style.display="block";
}