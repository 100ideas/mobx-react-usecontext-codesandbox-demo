import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores";

export const FriendsMaker = observer(() => {
  const store = useStore();
  // don't need useCallback for onSubmit, but would be handy if
  // the form fields were controlled
  const onSubmit = React.useCallback(ev => {
    const {
      target: {
        elements: {
          0: { value: name },
          1: { checked: favorite },
          2: { checked: single }
        }
      }
    } = ev;
    ev.preventDefault();
    store.makeFriend(name, favorite, single);
  }, []);

  return (
    <form onSubmit={onSubmit} className="FriendsMaker">
      Total friends: {store.friends.length} <br />
      name: <input type="text" id="name" /> <br />
      favorite: <input type="checkbox" id="favorite" /> <br />
      single: <input type="checkbox" id="single" /> <br />
    </form>
  );
});
