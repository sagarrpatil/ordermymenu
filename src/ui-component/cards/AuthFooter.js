// material-ui
import { Link, Typography, Stack } from "@mui/material";

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography
      variant="subtitle2"
      component={Link}
      href="https://ordermymenu.io"
      target="_blank"
      underline="hover"
    >
      ordermymenu.io
    </Typography>
    <Typography
      variant="subtitle2"
      component={Link}
      href="https://Order My Menu.com"
      target="_blank"
      underline="hover"
    >
      &copy; Order My Menu.com
    </Typography>
  </Stack>
);

export default AuthFooter;
