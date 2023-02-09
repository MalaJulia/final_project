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
      course_format: "",
      course_type: "",
      status: "",
  });

  const Course = {
    fs: "FS",
    qacx: "QACX",
    jcx: "JCX",
    jscx: "JSCX",
    fe: "FE",
    pcx: "PCX",
      all: ""
  };
  const CourseFormat = {
      static: "static",
      online: "online"
  }
  const CourseType ={
      pro: "pro",
      minimal: "minimal",
      premium: "premium",
      incubator: "incubator",
  }
  const Status ={
      inWork: "В работе",
      nwe:"Новый",
      notAgree:"Не согласен"
  }




  // const cors = course.map((cors) => cors.course);
  // console.log(cors, "map");
  // const uniqueСourse = Array.from(new Set(cors));
  // console.log(uniqueСourse, "uniq");

  const handleSubmit = (e) => e.preventDefault();


  const handleSearchChange = (event) => {
    console.log(event, "event");
    const { value, id, name } = event.target;
    const queryParams = Object.fromEntries([...query]);
    const paramsName = id || name;
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

      <InputLabel>Course</InputLabel>
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
        <MenuItem value={Course.fe}>FE</MenuItem>
        <MenuItem value={Course.pcx}>PCX</MenuItem>
        <MenuItem value={Course.fs}>FS</MenuItem>
        <MenuItem value={Course.jcx}>JCX</MenuItem>
        <MenuItem value={Course.jscx}>JSCX</MenuItem>
        <MenuItem value={Course.qacx}>QACX</MenuItem>
          <MenuItem value={Course.all}>All courses</MenuItem>

      </Select>

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
            <MenuItem value={CourseFormat.online}>Online</MenuItem>
            <MenuItem value={CourseFormat.static}>Static</MenuItem>

        </Select>

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
            <MenuItem value={CourseType.pro}>Pro</MenuItem>
            <MenuItem value={CourseType.premium}>Premium</MenuItem>
            <MenuItem value={CourseType.minimal}>Minimal</MenuItem>
            <MenuItem value={CourseType.incubator}>Incubator</MenuItem>
        </Select>

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
            <MenuItem value={Status.inWork}>В работе</MenuItem>
            <MenuItem value={Status.nwe}>Новый</MenuItem>
            <MenuItem value={Status.notAgree}>Нe coгласен</MenuItem>
        </Select>
    </Box>
  );
};
export default Search;
