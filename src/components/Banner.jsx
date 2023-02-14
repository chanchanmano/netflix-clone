import React,{useState,useEffect} from 'react'
import axios from '../axios'
import requests from '../requests';
import "./Banner.css"
function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get(requests[0].fetchRelevant);
            setMovie(
                req.data.results[
                    Math.floor(Math.random() * req.data.results.length -1)
                ]
            );
            return req;
        }
        fetchData();
        
    }, []);

    // console.log(movie);


    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                {/* title */}
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.orignal_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_desc">{movie.overview}</h1>
            </div>

            <div className="banner_fadebottom"></div>

            {/* Background img */}
            
            {/* div -> 2 buttons */}
            {/* desc */}
        </header>
    )
}

export default Banner;
