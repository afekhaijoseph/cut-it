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

            const foodDetails = response.data.foods[0];

            this.brandname = foodDetails.brand_name;
            this.foodname = foodDetails.food_name;
            this.calories = foodDetails.nf_calories;
            this.cholesterol = foodDetails.nf_cholesterol;
            this.dietary_fiber = foodDetails.nf_dietary_fiber;
            this.protein = foodDetails.nf_protein;
            this.total_carbs = foodDetails.nf_total_carbohydrate;
            this.total_fat = foodDetails.nf_total_fat;

        }
        catch(error){
            console.log(error);
        }
    }
}