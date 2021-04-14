import React, { useState, useEffect } from "react";
import Header from "./components/HeaderComponent";
import PlayerSearch from "./components/PlayerSearch";
import PlayersList from "./components/PlayersList";
import FavoritesList from "./components/FavoritesList";

import "./App.css";
import "./header.css";
const url = "https://www.balldontlie.io/api/v1/players";

export type MetaData = {
  total_pages: number;
  current_page: number;
  next_page: number;
  per_page: number;
  total_count: number;
};
function App() {
  const [players, setPlayers] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loader, setLoader] = useState<Boolean>(true);
  const [metaData, setMetaData] = useState<MetaData>({
    total_pages: 50,
    current_page: 1,
    next_page: 2,
    per_page: 25,
    total_count: 9999,
  });

  const fetcher = async (query: string) => {
    const param =
      query.length === 0 ? `page=${metaData.current_page}` : `search=${query}`;
    setLoader(true);
    const response = await fetch(`${url}?${param}`);
    const data = await response.json();
    setPlayers(data.data);
    setLoader(false);
  };

  useEffect(() => {
    fetcher("");
  }, [metaData]);

  return (
    <div className="App">
      <Header />
      <PlayerSearch fetcher={fetcher} />
      {loader && <div className="loader"></div>}
      <div className="listsContainer">
        <PlayersList
          players={players}
          setFavorites={setFavorites}
          metaData={metaData}
          setMetaData={setMetaData}
        />
        <FavoritesList
          players={players}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </div>
    </div>
  );
}

export default App;
