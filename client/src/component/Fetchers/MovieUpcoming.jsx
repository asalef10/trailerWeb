import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyCard from './materialCard';
import {  useEffect, useState } from 'react';
import styled from 'styled-components';
  
const HeaderTitle = styled.h1`
    text-align: center;
    color: white;
    background-color: #3a4343;
    box-shadow: 1px 1px 11px;
    border-radius: 50px;
    margin-top: 28px;
  `;

export default function MovieUpComing() {
  const Key = 'f210f79a3dd1fbcf59c3d811da7bbe36';
  const UrlLink = ` https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1`;
  const [MovieComing, setMovieComing] = useState([]);
  useEffect(() => {
    fetch(`${UrlLink}${Key}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setMovieComing(res.results);
      });
  },[]);
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1204,
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
      <HeaderTitle>soon... </HeaderTitle>
        
      <Slider {...settings}>
        {MovieComing.map((MovieComing) => {
          return (
            <MyCard
            auto="10px"
            imagUrl={
              MovieComing
              ? MovieComing.poster_path
              : MovieComing.backdrop_path
            }
            title={MovieComing.title}
            idMovie={MovieComing.id}
            />
            );
          })}
      </Slider>
      
    </>
  );
}
