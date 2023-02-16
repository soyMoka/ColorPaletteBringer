// Acá irian las cosas relacionadas a la Api
import axios from "axios";

const APP_KEY = 'Bearer 764|YsL1dUyb2t5oVkUE9BeSA1rBA0PZWBOxG3TFMvRX'





const randomNuber = ()=>  Math.floor(Math.random()*5)

const API_FALSA_123 = "http://localhost:3030/posts"

async function getPaletteSim(req, res) {
    /* axios.request(API_FALSA_123).then(function (response) {
        console.log('antes de salir de la api', response.data);
        return response.data

    }).catch(function (error) {
        return error;
    }); */
    const response = await axios.get(API_FALSA_123) 
    return response.data[randomNuber()]

}   





async function getPalette(req, res) {
	const options = {
   
        method: 'GET',
        url: 'https://zylalabs.com/api/211/color+palette+api/221/get+random+palette',
        headers: {
            'Authorization': APP_KEY,

        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}



export default getPalette

export {getPaletteSim};