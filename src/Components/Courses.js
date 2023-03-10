import React from "react";
import Search from "./Search";
import Cards from "./Cards";
import CardData from "./CardData";

import { useState } from "react";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newCards = CardData.filter((CardData) => {
        return Object.values(CardData)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newCards);
    } else {
      setSearchResults(CardData);
    }
  };
  return (
    <>
      <Search navTerm={searchTerm} searchKeyword={searchHandler} />
      <Cards details={searchTerm.length < 1 ? CardData : searchResults} />
    </>
  );
}
