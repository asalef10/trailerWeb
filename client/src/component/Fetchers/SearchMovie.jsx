import styled from 'styled-components';
import { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Card from './Card';
import { MyContext } from '../../UseContext/UseContext';
export default function SearchMovie() {
  const { DataSearch } = useParams();
  const LinkSearch = `https://api.themoviedb.org/3/search/movie?api_key=f210f79a3dd1fbcf59c3d811da7bbe36&query=${DataSearch}`;
  const [valueSearch, setValueSearch] = useState([]);
  const notFoundMovie = `Sorry The Movie "${DataSearch}" Not Found `;
  const { setIsLogIn } = useContext(MyContext);
  const history = useHistory();
  const NotFoundMovieStyled = styled.h1`
  margin-left: 28%;
    color: cornsilk;
  
  `
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push('/LogIn');
    } else {
      setIsLogIn(true);
    }
    fetch(LinkSearch)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setValueSearch(data.results);
      });
  }, [DataSearch, LinkSearch, history, setIsLogIn]);
  const FlexCard = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  return (
    <>
      <FlexCard>
        {valueSearch.length > 0
          ? valueSearch.map((movieItem) => {
              return (
                <>
                  <Card
                    title={movieItem.title}
                    imgUrl={
                      movieItem.backdrop_path != null
                        ? movieItem.backdrop_path
                        : movieItem.poster_path
                    }
                    overview={movieItem.overview}
                    idMovie={movieItem.id}
                  />
                </>
              );
            })
          : <NotFoundMovieStyled>{notFoundMovie}</NotFoundMovieStyled> }
      </FlexCard>
    </>
  );
}
