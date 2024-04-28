import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

// project imports
import moment from "moment";
import MainCard from "ui-component/cards/MainCard";
import SkeletonPopularCard from "ui-component/cards/Skeleton/PopularCard";
import { gridSpacing } from "store/constant";

// assets
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading, transaction }) => {
  const theme = useTheme();
  const [timeSet, setTimeSet] = useState("day");
  const [data, setData] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const itemQuantities = {};
    handleClose();
    transaction &&
      transaction
        .filter((item) =>
          moment(parseInt(item.billTime)).isSame(moment(), timeSet),
        )
        .forEach((order) => {
          order.menuStack.forEach((item) => {
            const productName = item.productName;
            itemQuantities[productName] =
              (itemQuantities[productName] || 0) + item.quantity;
          });
        });

    let arrayofItems = [];
    Object.entries(itemQuantities)
      .sort((a, b) => b[1] - a[1])
      .map(([itemName, quantity]) => arrayofItems.push({ itemName, quantity }));

    setData(arrayofItems);
    console.log(arrayofItems);
  }, [transaction, timeSet]);

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography variant="h4">
                      Popular Items ({timeSet.toUpperCase()})
                    </Typography>
                  </Grid>
                  <Grid item>
                    <MoreHorizOutlinedIcon
                      fontSize="small"
                      sx={{
                        color: theme.palette.primary[200],
                        cursor: "pointer",
                      }}
                      aria-controls="menu-popular-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
                    <Menu
                      id="menu-popular-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <MenuItem onClick={() => setTimeSet("day")}>
                        Today
                      </MenuItem>
                      <MenuItem onClick={() => setTimeSet("month")}>
                        This Month
                      </MenuItem>
                      <MenuItem onClick={() => setTimeSet("year")}>
                        This Year
                      </MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ maxHeight: 400, overflow: "auto" }}>
                {data &&
                  data.length > 0 &&
                  data.map((val) => (
                    <>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Grid item>
                              <Typography variant="subtitle1" color="inherit">
                                {val.itemName}
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Grid
                                container
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography
                                    variant="subtitle1"
                                    color="inherit"
                                  >
                                    Qty: {val.quantity}
                                  </Typography>
                                </Grid>
                                <Grid item></Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="subtitle2"
                            sx={{ color: "success.dark" }}
                          >
                            {/* 10% Profit */}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ my: 1.5 }} />
                    </>
                  ))}
              </Grid>
            </Grid>
          </CardContent>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default PopularCard;
