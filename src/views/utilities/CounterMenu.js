import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Grid,
  Button,
  Typography,
  Fab,
  Divider,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Autocomplete from "@mui/material/Autocomplete";
import RemoveIcon from "@mui/icons-material/Remove";
import SubCard from "ui-component/cards/SubCard";
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
import { useEffect } from "react";
import { realtimeDb, db } from "../../firebase";
import CircularProgress from "@mui/material/CircularProgress";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "@firebase/firestore";
import { getDatabase, ref, onValue, once, set } from "@firebase/database";
import { height } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import moment from "moment";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CounterMenu = () => {
  const { id, table, section } = useParams();
  const [dense, setDense] = React.useState(false);
  let itemtoken = localStorage.getItem("itemtoken")
    ? JSON.parse(atob(localStorage.getItem("itemtoken")))
    : null;
  const [menuList, setMenuList] = React.useState(itemtoken);
  const data = JSON.parse(atob(localStorage.getItem("token")));
  const [productName, setProductName] = React.useState(null);
  const [menuStack, setMenuStack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [err, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const [transactionMode, setTransactionMode] = React.useState([
    {
      label: "UPI",
      checked: false,
      value: null,
    },
    {
      label: "CASH",
      checked: false,
      value: null,
    },
    {
      label: "CARD",
      checked: false,
      value: null,
    },
  ]);

  const now = new Date();
  const currentTime = Math.floor(now.getTime() / 1000);

  const getAllData = async () => {
    try {
      const dataRef = ref(
        realtimeDb,
        `orders/${data.user.email.replace("@", "").replace(".", "")}/${id}`,
      );
      const unsubscribe = onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        if (data) setMenuStack(data);
        // unsubscribe();
      });
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  const onChangeProductName = (e, newValue) => {
    if (newValue) {
      const existingItemIndex = menuStack.findIndex(
        (item) => item.id === newValue.id,
      );
      if (existingItemIndex > -1) {
        const updatedMenuStack = [...menuStack];
        updatedMenuStack[existingItemIndex].quantity += 1;
        setMenuStack(updatedMenuStack);
      } else {
        setMenuStack((prevMenuStack) => [
          ...prevMenuStack,
          { ...newValue, quantity: 1 },
        ]);
      }
      setProductName("");
      e.target.value = "";
    }
  };
  const fetchData = async () => {
    try {
      const userDocRef = doc(db, data.user.email, "MenuOrganization");
      const menuItemsCollectionRef = collection(userDocRef, "MenuItems");
      const querySnapshot = await getDocs(menuItemsCollectionRef);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setMenuList(items);
      localStorage.setItem("itemtoken", btoa(JSON.stringify(items)));
      // console.log(items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (true) {
      import("./counter.css");
    }
    fetchData();
    getAllData();
  }, []);
  const removeProductfromMenu = (id) => {
    const removedMenu = menuStack.filter((item) => item.id !== id);
    setMenuStack(removedMenu);
  };
  const addRemoveItem = (val, i) => {
    let menu = [...menuStack];
    if (val === "add") {
      menu[i].quantity++;
    } else if (val === "minus") {
      if (menu[i].quantity > 1) menu[i].quantity--;
      else {
        menu = menuStack.filter((item) => item.id !== menu[i].id);
        if (menu.length === 0) {
          method(menu);
        }
      }
    }
    setMenuStack(menu);
  };

  const method = async (menu) => {
    try {
      let objData = menu ? menu : [...menuStack];
      const dataRef = ref(
        realtimeDb,
        `orders/${data.user.email.replace("@", "").replace(".", "")}/${id}`,
      );
      await set(dataRef, objData);
      console.log("Order data written successfully!");
    } catch (error) {
      console.error("Error writing data:", error);
    }
  }; // Variable to hold unsubscribe function
  useEffect(() => {
    if (menuStack.length > 0) {
      method();
    }
  }, [menuStack]);
  const totalCost = menuStack.reduce((accumulator, product) => {
    const productTotal = product.productPrice * product.quantity;
    return accumulator + productTotal;
  }, 0);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    let newObject = {
      menuStack: menuStack,
      transaction: transactionMode.filter((x) => x.value),
    };
    try {
      const userDocRef = doc(db, data.user.email, "transaction"); // Replace with your collection name
      const menuItemsCollectionRef = collection(
        userDocRef,
        currentTime.toString(),
      );
      await addDoc(menuItemsCollectionRef, newObject);
      const dataRef = ref(
        realtimeDb,
        `orders/${data.user.email.replace("@", "").replace(".", "")}/${id}`,
      );
      await set(dataRef, null);
      navigate("/utils/Counter");
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };
  const handleChange = (event, i) => {
    let transaction = [...transactionMode];
    transaction[i].checked = event.target.checked;
    if (event.target.checked) transaction[i].value = totalCost;
    else transaction[i].value = null;
    setTransactionMode(transaction);
  };
  const handleInputChange = (event, i) => {
    let transaction = [...transactionMode];
    transaction[i].value = event.target.value;
    setTransactionMode(transaction);
  };
  useEffect(() => {
    let transactionAmountSelected = transactionMode.reduce(
      (accumulator, product) => {
        return accumulator + Number(product.value);
      },
      0,
    );
    if (transactionAmountSelected === totalCost) {
      setError(null);
    } else {
      if (transactionMode.find((x) => x.checked === true))
        setError("Amount Should be equal to Total Cost");
      else setError("Please Select Any Mode of Payment");
    }
  }, [transactionMode, open]);
  return (
    <MainCard
      title={"Order & Bill"}
      secondary={
        <Button variant="outlined" onClick={() => {}}>
          Bill View
        </Button>
      }
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography>{"Table Number: " + table + ` (${section})`}</Typography>
          <br />
          {/* <SubCard title={"Table Number: " + table +` (${section})`} sx={{height:"80vh"}}> */}
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Autocomplete
                disablePortal
                value={productName?.productName}
                onChange={(event, newValue) =>
                  onChangeProductName(event, newValue)
                }
                id="combo-box-demo"
                options={menuList.filter((item) => {
                  return !menuStack.some(
                    (removeItem) => removeItem.id === item.id,
                  );
                })}
                onClose={() => setProductName("")}
                getOptionLabel={(option) => option.productName}
                sx={{ width: "100%", fontSize: 20 }}
                renderInput={(params) => (
                  <TextField
                    variant="filled"
                    {...params}
                    label="Product Name"
                  />
                )}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ height: 50, background: "#e3e3e3", fontSize: 20 }}
                    {...props}
                  >
                    {option.productName} (₹ {option.productPrice})
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={5}>
              <List dense={dense} sx={{ width: "100%" }}>
                {menuStack.length > 0 &&
                  menuStack.map((val, i) => (
                    <ListItem
                      key={val.id}
                      secondaryAction={
                        <></>
                        // <IconButton edge="end" aria-label="delete" onClick={() => removeProductfromMenu(val.id)}>
                        //   <DeleteIcon />
                        // </IconButton>
                      }
                    >
                      <ListItemText
                        primary={val.productName}
                        secondary={"₹ " + val.productPrice}
                      />
                      <ListItemAvatar style={{ display: "flex" }}>
                        <Fab
                          size="small"
                          color="secondary"
                          aria-label="minus"
                          onClick={() => addRemoveItem("minus", i)}
                        >
                          <RemoveIcon />
                        </Fab>
                        <div
                          style={{
                            fontSize: 18,
                            width: 40,
                            alignContent: "center",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          {val.quantity}
                        </div>
                        <Fab
                          size="small"
                          color="secondary"
                          aria-label="add"
                          onClick={() => addRemoveItem("add", i)}
                        >
                          <AddIcon />
                        </Fab>
                      </ListItemAvatar>
                    </ListItem>
                  ))}
              </List>
            </Grid>
            <Grid item xs={12}>
              <Divider />
              <center>
                <h3>
                  Total Amount:{" "}
                  {totalCost.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </h3>
              </center>
              <Divider />
            </Grid>
            {menuStack.length > 0 && (
              <Grid item xs={12}>
                <center style={{ padding: 10 }}>
                  <Button
                    size="large"
                    sx={{ background: "orange", color: "#fff" }}
                    onClick={() => setOpen(true)}
                  >
                    Get Bill
                  </Button>
                </center>
                <Divider />
              </Grid>
            )}
          </Grid>
          {/* </SubCard> */}
        </Grid>
      </Grid>
      <Dialog
        open={open && menuStack.length > 0}
        fullScreen
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ fontSize: 16, width: 250 }}
        >
          Bill Payment
        </DialogTitle>
        <DialogContent style={{ background: "#e3e3e3" }}>
          <DialogContentText id="alert-dialog-description">
            <h3>Mode of Payment</h3>

            <Grid
              container
              spacing={1}
              style={{ paddingTop: 10, background: "#fff", paddingBottom: 10 }}
            >
              {err && (
                <Grid item xs={12}>
                  <b style={{ color: "red" }}>
                    {err} * <br />
                  </b>
                </Grid>
              )}

              <Grid item xs={12}>
                <FormGroup>
                  {transactionMode.map((val, i) => (
                    <Grid container>
                      <Grid item xs={3}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={val.checked}
                              defaultChecked
                              onChange={(e) => handleChange(e, i)}
                            />
                          }
                          label={val.label}
                        />
                      </Grid>
                      <Grid item xs={8}>
                        {val.checked && (
                          <TextField
                            fullWidth
                            id="filled-basic"
                            label={val.label + " Amount"}
                            variant="filled"
                            onChange={(e) => handleInputChange(e, i)}
                            type="number"
                            value={val.value}
                          />
                        )}
                      </Grid>
                    </Grid>
                  ))}
                </FormGroup>
              </Grid>
            </Grid>

            <div class="container">
              <div class="receipt_header">
                <h1>
                  <span>Durga Cafe</span>
                </h1>
                <h2>
                  Address: Sinhgad Road <span>Tel: +91 7057455569</span>
                </h2>
              </div>

              <div class="receipt_body">
                <div class="date_time_con" style={{ padding: 10 }}>
                  <div class="date">
                    {moment().format("MMM DD, YYYY").toUpperCase()}
                  </div>
                  <div class="time">{moment().format("hh:mm A")}</div>
                </div>

                <div class="items">
                  <table>
                    <thead>
                      <th>ITEM</th>
                      <th>Price</th>
                      <th>QTY</th>
                      <th>AMT</th>
                    </thead>

                    <tbody>
                      {menuStack.map((val) => (
                        <tr>
                          <td>{val.productName}</td>
                          <td>{val.productPrice}</td>
                          <td>{val.quantity}</td>
                          <td>{val.productPrice * val.quantity}</td>
                        </tr>
                      ))}
                    </tbody>

                    <tfoot>
                      <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>₹{totalCost}</td>
                      </tr>

                      {/* <tr>
                        <td>Cash</td>
                        <td></td>
                        <td>32.1</td>
                    </tr>

                    <tr>
                        <td>Change</td>
                        <td></td>
                        <td>32.1</td>
                    </tr> */}
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="setThanks">Thank You!</div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button
            onClick={handleSubmit}
            autoFocus
            color="success"
            variant="contained"
            disabled={isLoading || err !== null}
            endIcon={isLoading && <CircularProgress size="small" />}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
          <Button
            onClick={handleSubmit}
            autoFocus
            color="success"
            variant="contained"
            disabled
          >
            Save & Print
          </Button>
        </DialogActions>
      </Dialog>
    </MainCard>
  );
};

export default CounterMenu;
