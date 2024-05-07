import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { useTheme } from "@mui/material/styles";
import { Grid, MenuItem, TextField, Typography } from "@mui/material";

// third-party
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

// project imports
import SkeletonTotalGrowthBarChart from "ui-component/cards/Skeleton/TotalGrowthBarChart";
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";

// chart data
import chartData from "./chart-data/total-growth-bar-chart";

const status = [
  // {
  //   value: "today",
  //   label: "Today",
  // },
  {
    value: "month",
    label: "This Month",
  },
  // {
  //   value: "year",
  //   label: "This Year",
  // },
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading, transactions }) => {
  const [value, setValue] = useState("month");
  const theme = useTheme();
  const [chartPlot, setChartData] = useState(null);
  const customization = useSelector((state) => state.customization);
  const [totalTransaction, settotalTransaction] = useState(0);
  const { navType } = customization;
  const { primary } = theme.palette.text;
  const darkLight = theme.palette.dark.light;
  const grey200 = theme.palette.grey[200];
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  function getDateFromUnixTime(unixTime) {
    return new Date(parseInt(unixTime));
  }

  useEffect(() => {
    if (transactions) {
      const totalsByDay = {};
      transactions
        .filter((item) =>
          moment(parseInt(item.billTime)).isSame(moment(), "month"),
        )
        .forEach((transaction) => {
          const date = getDateFromUnixTime(transaction.billTime);
          const day = moment(date).format("DMMMYY");
          if (!totalsByDay[day]) {
            totalsByDay[day] = { totalDailyTransaction: 0, products: {} };
          }
          let totalTransaction = 0;
          transaction.menuStack.forEach((item) => {
            const totalPrice = item.productPrice * item.quantity;
            totalTransaction += totalPrice;
            if (!totalsByDay[day].products[item.productName]) {
              totalsByDay[day].products[item.productName] = 0;
            }
            totalsByDay[day].products[item.productName] += totalPrice;
          });
          totalsByDay[day].totalDailyTransaction += totalTransaction;
        });
      const totalsArray = Object.keys(totalsByDay).map((day) => ({
        date: day,
        totalDailyTransaction: totalsByDay[day].totalDailyTransaction,
        products: totalsByDay[day].products,
      }));
      console.log(totalsArray);
      let categories = [];
      let totalDailyTransaction = [];
      totalsArray.map((val) => {
        categories.push(val.date);
        totalDailyTransaction.push(val.totalDailyTransaction);
      });
      setChartData({
        height: 350,
        type: "bar",
        options: {
          chart: {
            id: "bar-chart",
            stacked: true,
            toolbar: {
              show: true,
            },
            zoom: {
              enabled: true,
            },
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                  offsetX: -10,
                  offsetY: 0,
                },
              },
            },
          ],
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "50%",
            },
          },
          xaxis: {
            type: "category",
            categories: categories,
          },

          legend: {
            show: true,
            fontSize: "14px",
            fontFamily: `'Roboto', sans-serif`,
            position: "bottom",
            offsetX: 20,
            labels: {
              useSeriesColors: false,
            },
            markers: {
              width: 16,
              height: 16,
              radius: 5,
            },
            itemMargin: {
              horizontal: 15,
              vertical: 8,
            },
          },
          fill: {
            type: "solid",
            colors: ["#b56a00"], // Change the color here
          },
          dataLabels: {
            enabled: false,
          },
          grid: {
            show: true,
          },
        },
        series: [
          {
            name: "Sell",
            data: totalDailyTransaction,
          },
        ],
      });
      settotalTransaction(
        totalsArray.reduce(
          (total, day) => total + day.totalDailyTransaction,
          0,
        ),
      );
    }
  }, [transactions]);

  useEffect(() => {
    if (chartPlot) {
      const newChartData = {
        ...chartPlot.options,
        colors: [primary200, primaryDark, secondaryMain, secondaryLight],
        xaxis: {
          labels: {
            style: {
              colors: [
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
                primary,
              ],
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: [primary],
            },
          },
        },
        grid: {
          borderColor: grey200,
        },
        tooltip: {
          theme: "light",
        },
        legend: {
          labels: {
            colors: grey500,
          },
        },
      };

      // do not load chart when loading
      if (!isLoading) {
        ApexCharts.exec(`bar-chart`, "updateOptions", newChartData);
      }
    }
  }, [
    navType,
    primary200,
    primaryDark,
    secondaryMain,
    secondaryLight,
    primary,
    darkLight,
    grey200,
    isLoading,
    grey500,
    chartPlot,
  ]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        totalTransaction !== 0 && (
          <MainCard>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Grid container direction="column" spacing={1}>
                      <Grid item>
                        <Typography variant="subtitle2">Total Sell</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="h3">
                          ₹ {totalTransaction}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="standard-select-currency"
                      select
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    >
                      {status.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Chart {...chartPlot} />
              </Grid>
            </Grid>
          </MainCard>
        )
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalGrowthBarChart;
