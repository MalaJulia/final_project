import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import { searchService } from "../../services";
import Search from "./SearchBar";
import queryParams from "../../constants/quaryParams";
import { columns } from "../../constants";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  const [page, setPage] = useState(0);

  const [query, setQuery] = useSearchParams(queryParams);

  useEffect(() => {
    const queryData = Object.fromEntries([...query]);

    searchService
      .Search(queryData)
      .then(({ data }) => {
        setUsers(data.data);
        setPage(data.page - 1);
        setUsersCount(data.total_count);
      })
      .catch((error) => {
        console.log(error, "Error in request");
      });
  }, [query]);

  const sortPage = (event) => {
    const { field, sort } = event[0];
    const queryParams = Object.fromEntries([...query]);
    const paramsName = field;
    if (sort === "asc") {
      queryParams["order"] = paramsName;
    }
    if (sort === "desc") {
      queryParams["order"] = "-" + paramsName;
    }
    setQuery(() => queryParams);
  };

  const newPage = (event) => {
    const queryData = Object.fromEntries([...query]);
    setQuery(() => ({
      ...queryData,
      page: event + 1,
    }));
  };

  return (
    <>
      <Search />
      <Box flex={1} overflow="auto">
        <DataGrid
          onPageChange={newPage}
          rows={users}
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          rowCount={usersCount}
          page={page}
          paginationMode="server"
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          onSortModelChange={sortPage}
          sortingOrder ={['asc', 'desc']}
        />
      </Box>
    </>
  );
};

export default UsersTable;
