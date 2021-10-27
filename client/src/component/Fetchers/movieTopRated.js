import {  useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import styled from 'styled-components';
export default function MovieTopRated() {
  const [MovieTopRated, SetTopRated] = useState([]);
  useEffect(() => {
    const Key = 'f210f79a3dd1fbcf59c3d811da7bbe36';
    const UrlLink = `https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}`;
    fetch(UrlLink)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        SetTopRated(res.results);
      });
  }, []);

  const HeaderTitle = styled.h1`
    text-align: center;
    color: white;
    background-color: #3a4343;
    box-shadow: 1px 1px 11px;
    border-radius: 70%;
    margin-top: 28px;
  `;
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
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
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <HeaderTitle>top Rated</HeaderTitle>
      <div style={{ padding: '10px 0' }}>
          <Slider {...settings}>
            {MovieTopRated.map((movieItem) => {
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
      </div>
    </>
  );
}
