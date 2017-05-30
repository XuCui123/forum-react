import axios from 'axios';

export async function login(payload) {
  const res = await axios.post('/login', payload);
  return res.data;
}

export async function register(payload) {
  const res = await axios.post('/register', payload);
  return res.data;
}
