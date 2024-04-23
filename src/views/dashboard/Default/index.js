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
import moment from "moment";

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const data = JSON.parse(atob(localStorage.getItem("token")));
  const [transaction, setTransaction] = useState([]);
  const [orderTotalUPI, setOrderTotalUPI] = useState(0);
  const [orderTotalCash, setOrderTotalCash] = useState(0);
  const [orderTotalCard, setOrderTotalCard] = useState(0);
  const [TimeSet, setTimeSet] = useState("day");
  useEffect(() => {
    fetchData("day");
  }, []);

  const fetchData = async (time) => {
    try {
      const userDocRef = doc(db, data.user.email, "transaction");
      const menuItemsCollectionRef = collection(userDocRef, "transaction");
      const querySnapshot = await getDocs(menuItemsCollectionRef);
      const items = [];
      setTimeSet(time);
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setTransaction(items);
      // console.log("items", items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    let orderTotalUPI = 0;
    transaction.length > 0 &&
      transaction.map((val) => {
        let amount = getAmountByTransaction(val, "UPI");
        if (amount) orderTotalUPI += amount;
      });
    setOrderTotalUPI(orderTotalUPI);

    let orderTotalcash = 0;
    transaction.length > 0 &&
      transaction.map((val) => {
        let amount = getAmountByTransaction(val, "CASH");
        if (amount) orderTotalcash += amount;
      });
    setOrderTotalCash(orderTotalcash);

    let orderTotalcard = 0;
    transaction.length > 0 &&
      transaction.map((val) => {
        let amount = getAmountByTransaction(val, "CARD");
        if (amount) orderTotalcard += amount;
      });
    setOrderTotalCard(orderTotalcard);
  }, [transaction]);

  const getAmountByTransaction = (data, type) => {
    let date = Number(data.billTime);
    const today = moment().isSame(date, TimeSet);
    if (today) {
      const orderTotal = data.transaction
        .filter((transaction) => transaction.label === type)
        .reduce((acc, item) => acc + Number(item.value), 0);
      return orderTotal;
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
            <TotalOrderLineChartCard
              transaction={transaction}
              isLoading={isLoading}
              fetchData={(TimeSet) => fetchData(TimeSet)}
            />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              {orderTotalUPI > 0 && (
                <Grid item sm={6} xs={6} md={6} lg={12}>
                  <TotalIncomeLightCard
                    type="UPI"
                    orderTotalUPI={orderTotalUPI}
                    transaction={transaction}
                    isLoading={isLoading}
                  />
                </Grid>
              )}
              {orderTotalCash > 0 && (
                <Grid item sm={6} xs={6} md={6} lg={12}>
                  <TotalIncomeLightCard
                    type="CASH"
                    orderTotalUPI={orderTotalCash}
                    transaction={transaction}
                    isLoading={isLoading}
                  />
                </Grid>
              )}
              {orderTotalCard > 0 && (
                <Grid item sm={6} xs={6} md={6} lg={12}>
                  <TotalIncomeLightCard
                    type="CARD"
                    orderTotalUPI={orderTotalCard}
                    transaction={transaction}
                    isLoading={isLoading}
                  />
                </Grid>
              )}
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
            {/* <PopularCard  isLoading={isLoading} /> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
