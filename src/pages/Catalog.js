import React from "react";
import { useParams } from "react-router";
import PageHeader from "../components/page-header/PageHeader";
import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";
const Catalog = () => {
    const { category } = useParams();
    console.log(category);
    return (
        <>
            <PageHeader>
                {category === cate.movie ? 'Movie' : 'TV Series'}
            </PageHeader>
            <div className="section mb-3">
                <MovieGrid category={category} />
            </div>
        </>
    )
}
export default Catalog;