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

      <Button variant={'text'}
              onClick={()=>navigate("/users")}>
        <Typography variant="h5" component="h2" color="white">
          BigBirdSPS
        </Typography>
      </Button>


      <Box>
        {/*<Button*/}
        {/*  color="secondary"*/}
        {/*  variant="contained"*/}
        {/*  size="small"*/}
        {/*  sx={{ marginX: 1 }}*/}
        {/*  onClick={() => navigate("/login")}*/}
        {/*>*/}
        {/*  Login*/}
        {/*</Button>*/}
        <Button
          color="secondary"
          variant="contained"
          size="small"
          sx={{ marginX: 1 }}
          onClick={() => navigate("/register")}
        >
          LogOut
        </Button>
      </Box>
    </Box>
  );
};
export default Header;
