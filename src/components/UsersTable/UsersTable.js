import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { searchService } from "../../services";
import Search from "./SearchBar";
import queryParams from "../../constants/quaryParams";
import { columns } from "../../constants";
import Row from "./Row";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(0);

  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  const [comments, setComments] = useState([])


  const [query, setQuery] = useSearchParams(queryParams);

  useEffect(() => {
    const queryData = Object.fromEntries([...query]);
    console.log(queryData, "data");
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

  const sortPage = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    const queryParams = Object.fromEntries([...query]);

    const paramsName = orderBy;
    if (isAsc === true) {
      queryParams["order"] = paramsName;
    }
    if (isAsc === false) {
      queryParams["order"] = "-" + paramsName;
    }

    setQuery(() => queryParams,  queryParams.page = 1);
  };

  const newPage = (event, pageNew) => {
    const queryData = Object.fromEntries([...query]);
    setQuery(() => ({
      ...queryData,
      page: pageNew + 1,
    }));
  };

  return (
    <>
      <Search />
      <TableContainer component={Paper} sx={{ marginTop: " auto" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow key={users._id}>
              {columns.map((colum) => {
                return (
                  <TableCell
                    align="right"
                    key={colum.field}
                    sortDirection={orderBy === colum.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === colum.field}
                      direction={orderBy === colum.field ? order : "desc"}
                      onClick={(event) => sortPage(event, colum.field)}
                    >
                      {colum.field}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <Row row={row} users={users} key={row._id} comments={row.comments} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <TablePagination
          sx={{ m: 1 }}
          rowsPerPageOptions={[10]}
          component="div"
          count={usersCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={newPage}
        />
      </div>
    </>
  );
};

export default UsersTable;
