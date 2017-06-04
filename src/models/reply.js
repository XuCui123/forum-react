import * as API from '../api/reply';

const SIZE = 50;

export default {
  state: {
    list: [],
    count: 0,
    offset: 0,
    limit: SIZE
  },
  reducers: {
    listDone(state, data) {
      return { ...state, ...data };
    },
    itemDone(state, item) {
      const list = [item, ...state.list];
      const count = state.count + 1;
      return { ...state, list, count };
    }
  },
  actions: {
    async list({ commit }, { topicId, offset }) {
      const { data, users } = await API.list(topicId, { offset, limit: SIZE });
      const { rows, count } = data;
      const userMap = users.reduce((prev, cur) => ({ ...prev, [cur.id]: cur }), {});
      const list = rows.map(item => {
        return { ...item, user: userMap[item.userId] };
      });
      commit('listDone', { list, count, offset: offset + SIZE });
    },
    async add({ commit }, payload) {
      const data = await API.add(payload);
      commit('itemDone', data);
      return data.id;
    }
  }
};