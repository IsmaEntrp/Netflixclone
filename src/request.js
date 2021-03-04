const Api_Key = "8ccfcbee7104ab76c25e6b2439afc81e"
const requests = {
    fetchTrending : `/trending/all/week?api_key=${Api_Key}&language=fr-FR`,
    fetchNetflixOriginals: `/discover/tv?api_key=${Api_Key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${Api_Key}&language=fr-FR`,
    fetchActionMovies: `/discover/movie?api_key=${Api_Key}&with_genres=80`,
    fetchComedyMovies: `/discover/movie?api_key=${Api_Key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${Api_Key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${Api_Key}&with_genres=10749`,
    fetchDocumentaires: `/discover/movie?api_key=${Api_Key}&with_genres=99`,
}

export default requests;