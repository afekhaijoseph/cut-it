import Search from './models/Search';
import {elements, addLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';
import * as brandedView from './views/brandedItemView'
import CommonItem from './models/CommonItem';
import BrandedItem from './models/BrandedItem';


const state = {}

//Search
const searchController = async () => {

    const query = elements.searchInput.value;
    state.search = new Search(query);
    if(state.search) searchView.clearSearch();
    addLoader(elements.container);
    await state.search.getResults();
    const commonFoodResult = state.search.commonFood;
    const brandedFoodResult = state.search.brandedFood;
    searchView.searchView(commonFoodResult, brandedFoodResult);
    clearLoader();
    console.log(state.search);
}


elements.commonResult.addEventListener('click', e => {
    const item = e.target.getAttribute('class');
    const newItem = item.split(' ');
    if (e.target.matches(`.${newItem[0]}`)) {
        state.commonItem = new CommonItem(item);
       
        searchView.clearSearch();
        state.commonItem.getCommonItem();
        console.log(state.commonItem.foodname);
        console.log(state.commonItem.protein);
        console.log(state.commonItem.calories);
        console.log(state.commonItem.dietary_fat);
    }

})

elements.brandedResult.addEventListener('click', e => {
    let id = e.target.getAttribute('class');
     
    if (e.target.matches(`.${id}`)) {
        id=id.substring(1);
        state.brandedItem = new BrandedItem(id);
        console.log(state.brandedItem)
        searchView.clearSearch();
        state.brandedItem.getBrandedItem();
        console.log(state.brandedItem);
        brandedView.renderItem(state.brandedItem);
    }
})

elements.searchBtn.addEventListener('click', e => {
    e.preventDefault();
    if(state.search) searchView.clearSearch();
    searchController();
});

elements.searchInput.addEventListener('keydown', e => {
    if(e.keyCode === 13){
        searchController();
    }
})
