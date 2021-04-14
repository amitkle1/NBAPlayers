import React, { Dispatch, SetStateAction, useState, useEffect } from "react";

interface Props {
  fetcher: (query: string) => void;
}
function PlayerSearch({ fetcher }: Props) {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    // searchHandler();
    fetcher(query);
  }, [query]);

  const clearHandler = () => {
    setQuery("");
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Enter player name..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className="btn defaultBtn" onClick={clearHandler}>
        Clear Search
      </button>
    </div>
  );
}

export default PlayerSearch;
