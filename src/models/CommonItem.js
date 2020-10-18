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
            console.log(response);
        }
        catch(error){
            console.log(error);
        }

    }
}
