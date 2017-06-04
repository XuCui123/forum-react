import axios from 'axios';

export async function list(topicId, { limit, offset }) {
  const res = await axios.get(`/topics/${topicId}/replies?limit=${limit}&offset=${offset}`);
  return res.data;
}

export async function add({ topicId, content }) {
  const res = await axios.post(`/topics/${topicId}/replies`, { content });
  return res.data;
}
