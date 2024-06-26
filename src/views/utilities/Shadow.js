import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Grid, TextField } from "@mui/material";
import MuiTypography from "@mui/material/Typography";
import SubCard from "ui-component/cards/SubCard";
import MainCard from "ui-component/cards/MainCard";
import moment from "moment";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "@firebase/firestore";
import { db, realtimeDb } from "../../firebase";
import { gridSpacing } from "store/constant";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { getDatabase, ref, onValue, once, set } from "@firebase/database";
// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({
  shadow,
  counterSection,
  onClick,
  tableFilled,
  tableTime,
}) => {
  console.log(tableFilled);
  const [timeNow, setTimeNow] = useState(new Date().getTime());
  const totalCost = tableFilled
    ? tableFilled.reduce((accumulator, product) => {
        const productTotal = product.productPrice * product.quantity;
        return accumulator + productTotal;
      }, 0)
    : 0;
  useEffect(() => {
    setInterval(() => {
      if (tableTime) {
        setTimeNow(new Date().getTime());
      }
    }, 1000);
  }, []);
  return (
    <Card
      sx={{
        mb: 3,
        boxShadow: shadow,
        height: 100,
        bgcolor: tableFilled ? "#FFBD98" : "#F3FFCE",
      }}
      onClick={(e) => onClick(e)}
    >
      <div
        style={{
          display: "flex",
          cursor: "pointer",
          position: "absolute",
        }}
      >
        <center style={{ padding: 10 }}>
          <img
            src={require(
              tableFilled
                ? "../../assets/images/FillChair.png"
                : "../../assets/images/EmptyCheer.png",
            )}
            width={30}
          />
        </center>
        <br />
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 4.5,
          bgcolor: tableFilled ? "#FFBD98" : "#F3FFCE",
          color: "grey.800",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{ color: "inherit", fontWeight: 800, textAlign: "center" }}
          style={{ paddingTop: -14 }}
        >
          <b style={{ fontSize: 18 }}>{shadow}</b>

          {tableFilled && (
            <>
              <br />
              <span style={{ color: "green" }}>₹ {totalCost}</span>
              <br />
              {timeNow && tableTime && (
                <span style={{ fontSize: 10, fontWeight: "200" }}>
                  {" "}
                  {moment(new Date(tableTime))
                    .fromNow()
                    .replace("minutes", "min")}
                </span>
              )}
            </>
          )}
        </Box>
      </Box>
    </Card>
  );
};

ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired,
};

