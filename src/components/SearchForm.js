import React from "react";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }

  return (
    <section className="section-search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="search">search your fav cocktail</label>
          <input type="text" id="search" name="name" placeholder="type your cocktail.." ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
