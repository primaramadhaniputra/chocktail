import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">no cocktails matched your search criteria</h2>;
  }
  return (
    <section className="list-cocktail">
      <h3>cocktails</h3>
      <div class="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default CocktailList;
