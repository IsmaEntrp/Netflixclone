import axios from "../axios"
import { useEffect, useState } from "react"
import requests from '../request'
import './Movie.css'

function Movie()
{
    const [movieb, setMovie] = useState([])
    useEffect(()=>
    {
        async function fetchDATA()
        {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random ()* (request.data.results.length-1))
                ]
            )
            return request
        }
        fetchDATA()

    },[])
    function truncat(stringa, n)
    {
        return stringa.length > n ? stringa.substr( 0 , n-1) + '...' : stringa;
    }
        
    const imgurl = 'https://image.tmdb.org/t/p/w1280/'
    const styleAffiche= {
        backgroundImage : `url(${imgurl}${movieb.backdrop_path})`,
        backgroundSize : 'cover',
        backgroudPosition : 'center center',
        height : '548px',
        color:'white',
    }
    
    return(
        <header className="afficheN" style={styleAffiche}>
            <div className="containerAffiche" >
                <h1> {movieb?.title  || movieb?.name || movieb?.original_name }</h1>
                <div className="banner-btn-container">
                    <button className="banner-btn">Play</button>
                    <button className="banner-btn">More info</button>
                </div>
                <h3 className="banner-description">{truncat(""+movieb.overview, 180)}</h3>
            </div>       
            <div className="banner-bottom"></div>
        </header>
    )
}
export default Movie