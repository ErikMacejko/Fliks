const APIKEY = "bfd53bff5768a6e9436bd728deea42b7";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/movie/top_rated?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/movie/top_rated?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies: `/movie/top_rated?api_key=${APIKEY}&with_genres=27`,
    fetchDocumentaires: `/movie/top_rated?api_key=${APIKEY}&with_genres=99`
}

export default requests;