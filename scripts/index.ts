
let request = require('request');
let apikey: String = '********';
let cidade: String = 'Sabara';
let url:    String = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apikey}&units=metric`;

let teste :String = "Tesste";
request(url,function (error:Error, response:Response,body:Body) {
    if (error) {
        console.log('error',error);
    }else
    {
        console.log('body', body);
    }
})    
 