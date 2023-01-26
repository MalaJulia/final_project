import { useEffect, useState } from "react";

import UsersTable from "../../components/UsersTable/UsersTable";
import { usersService } from "../../services";
import {useSearchParams} from "react-router-dom";

const UsersPage = () => {
  return <UsersTable />;
};

export default UsersPage;