const UtilitiesShadow = () => {
  const [open, setOpen] = React.useState(false);
  const [err, setError] = React.useState(null);
  const [counterSection, setCounterSection] = React.useState("");
  const [counterNumber, setCounterNumber] = React.useState("");
  const data = JSON.parse(atob(localStorage.getItem("token")));
  let counter = localStorage.getItem("dataTab")
    ? atob(localStorage.getItem("dataTab"))
    : null;
  const [counterList, setCounterList] = React.useState(JSON.parse(counter));
  const [tableFilled, setTableFilled] = React.useState([]);
  const [upcommingAmont, setupcommingAmont] = React.useState(0);
  const [tableTime, setTableTime] = React.useState(null);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const getAllTableData = async () => {
    try {
      const dataRef = ref(
        realtimeDb,
        `orders/${data.user.email.replace("@", "").replace(".", "")}`,
      );
      const unsubscribe = onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        setTableFilled(data);
        // unsubscribe();
        let combinedTotals = 0;

        for (const key in data) {
          const order = data[key];
          let totalPrice = 0;
          for (const item of order) {
            totalPrice += item.productPrice * item.quantity;
          }
          combinedTotals += totalPrice;
        }
        setupcommingAmont(combinedTotals);
      });
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };
  const getAllTableTime = async () => {
    try {
      const dataRef = ref(
        realtimeDb,
        `time/${data.user.email.replace("@", "").replace(".", "")}`,
      );
      const unsubscribe = onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        setTableTime(data);
        console.log(data);
      });
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };
  function calculateOrderTotal(order) {
    let totalPrice = 0;
    for (const item of order) {
      totalPrice += item.productPrice * item.quantity;
    }
    return totalPrice;
  }
  const fetchData = async () => {
    try {
      const userDocRef = doc(db, data.user.email, "CounterSection");
      const contersCollectionRef = collection(userDocRef, "CounterSection");
      const querySnapshot = await getDocs(contersCollectionRef);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      const sortedData = items.sort((a, b) => {
        const numberA = a.counterSection.match(/\d+/)?.[0] || 0;
        const numberB = b.counterSection.match(/\d+/)?.[0] || 0;
        if (!isNaN(numberA) && !isNaN(numberB)) {
          return numberA - numberB;
        }
        return a.counterSection.localeCompare(b.counterSection, undefined, {
          sensitivity: "case",
        });
      });
      const groupedByCounterSection = sortedData.reduce((acc, item) => {
        const section = item.counterSection;
        acc[section] = (acc[section] || []).concat(item);
        return acc;
      }, {});

      const result = Object.values(groupedByCounterSection).map(
        (sectionArray) =>
          sectionArray.sort((a, b) =>
            a.counterSection.localeCompare(b.counterSection),
          ),
      );
      setCounterList(result);
      localStorage.setItem("dataTab", btoa(JSON.stringify(result)));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
    getAllTableData();
    getAllTableTime();
  }, []);
  const handleClose = () => {
    setOpen(false);
    setCounterSection("");
    setCounterNumber("");
    setError("");
  };
  const handleSubmit = async () => {
    if (counterSection !== "" && counterNumber !== "") {
      let newObject = {
        counterSection: counterSection.toUpperCase().trim(),
        counterNumber: Number(counterNumber),
        active: true,
      };
      try {
        const userDocRef = doc(db, data.user.email, "CounterSection"); // Replace with your collection name
        const menuItemsCollectionRef = collection(userDocRef, "CounterSection");
        await addDoc(menuItemsCollectionRef, newObject);
        setOpen(false);
        setCounterSection("");
        setCounterNumber("");
        setError("");
        fetchData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      setError("Please check all the Fields");
    }
  };

  return (
    <MainCard
      title="Counter"
      secondary={
        <div>
          <Button variant="outlined" onClick={() => handleClickOpen()}>
            Add New Counter
          </Button>
        </div>
      }
    >
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sx={{ padding: 0 }}>
          <span style={{ paddingRight: 0 }}>
            Queue: <b>₹ {upcommingAmont}</b>
          </span>
        </Grid>
        {counterList && counterList.length > 0 ? (
          counterList.map((section) => (
            <Grid item xs={12}>
              <SubCard
                title={section[0].counterSection}
                sx={{ background: "#e3e3e3" }}
              >
                <Grid container spacing={gridSpacing}>
                  {section
                    .sort((a, b) => a.counterNumber - b.counterNumber)
                    .map((val) => (
                      <Grid item xs={6} sm={6} md={2} lg={2}>
                        <ShadowBox
                          tableFilled={tableFilled ? tableFilled[val.id] : null}
                          tableTime={
                            tableTime && tableTime[val.id]
                              ? tableTime[val.id]
                              : null
                          }
                          counterSection={val.counterSection}
                          shadow={val.counterNumber}
                          onClick={() =>
                            navigate(
                              "/utils/CounterMenu/" +
                                val.id +
                                "/" +
                                val.counterNumber +
                                "/" +
                                val.counterSection,
                            )
                          }
                        />
                      </Grid>
                    ))}
                </Grid>
              </SubCard>
            </Grid>
          ))
        ) : (
          <Grid container direction="column" spacing={1}>
            <Grid
              item
              display={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <MuiTypography variant="h5" gutterBottom sx={{ paddingTop: 10 }}>
                Working in progress
              </MuiTypography>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ fontSize: 16 }}>
          {"Add New Counter"}
        </DialogTitle>
        <DialogContent>
          {err && (
            <b style={{ color: "red" }}>
              {err} * <br />
            </b>
          )}

          <br />

          <DialogContentText id="alert-dialog-description">
            <TextField
              value={counterSection}
              onChange={(e) => setCounterSection(e.target.value)}
              placeholder="Counter Section (floor / Section)"
              sx={{ width: 250 }}
            />{" "}
            <br />
            <br />
            <TextField
              value={counterNumber}
              onChange={(e) => setCounterNumber(e.target.value)}
              placeholder="Counter Number"
              type="number"
              sx={{ width: 250 }}
            />{" "}
            <br />
            <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button
            onClick={handleSubmit}
            autoFocus
            color="success"
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </MainCard>
  );
};

export default UtilitiesShadow;
