import { useSearchParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { InputLabel, MenuItem, Select } from "@mui/material";

const Search = () => {
  const [query, setQuery] = useSearchParams({
    page: "1",
    name: "",
    surname: "",
    age: "",
    email: "",
    phone: "",
    course: "",
  });

  const Course = {
    fs: "FS",
    qacx: "QACX",
    jcx: "JCX",
    jscx: "JSCX",
    not_course: "",
    fe: "FE",
    pcx: "PCX",
  };

  // const cors = course.map((cors) => cors.course);
  // console.log(cors, "map");
  // const uniqueСourse = Array.from(new Set(cors));
  // console.log(uniqueСourse, "uniq");

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChangeCourse = (e) => {
    setQuery(() => ({
      page: query.get("page"),
      name: query.get("name"),
      surname: query.get("surname"),
      age: query.get("age"),
      email: query.get("email"),
      phone: query.get("phone"),
      course: e.target.value,
    }));
    console.log(e.target.value);
    if (!e.target.value) {
      return;
    }
  };

  const handleSearchChange = (event) => {
    const { value, id } = event.target;
    const queryParams = Object.fromEntries([...query]);
    queryParams[id] = value;
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
      <InputLabel id="demo-simple-select-label">Course</InputLabel>
      <Select
        sx={{ width: "150px" }}
        variant="standard"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={query.get("course")}
        label="Age"
        onChange={handleSearchChangeCourse}
      >
        <MenuItem value={Course.fe}>FE</MenuItem>
        <MenuItem value={Course.pcx}>PCX</MenuItem>
        <MenuItem value={Course.fs}>FS</MenuItem>
        <MenuItem value={Course.jcx}>JCX</MenuItem>
        <MenuItem value={Course.jscx}>JSCX</MenuItem>
        <MenuItem value={Course.qacx}>QACX</MenuItem>
        <MenuItem value={Course.not_course}>NOT COURSE</MenuItem>
      </Select>
    </Box>
  );
};
export default Search;
