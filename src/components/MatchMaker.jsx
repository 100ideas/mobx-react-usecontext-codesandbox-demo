import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores";

const renderFriend = (props, idx) => (
  <pre key={props.name + "-" + idx}>{JSON.stringify(props, null, 2)}</pre>
);

export const MatchMaker = observer(() => {
  const store = useStore();
  // filtering could be done in store as well, showing both options
  const singleAndFavoriteFriends = store.singleFriends.filter(
    friend => friend.isFavorite
  );
  return (
    <section className="MatchMaker">
      single and favorite friends:
      {singleAndFavoriteFriends.length > 0 ? (
        singleAndFavoriteFriends.map(renderFriend)
      ) : (
        <p>none ;(</p>
      )}
    </section>
  );
});
