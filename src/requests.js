const APIKEY = "_______";

const requests = [
    {
        title:"Netflix Orignals",
        fetchRelevant : `/discover/tv?api_key=${APIKEY}&with_networks=213`
    },
    {
        title:"Trending",
        fetchRelevant : `/trending/all/week?api_key=${APIKEY}`
    },
    {
        title:"Top Rated",
        fetchRelevant : `/movie/top_rated?api_key=${APIKEY}&language=en-US`
    },
    {
        title:"Action Movies",
        fetchRelevant : `/discover/movie?api_key=${APIKEY}&with_genres=28`
    },
    {
        title:"Crime Movies",
        fetchRelevant : `/discover/movie?api_key=${APIKEY}&with_genres=80`
    },
    {
        title:"Comedies",
        fetchRelevant:`/discover/movie?api_key=${APIKEY}&with_genres=35` 
    },
    {
        title:"Popular On TV",
        fetchRelevant:`/tv/popular?api_key=${APIKEY}&language=en-US`
    }
]



export default requests;
