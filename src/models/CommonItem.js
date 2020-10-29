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
            this.serving_measures = item.alt_measures;
            this.serving_weight = item.serving_weight_grams;
            this.serving_unit = item.serving_unit;
        }
        catch(error){
            console.log(error);
        }

    }

    calculateTdeePercentage(tdee){
        this.percentage = Math.round((this.calories/tdee) * 100);
    }
    parseCalorie(unit) {
        let newCalorie;
        this.serving_measures.forEach( serving => {
            if (unit === this.serving_unit){
                newCalorie = this.calories;
            }
            else if (unit === serving.measure){

               newCalorie = Math.round((serving.serving_weight / this.serving_weight) * this.calories);
              
            }
        })
        return newCalorie;
      
    }
    updatePercentage(calorie, tdee){
        return Math.round((calorie/tdee) * 100);
    }
}
