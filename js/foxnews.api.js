/**
 * A API FoxNews Foi criada por Adryan Alencar
 * utilizando Next.JS e mantida na Vercel.
 * 
 * Author: Adryan Alencar.
 * 
 */

const api_url = "https://news.sevenfox.com.br/api";


const get_top_news = async() => {
    var news_request = await fetch(`${api_url}/news`);
    var news_content = await news_request.json();

    news_content.articles.map((article, index) => {

        var article_element = document.createElement("article");
        article_element.className = "container container-news"
        article_element.innerHTML = `

            <div class="article-header row">
                <h3>${article.title}</h3>
                <img src="${article.urlToImage}">
            </div>
            <div class="article-content">
                <p>${article.description}</p>
            </div>
            <div class="article-footer row">
                <button class="btn btn-primary">
                    <a href="${article.url}" target="_blank">
                        Continuar lendo
                    </a>
                </button>
                <div>
                    <p>Avalie está noticia:</p>
                    <ul class="stars-rating" id = "starrating">
                        <li class="star-rating-item">
                            <img src="./img/Starempty.png" alt="Estrela" class="active-star">
                        </li>  
                        <li class="star-rating-item">
                            <img src="./img/Starempty.png" alt="Estrela" class="active-star">
                        </li>  
                        <li class="star-rating-item">
                            <img src="./img/Starempty.png" alt="Estrela" class="active-star">
                        </li>
                        <li class="star-rating-item">
                            <img src="./img/Starempty.png" alt="Estrela" class="active-star">
                        </li>
                        <li class="star-rating-item">
                            <img src="./img/Starempty.png" alt="Estrela" class="active-star">
                        </li>                            
                    </ul>
                </div>
            </div>
        `;

        document.getElementById("main-articles").appendChild(article_element)

        var star = document.getElementsByClassName('star-rating-item')
        var i = 0;

        for (i = 0; i < star.length; i++) {
            star[i].addEventListener('click', function(e) {

                var stars_rating = e.target.parentElement.parentElement.getElementsByTagName('li')
                var index = Array.from(stars_rating).indexOf(e.target.parentElement)
                for (var j = 0; j <= index; j++) {
                    stars_rating[j].getElementsByTagName('img')[0].src = "./img/Star.png"
                }

                for (var j = index + 1; j < stars_rating.length; j++) {
                    stars_rating[j].getElementsByTagName('img')[0].src = "./img/Starempty.png"
                }
            })
        }

    });
}

const getWeatherData = async(lon, lat) => {
    var weather_request = await fetch(`${api_url}/weather?lat=${lat}&lon=${lon}`);
    var weather_content = await weather_request.json();

    return weather_content;
}