import { useSearchParams } from "react-router-dom";

import { debounce } from "debounce"

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, MenuItem, Select} from "@mui/material";

import queryParams from "../../constants/quaryParams";
import { course, courseFormat, courseType, status } from "../../constants";

const Search = () => {
  const [query, setQuery] = useSearchParams(queryParams);

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange =
      (event) => {
      const { value, id, name } = event.target;
      console.log(value, "value");
      const paramsName = id || name || value;
      if (!value) {
          query.delete(paramsName);
      }
      const queryParams = Object.fromEntries([...query]);

      if (value) {
          queryParams[paramsName] = value;
          queryParams.page = 1;
      }

      setQuery(() => queryParams)
           }



  return (
    <Box>
      <TextField
        id="name"
        label="Name"
        type="search"
        variant="standard"
        onChange={debounce(handleSearchChange, 800)}
        onSubmit={handleSubmit}
        defaultValue={query.get("name")}
      />
      <TextField
        id="surname"
        label="Surname"
        type="search"
        variant="standard"
        onChange={debounce(handleSearchChange, 800)}
        onSubmit={handleSubmit}
        defaultValue={query.get("surname")}
      />
      <TextField
        id="age"
        label="age"
        type="number"
        variant="standard"
        onChange={debounce(handleSearchChange, 800)}
        onSubmit={handleSubmit}
        defaultValue={query.get("age")}
      />
      <TextField
        id="email"
        label="Email"
        type="search"
        variant="standard"
        onChange={debounce(handleSearchChange, 800)}
        onSubmit={handleSubmit}
        defaultValue={query.get("email")}
      />
      <TextField
        id="phone"
        label="Phone"
        type="number"
        variant="standard"
        onChange={debounce(handleSearchChange, 800)}
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
          value={course.all}
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
      </FormControl>
      <FormControl sx={{ minWidth: 100 }}>
        <InputLabel>Course format</InputLabel>
        <Select
          sx={{ width: "150px" }}
          variant="standard"
          name="course_format"
          labelId="demo-simple-select-label"
          id="course_format"
          value={courseFormat.all}
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
          value={courseType.all}
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
          value={status.all}
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
