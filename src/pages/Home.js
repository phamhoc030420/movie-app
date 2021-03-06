import React from "react";
import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";
import { category, movieType, tvType } from "../api/tmdbApi";
const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3 mx-10" >
                    <div className="section_header mb-2">
                        <h2>Trending Movies</h2>
                        <OutlineButton className='small'>View more</OutlineButton>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>

                <div className="section mb-3 mx-10" >
                    <div className="section_header mb-2">
                        <h2>Top Rated Movies</h2>
                        <OutlineButton className='small'>View more</OutlineButton>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </div>

                <div className="section mb-3 mx-10" >
                    <div className="section_header mb-2">
                        <h2>Trending TV</h2>
                        <OutlineButton className='small'>View more</OutlineButton>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </div>

                <div className="section mb-3 mx-10" >
                    <div className="section_header mb-2">
                        <h2>Top Rated</h2>
                        <OutlineButton className='small'>View more</OutlineButton>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>
            </div>

        </>
    )
}
export default Home;