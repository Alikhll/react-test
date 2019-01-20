
import store from '../mobxStore/userStore'

describe('Service test', () => {
  test('mobx sample', () => {
    let a = store.getUsers();

    store.addUser();

    expect(a.length).toBe(3);
  });
});