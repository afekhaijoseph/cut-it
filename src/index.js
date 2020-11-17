import Search from './models/Search';
import {elements, addLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';
import * as brandedView from './views/brandedItemView'
import * as commonView from './views/commonItemView'
import CommonItem from './models/CommonItem';
import BrandedItem from './models/BrandedItem';


const state = {}

//Search
const searchController = async () => {

    const query = elements.searchInput.value;
    state.search = new Search(query);
    if(state.search) searchView.clearSearch();
    if(state.brandedItem) brandedView.clearBrandedItem();
    if(state.commonItem) commonView.clearCommonItem();
    addLoader(elements.searchContainer);
    await state.search.getResults();
    const commonFoodResult = state.search.commonFood;
    const brandedFoodResult = state.search.brandedFood;
    searchView.searchView(commonFoodResult, brandedFoodResult);
    clearLoader();
}

elements.tdeeBtn.addEventListener('click', e =>{
    e.preventDefault();
    searchView.tdeeALert();
    state.tdee = parseFloat(elements.tdeeInput.value);
    
})
elements.commonResult.addEventListener('click', async e => {
    const item = e.target.getAttribute('class');
    
    const newItem = item.split(' ');
    if (e.target.matches(`.${newItem[0]}`)) {
        state.commonItem = new CommonItem(item);
        searchView.clearSearch();
        addLoader(elements.container);
        await state.commonItem.getCommonItem();
        state.commonItem.calculateTdeePercentage(state.tdee);
        commonView.renderCommonItem(state.commonItem);
        clearLoader()
    }

})


elements.brandedResult.addEventListener('click', async (e) => {
    let id = e.target.getAttribute('class');
    if (e.target.matches(`.${id}`)) {
        try{
            id=id.substring(1);
            state.brandedItem = new BrandedItem(id);
            searchView.clearSearch();
            addLoader(elements.container);
            await state.brandedItem.getBrandedItem();
            state.brandedItem.calculateTdeePercentage(state.tdee);
            brandedView.renderBrandedItem(state.brandedItem);
            clearLoader();
        }

        catch(error){
            console.log(error);
        }
        
    }
})


elements.container.addEventListener('change', (e)=>{
    if(e.target.matches('.common-unit-options')){
        const selection = document.querySelector('.common-unit-options');
        state.option = selection.options[selection.selectedIndex].value;
        const newCalorie = state.commonItem.parseCalorie(state.option);
        const newPercentage = state.commonItem.updatePercentage(newCalorie, state.tdee);
        commonView.percentageUpdate(newPercentage);
        commonView.updateCalories(newCalorie);
    }
    
})


    

elements.searchBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log(elements.searchBtn);
    if(state.search) searchView.clearSearch();
    searchController();
});


elements.searchInput.addEventListener('keydown', e => {
    if(e.keyCode === 13){
        searchController();
    }
})
