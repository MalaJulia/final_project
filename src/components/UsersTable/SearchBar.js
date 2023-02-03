import React, { useEffect, useState } from "react";
import { searchService } from "../../services";
import { useSearchParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Search = () => {
  const [query, setQuery] = useSearchParams({ page: "1", name: "" });

  useEffect(() => {
    searchService
      .searchName(query.get("page"), query.get("name"))
      .then(({ data }) => {});
  }, [query]);

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    setQuery(() => ({ page: query.get("page"), name: e.target.value }));
    if (!e.target.value) {
      return;
    }
  };

  return (
    <Box>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
        defaultValue={query.get("name")}
      />
    </Box>
  );
};
export default Search;
