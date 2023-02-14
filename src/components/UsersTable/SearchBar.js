import { useSearchParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import queryParams from "../../constants/quaryParams";
import { course, courseFormat, courseType, status } from "../../constants";

const Search = () => {
  const [query, setQuery] = useSearchParams(queryParams);

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (event) => {
    const { value, id, name } = event.target;
    const queryParams = Object.fromEntries([...query]);
    const paramsName = id || name || value;
    queryParams[paramsName] = value;
    setQuery(() => queryParams);

  };

  return (
    <Box>
      <TextField
        id="name"
        label="Name"
        type="search"
        variant="standard"
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
        defaultValue={query.get("name")}
      />
      <TextField
        id="surname"
        label="Surname"
        type="search"
        variant="standard"
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
        defaultValue={query.get("surname")}
      />
      <TextField
        id="age"
        label="age"
        type="number"
        variant="standard"
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
        defaultValue={query.get("age")}
      />
      <TextField
        id="email"
        label="Email"
        type="search"
        variant="standard"
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
        defaultValue={query.get("email")}
      />
      <TextField
        id="phone"
        label="Phone"
        type="number"
        variant="standard"
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
        defaultValue={query.get("phone")}
      />

      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="courseInput">Course</InputLabel>
        <Select
          sx={{ width: "150px" }}
          variant="standard"
          name="course"
          labelId="demo-simple-select-label"
          id="course"
          value={query.get("course")}
          label="Course"
          onChange={handleSearchChange}
        >
          <MenuItem value={course.fe}>FE</MenuItem>
          <MenuItem value={course.pcx}>PCX</MenuItem>
          <MenuItem value={course.fs}>FS</MenuItem>
          <MenuItem value={course.jcx}>JCX</MenuItem>
          <MenuItem value={course.jscx}>JSCX</MenuItem>
          <MenuItem value={course.qacx}>QACX</MenuItem>
          <MenuItem value={course.all}>All courses</MenuItem>
        </Select>
        {/*<FormHelperText>Without label</FormHelperText>*/}
      </FormControl>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel>Course format</InputLabel>
        <Select
          sx={{ width: "150px" }}
          variant="standard"
          name="course_format"
          labelId="demo-simple-select-label"
          id="course_format"
          value={query.get("course_format")}
          label="Course_format"
          onChange={handleSearchChange}
        >
          <MenuItem value={courseFormat.online}>Online</MenuItem>
          <MenuItem value={courseFormat.static}>Static</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="CourseType">Course type</InputLabel>
        <Select
          sx={{ width: "150px" }}
          variant="standard"
          name="course_type"
          labelId="demo-simple-select-label"
          id="course_type"
          value={query.get("course_type")}
          label="CourseType"
          onChange={handleSearchChange}
        >
          <MenuItem value={courseType.pro}>Pro</MenuItem>
          <MenuItem value={courseType.premium}>Premium</MenuItem>
          <MenuItem value={courseType.minimal}>Minimal</MenuItem>
          <MenuItem value={courseType.incubator}>Incubator</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel id="status">Status</InputLabel>
        <Select
          sx={{ width: "150px" }}
          variant="standard"
          name="status"
          labelId="demo-simple-select-label"
          id="status"
          value={query.get("status")}
          label="Status"
          onChange={handleSearchChange}
        >
          <MenuItem value={status.inWork}>В работе</MenuItem>
          <MenuItem value={status.nwe}>Новый</MenuItem>
          <MenuItem value={status.notAgree}>Нe coгласен</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="created_at"
        label="Created at"
        type="date"
        variant="standard"
        defaultValue={query.get("created_at")}
        sx={{ width: 150 }}
        onChange={handleSearchChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
};
export default Search;
