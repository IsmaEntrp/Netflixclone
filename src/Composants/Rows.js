import { useEffect, useState } from "react"
import './Rows.css'
import requests from '../request'
import  axios from '../axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
function Rows(props)
{
    const [movies,setMovies] = useState([])
    const [trailerUrl,setTrailerUrl] = useState('')
    const [youtubeUrl,setyoutubeUrl] = useState('')

    useEffect(()=>
    {
        async function fetchData()
        {
            const request = await axios.get(props.fetchURL);
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[props.fetchURL])
    useEffect(()=>
    {
       // const rowscroll = document.getElementsByClassName("scroll-row")
       /*const rowscroll = document.getElementById(movies[0].id)
       rowscroll.addEventListener('click', ()=>{
        rowscroll.scroll(500,0)
        console.log('hello scroll');
       })*/
        /*Array.prototype.forEach.call(rowscroll,(element)=>{
            element.addEventListener('click', ()=>{
                element.scroll(500,0)
                console.log('hello scroll');
            })
        })*/

    },[])

       
    console.log(movies)
    const imgurl = 'https://image.tmdb.org/t/p/w500/'

    const opts = {
        width:'100%',
        height:'390',
        playerVars:
        {
            autoplay:1,
        },

    }
    function HandleClick(movie) 
    {
        if(trailerUrl)
        {
            setTrailerUrl('')
        }
        else{
            
            console.log(movie?.name)
            movieTrailer(movie?.name || movie?.name || movie?.original_name || "")
            .then((url)=>
            {
                const urlparam = new URLSearchParams( new URL(url).search)
                setTrailerUrl(urlparam.get("v"))
                setyoutubeUrl(url)
            }

            ).catch((error)=>{console.log("error")})
        }

    }

    return(
        <div className="row">
            <h3>{props.title}</h3>
            <div className="container">
                {movies.map((index)=>{
                    return props.firstligne ?
                     <img  
                        key={index.id}
                        onClick={()=>HandleClick(index)} 
                        className= 'Rowposter' 
                        src ={imgurl+index.poster_path} 
                        alt={index.poster_path}>
                    </img>
                    :<img  
                        key={index.id}
                        onClick={()=>HandleClick(index)} 
                        className= 'Rowpostersmall' 
                        src ={imgurl+index.poster_path} 
                        alt={index.poster_path}>    
                    </img>
                })}
            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
        </div>
    )
}

export default Rows