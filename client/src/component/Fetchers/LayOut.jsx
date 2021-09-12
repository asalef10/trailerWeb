/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import '../../App.css';
import { MyContext } from '../../UseContext/UseContext';
export default function LayOut({ children }) {
  const [ValueSearch, SetValueSearch] = useState('');
  const { isLogIn } = useContext(MyContext);
  function SendValueToSearch(e) {
    SetValueSearch(e.target.value);
  }
  return (
    <>
      <header id="LayOutResponsive">
        <img
          id="logoLayOut"
          src="https://ak.picdn.net/shutterstock/videos/10488935/thumb/6.jpg"
          alt="netflix logo"
          className="logo"
        />
        <nav>
          <ul>
            <li>
              {isLogIn && (
                <Link to="/" className="nav-link">
              <button> Home <span className="sr-only"> </span> </button>   
                </Link>
              )}
            </li>
            {!isLogIn && (
              <li>
                <Link to="/login">login</Link>
              </li>
            )}
            <li>{!isLogIn && <Link to="/Register">Register</Link>}</li>
          </ul>
        </nav>
        {isLogIn && (
          <nav>
            <Link to={`/SearchMovie/${ValueSearch.toLowerCase()}`}>
              <button class="btn btn-outline-success my-2 my-sm-0">
                Search
              </button>
            </Link>

            <input
              style={{
                width:'114px',
                height: '30px',
                borderStyle: 'inset',
                borderRadius: '36px',
              }}
              placeholder="Search Movie"
              onChange={SendValueToSearch}
            ></input>
          </nav>
        )}
      </header>
      {children}
    </>
  );
}
