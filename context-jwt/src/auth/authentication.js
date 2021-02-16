import axios from 'axios';
import baseUrl from '../utils/baseUrl';

const getJWTToken = () => sessionStorage.getItem('token');

const storeJWTToken = token => sessionStorage.setItem('token', token);

const storeUser = user => sessionStorage.setItem('user', user);

const getUser = () => JSON.parse(sessionStorage.getItem('user'));

const login = async (values, setUser, history) => {
  try {
    const { data: { jwt, user } } = await axios.post(
      `${baseUrl}/auth/local`,
      {
        identifier: values.username,
        password: values.password
      }
    );
    storeJWTToken(jwt);
    storeUser(JSON.stringify(user));
    setUser(user);
    history.push('/home');
  } catch (error) {
    throw error;
  };
};

const logout = async history => {
  sessionStorage.clear();
  history.push('/login');
};

export { login, logout, getJWTToken, getUser };