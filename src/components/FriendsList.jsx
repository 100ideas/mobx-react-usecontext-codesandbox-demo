import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores";

export const FriendsList = observer(() => {
  const store = useStore();

  const renderFriend = (props, idx) => (
    <div key={props.name + "-" + idx} className="json">
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <button
        onClick={ev => {
          ev.preventDefault();
          store.deleteFriend(props.name);
        }}
      >
        x {props.name}
      </button>
    </div>
  );

  return (
    <section className="FriendsList">
      All Friends:
      {store.friends.length > 0 ? (
        store.friends.map(renderFriend)
      ) : (
        <p>none ;(</p>
      )}
    </section>
  );
});
