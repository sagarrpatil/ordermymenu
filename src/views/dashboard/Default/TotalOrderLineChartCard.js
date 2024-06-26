import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// material-ui
import { useTheme, styled } from "@mui/material/styles";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

// third-party
import Chart from "react-apexcharts";

// project imports
import MainCard from "ui-component/cards/MainCard";
import SkeletonTotalOrderCard from "ui-component/cards/Skeleton/EarningCard";

import ChartDataMonth from "./chart-data/total-order-month-line-chart";
import ChartDataYear from "./chart-data/total-order-year-line-chart";

// assets
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import moment from "moment";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  "&>div": {
    position: "relative",
    zIndex: 5,
  },
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: "50%",
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down("sm")]: {
      top: -105,
      right: -140,
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: "50%",
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70,
    },
  },
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading, transaction, fetchData }) => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = useState(false);
  const [TimeSet, setTimeSet] = useState("day");
  const [orderTotalValue, setOrderTotalValue] = useState(0);
  const handleChangeTime = (event, newValue) => {
    fetchData(newValue);
    setTimeSet(newValue);
  };
  useEffect(() => {
    let orderTotal = 0;
    transaction.length > 0 &&
      transaction.map((val) => {
        let amount = getAmountByTransaction(val);
        if (amount) orderTotal += amount;
      });

    setOrderTotalValue(orderTotal);
  }, [transaction]);

  const getAmountByTransaction = (data) => {
    let date = Number(data.billTime);
    const today = moment().isSame(date, TimeSet);

    if (today) {
      const orderTotal = data.menuStack.reduce(
        (acc, item) => acc + Number(item.productPrice) * Number(item.quantity),
        0,
      );
      return orderTotal;
    }
  };

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.primary[800],
                        color: "#fff",
                        mt: 1,
                      }}
                    >
                      <LocalMallOutlinedIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Button
                      disableElevation
                      variant={TimeSet === "month" ? "contained" : "text"}
                      size="small"
                      sx={{ color: "inherit" }}
                      onClick={(e) => handleChangeTime(e, "month")}
                    >
                      Month
                    </Button>
                    <Button
                      disableElevation
                      variant={TimeSet === "day" ? "contained" : "text"}
                      size="small"
                      sx={{ color: "inherit" }}
                      onClick={(e) => handleChangeTime(e, "day")}
                    >
                      Today's
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Grid container alignItems="center">
                      <Grid item>
                        {timeValue ? (
                          <Typography
                            sx={{
                              fontSize: "2.125rem",
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75,
                            }}
                          >
                            ₹
                            {orderTotalValue.toString() === "NaN"
                              ? 0
                              : orderTotalValue}
                          </Typography>
                        ) : (
                          <Typography
                            sx={{
                              fontSize: "2.125rem",
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75,
                            }}
                          >
                            ₹
                            {orderTotalValue.toString() === "NaN"
                              ? 0
                              : orderTotalValue}
                          </Typography>
                        )}
                      </Grid>
                      <Grid item>
                        {/* <Avatar
                          sx={{
                            ...theme.typography.smallAvatar,
                            cursor: "pointer",
                            backgroundColor: theme.palette.primary[200],
                            color: theme.palette.primary.dark,
                          }}
                        >
                          <ArrowDownwardIcon
                            fontSize="inherit"
                            sx={{ transform: "rotate3d(1, 1, 1, 45deg)" }}
                          />
                        </Avatar> */}
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: theme.palette.primary[200],
                          }}
                        >
                          Total Amount
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* <Grid item xs={6}>
                    {timeValue ? (
                      <Chart {...ChartDataMonth} />
                    ) : (
                      <Chart {...ChartDataYear} />
                    )}
                  </Grid> */}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalOrderLineChartCard;
