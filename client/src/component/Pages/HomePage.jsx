import React, { Suspense } from 'react';
import PopularMovies from '../Fetchers/PopularMovies';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useContext, useLayoutEffect } from 'react';
import { MyContext } from '../../UseContext/UseContext';
const MovieTopRated = React.lazy(() => import('../Fetchers/movieTopRated'));
const MovieUpComing = React.lazy(() => import('./../Fetchers/MovieUpcoming'));
export default function HomePage() {
  const { setIsLogIn } = useContext(MyContext);
  const history = useHistory();
  useLayoutEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push('/LogIn');
    } else {
      setIsLogIn(true);
    }
  }, []);
  const DisplayNoneTittleVideo = styled.div`
    width: 97vw;
    height: 8vh;
    background-color: black;
  `;

  const WrapsVideo = styled.div`
    width: 97vw;
    height: 45vh;
    background-color: black;
    opacity: 0.9;
    @media (max-width: 820px) {
      display: none;
    }
  `;

  const VideoHome = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 820px) {
      display: none;
    }
  `;
  const Container = styled.div`
    margin-top: 100px;
    @media (max-width: 820px) {
      margin-top: 108px;
    }
  `;
  const MoviesComponent = styled.div`
    width: 96vw;
    @media (max-width: 820px) {
      width: 92vw;
    }
  `;
  return (
    <>
      <WrapsVideo>
        <DisplayNoneTittleVideo>
          <VideoHome>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/QP1PAEaszVM?autoplay=1&mute=1&&controls=0&controls=10&amp;start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             */}
            <iframe
              style={{ zIndex: '-1' }}
              width="990"
              height="415"
              src="https://www.youtube.com/embed/QP1PAEaszVM?autoplay=1&mute=1&&controls=0&controls=10&amp;start=10"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoHome>
        </DisplayNoneTittleVideo>
      </WrapsVideo>
      <Container>
        <MoviesComponent>
          <Suspense fallback={<p>Loading...</p>}>
            <MovieUpComing />
            <PopularMovies />
            <MovieTopRated />
          </Suspense>
        </MoviesComponent>
      </Container>
    </>
  );
}
