import React from "react";
import SearchForm from "../components/SearchForm";
import CockTailList from "../components/CocktailList";
import { useGlobalContext } from "../context";

function Home() {
  const data = useGlobalContext();
  return (
    <div>
      <SearchForm />
      <CockTailList />
    </div>
  );
}

export default Home;
