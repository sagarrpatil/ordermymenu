import { Button, Grid, Link, TextField } from "@mui/material";
import MuiTypography from "@mui/material/Typography";
import React, { useEffect } from "react";
// project imports
import SubCard from "ui-component/cards/SubCard";
import MainCard from "ui-component/cards/MainCard";
import SecondaryAction from "ui-component/cards/CardSecondaryAction";
import { gridSpacing } from "store/constant";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Autocomplete from "@mui/material/Autocomplete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "@firebase/firestore";
import { db } from "../../firebase";

const Typography = () => {
  const [open, setOpen] = React.useState(false);
  const [menuType, setMenuType] = React.useState("");
  let TOP = localStorage.getItem("TOP")
    ? JSON.parse(atob(localStorage.getItem("TOP")))
    : null;
  const [TypeOfProducts, setTypeOfProducts] = React.useState(TOP);
  const [menuopen, setMenuOpen] = React.useState("");
  const [productType, setProductType] = React.useState("");
  const [productName, setProductName] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  let TMLT = localStorage.getItem("TMLT")
    ? JSON.parse(atob(localStorage.getItem("TMLT")))
    : null;
  const [menuListType, setMenuListType] = React.useState(TMLT);
  const [err, setError] = React.useState(null);
  const data = JSON.parse(atob(localStorage.getItem("token")));
  const [menuList, setMenuList] = React.useState(null);
  const [obj, setObj] = React.useState(null);
  const [sectionSelected, setSectionSelected] = React.useState(
    TOP ? TOP[0] : null,
  );
  const handleClickOpen = () => {
    setOpen(true);
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
      fetchDataType(items);
      // console.log(items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchDataType = async (menulistdata) => {
    try {
      const userDocRef = doc(db, data.user.email, "MenuOrganization");
      const menuItemsCollectionRef = collection(userDocRef, "MenuTypes");
      const querySnapshot = await getDocs(menuItemsCollectionRef);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data().type);
      });
      let val = [...new Set(items)];
      setTypeOfProducts(val);
      localStorage.setItem("TOP", btoa(JSON.stringify(val)));
      setSectionSelected(val[0]);
      selectMenuList(val[0], menulistdata);
      // console.log(TypeOfProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (obj) {
      setProductType(obj.productType);
      setProductName(obj.productName);
      setProductPrice(obj.productPrice);
      setOpen(true);
    }
  }, [obj]);

  const handleClose = () => {
    setOpen(false);
    setObj(null);
    setProductType("");
    setProductName("");
    setProductPrice("");
    setError("");
  };
  const handleMenuClose = () => {
    setMenuOpen(false);
    setMenuType("");
    setError("");
  };
  const onChangeProductName = (e, newValue) => {
    setProductType(newValue);
  };
  async function deleteMenuItem(itemId) {
    try {
      const userDocRef = doc(db, data.user.email, "MenuOrganization");
      const menuItemsCollectionRef = collection(userDocRef, "MenuItems");
      const itemRef = doc(menuItemsCollectionRef, itemId);
      await deleteDoc(itemRef);
      fetchData();
      console.log("Item deleted successfully!");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }
  const handleSubmitMenuType = async () => {
    // console.log(menuType)
    if (menuType !== "")
      try {
        const userDocRef = doc(db, data.user.email, "MenuOrganization"); // Replace with your collection name
        const menuItemsCollectionRef = collection(userDocRef, "MenuTypes");
        await addDoc(menuItemsCollectionRef, { type: menuType });
        handleMenuClose();
        fetchDataType();
      } catch (error) {
        console.error("Error creating data:", error);
        setOpen(false);
      }
    else {
      setError("Please check all the Fields");
    }
  };
  const handleSubmit = async () => {
    let newObject = {
      productType: productType,
      productName: productName,
      productPrice: Number(productPrice),
      active: true,
    };
    if (
      productPrice !== "" &&
      productName !== "" &&
      productType !== "" &&
      Number(productPrice) > 0
    )
      try {
        const userDocRef = doc(db, data.user.email, "MenuOrganization"); // Replace with your collection name
        const menuItemsCollectionRef = collection(userDocRef, "MenuItems");
        if (obj) {
          const itemRef = doc(menuItemsCollectionRef, obj.id);
          await updateDoc(itemRef, newObject);
        } else {
          await addDoc(menuItemsCollectionRef, newObject);
        }
        setObj(null);
        setOpen(false);
        setProductType("");
        setProductName("");
        setProductPrice("");
        setError("");
        fetchData();
      } catch (error) {
        console.error("Error creating data:", error);
        setOpen(false);
      }
    else {
      setError("Please check all the Fields");
    }
  };
  const selectMenuList = (val, menulistdata) => {
    setSectionSelected(val);
    let menuData =
      menulistdata && menulistdata.filter((x) => x.productType === val);
    setMenuListType(menuData);
    localStorage.setItem("TMLT", btoa(JSON.stringify(menuData)));
  };

  return (
    <MainCard
      title="Menu Management"
      secondary={
        <div>
          <Button variant="outlined" onClick={() => handleClickOpen()}>
            Add Menu Items
          </Button>
        </div>
      }
    >
      <Grid container spacing={gridSpacing}>
        <Grid item xs={3} sm={3} sx={{ position: "relative", zIndex: 100 }}>
          <Button
            variant="outlined"
            style={{ padding: 5, fontSize: 10 }}
            onClick={() => setMenuOpen(true)}
          >
            Add Menu Type
          </Button>
          <MenuList dense sx={{ width: 105 }}>
            <Divider style={{ margin: 0 }} />
            {TypeOfProducts &&
              TypeOfProducts.map((val) => (
                <>
                  <MenuItem
                    style={{
                      backgroundColor:
                        sectionSelected === val ? "tomato" : "#fff",
                      padding: 26,
                    }}
                    onClick={() => selectMenuList(val, menuList)}
                  >
                    <ListItemText style={{ paddingTop: 8, paddingBottom: 4 }}>
                      <span style={{ fontSize: 18 }}>{val}</span>
                    </ListItemText>
                  </MenuItem>
                  <Divider style={{ margin: 0 }} />
                </>
              ))}
          </MenuList>
        </Grid>
        <Grid
          item
          xs={9}
          sm={9}
          sx={{ position: "static" }}
          style={{ padding: 0, paddingLeft: 24 }}
        >
          {menuListType && menuListType.length > 0 ? (
            <TableContainer sx={{ padding: "inherit" }}>
              <Table aria-label="simple table" sx={{ padding: 0 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    {/* <TableCell>Product Type</TableCell> */}
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Update</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {menuListType.map((val) => (
                    <TableRow
                      key={val.productName}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {val.productName}
                      </TableCell>
                      {/* <TableCell>{val.productType}</TableCell> */}
                      <TableCell align="center">₹ {val.productPrice}</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={() => setObj(val)}
                        >
                          Update
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => deleteMenuItem(val.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            menuListType &&
            menuListType.length === 0 && (
              <Grid container direction="column" spacing={1}>
                <Grid
                  item
                  display={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <MuiTypography
                    variant="h5"
                    gutterBottom
                    sx={{ paddingTop: 10 }}
                  >
                    No Menu Items Available
                  </MuiTypography>
                </Grid>
              </Grid>
            )
          )}
        </Grid>
      </Grid>

      <Dialog
        open={menuopen}
        onClose={handleMenuClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ fontSize: 16 }}>
          {"Add New Menu Type"}
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
              value={menuType}
              onChange={(e) => setMenuType(e.target.value)}
              placeholder="Menu Type"
            />{" "}
            <br />
            <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleMenuClose}>Close</Button>
          <Button
            onClick={handleSubmitMenuType}
            autoFocus
            color="success"
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ fontSize: 16 }}>
          {obj ? "Update your menu" : "Add Your Menu"}
        </DialogTitle>
        <DialogContent>
          {err && (
            <b style={{ color: "red" }}>
              {err} * <br />
            </b>
          )}

          <br />
          <Autocomplete
            disablePortal
            value={productType}
            onChange={(event, newValue) => onChangeProductName(event, newValue)}
            id="combo-box-demo"
            options={TypeOfProducts}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="Product Type" />
            )}
          />
          <br />
          <DialogContentText id="alert-dialog-description">
            <TextField
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Product Name"
              sx={{ width: 250 }}
            />{" "}
            <br />
            <br />
            <TextField
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Product Price"
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

export default Typography;
var type = ["Baverages", "Mojito"];
