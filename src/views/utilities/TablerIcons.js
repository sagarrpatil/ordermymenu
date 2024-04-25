import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
// project imports
import MainCard from "ui-component/cards/MainCard";
import SecondaryAction from "ui-component/cards/CardSecondaryAction";

// assets
import LinkIcon from "@mui/icons-material/Link";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { gridSpacing } from "store/constant";
import { db, realtimeDb } from "../../firebase";
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

const TablerIcons = () => {
  const data = JSON.parse(atob(localStorage.getItem("token")));
  const [transaction, setTransaction] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const currentTime = Date.now();
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
      console.error("Error fetching data:", error);
    }
  };

  const sortedData =
    transaction &&
    transaction.length > 0 &&
    transaction.sort((a, b) => {
      const timeA = parseInt(a.billTime);
      const timeB = parseInt(b.billTime);
      return timeB - timeA || currentTime - timeB - (currentTime - timeA);
    });

  return (
    <MainCard
      title="Sells and Transaction"
      secondary={
        <SecondaryAction icon={<LinkIcon fontSize="small" />} link="" />
      }
    >
      <Card sx={{ overflow: "hidden" }}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Transaction Time</TableCell>
                <TableCell align="right">Transaction Amount</TableCell>
                <TableCell align="right">Payment Mode</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData &&
                sortedData.map((row) => <Row key={row.id} row={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </MainCard>
  );
};

export default TablerIcons;

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {moment(Number(row.billTime)).format("DD MMM YYYY - hh:mm a")}
        </TableCell>
        <TableCell align="right">
          ₹{" "}
          {row.transaction.reduce(
            (accumulator, currentValue) => accumulator + currentValue.value,
            0,
          )}
        </TableCell>
        <TableCell align="right">
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
                    <TableCell>Product Name</TableCell>
                    <TableCell>Product Price vs Quantity</TableCell>

                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.menuStack.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell component="th" scope="row">
                        {historyRow.productName}
                      </TableCell>
                      <TableCell>
                        {" "}
                        {historyRow.productPrice} x {historyRow.quantity}
                      </TableCell>

                      <TableCell>
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

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];
