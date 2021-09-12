/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from '../component/Pages/HomePage';
import MovieDetails from '../component/Pages/MovieDetails';
import SearchMovie from '../component/Fetchers/SearchMovie';
import Register from '../component/Pages/RegisterToWeb';
import LoginToWeb from '../component/Pages/LogInToWeb';
export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/LogIn"><LoginToWeb/></Route>
        <Route exact path="/Register"><Register/></Route>
        <Route path="/MovieDetails/:id">
          <MovieDetails />
        </Route>
        <Route path="/SearchMovie/:DataSearch">
          <SearchMovie />
        </Route>

      </Switch>
    </>
  );
}
