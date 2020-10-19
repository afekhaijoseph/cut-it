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
            this.foodname = response.data.foods[0].food_name;
            this.calories = response.data.foods[0].nf_calories;
            this.cholesterol = response.data.foods[0].nf_cholesterol;
            this.dietary_fiber = response.data.foods[0].nf_dietary_fiber;
            this.protein = response.data.foods[0].nf_protein;
            this.total_carbs = response.data.foods[0].nf_total_carbohydrate;
            this.total_fat = response.data.foods[0].nf_total_fat;

        }
        catch(error){
            console.log(error);
        }

    }
}
