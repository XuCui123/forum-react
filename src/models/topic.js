import * as API from '../api/topic';

const SIZE = 50;

export default {
  state: {
    item: {},
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
      return { ...state, item };
    }
  },
  actions: {
    async list({ commit }, offset) {
      const { data, users } = await API.list({ offset, limit: SIZE });
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
    },
    async item({ commit }, id) {
      const data = await API.item(id);
      commit('itemDone', data);
    }
  }
};