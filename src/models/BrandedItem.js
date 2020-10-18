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
            console.log(response);
        }
        catch(error){
            console.log('An error occured.');
        }
    }
}