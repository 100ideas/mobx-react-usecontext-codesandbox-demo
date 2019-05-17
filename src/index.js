import React from "react";
import ReactDOM from "react-dom";

import { StoreProvider } from "./stores";
import { FriendsMaker, MatchMaker, FriendsList } from "./components";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <p>mobx store context provider with hooks for react 16.8.6+</p>
      <p>
        based on{" "}
        <a href="https://mobx-react.netlify.com/recipes-inject">
          mobx-with-react
        </a>{" "}
        docs (see{" "}
        <a href="https://github.com/mobxjs/mobx-react-docz/blob/019586dff961d0b1e7b9af5f712ccbe78458e435/content/recipes/inject.mdx">
          repo
        </a>
        )
      </p>

      <StoreProvider>
        <section className="MakerSection">
          <FriendsMaker />
          <FriendsList />
          <MatchMaker />
        </section>
      </StoreProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
