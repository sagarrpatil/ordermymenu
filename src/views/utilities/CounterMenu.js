import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Box, Card, Grid, Typography, Button } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';


const CounterMenu = () => {
  const { id, table, section } = useParams();
  console.log(id)
  return (<MainCard title={"Order of " + table +` (${section})`} secondary={
    <Button variant="outlined" onClick={() => {}}>Bill View</Button>
  }>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <SubCard title="Card">
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
