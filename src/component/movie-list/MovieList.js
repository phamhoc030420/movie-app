import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import './movie-list.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbApi, { category } from "../../api/tmdbApi";
import MovieCard from "../movie-card/MovieCard";
const MovieList = props => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};
            switch (props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(props.type, { params });
                    break;
                default:
                    response = await tmdbApi.getTvList(props.type, { params });

            }
            setItems(response.results);
        }
        getList();
    }, [props])
    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <MovieCard item={item} category={props.category} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}
export default MovieList;