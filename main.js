const baseURL = 'https://api.tvmaze.com/';


const endpoints = {
    shows: 'shows'
};

function getAllShows() {
    fetch(`${baseURL}${endpoints.shows}`, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        const shows = document.querySelector('.shows');
        data.forEach(show => {
            const show_block = `
                <div class="show_block">
                    <div class="image">
                        <img src="${show.image.medium}" alt="">
                    </div>
                        <h3>${show.name}</h3>
                        <p>Язык: ${show.language}</p>        
                        <p>Жанры: ${show.genres}</p>
                        <p>Рейтинг: ${show.rating.average}</p>
                        <p>Длительность: ${show.runtime}</p>
                        <button>
                        <a href="${show.officialSite}" target="_blank">More
                        
                        </a>
                        </button>
                </div>
        `;
            shows.innerHTML += show_block;
        })
    });
}
getAllShows();