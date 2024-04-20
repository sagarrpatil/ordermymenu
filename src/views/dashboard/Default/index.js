import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";

// project imports
import EarningCard from "./EarningCard";
import PopularCard from "./PopularCard";
import TotalOrderLineChartCard from "./TotalOrderLineChartCard";
import TotalIncomeDarkCard from "./TotalIncomeDarkCard";
import TotalIncomeLightCard from "./TotalIncomeLightCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";
import { gridSpacing } from "store/constant";
import { db, realtimeDb } from "../../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "@firebase/firestore";

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const data = JSON.parse(atob(localStorage.getItem("token")));
  const [transaction, setTransaction]  = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userDocRef = doc(db, data.user.email, "transaction");
      const menuItemsCollectionRef = collection(
        userDocRef,
        "transaction"
      );
      const querySnapshot = await getDocs(menuItemsCollectionRef);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setTransaction(items);
      console.log(items)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          {/* <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid> */}
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard transaction={transaction} isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <Popular  Card isLoading={isLoading} /> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
