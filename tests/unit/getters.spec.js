import getters from '../../src/store/getters.js';

const dogs = [
  { name: 'lucky', breed: 'poodle', age: 1 },
  { name: 'pochy', breed: 'dalmatian', age: 2 },
  { name: 'blackie', breed: 'poodle', age: 4 },
];

const state = { dogs };

describe('poodles', () => {
  it('poodles를 반환한다', () => {
    const actual = getters.poodles(state);

    expect(actual).toEqual([dogs[0], dogs[2]]);
  });

  it('age에 따라 poodles를 반환한다', () => {
    const poodles = [dogs[0], dogs[2]];
    // getter를 넘기는게 아니라 해당 getter의 return 값을 넘긴다. 오로지 poodlesByAge에 집중하기 위해서
    const actual = getters.poodlesByAge(state, { poodles })(1);

    expect(actual).toEqual([dogs[0]]);
  });
});
