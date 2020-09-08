export default {
  poodles: (state) => {
    return state.dogs.filter((dog) => dog.breed === 'poodle');
  },
  poodlesByAge: (state, getters) => (age) => {
    // 두번째 인자로 getters를 받아서 getters.poodles 를 사용 할 수 있다.
    return getters.poodles.filter((dog) => dog.age === age);
  },
};
