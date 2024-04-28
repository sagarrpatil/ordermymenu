import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MainCard from "ui-component/cards/MainCard";
import SecondaryAction from "ui-component/cards/CardSecondaryAction";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LinkIcon from "@mui/icons-material/Link";
import TablePagination from "@mui/material/TablePagination";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { gridSpacing } from "store/constant";
import { db, realtimeDb } from "../../firebase";
import { getDatabase, ref, onValue, once, set } from "@firebase/database";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "@firebase/firestore";
import moment from "moment";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const TablerIcons = () => {
  const data = JSON.parse(atob(localStorage.getItem("token")));
  const [transaction, setTransaction] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const currentTime = Date.now();
  const [fromdate, setFromDate] = React.useState(dayjs(currentTime));
  const [toDate, setToDate] = React.useState(dayjs(currentTime));
  const [tableData, setTableData] = React.useState(null);
  const [orderTotalValue, setOrderTotalValue] = useState(0);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userDocRef = doc(db, data.user.email, "transaction");
      const menuItemsCollectionRef = collection(userDocRef, "transaction");
      const querySnapshot = await getDocs(menuItemsCollectionRef);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setTransaction(items);
      console.log("items", items);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      const dataRefs = ref(
        realtimeDb,
        `transaction/${data.user.uid}`,
      );
      const unsubscribe = onValue(dataRefs, (snapshot) => { 
        let value = snapshot.val();
        const items = [];
        Object.keys(value).map(id=>{
          items.push({ id: id, ...value[id] });
        })
        setTransaction(items);
        console.log(items);

      })

      console.error("Error fetching data:", error);
    }
  };
  function convertToUnixTimestamp(dateString) {
    const [month, day, year] = dateString.split("-");
    const dateObj = new Date(year, month - 1, day);
    return dateObj.getTime();
  }
  function filterTransactionsByDate(transactions, startDate, endDate) {
    return transactions.filter((transaction) => {
      const billTime = parseInt(transaction.billTime);
      return billTime >= startDate && billTime <= endDate;
    });
  }

  useEffect(() => {
    const sortedData =
      transaction &&
      transaction.length > 0 &&
      transaction.sort((a, b) => {
        const timeA = parseInt(a.billTime);
        const timeB = parseInt(b.billTime);
        return timeB - timeA || currentTime - timeB - (currentTime - timeA);
      });
    let fromDateLong = convertToUnixTimestamp(
      moment(fromdate.$d).format("MM-DD-YYYY"),
    );
    let toDateLong = convertToUnixTimestamp(
      moment(toDate.$d).add(24, "hours").format("MM-DD-YYYY"),
    );
    let table =
      sortedData &&
      filterTransactionsByDate(sortedData, fromDateLong, toDateLong);
    console.log(table);
    setTableData(table);
  }, [fromdate, toDate, transaction]);

  useEffect(() => {
    let orderTotal = 0;
    tableData &&
      tableData.length > 0 &&
      tableData.map((val) => {
        let amount = getAmountByTransaction(val);
        if (amount) orderTotal += amount;
      });

    setOrderTotalValue(orderTotal);
  }, [tableData]);
  const getAmountByTransaction = (data) => {
    const orderTotal = data.menuStack.reduce(
      (acc, item) => acc + Number(item.productPrice) * Number(item.quantity),
      0,
    );
    return orderTotal;
  };

  return (
    <MainCard
      title="Sells"
      secondary={
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <DatePicker
              value={fromdate}
              label="Start Date"
              onChange={(newValue) => setFromDate(newValue)}
            />
            <DatePicker
              label="End Date"
              minDate={fromdate}
              maxDate={dayjs(currentTime)}
              onChange={(newValue) => setToDate(newValue)}
              value={toDate}
            />
          </DemoContainer>
        </LocalizationProvider>
      }
    >
      <Card sx={{ overflow: "hidden" }}>
        {orderTotalValue !== 0 && orderTotalValue.toString() !== "NaN" && (
          <Grid
            container
            justifyContent="space-between"
            sx={{ background: "#111936" }}
          >
            <Grid item sx={{ padding: 2, color: "#fff" }}>
              Total Collection: <b>₹ {orderTotalValue.toFixed(2)}</b>
            </Grid>
          </Grid>
        )}
        <TableContainer
          component={Paper}
          sx={{ borderRadius: 0, maxHeight: 440 }}
        >
          <Table aria-label="collapsible table" stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ padding: 1 }} />
                <StyledTableCell sx={{ padding: 1 }}>Date</StyledTableCell>
                <StyledTableCell align="right" sx={{ padding: 1 }}>
                  Amount
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ padding: 1 }}>
                  Mode
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData &&
                tableData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => <Row key={row.id} row={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
        {tableData && (
          <TablePagination
            rowsPerPageOptions={[25, 250, 1000]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Card>
    </MainCard>
  );
};

export default TablerIcons;

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        onClick={() => setOpen(!open)}
      >
        <TableCell sx={{ padding: 0 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ padding: 1 }}>
          {moment(Number(row.billTime)).format("DD MMM YYYY - hh:mm a")}
        </TableCell>
        <TableCell align="right" sx={{ padding: 1 }}>
          ₹{" "}
          {row.transaction.reduce(
            (accumulator, currentValue) =>
              accumulator + Number(currentValue.value),
            0,
          )}
        </TableCell>
        <TableCell align="right" sx={{ padding: 1 }}>
          {row.transaction.map((item) => item.label).join(",")}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={{ background: "#e3e3e3" }}
          >
            <Box sx={{ margin: 1, background: "#e3e3e3" }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ padding: 1 }}>Product Name</TableCell>
                    <TableCell sx={{ padding: 1 }}>Price vs Quantity</TableCell>

                    <TableCell sx={{ padding: 1 }}>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.menuStack.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell component="th" scope="row" sx={{ padding: 1 }}>
                        {historyRow.productName}
                      </TableCell>
                      <TableCell sx={{ padding: 1 }}>
                        {" "}
                        {historyRow.productPrice} x {historyRow.quantity}
                      </TableCell>

                      <TableCell sx={{ padding: 1 }}>
                        {historyRow.productPrice * historyRow.quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
