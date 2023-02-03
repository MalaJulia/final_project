import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import {searchService, usersService} from "../../services";
import { useSearchParams } from "react-router-dom";
import Search from "./SearchBar";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  const [page, setPage] = useState(0);

  const [query, setQuery] = useSearchParams({ page: "1", name: "" });

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
    searchService.searchName(query.get("page"), query.get("name")).then(({ data }) => {
      setUsers(data.data);
      setPage(data.page - 1);
      setUsersCount(data.total_count);
    });
  }, [query]);
  //
  const newPage = (event) => {
    setQuery(() => ({ page: event + 1, name:query.get('name')} ))
    console.log(event)
    console.log (query)
  };

  return (
    <>
      <Search/>
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
