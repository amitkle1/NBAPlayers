import React, { Dispatch, SetStateAction } from "react";
import Player from "./Player";
import { MetaData } from "../App";

interface Props {
  players: any[];
  setFavorites: Dispatch<SetStateAction<any[]>>;
  metaData: MetaData;
  setMetaData: Dispatch<SetStateAction<MetaData>>;
}

const PlayersList = ({
  players,
  setFavorites,
  metaData,
  setMetaData,
}: Props) => {
  const prevHandler = () => {
    setMetaData({ ...metaData, current_page: metaData.current_page - 1 });
  };
  const nextHandler = () => {
    setMetaData({ ...metaData, current_page: metaData.current_page + 1 });
  };
  return (
    players && (
      <div>
        <h3>NBA PLAYERS LIST</h3>
        <span className="playersClickMessage">
          *Click on element to add to favorites
        </span>

        <ul>
          {players.map((player, idx) => {
            return (
              <Player
                key={idx}
                index={idx}
                players={players}
                setFavorites={setFavorites}
                firstName={player.first_name}
                lastName={player.last_name}
                isFavorites={false}
              />
            );
          })}
        </ul>
        <div className="pageNavigation">
          <button
            className="btn defaultBtn"
            disabled={metaData.current_page === 1}
            onClick={prevHandler}
          >
            prev
          </button>
          <span className="btn pageNumber">{metaData.current_page}</span>
          <button
            className="btn defaultBtn"
            disabled={metaData.current_page === metaData.total_pages}
            onClick={nextHandler}
          >
            next
          </button>
        </div>
      </div>
    )
  );
};

export default PlayersList;
