import { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MyCard from '../Fetchers/materialCard';
import { MyContext } from '../../UseContext//UseContext';
export default function MovieDetails() {
  const { id } = useParams();
  const [ShowDetailsM, setShowDetailsM] = useState([]);
  const LinkMovieDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=f210f79a3dd1fbcf59c3d811da7bbe36&language=en-US`;
  const ApiKey =
    'f210f79a3dd1fbcf59c3d811da7bbe36&language=en-US&&append_to_response=videos,images';
  let srcLink = `https://www.youtube.com/embed/${ShowDetailsM.videos?.results[0]?.key}`;
  const { setIsLogIn } = useContext(MyContext);
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push('/LogIn');
    } else {
      setIsLogIn(true);
    }
    fetch(`${LinkMovieDetails}${ApiKey}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShowDetailsM(data);
      },[]);
  });
  return (
    <>
      <div id="moviesDetailsResponse">
        <MyCard
          imagUrl={
            ShowDetailsM ? ShowDetailsM.backdrop_path : ShowDetailsM.poster_path
          }
          title={ShowDetailsM.title}
          overview={ShowDetailsM.overview}
          sizeWidth={800}
        />
        <iframe
          id="videoTrailer"
          src={srcLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
