const KEY = '4452ebc3d5ecb10b67ba4341d72ebda8';
var cites = ['Lviv', 'Kyiv', 'Odessa', 'Kharkiv', 'Zhytomyr'];
var pos = 0;

function getWeather() {

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cites[pos]},UA&appid=${KEY}`,
        success: function(data){
            renderWeather(data);
            // console.log(data);
        }
    });
}

function renderWeather(data) {

    $('#info').text(data.weather[0].description);
    $('#temperature').text(Math.floor(data.main.temp - 273));
}

function changeCity(val) {
    console.log(pos);

    pos += val;
    if(pos >= cites.length) pos = 0;
    if(pos < 0) pos = cites.length - 1;

    console.log(pos);


    $('#title').text(cites[pos]);

    getWeather();
}
