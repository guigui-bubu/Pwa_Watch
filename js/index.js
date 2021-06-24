
const form = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const result = document.getElementById('result');

let search="";
let movies = [];
const fetchMovies = async () => {
    
    movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a28d26f723ce0726d2d1ca98c6fb6b6a&query=${search}`).then((res) => res.json());
    console.log(movies)
}

// Affichage des films
const moviesDisplay = async () => {
    await fetchMovies();

    movies.results.length = 12; // pour limiter le resultat à 12 films

    result.innerHTML = movies.results.map((toto)=>
        `
            <li>
                <h2>${toto.original_title}</h2>
                <div class="card-content">
                    <img src="https://image.tmdb.org/t/p/w500${toto.poster_path}"></img>
                    <div class="infos">
                        <p>${toto.overview}</p>
                        <p>Popularité : ${toto.popularity} ⭐</p>
                    </div>
                </div>
            </li>
        `
    ).join('')
}



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    search = searchInput.value; // on passe la valeur à search
    moviesDisplay();
})
