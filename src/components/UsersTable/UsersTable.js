import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const UsersTable = ({ users = [] }) => {
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

  return (
    <Box flex={1} overflow="auto">
      <DataGrid
        rows={users}
        getRowId={(row) => row._id}
        columns={columns}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default UsersTable;
