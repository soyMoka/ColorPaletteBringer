// Acá irian las cosas relacionadas a la Api

import axios from "axios";

const APP_KEY = 'Bearer 764|YsL1dUyb2t5oVkUE9BeSA1rBA0PZWBOxG3TFMvRX'
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