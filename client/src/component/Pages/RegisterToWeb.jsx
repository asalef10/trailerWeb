import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Register() {
  const [firstNameT, SetFirstName] = useState('');
  const [passwordT, setPassword] = useState(0);
  const [passwordTwo, setPasswordTwo] = useState(0);
  const [Data, setData] = useState('');

  const history = useHistory();

  const AddNewUser = (e) => {
    e.preventDefault();
    if (passwordT === passwordTwo) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'content-length': '355',
          'content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          user: {
            Email: firstNameT,
            Password: passwordT,
          },
        }),
      };
      fetch('https://trailerweb2021.herokuapp.com/user/newUsers', requestOptions)
        .then((res) => {
          return res.json();
        })
        .then((fetchData) => {
          if (fetchData[0]._id) {
            localStorage.setItem('token', JSON.stringify(fetchData[0]._id));
            history.push('/');
          }
          setData(fetchData);
          console.log(Data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setData('The password not same')
    }
  };
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form style={{ width: '27vw', color: 'white' }}>
          <div className="form-group">
            <label for="">Email address</label>
            <input
              onChange={(e) => {
                SetFirstName(e.target.value);
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
              <p style={{ color: 'red' }}> {Data?Data:""} </p>
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              Password Authentication
            </small>
            <input
              onChange={(e) => {
                setPasswordTwo(e.target.value);
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
          <button onClick={AddNewUser} className="btn btn-primary">
            SignIn
          </button>
        </form>
      </div>
    </>
  );
}
