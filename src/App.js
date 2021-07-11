import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { userAction, logout } from './actions/userAction'

const App = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState({ email: '', password: '', })
  const user = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userAction(data));
  }
  const logoutUser = () => {
    dispatch(logout());
  }

  return (
    <div>
      {!user.isUserLoggedIn && <form onSubmit={submitHandler}>
        <input
          type="email"
          value={data.email}
          onChange={(e) => { setData((prevdata) => { return { ...prevdata, email: e.target.value } }) }}
        />
        <input
          type="password"
          value={data.password}
          onChange={(e) => { setData((prevdata) => { return { ...prevdata, password: e.target.value } }) }}
        />
        <button type="submit">Submit</button>
      </form>}
      {user.isUserLoggedIn && <button onClick={logoutUser}>Log out</button>}
    </div>
  )
}

export default App
