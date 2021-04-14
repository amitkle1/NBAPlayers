import React, { Dispatch, SetStateAction, useState } from "react";
import Player from "./Player";

interface Props {
  players: any[];
  favorites: any[];
  setFavorites: Dispatch<SetStateAction<any[]>>;
}

const FavoritesList = ({ players, favorites, setFavorites }: Props) => {
  const [isDark, setIsDark] = useState<Boolean>(false);
  const clear = () => {
    setFavorites([]);
  };

  const changeColor = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <div className="favoritesContainer">
      <h3>FAVORITES LIST</h3>
      <span className="favoritesClickMessage">
        *Click on element to remove from favorites
      </span>
      <ul className={`unordered-${isDark ? "dark" : "light"}`}>
        {favorites.map((player, idx) => {
          return (
            <Player
              key={idx}
              index={idx}
              players={players}
              firstName={player.first_name}
              lastName={player.last_name}
              setFavorites={setFavorites}
              isFavorites={true}
            />
          );
        })}
      </ul>
      {favorites.length > 0 && (
        <>
          <button className="btn defaultBtn" onClick={clear}>
            Clear favorites
          </button>
          <button className="btn defaultBtn" onClick={changeColor}>
            Change Color
          </button>
        </>
      )}
    </div>
  );
};

export default FavoritesList;
