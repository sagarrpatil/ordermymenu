import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Box, Card, Grid, Typography, Button } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { useEffect } from 'react';
import { realtimeDb } from '../../firebase';
import { getDatabase, ref, onValue, once } from '@firebase/database';


const CounterMenu = () => {
  const { id, table, section } = useParams();
  const getAllData = async () => {
    try {
      const dataRef = ref(realtimeDb);
      const unsubscribe = onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        unsubscribe();
      });
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (<MainCard title={"Table Number: " + table +` (${section})`} secondary={
    <Button variant="outlined" onClick={() => {}}>Bill View</Button>
  }>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <SubCard title="Order's">
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6} md={4} lg={2}>

            </Grid>     
          </Grid>
        </SubCard>
      </Grid>
   
    </Grid>
  </MainCard>)
};

export default CounterMenu;
