import React, { Dispatch, SetStateAction } from "react";

interface Props {
  players: any[];
  firstName: String;
  lastName: String;
  index: number;
  setFavorites: Dispatch<SetStateAction<any[]>>;
  isFavorites: Boolean;
}
function Player({
  players,
  firstName,
  lastName,
  index,
  setFavorites,
  isFavorites,
}: Props) {
  const itemClickHandler = (id: number) => {
    setFavorites((prev) => {
      if (!prev.includes(players[id])) {
        return [...prev, players[id]];
      } else {
        return [...prev];
      }
    });
  };
  const favoriteClickHandler = (id: number) => {
    setFavorites((prev) => [
      ...prev.filter((player) => {
        // console.log(player);
        return player.id !== prev[id].id;
      }),
    ]);
  };

  return (
    <li
      className="playersItem"
      onClick={
        isFavorites
          ? () => favoriteClickHandler(index)
          : () => itemClickHandler(index)
      }
    >
      {firstName} {lastName}
    </li>
  );
}

export default Player;
