import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, setDoc } from '@firebase/firestore';
import { db } from '../../firebase';
import { gridSpacing } from 'store/constant';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({ shadow, counterSection, onClick }) => (
  <Card sx={{ mb: 3, boxShadow: shadow }} onClick={(e) => onClick(e)}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4.5,
        bgcolor: 'primary.light',
        color: 'grey.800',
        cursor: "pointer"
      }}
    >
      <Box sx={{ color: 'inherit', fontWeight:800 }}>Table: {shadow}</Box>
    </Box>
  </Card>
);

ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired
};


const UtilitiesShadow = () => {
  const [open, setOpen] = React.useState(false);
  const [err, setError] = React.useState(null);
  const [counterSection, setCounterSection] = React.useState("");
  const [counterNumber, setCounterNumber] = React.useState("");
  const data = JSON.parse(atob(localStorage.getItem("token")));
  const [counterList, setCounterList] = React.useState(null);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const fetchData = async () => {
    try {
      const userDocRef = doc(db, data.user.email, 'CounterSection'); 
      const contersCollectionRef = collection(userDocRef, 'CounterSection');
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
        return a.counterSection.localeCompare(b.counterSection, undefined, { sensitivity: 'case' });
      });
      const groupedByCounterSection = sortedData.reduce((acc, item) => {
        const section = item.counterSection;
        acc[section] = (acc[section] || []).concat(item);
        return acc;
      }, {});
      
      const result = Object.values(groupedByCounterSection).map(sectionArray => sectionArray.sort((a, b) => a.counterSection.localeCompare(b.counterSection)));
      setCounterList(result);
    
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClose = () => {
    setOpen(false);
    setCounterSection("");
    setCounterNumber("");
    setError("");
  };
  const handleSubmit = async () =>{
    if(counterSection !== "" && counterNumber !== ""){
      let newObject = {
        counterSection: counterSection.toUpperCase(),
        counterNumber: Number(counterNumber),
        active: true,
      }
      try {
      const userDocRef = doc(db, data.user.email, 'CounterSection'); // Replace with your collection name
      const menuItemsCollectionRef = collection(userDocRef, 'CounterSection');
      await addDoc(menuItemsCollectionRef, newObject);
      setOpen(false);
      setCounterSection("");
      setCounterNumber("");
      setError("");
      fetchData();
      }catch (error) {
        console.error("Error fetching data:", error);
      }
    }else{
      setError("Please check all the Fields")
    }
  }
  return (<MainCard title="Counter" secondary={<div>
    <Button variant="outlined" onClick={() => handleClickOpen()}>Add New Counter</Button>
  </div>}>
    <Grid container spacing={gridSpacing}>
      {counterList && counterList.length > 0 ? 
      counterList.map((section) =>
      <Grid item xs={12}>
        <SubCard title={section[0].counterSection} sx={{background: "#e3e3e3"}}>
          <Grid container spacing={gridSpacing}>
        
           {section.sort((a, b) => a.counterNumber - b.counterNumber).map((val) => 
              <Grid item xs={12} sm={6} md={4} lg={3} >
                <ShadowBox counterSection={val.counterSection} shadow={val.counterNumber} onClick={() =>navigate("/utils/CounterMenu/"+val.id)}/>
              </Grid>)}
        
          </Grid>
        </SubCard>
      </Grid>): 
       <Grid container direction="column" spacing={1}>
       <Grid item display={{display:"flex", flexDirection: "row", justifyContent: "space-around"}}>
         <MuiTypography variant="h5" gutterBottom sx={{paddingTop: 10}}>
        Working in progress
        </MuiTypography>   
          </Grid>
        </Grid>}
    </Grid>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{fontSize:16}}>
          {"Add New Counter"}
        </DialogTitle>
        <DialogContent>
       {err &&<b style={{color: "red"}}>{err} * <br/></b>}
          
          <br/>
         
          <DialogContentText id="alert-dialog-description">
            <TextField   value={counterSection} onChange={(e) => setCounterSection(e.target.value)} placeholder='Counter Section (floor / Section)'  sx={{ width: 250 }}/> <br/><br/>
            <TextField   value={counterNumber} onChange={(e) => setCounterNumber(e.target.value)} placeholder='Counter Number' type='number'  sx={{ width: 250 }}/> <br/><br/>
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSubmit} autoFocus color='success' variant="contained" >
            Save
          </Button>
        </DialogActions>
    </Dialog>
  </MainCard>)
};

export default UtilitiesShadow;
