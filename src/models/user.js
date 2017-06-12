import * as API from '../api/user';


export default {
  state: {
    item: {},
    topics: []
  },
  reducers: {
    itemDone(state, item) {
      return { ...state, item };
    },
    topicsDone(state, topics) {
      return  { ...state, topics };
    }
  },
  actions: {
    async item({ commit }, id) {
      const data = await API.item(id);
      commit('itemDone', data);
    },
    async topics({ commit }, userId) {
      const { data, users } = await API.topics(userId);
      const userMap = users.reduce((prev, cur) => ({ ...prev, [cur.id]: cur }), {});
      const topics = data.map(item => {
        return { ...item, user: userMap[item.userId] };
      });
      commit('topicsDone', topics);
    }
  }
};