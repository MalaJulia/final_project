import { useEffect, useState } from "react";

import UsersTable from "../../components/UsersTable/UsersTable";
import { usersService } from "../../services";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    usersService.getAll().then(({ data }) => {
      setUsers(data.data);
    });
  }, []);
  return <UsersTable users={users} />;
};

export default UsersPage;
