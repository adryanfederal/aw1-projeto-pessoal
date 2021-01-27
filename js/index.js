// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navbar.classList.remove('desactive')
        navbar.classList.add("active")
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add('desactive')
        navbar.classList.remove("active")
    }
}

function setWeatherData(geolocation) {
    console.log(geolocation);
    getWeatherData(geolocation.coords.longitude, geolocation.coords.latitude).then((value) => {

        document.getElementById('temp').innerHTML += `${(Number(value.wheather.main.temp) - 273.15).toFixed(0)}C°`
        document.getElementById('humidity').innerHTML += `${Number(value.wheather.main.humidity).toFixed(0)}%`
        document.getElementById('wind').innerHTML += `${Number(value.wheather.wind.speed)}m/s`
    })
}

function getLocation() {
    if (navigator.geolocation) {
        if (navigator.geolocation.getCurrentPosition(setWeatherData)) {
            alert("Por favor ative a geolocalização para receber o serviço completo!");
        }
    } else {
        alert("Por favor ative a geolocalização para receber o serviço completo!");
    }
}



window.onload = () => {

    get_top_news();
    getLocation();

}