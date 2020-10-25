import axios from 'axios'

export default class CommonItem {
    constructor (foodname){
        this.foodname = foodname;
    }
    async getCommonItem () {
        try{
            const response = await axios({
                method : 'POST',
                url : 'https://trackapi.nutritionix.com/v2/natural/nutrients',
                headers : {
                    'Content-Type' : 'Application/json',
                    'x-app-id' : '9911ba0a',
                    'x-app-key' : '08d98c4685b3b1b5904b102c3259caaa'
                },
                data : {
                    'query':`${this.foodname}`,
                }
            })
            const item = response.data.foods[0];
            console.log(item);
            this.foodname = item.food_name;
            this.calories = item.nf_calories;
            this.cholesterol = item.nf_cholesterol;
            this.dietary_fiber = item.nf_dietary_fiber;
            this.protein = item.nf_protein;
            this.total_carbs = item.nf_total_carbohydrate;
            this.total_fat = item.nf_total_fat;
            this.photo = item.photo.thumb;

        }
        catch(error){
            console.log(error);
        }

    }

    calculateTdeePercentage(tdee){
        console.log(tdee);
        this.percentages = (this.calories/tdee) * 100;
    }
}
