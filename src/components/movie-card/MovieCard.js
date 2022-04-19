import React from "react";
import './movie-card.scss'
import Button from "../button/Button";
import apiConfig from "../../api/apiConfig";
const MovieCard = props => {
    const item = props.item;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </>
    );
}
export default MovieCard;