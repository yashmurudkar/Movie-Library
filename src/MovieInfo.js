import React, { useEffect, useState } from 'react'
import './MovieInfo.css'
import CloseIcon from '@mui/icons-material/Close';

function MovieInfo({ selectedMovie, setSelectedMovie }) {
    const [movieInfoData, setMovieInfoData] = useState([])

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=9d53487b`)
            .then(res => res.json())
            .then(data => setMovieInfoData(data))
    }, [selectedMovie])
    console.log(movieInfoData)

    return (
        <div className='movieinfo__container'>
            <img src={movieInfoData.Poster} alt="" />
            <div className='movieinfo__info'>
                <div className="movieinfo__title">{ movieInfoData.Title }</div>
                <div className="movie__description">
                    <div className="description__info">IMDB Rating: <span>{movieInfoData.imdbRating}</span></div>
                    <div className="description__info">Year: <span>{movieInfoData.Year}</span></div>
                    <div className="description__info">Language: <span>{movieInfoData.Language}</span></div>
                    <div className="description__info">Rated: <span>{movieInfoData.Rated}</span></div>
                    <div className="description__info">Released: <span>{movieInfoData.Released}</span></div>
                    <div className="description__info">Runtime: <span>{movieInfoData.Runtime}</span></div>
                    <div className="description__info">Genre: <span>{movieInfoData.Genre}</span></div>
                    <div className="description__info">Director: <span>{movieInfoData.Director}</span></div>
                    <div className="description__info">Actors: <span>{movieInfoData.Actors}</span></div>
                    <div className="description__info">Plot: <span>{movieInfoData.Plot}</span></div>
                </div>
            </div>
            <CloseIcon onClick={()=>{setSelectedMovie("")}} style={
                    {position: 'relative',right:'40px', top: '20px', color: 'white', 
                    background:'black', borderRadius: '10px', cursor: 'pointer'}} />
        </div>
    )
}

export default MovieInfo
