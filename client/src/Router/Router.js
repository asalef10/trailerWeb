/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchMovie from '../component/Fetchers/SearchMovie';
const HomePage = React.lazy(()=>import('../component/Pages/HomePage'))
const MovieDetails = React.lazy(()=>import('../component/Fetchers/SearchMovie'))
const Register = React.lazy(()=>import('../component/Pages/RegisterToWeb'))
const LoginToWeb = React.lazy(()=>import('../component/Pages/LogInToWeb'))
export default function AppRouter() {
  return (
    <>
      <React.Suspense fallback={<p>Loading</p>}>
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
      </React.Suspense>
    </>
  );
}
