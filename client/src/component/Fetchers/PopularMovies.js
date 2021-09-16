import { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
    const HeaderTitle = styled.h1`
      text-align: center;
      color: white;
      background-color: #3a4343;
          box-shadow: 1px 1px 11px;
      border-radius: 70%;
    `;
export default function PopularMovies() {
  const [ArrayPopularMovie, setArrayPopularMovie] = useState([]);
  useEffect(() => {
    const Key = 'f210f79a3dd1fbcf59c3d811da7bbe36';
    const UrlLink = `https://api.themoviedb.org/3/movie/popular?api_key=${Key}
    `;
    fetch(UrlLink)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setArrayPopularMovie(res.results);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows:true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }]
  };
  return (
    <>
      
      <HeaderTitle>Popular Movies</HeaderTitle>
      <Suspense fallback={<div>Loading....</div>}>
        
        <Slider {...settings}>
        {ArrayPopularMovie.map((movieItem) => {
          return (
            <Card
            imgUrl={
              movieItem.backdrop_path != null
              ? movieItem.backdrop_path
              : movieItem.poster_path
            }
            title={movieItem.title}
            overview={movieItem.overview}
            idMovie={movieItem.id}
            />
            );
          })}
          </Slider>
          </Suspense>
    </>
  );
}
