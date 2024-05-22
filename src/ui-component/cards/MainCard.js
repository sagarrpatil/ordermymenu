import PropTypes from "prop-types";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
// material-ui
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Button,
  Typography,
  IconButton,
} from "@mui/material";

// constant
const headerSX = {
  "& .MuiCardHeader-action": { mr: 0 },
};

// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass = "",
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      back,
      title,
      style,
      ...others
    },
    ref,
  ) => {
    const theme = useTheme();
    const navigate = useNavigate();
    return (
      <Card
        ref={ref}
        {...others}
        sx={{
          border: border ? "1px solid" : "none",
          borderColor: theme.palette.primary[200] + 25,
          ":hover": {
            boxShadow: boxShadow
              ? shadow || "0 2px 14px 0 rgb(32 40 45 / 8%)"
              : "inherit",
          },
          ...sx,
        }}
      >
        {/* card header and action */}
        {title && (
          <CardHeader
            avatar={
              back ? (
                <IconButton
                  size="large"
                  sx={{ background: "#1E2938", color: "white", padding: 0 }}
                  onClick={() => navigate(-1)}
                >
                  <ChevronLeftIcon style={{ fontSize: 29 }} />
                </IconButton>
              ) : (
                ""
              )
            }
            sx={headerSX}
            title={title}
            action={secondary}
          />
        )}

        {/* content & header divider */}
        {title && <Divider />}

        {/* card content */}
        {content && (
          <CardContent
            style={style ? style : {}}
            sx={contentSX}
            className={contentClass}
          >
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  },
);

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  back: PropTypes.bool,
  secondary: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object,
  ]),
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default MainCard;
