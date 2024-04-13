import { Button, Grid, Link, TextField } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import React, { useEffect } from 'react';
// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, setDoc } from '@firebase/firestore';
import { db } from '../../firebase';


const Typography = () => {
  const [open, setOpen] = React.useState(false);
  const [productType, setProductType] = React.useState("");
  const [productName, setProductName] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  const [err, setError] = React.useState(null);
  const data = JSON.parse(atob(localStorage.getItem("token")));
  const handleClickOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    // console.log(data.user.email)
  },[])

  const handleClose = () => {
    setOpen(false);
    setProductType("");
    setProductName("");
    setProductPrice("");
    setError("");
  };
  const onChangeProductName = (e, newValue) => {
    setProductType(newValue)
  }
  const handleSubmit = async () =>{
    let newObject = {
      productType: productType.label,
      productName: productName,
      productPrice: Number(productPrice)
    }
    if(productPrice !== "" && productName !== "" && productType !=="" && Number(productPrice) > 0)
    try {
      const userDocRef = doc(db, data.user.email, 'MenuOrganization'); // Replace with your collection name
      const menuItemsCollectionRef = collection(userDocRef, 'MenuItems');
      await addDoc(menuItemsCollectionRef, newObject);
      setOpen(false);
      setProductType("");
      setProductName("");
      setProductPrice("");
      setError("");
    } catch (error) {
      console.error("Error creating data:", error);
      setOpen(false);
    } else{
      setError("Please check all the Fields")
    }
  }
  return (<MainCard title="Menu Management" secondary={<Button variant="outlined" onClick={() => handleClickOpen()}>Add Menu Items</Button>}>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={3}>
        <SubCard title="Section">
          <Grid container direction="column" spacing={1}>
           
            <Grid item>
              <MuiTypography variant="h3" gutterBottom>
                h3. Heading
              </MuiTypography>
            </Grid>
           
          </Grid>
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SubCard title="Sub title">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <MuiTypography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
              </MuiTypography>
            </Grid>
            <Grid item>
              <MuiTypography variant="subtitle2" gutterBottom>
                subtitle2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
              </MuiTypography>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
   
    </Grid>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Your Menu"}
        </DialogTitle>
        <DialogContent>
       {err &&<b style={{color: "red"}}>{err} * <br/></b>}
          
          <br/>
          <Autocomplete
              disablePortal
              value={productType}
              onChange={(event, newValue) => onChangeProductName(event, newValue)}
              id="combo-box-demo"
              options={type}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Product Type" />}
            /><br/>
          <DialogContentText id="alert-dialog-description">
            <TextField   value={productName} onChange={(e) => setProductName(e.target.value)} placeholder='Product Name' sx={{ width: 300 }}/> <br/><br/>
            <TextField   value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder='Product Price' type='number' sx={{ width: 300 }}/> <br/><br/>
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSubmit} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
  </MainCard>)
};

export default Typography;
var type = [
  { label: 'Baverages'},
  { label: 'Mojito' },
   ]
