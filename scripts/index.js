let request = require('request');
let apikey = '********';
let cidade = 'Sabara';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apikey}&units=metric`;
let teste = "Tesste";
request(url, function (error, response, body) {
    if (error) {
        console.log('error', error);
    }
    else {
        console.log('body', body);
    }
});
//# sourceMappingURL=index.js.map