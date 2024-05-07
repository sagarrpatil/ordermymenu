import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";

import { getDatabase, ref, onValue, once, set } from "@firebase/database";
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
import PouchDB from "pouchdb";

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const data = JSON.parse(atob(localStorage.getItem("token")));
  const [transaction, setTransaction] = useState([]);
  const [orderTotalUPI, setOrderTotalUPI] = useState(0);
  const [orderTotalCash, setOrderTotalCash] = useState(0);
  const [orderTotalCard, setOrderTotalCard] = useState(0);
  const [TimeSet, setTimeSet] = useState("day");
  const dbTransaction = new PouchDB("transaction");
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    fetchData("day");
  }, []);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  const fetchData = async (time) => {
    if (isOnline) {
      try {
        const dataRefs = ref(realtimeDb, `transaction/${data.user.uid}`);
        const unsubscribe = onValue(dataRefs, (snapshot) => {
          let value = snapshot.val();
          const items = [];
          Object.keys(value).map((id) => {
            items.push({ id: id, ...value[id] });
          });
          setTimeSet(time);
          setTransaction(items);

          let obj = {
            _id: "0",
            items: items,
          };
          dbTransaction
            .get("0")
            .then((latestDoc) => {
              obj._rev = latestDoc._rev ? latestDoc._rev : null;
              dbTransaction.put(obj, (err, response) => {
                if (err) {
                  console.log("Error creating object:", err);
                } else {
                  console.log("Object created successfully:", response);
                }
              });
            })
            .catch((err) => {
              dbTransaction.put(obj, (err, response) => {
                if (err) {
                  console.log("Error creating object:", err);
                } else {
                  console.log("Object created successfully:", response);
                }
              });
            });

          console.log(items);
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    } else {
      dbTransaction
        .get("0")
        .then((latestDoc) => {
          setLoading(false);
          setTimeSet(time);
          setTransaction(latestDoc.items);
          console.log(
            "Document retrieved successfully:",
            latestDoc,
            latestDoc.items,
          );
        })
        .catch((err) => {
          setLoading(false);
          console.error("Error retrieving document:", err);
        });
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
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} transaction={transaction} />
          </Grid>
          <Grid item xs={12} md={4} lg={8}>
            <TotalGrowthBarChart
              isLoading={isLoading}
              transactions={transaction}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
