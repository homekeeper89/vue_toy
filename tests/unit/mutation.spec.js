import mutations from '@/store/mutations.js';

describe('SET_POST', () => {
  it('상태에 POST를 추가한다', () => {
    const post = { id: 1, title: 'Post' };
    const state = {
      postIds: [],
      posts: {},
    };

    mutations.SET_POST(state, { post });
    expect(state).toEqual({
      postIds: [1],
      posts: { '1': post },
    });
  });
});
