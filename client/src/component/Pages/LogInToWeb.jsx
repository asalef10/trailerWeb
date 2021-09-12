import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MyContext } from '../../UseContext/UseContext';
export default function LoginToWeb() {
  const [EmailUser, setEmailUser] = useState('');
  const [PasswordUser, setPasswordUser] = useState('');
  const [data, setData] = useState('');
  const history = useHistory();
  const { setIsLogIn } = useContext(MyContext);
  function LogInFunction(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
        'content-length': '355',
        'content-type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        user: {
          Email: EmailUser,
          Password: PasswordUser,
        },
      }),
    };
    fetch('https://trailerweb2021.herokuapp.com/user/Login', requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        if (data.id) {
          localStorage.setItem('token', JSON.stringify(data.id));
          setIsLogIn(true);
          history.push('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form style={{ width: '27vw', color: 'white' }}>
          <div className="form-group">
            <label for="">Email address</label>
            <input
              onChange={(e) => {
                setEmailUser(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email address"
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
              <p style={{ color: 'red' }}> {data.msg} </p>
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              onChange={(e) => {
                setPasswordUser(e.target.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" onClick={LogInFunction} class="btn btn-primary">
            LogIn
          </button>
        </form>
      </div>
    </>
  );
}
