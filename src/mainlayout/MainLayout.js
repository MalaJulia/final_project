import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

import Footer from "../components/Footers/Footer";
import Header from "../components/Headers/Header";

const MainLayout = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
