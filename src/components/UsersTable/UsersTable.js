import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { usersService } from "../../services";
import { useSearchParams } from "react-router-dom";
import SearchBar from "./SearchBar";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  const [page, setPage] = useState(0);
  const [searchResult, setSearchResult] = useState([]);

  const [query, setQuery] = useSearchParams({ page: "1" });

  const columns = [
    { field: "_id", width: 90 },
    { field: "course", width: 90 },
    { field: "name", width: 90 },
    { field: "surname", width: 90 },
    { field: "email", width: 90 },
    { field: "phone", width: 90 },
    { field: "age", width: 90 },
    { field: "course_format", width: 90 },
    { field: "course_type", width: 90 },
    { field: "created_at", width: 90 },
    { field: "utm", width: 90 },
    { field: "msg", width: 90 },
    { field: "status", width: 90 },
    { field: "sum", width: 90 },
    { field: "already_paid", width: 90 },
  ];

  useEffect(() => {
    usersService.getAll(query.get("page")).then(({ data }) => {
      setUsers(data.data);
      setPage(data.page - 1);
      setUsersCount(data.total_count);
    });
  }, [query]);
  //
  const newPage = (event) => {
    setQuery((value) => ({ page: event + 1 }));
  };

  return (
    <>
      <SearchBar users={users} setSearchResults={setSearchResult} />
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
          checkboxSelection
          paginationMode="server"
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default UsersTable;
