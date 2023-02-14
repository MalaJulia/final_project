import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        paddingY: 1
      }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h5" component="h2" color="white">
        BigBirdSPS
      </Typography>
      <Box>
        <Button
          color="secondary"
          variant="contained"
          size="small"
          sx={{ marginX: 1 }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          color="secondary"
          variant="contained"
          size="small"
          sx={{ marginX: 1 }}
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};
export default Header;
