import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }
    async getResults(){
        try{
            const response = await axios({
                method:'get',
                url:`https://trackapi.nutritionix.com/v2/search/instant?query=${this.query}`,
                headers: {
                    'x-app-id' : '9911ba0a',
                    'x-app-key' : '08d98c4685b3b1b5904b102c3259caaa'
                }
            }
            )
            this.commonFood = response.data.common;
            this.brandedFood = response.data.branded;

        }
        catch(error){
            alert(error);
        }
    }
}