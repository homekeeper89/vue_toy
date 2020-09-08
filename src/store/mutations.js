export default {
  SET_POST(state, { post }) {
    state.postIds.push(post.id);
    state.posts = { ...state.posts, [post.id]: post }; // Vue의 반응성 시스템이 작동하는 방법 때문에, 간단하게 post[post.id] = post를 작성해서 post를 추가할 수는 없다
  },
};
