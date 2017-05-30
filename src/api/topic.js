import axios from 'axios';

export async function list({ limit, offset }) {
  const res = await axios.get(`/topics?limit=${limit}&offset=${offset}`);
  return res.data;
}

export async function add(payload) {
  const res = await axios.post('/topics', payload);
  return res.data;
}

export async function item(id) {
  const res = await axios.get(`/topics/${id}`);
  return res.data;
}
