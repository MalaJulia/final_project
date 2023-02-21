const columns = [
  { field: "_id", width: 90,  },
  { field: "course", width: 90 },
  { field: "name", width: 90 },
  { field: "surname", width: 100 },
  { field: "email", width: 180 },
  { field: "phone", width: 140 },
  { field: "age", width: 50 },
  { field: "course_format", width: 90 },
  { field: "course_type", width: 90 },
  { field: "created_at", width: 110 },
  { field: "status", width: 70 },
  { field: "sum", width: 90 },
  { field: "already_paid", width: 75 },
];


const course = {
  fs: "FS",
  qacx: "QACX",
  jcx: "JCX",
  jscx: "JSCX",
  fe: "FE",
  pcx: "PCX",
  all: "",
};

const courseFormat = {
  static: "static",
  online: "online",
};

const courseType = {
  pro: "pro",
  minimal: "minimal",
  premium: "premium",
  incubator: "incubator",
};

const status = {
  inWork: "В работе",
  nwe: "Новый",
  notAgree: "Не согласен",
};

export { columns, course, courseFormat, courseType, status };
