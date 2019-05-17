import { observable, toJS } from "mobx";

// auto deep-convert to map of observable/computed/actions
export const friendStore = observable({
  // Map makes it simpler to find & delete entries
  _friends: new Map(),
  // utility to get @computed read-only array of friends
  get friends() {
    return [...this._friends.values()];
  },
  makeFriend(name, isFavorite = false, isSingle = false) {
    const oldFriend = this._friends.get(name);
    if (oldFriend) {
      oldFriend.isFavorite = isFavorite;
      oldFriend.isSingle = isSingle;
      console.log("old Friend", toJS(oldFriend));
    } else {
      this._friends.set(name, { name, isFavorite, isSingle });
      console.log("adding Friend", toJS(this._friends.get(name)));
    }
  },
  get singleFriends() {
    return this.friends.filter(friend => friend.isSingle);
  },
  deleteFriend(name) {
    console.log("trying to delete friend <" + name + ">");
    this._friends.delete(name);
  }
});

// Original example, de-typescripted
// NOTE never made observable... may not work
// https://mobx-react.netlify.com/recipes-inject#welcome-to-react-context
export function createStore() {
  // storing variable in closure means you can access it in methods
  // otherwise you would have to use `this`
  const store = {
    friends: [],
    makeFriend(name, isFavorite = false, isSingle = false) {
      const oldFriend = store.friends.find(friend => friend.name === name);
      if (oldFriend) {
        oldFriend.isFavorite = isFavorite;
        oldFriend.isSingle = isSingle;
      } else {
        store.friends.push({ name, isFavorite, isSingle });
      }
    },
    get singleFriends() {
      return store.friends.filter(friend => friend.isSingle);
    }
  };
  return store;
}
