import React, {useEffect, useState} from "react";
import {searchService, usersService} from "../../services";
import {useSearchParams} from "react-router-dom";

const SearchBar = ({ data, setSearchResults }) => {
  const  [searchResult, setSearchResult] = useState([]);

  const [query, setQuery] = useSearchParams({ page: 1, name: ""});


  useEffect(() => {
    searchService.searchName(query.get("page"), query.get("name")).then (({ data })=> {
      setSearchResult(data.data);
      console.log(data.data)

    });
  }, [query]);

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      return ;
    }
    setQuery(() => ({name: e.target.value}))
    console.log(e.target.value)
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type={"text"} id="search" onChange={handleSearchChange} />
    </form>
  );
};
export default SearchBar;
