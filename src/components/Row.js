import React, { useState, useEffect } from 'react'
import axios from "../axios"
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';



const img_url = "https://image.tmdb.org/t/p/original/";

function Row({title , fetchUrl,isLargerRow}) {
 
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] =useState("");
 
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results)
            return request;
        }   
        fetchData()   
    },[fetchUrl]);
    // console.log(movies);

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    };


    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            // movieTrailer(null, { tmdbId: movie.id })
            // .then(url =>{
            //     const urlParams = new URLSearchParams( new URL(url).search);
            //     setTrailerUrl(urlParams.get("v"))
            //     // setTrailerUrl("xn77xK5WeRI")
            // })
            // .catch((error)=> console.log(error));
             movieTrailer(null,{id:true,tmdbId:movie.id})
             .then(resp => setTrailerUrl(resp))
            
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
            
            {movies.map(movie =>(<img
            onClick={()=> handleClick(movie)} 
            key={movie.id}
            className={`row_poster ${isLargerRow && "row_posterLarge"}`} src={`${img_url}${isLargerRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
            
            ))}
            
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;


//resume at 1:04:05 