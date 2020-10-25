import axios from 'axios';

export default class BrandedItem {
    constructor(item_id){
        this.item_id = item_id;
    }

    async getBrandedItem () {

            try{
                const response = await axios({
                    method : 'get',
                    url : `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${this.item_id}`,
                    headers : {
                        'x-app-id' : '9911ba0a',
                        'x-app-key' : '08d98c4685b3b1b5904b102c3259caaa'
                    },
                })
                const item = response.data.foods[0];
                
                this.brandname = item.brand_name;
                this.foodname = item.food_name;
                this.calories = item.nf_calories;
                this.cholesterol = item.nf_cholesterol;
                this.dietary_fiber = item.nf_dietary_fiber;
                this.protein = item.nf_protein;
                this.total_carbs = item.nf_total_carbohydrate;
                this.total_fat = item.nf_total_fat;
                
            }
            catch(error){
                console.log(error);
            }        

    }
    test (){
        console.log(this.brandname);
    }
}