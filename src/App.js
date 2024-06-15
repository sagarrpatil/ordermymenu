import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

// routing
import Routes from "routes";

// defaultTheme
import themes from "themes";

// project imports
import NavigationScroll from "layout/NavigationScroll";
import { useEffect } from "react";

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
  useEffect(() => {
      let itemtoken = [
         {
           "id": "0BBoif85izXcbcKKupgo",
           "productName": "Club Sandwich GRILLED",
           "active": true,
           "productType": "Grilled Sandwiches",
           "productPrice": 80
         },
         {
           "id": "0QVEZR6wGom7oQIYSskz",
           "productType": "CHINESE (VEG )",
           "productPrice": 150,
           "active": true,
           "fav": false,
           "productName": "Veg Crispy"
         },
         {
           "id": "0SZp4LqnI4aQJ4kNhvB0",
           "productType": "Beverages",
           "productPrice": 35,
           "active": true,
           "productName": "Black Coffee"
         },
         {
           "id": "0hIW3JuxGFxXpTxfdM73",
           "productPrice": 90,
           "active": true,
           "productName": "Peri Peri Cheese Fries",
           "productType": "Pasta & Fries"
         },
         {
           "id": "11RMdxy3m113paU7QpkE",
           "productName": "Thick Chocolate ",
           "productType": "Beverages",
           "productPrice": 50,
           "fav": true,
           "active": true
         },
         {
           "id": "19KkF1fqFacPnTlM1qRd",
           "fav": false,
           "productName": "Paneer Pasanda",
           "productType": "Paneer Special",
           "productPrice": 190,
           "active": true
         },
         {
           "id": "21l8BzmoVHIYvRfcZZWw",
           "productType": "Paratha",
           "fav": false,
           "active": true,
           "productName": "Paneer cheese Paratha",
           "productPrice": 120
         },
         {
           "id": "2GltnYEnN5AfHJrGGafc",
           "active": true,
           "productType": "Sandwiches",
           "productName": "Bun Jam",
           "productPrice": 45
         },
         {
           "id": "2S4ZMQPKrBEi5ShqNwhr",
           "productName": "Veg Tawa",
           "productType": "Veg Special",
           "active": true,
           "fav": false,
           "productPrice": 170
         },
         {
           "id": "2vB9g2yWytPcPHgafi4W",
           "productName": "Hot chocolate ",
           "active": true,
           "productType": "Beverages",
           "productPrice": 35
         },
         {
           "id": "2vpDDAnd72iAoyF8LNOK",
           "productType": "South Indian",
           "productName": "Cut Dosa",
           "productPrice": 75,
           "fav": false,
           "active": true
         },
         {
           "id": "35jj0703niqTwNkUqoAi",
           "active": true,
           "productType": "Pasta & Fries",
           "productName": "Cheese Fries",
           "productPrice": 70
         },
         {
           "id": "3NKKGxf4LbwldmVn4gEs",
           "active": true,
           "productPrice": 65,
           "productName": "Cheese Egg Maggie",
           "productType": "Snacks"
         },
         {
           "id": "3SmdTw1Ctm7SNzD20Ltm",
           "productPrice": 55,
           "active": true,
           "productType": "Beverages",
           "productName": "Peach Ice tea"
         },
         {
           "id": "3YUY8ZLi7mLM2OZAqONo",
           "productPrice": 70,
           "productType": "Grilled Sandwiches",
           "active": true,
           "productName": "Veg Cheese Sandwich GRILLED"
         },
         {
           "id": "3dyUekve8P9c2Aw7MAa3",
           "productType": "Mojito",
           "productName": "Original mojito ",
           "productPrice": 80,
           "active": true
         },
         {
           "id": "3qhGZp6xGYgygu4oASp2",
           "productName": "Veg 65 Dry",
           "active": true,
           "fav": false,
           "productPrice": 140,
           "productType": "CHINESE (VEG )"
         },
         {
           "id": "447MLcOiZIpwJqZzfV5q",
           "active": true,
           "productPrice": 170,
           "productType": "Kaju Special",
           "productName": "Kaju Curry",
           "fav": false
         },
         {
           "id": "48OBigcZMYmwbRStlnj6",
           "productPrice": 60,
           "productType": "Rice",
           "active": true,
           "fav": false,
           "productName": "Jeera Rice (half)"
         },
         {
           "id": "4GUq5gBpSoLb6TdUYmyT",
           "productPrice": 140,
           "active": true,
           "productType": "Rice",
           "productName": "Egg Pulav"
         },
         {
           "id": "4TudS1zmaNOtPA6oud8y",
           "productPrice": 170,
           "active": true,
           "productType": "Mushroom Special",
           "fav": false,
           "productName": "Mushroom Kadhai"
         },
         {
           "id": "4yAzDN0pJuiU1KwLlx6N",
           "productPrice": 70,
           "productName": "Pineapple ",
           "productType": "Milk shake with Ice Cream",
           "active": true
         },
         {
           "id": "5PbAiGhIaj1Zv36r1AUt",
           "productType": "Paneer Special",
           "productName": "Panner Angara",
           "productPrice": 200,
           "fav": false,
           "active": true
         },
         {
           "id": "5ST4iPGeBOtYeZKuPIw4",
           "productPrice": 70,
           "active": true,
           "productName": "Strawberry ",
           "productType": "Milk shake with Ice Cream"
         },
         {
           "id": "5YaUSTdWVpReFYbG2kBu",
           "fav": false,
           "active": true,
           "productType": "Paneer Special",
           "productPrice": 170,
           "productName": "Paneer Mattar"
         },
         {
           "id": "5rezZDeRjLCZqjBYYMr4",
           "fav": false,
           "productType": "CHINESE (VEG )",
           "productPrice": 150,
           "active": true,
           "productName": "Hong Kong fried Rice"
         },
         {
           "id": "5xbHTWrCVk6MMYpqFqOd",
           "productPrice": 55,
           "productType": "Beverages",
           "productName": "Cold Coffee with crush",
           "fav": true,
           "active": true
         },
         {
           "id": "6B1F9BNtiVtcYyHpzs46",
           "productName": "Bun Maska",
           "productPrice": 40,
           "active": true,
           "productType": "Sandwiches"
         },
         {
           "id": "6HQB467tMlgNJ7djU9Ch",
           "productPrice": 45,
           "active": true,
           "productName": "Veg Sandwich",
           "productType": "Sandwiches"
         },
         {
           "id": "6YW2UgIghzZGHuDRNoPw",
           "fav": false,
           "productName": "veg thali",
           "productType": "Veg Thali",
           "active": true,
           "productPrice": 120
         },
         {
           "id": "6Yc6taWn63oH8Gz362yk",
           "productType": "Sandwiches",
           "productPrice": 45,
           "active": true,
           "productName": "Grill Bread Butter"
         },
         {
           "id": "6ijqGhtypyRR3rptEDME",
           "productName": "Paneer Bhurji",
           "productType": "Cafe Durga Special",
           "active": true,
           "productPrice": 120
         },
         {
           "id": "7FUbbqbv2dOAUAv6pgeN",
           "active": true,
           "productType": "Veg Thali",
           "productPrice": 60,
           "productName": "veg thali small",
           "fav": false
         },
         {
           "id": "7KaJXBuFSNjoonrIOUyh",
           "active": true,
           "productName": "Panner Handi",
           "productPrice": 200,
           "fav": false,
           "productType": "Paneer Special"
         },
         {
           "id": "7XWpTy2EvzVvBNyIZy00",
           "productName": "Veg Hakka Noodles ",
           "productType": "CHINESE (VEG )",
           "active": true,
           "productPrice": 140,
           "fav": false
         },
         {
           "id": "7v1jden3bGTEfZRTzW3p",
           "active": true,
           "fav": false,
           "productName": "thick strong cold coffee",
           "productPrice": 60,
           "productType": "Beverages"
         },
         {
           "id": "8GCW0MLocEgI2bO2jRmh",
           "fav": false,
           "productType": "South Indian",
           "active": true,
           "productPrice": 120,
           "productName": "Bombay Uttappa "
         },
         {
           "id": "9O4ipU8nN9m02nx9UfFV",
           "productName": "Upma",
           "productType": "Snacks",
           "active": true,
           "productPrice": 30
         },
         {
           "id": "9f3vrzhpQ3C2gUePOuIY",
           "fav": false,
           "productPrice": 160,
           "productName": "Paneer Chilly",
           "productType": "CHINESE (VEG )",
           "active": true
         },
         {
           "id": "9hpkKYAAnFhEg7dGWYH2",
           "productPrice": 160,
           "active": true,
           "productName": "Creamy White Pasta",
           "productType": "Snacks"
         },
         {
           "id": "B3l4634DoahaavwVEVAw",
           "fav": false,
           "active": true,
           "productType": "South Indian",
           "productName": "Mysore Sada Dosa",
           "productPrice": 80
         },
         {
           "id": "BAvTYi0Coyxcej3hugYs",
           "productType": "Extra",
           "productPrice": 10,
           "productName": "Extra Parcel Charges Large",
           "active": true
         },
         {
           "id": "BEb2ZL4vLRt9oxLCLA8z",
           "productPrice": 65,
           "fav": false,
           "productName": "Plain Cheese Sandwich",
           "active": true,
           "productType": "Sandwiches"
         },
         {
           "id": "BtbV3pZFwAeHwCTDhNJY",
           "fav": false,
           "productPrice": 85,
           "active": true,
           "productType": "Paratha",
           "productName": "Green Peas Paratha "
         },
         {
           "id": "CQZTd5UG2xGi25s0CVRB",
           "productPrice": 30,
           "active": true,
           "productName": "Limbu Sarbat",
           "productType": "Drinks"
         },
         {
           "id": "CkO9G6cvvdUYDjRTgiJu",
           "productPrice": 15,
           "productType": "Extra",
           "fav": false,
           "productName": "butter pav",
           "active": true
         },
         {
           "id": "D53vMZrIqaEiw3x2pHnh",
           "active": true,
           "productName": "Loni Spanj Dosa",
           "productPrice": 70,
           "fav": false,
           "productType": "South Indian"
         },
         {
           "id": "DL8Rk6ZN0kg0mwayegnh",
           "productType": "Cafe Durga Special",
           "active": true,
           "productPrice": 60,
           "productName": "Omelette sandwich "
         },
         {
           "id": "Dmi7tc4Fp0jlzboEbLZj",
           "active": true,
           "productPrice": 35,
           "productType": "Beverages",
           "productName": "Hot coffee 1/2"
         },
         {
           "id": "DoNtweDTrvAdcrNpszFX",
           "productPrice": 100,
           "fav": false,
           "active": true,
           "productType": "Paratha",
           "productName": "Paneer Paratha"
         },
         {
           "id": "DuC7VTo7WwlC6DEaTwS7",
           "active": true,
           "productName": "Thick chocolate with crush",
           "productPrice": 60,
           "productType": "Beverages"
         },
         {
           "id": "E3wfMihnTsTD2aT6J0zE",
           "productName": "Paneer Butter Masala",
           "productType": "Paneer Special",
           "active": true,
           "fav": false,
           "productPrice": 190
         },
         {
           "id": "E50MKxg7swooGsMDUnue",
           "productName": "Mushroom Tikka Masala",
           "fav": false,
           "active": true,
           "productType": "Mushroom Special",
           "productPrice": 190
         },
         {
           "id": "EDhbYfndqLxLLxfmxv6M",
           "productName": "Paneer Pulav Rice",
           "active": true,
           "productPrice": 160,
           "productType": "Rice"
         },
         {
           "id": "EGFfc1DGzUk2nVVgfZrI",
           "productPrice": 170,
           "active": true,
           "productName": "Veg Kolhapuri",
           "fav": false,
           "productType": "Veg Special"
         },
         {
           "id": "ETH1DW5H2jyI5P7iQ5dv",
           "active": true,
           "productPrice": 30,
           "productName": "Cold milk",
           "productType": "Beverages"
         },
         {
           "id": "EUgSRLI2doV4A7sWzIOT",
           "active": true,
           "productName": "chease grill sandwitch",
           "productType": "Grilled Sandwiches",
           "productPrice": 70
         },
         {
           "id": "EbHbfl29sZUfGbdekSOE",
           "productName": "Cheese Jam Bread",
           "productType": "Sandwiches",
           "productPrice": 55,
           "active": true
         },
         {
           "id": "EboRDXtmZLLt70wqPIzf",
           "productPrice": 60,
           "productName": "Cold coffee with ice cream",
           "active": true,
           "productType": "Beverages"
         },
         {
           "id": "FEI7oYQHLFG7uj7ImXEb",
           "productName": "Fried Papad",
           "active": true,
           "productPrice": 30,
           "fav": false,
           "productType": "Papad"
         },
         {
           "id": "FLkVYjBVAjoeAPctXWYm",
           "active": true,
           "productType": "Rice",
           "productPrice": 160,
           "productName": "Paneer Pulav"
         },
         {
           "id": "FNdpNsBscYfhskU8hazw",
           "productPrice": 40,
           "productName": "Cold chocolate",
           "productType": "Beverages",
           "active": true
         },
         {
           "id": "FVKYAFoNTMOWEGekLcUa",
           "productPrice": 70,
           "productType": "Milk shake with Ice Cream",
           "productName": "Banana",
           "active": true
         },
         {
           "id": "FZQzDafTo78JcPOybTUT",
           "productPrice": 65,
           "fav": false,
           "productName": "Plain Butter Dosa",
           "active": true,
           "productType": "South Indian"
         },
         {
           "id": "FjHsixgRioHW2QvRthfo",
           "productName": "Masala Pav (double)",
           "productType": "Pav Bhaji",
           "active": true,
           "productPrice": 90
         },
         {
           "id": "Fxcgm5StP7jAZJlLQFT6",
           "active": true,
           "productType": "Beverages",
           "productPrice": 50,
           "productName": "Strong Cold Coffee"
         },
         {
           "id": "Fz6v9PyYV8KEFcX4WQql",
           "productType": "Pasta & Fries",
           "productName": "Creamy Cheese Fries",
           "active": true,
           "productPrice": 100
         },
         {
           "id": "GPE41gSMR3SFC5IjZkBH",
           "productType": "Veg Special",
           "productPrice": 180,
           "fav": false,
           "active": true,
           "productName": "Veg Handi"
         },
         {
           "id": "GautyTf4H30W6UoiKB3V",
           "productPrice": 40,
           "productType": "Beverages",
           "productName": "Cold Coffee",
           "fav": true,
           "active": true
         },
         {
           "id": "GxjXNF3ZCJGNqD4YhwIH",
           "productType": "Pav Bhaji",
           "productName": "Masala Pav (single)",
           "productPrice": 50,
           "active": true
         },
         {
           "id": "HD3yQK9V4ktDBnEsjyz6",
           "productName": "Aaloo Mattar",
           "fav": false,
           "productType": "Veg Special",
           "productPrice": 140,
           "active": true
         },
         {
           "id": "Hkk8eA52bkOL1fOWIIuE",
           "productPrice": 25,
           "productName": "Roasted papad",
           "productType": "Starter",
           "active": true
         },
         {
           "id": "I39mwOHSZvGMgKvJp2xc",
           "active": true,
           "productPrice": 25,
           "productName": "Roasted Papad",
           "fav": false,
           "productType": "Papad"
         },
         {
           "id": "INkqyTlQ4NmlnvAkqiQC",
           "productType": "Rice",
           "productPrice": 120,
           "productName": "Dal Khichadi tadka",
           "active": true
         },
         {
           "id": "JgPrfD1xfJq6uvsR4mhm",
           "productName": "Paneer Cheese Sandwich",
           "productPrice": 100,
           "productType": "Grilled Sandwiches",
           "active": true
         },
         {
           "id": "KAZS7edmducdXT791PgS",
           "productName": "Veg Pulav",
           "productPrice": 130,
           "productType": "Rice",
           "active": true
         },
         {
           "id": "KGkJxA3Bk0PE0Nlo4eqR",
           "active": true,
           "productPrice": 200,
           "productType": "Paneer Special",
           "productName": "Panner Mushroom Masala",
           "fav": false
         },
         {
           "id": "KNTjDWXm88u13vOhfGxM",
           "productType": "Veg Special",
           "productPrice": 190,
           "productName": "Veg Angara",
           "fav": false,
           "active": true
         },
         {
           "id": "KYok0T2OSQr4E2wX357U",
           "productName": "Onion uttappa",
           "fav": false,
           "productPrice": 80,
           "active": true,
           "productType": "South Indian"
         },
         {
           "id": "KZP5u8wgEA6mAYf2t3kM",
           "productPrice": 55,
           "productName": "Bread Butter Jam",
           "productType": "Sandwiches",
           "active": true
         },
         {
           "id": "KouLzcUoCaPhTNZFe9w3",
           "productName": "Masala Dosa",
           "productPrice": 70,
           "productType": "South Indian",
           "fav": false,
           "active": true
         },
         {
           "id": "L8eTJztAmoBXBSjWKkVy",
           "productType": "Mushroom Special",
           "productPrice": 180,
           "active": true,
           "productName": "Mushroom Butter Masala",
           "fav": false
         },
         {
           "id": "LO6KjCOhDcuoWVOuLetZ",
           "fav": false,
           "active": true,
           "productName": "Veg Noodles fried Rice",
           "productPrice": 130,
           "productType": "CHINESE (VEG )"
         },
         {
           "id": "LTGswWlFL0e5P2uQJ7RR",
           "productName": "Cut cheese Dosa",
           "active": true,
           "productType": "South Indian",
           "productPrice": 90,
           "fav": false
         },
         {
           "id": "LnaoXvdd8o2vVj0zNVL9",
           "productType": "Rice",
           "productPrice": 100,
           "active": true,
           "productName": "Jeera Rice"
         },
         {
           "id": "LshOXDTWDMkIa72WgSVd",
           "productType": "Pav Bhaji",
           "active": true,
           "productName": "Extra Pav (Pav Bhaji 1 Jodi)",
           "productPrice": 20
         },
         {
           "id": "LswnAv11hpRyb50wfYiM",
           "productName": "Paneer 65",
           "productPrice": 150,
           "fav": false,
           "active": true,
           "productType": "CHINESE (VEG )"
         },
         {
           "id": "MXUZsJIAvlk3llWCnW9l",
           "active": true,
           "productName": "Oreo Milk Shake",
           "productPrice": 80,
           "productType": "Milk shake with Ice Cream"
         },
         {
           "id": "MgHKWunKuCS4AvwDfPeK",
           "productPrice": 65,
           "active": true,
           "productName": "Sabudana Vada (Mon. & Thu.)",
           "productType": "Snacks"
         },
         {
           "id": "Mojx1ZQqHxxHx7Uw7wwd",
           "productPrice": 50,
           "productName": "Cold Coffee 1/2",
           "active": true,
           "productType": "Beverages",
           "fav": true
         },
         {
           "id": "NaQ8IL9GK3lQV0q6cvy0",
           "active": true,
           "productPrice": 80,
           "productName": "Club Cheese Sandwich",
           "productType": "Sandwiches"
         },
         {
           "id": "NtyDX8qkaQMdu2VgV8hx",
           "productPrice": 210,
           "productName": "Panner Tawa Handi",
           "fav": false,
           "active": true,
           "productType": "Paneer Special"
         },
         {
           "id": "O8aDcbNo2Jxww8EfYr3b",
           "productName": "Extra Cheese",
           "productType": "Extra",
           "productPrice": 15,
           "active": true
         },
         {
           "id": "Odd3EGJM1RybL3IbCVhf",
           "fav": false,
           "productType": "Veg Special",
           "productName": "Dal Tadaka",
           "productPrice": 130,
           "active": true
         },
         {
           "id": "P4okkozrk4jav5cQBtWN",
           "active": true,
           "productPrice": 150,
           "fav": false,
           "productName": "veg Manchurian Noodles",
           "productType": "CHINESE (VEG )"
         },
         {
           "id": "PX5Xojb8kl2CzCPVPtOS",
           "active": true,
           "productType": "Beverages",
           "productName": "Thick Cold Coffee",
           "productPrice": 50,
           "fav": true
         },
         {
           "id": "PYoyozci97hXnIhPvtC2",
           "productName": "Shev Bhaji",
           "active": true,
           "productPrice": 130,
           "productType": "Veg Special",
           "fav": false
         },
         {
           "id": "QJA0bK3l5CToAyoxvZ4M",
           "active": true,
           "fav": false,
           "productPrice": 110,
           "productType": "Rice",
           "productName": "Dal Khichadi"
         },
         {
           "id": "QSS9F7fbUL97kd6boudN",
           "active": true,
           "productType": "Mojito",
           "productName": "Blue splash ",
           "productPrice": 80
         },
         {
           "id": "Rwd8i1HM64OurGhjnBQ0",
           "fav": true,
           "active": true,
           "productName": "Tea",
           "productPrice": 20,
           "productType": "Beverages"
         },
         {
           "id": "SOxPriDWraENrk0L44IP",
           "active": true,
           "productType": "Beverages",
           "productName": "Lemon ice tea",
           "productPrice": 55
         },
         {
           "id": "SQH1VmQgqf84rfjjfu5W",
           "productPrice": 150,
           "productType": "CHINESE (VEG )",
           "active": true,
           "productName": "Veg Manchurian Sechw. Noodles",
           "fav": false
         },
         {
           "id": "TU1MilViMKpDd9d7ehiW",
           "productType": "Beverages",
           "productName": "Hot milk ",
           "productPrice": 30,
           "active": true
         },
         {
           "id": "TYdTDRp37GOEsvw6ovdR",
           "productPrice": 100,
           "productType": "Paratha",
           "fav": false,
           "active": true,
           "productName": "Cheese Paratha"
         },
         {
           "id": "TkssRkCTOaU2V26vHeHC",
           "active": true,
           "productType": "CHINESE (VEG )",
           "productName": "Veg Dry Manchurian",
           "productPrice": 150,
           "fav": false
         },
         {
           "id": "U1ghv38L8OLYGuEt3yq8",
           "productName": "Aaloo Masala",
           "productType": "Veg Special",
           "active": true,
           "productPrice": 130,
           "fav": false
         },
         {
           "id": "U5wnFeQmboq4noWx5Vwh",
           "productName": "Cold Bournvita",
           "productPrice": 40,
           "active": true,
           "productType": "Beverages"
         },
         {
           "id": "U7hKM3DxzWathfmuBmhs",
           "productPrice": 130,
           "productName": "Egg Rice",
           "productType": "Egg Thali",
           "active": true
         },
         {
           "id": "UP1LymlXAmmZN9BAAGxV",
           "productType": "Pasta & Fries",
           "active": true,
           "productPrice": 60,
           "productName": "French Fries"
         },
         {
           "id": "VBJ1S682ngRZjHJ92qYx",
           "active": true,
           "productPrice": 80,
           "productName": "Paneer Grilled Sandwich ",
           "productType": "Grilled Sandwiches"
         },
         {
           "id": "VbErwbOrdjdHeVdWzq3A",
           "productType": "South Indian",
           "fav": false,
           "active": true,
           "productName": "Onion Tomato Uttappa ",
           "productPrice": 100
         },
         {
           "id": "WwS0PPhLmPOSnh0yfi2R",
           "active": true,
           "productType": "Grilled Sandwiches",
           "productPrice": 110,
           "productName": "Chocolate Cheeese Sandwich"
         },
         {
           "id": "Xk68J608EdizpBWSYiRA",
           "active": true,
           "productType": "Snacks",
           "productName": "Maggie",
           "productPrice": 50
         },
         {
           "id": "XyZZqPi12qsIJMYJvEvT",
           "productPrice": 160,
           "fav": false,
           "active": true,
           "productType": "Veg Special",
           "productName": "Mix Veg"
         },
         {
           "id": "YB2gFu274n9OS5T9QKcn",
           "fav": false,
           "productType": "CHINESE (VEG )",
           "productPrice": 150,
           "active": true,
           "productName": "Tripple Schezwan Fried Rice"
         },
         {
           "id": "YYOPm1hpEfrZrRtyOlci",
           "fav": false,
           "productType": "CHINESE (VEG )",
           "active": true,
           "productName": "Egg Fried Rice",
           "productPrice": 150
         },
         {
           "id": "YbOoc8RKfQjkW70TcxMY",
           "active": true,
           "productPrice": 70,
           "productName": "Omelette sandwich grill",
           "productType": "Cafe Durga Special"
         },
         {
           "id": "Z2vN7nnAaRfcwHiTom7I",
           "productType": "South Indian",
           "productName": "plain Cheese Dosa",
           "productPrice": 65,
           "fav": false,
           "active": true
         },
         {
           "id": "Z9Xnw8diTpSRtZrJuLHT",
           "active": true,
           "productPrice": 190,
           "fav": false,
           "productName": "Veg Tawa Handi",
           "productType": "Veg Special"
         },
         {
           "id": "ZlkOrd4rQUXM9Zygtoqs",
           "productType": "Papad",
           "active": true,
           "productPrice": 30,
           "productName": "Fried Papad",
           "fav": false
         },
         {
           "id": "abGSxo0zO9RdNwr6R5kH",
           "productName": "Chocolate milk shake ",
           "productType": "Milk shake with Ice Cream",
           "active": true,
           "productPrice": 70
         },
         {
           "id": "aisSLFjXv97a9DKIGM9K",
           "productName": "Tomato Uttappa",
           "productPrice": 80,
           "fav": false,
           "active": true,
           "productType": "South Indian"
         },
         {
           "id": "ascpG8u3HROs06HhrOnK",
           "productName": "Club Cheese Grilled Sandwich",
           "productType": "Grilled Sandwiches",
           "productPrice": 90,
           "active": true
         },
         {
           "id": "aukWvQFq6CUWeMHfnTKK",
           "productType": "Beverages",
           "productName": "Tea",
           "active": true,
           "productPrice": 20
         },
         {
           "id": "bM8UFrYKzA6M29QsF7WT",
           "active": true,
           "productName": "Masala Maggie",
           "productPrice": 55,
           "productType": "Snacks"
         },
         {
           "id": "bRBsQMMfBNvp9nUQWr79",
           "productName": "Egg Thali",
           "fav": false,
           "productType": "Veg Thali",
           "active": true,
           "productPrice": 120
         },
         {
           "id": "bixT02VeFsyhJ8aI5w6M",
           "active": true,
           "productType": "Snacks",
           "productName": "Masala Egg Maggie",
           "productPrice": 60
         },
         {
           "id": "bsoA2vSnNbASdrx9ZOHo",
           "active": true,
           "productPrice": 130,
           "productName": "Veg fried Rice ",
           "fav": false,
           "productType": "CHINESE (VEG )"
         },
         {
           "id": "cAB8LGkthjQ7DGWWxWVV",
           "productType": "CHINESE (VEG )",
           "productName": "Manchurian Fried Rice ",
           "productPrice": 150,
           "active": true,
           "fav": false
         },
         {
           "id": "cCA2bae5wRmgDlW8Yvx5",
           "productPrice": 30,
           "productName": "lemon drink",
           "productType": "Beverages",
           "active": true
         },
         {
           "id": "cQRnqlqnPhWT7XO2GyN1",
           "productType": "South Indian",
           "active": true,
           "productPrice": 75,
           "fav": false,
           "productName": "Masala Butter Dosa"
         },
         {
           "id": "cVZ41c90DEopAQy4KCrL",
           "active": true,
           "productPrice": 180,
           "fav": false,
           "productName": "Paneer Kadhai",
           "productType": "Paneer Special"
         },
         {
           "id": "cm3y2lA635NDePorFcmO",
           "active": true,
           "productPrice": 115,
           "productName": "Amul Pav Bhaji",
           "productType": "Pav Bhaji"
         },
         {
           "id": "cuvdyzA06ZyoMGph8soz",
           "productType": "Sandwiches",
           "productName": "Veg Cheese Sandwich",
           "active": true,
           "productPrice": 55
         },
         {
           "id": "d2ocUl9RE9k1DaPXgSXi",
           "productName": "Corn Sandwich",
           "productType": "Grilled Sandwiches",
           "productPrice": 80,
           "active": true
         },
         {
           "id": "d9faRwBuqJaUYxUBu6lg",
           "productPrice": 15,
           "active": true,
           "productType": "Snacks",
           "productName": "Wadav Pav"
         },
         {
           "id": "djgKyqwC1xcFCbzYsHTd",
           "productName": "Extra Chapati",
           "productPrice": 10,
           "active": true,
           "productType": "Extra"
         },
         {
           "id": "eF7ZQuAFYVrLiqnuDxto",
           "productName": "Chinese Fried Rice",
           "active": true,
           "fav": false,
           "productPrice": 140,
           "productType": "CHINESE (VEG )"
         },
         {
           "id": "eHvhasj7DJTd9BcqlIzd",
           "fav": true,
           "productPrice": 20,
           "active": true,
           "productName": "Water Bottle",
           "productType": "Water"
         },
         {
           "id": "eRHV37qzImAbgxHSFxnD",
           "productName": "Masala Fries",
           "productPrice": 70,
           "productType": "Pasta & Fries",
           "active": true
         },
         {
           "id": "eqAtfSomjO3SwcyYu4I0",
           "productType": "Snacks",
           "productName": "Pohe",
           "productPrice": 30,
           "active": true
         },
         {
           "id": "fFvfk63hVSXL19XuMBPM",
           "productName": "Kaju Masala",
           "fav": false,
           "active": true,
           "productType": "Kaju Special",
           "productPrice": 180
         },
         {
           "id": "fOTXGRNizQG34bpXYlcM",
           "productPrice": 40,
           "productName": "Hot bournvita",
           "productType": "Beverages",
           "active": true
         },
         {
           "id": "fXFQFhdqKGQ83i8iAWmY",
           "productPrice": 40,
           "productType": "Beverages",
           "active": true,
           "productName": "Strong Hot Coffee"
         },
         {
           "id": "ff4APBfHsvoA2JxF895o",
           "productPrice": 70,
           "productType": "Snacks",
           "active": true,
           "productName": "Misal Pav"
         },
         {
           "id": "g5IieXyCYjCdsW32AG5P",
           "productName": "Masala Cheese Dosa",
           "productPrice": 85,
           "productType": "South Indian",
           "fav": false,
           "active": true
         },
         {
           "id": "gGJQCBums4Uk7N5xxgBC",
           "productType": "Pasta & Fries",
           "active": true,
           "productPrice": 80,
           "productName": "Masala Cheese Fries"
         },
         {
           "id": "gI8Ditxiv9NNINOW3T6c",
           "productPrice": 55,
           "productName": "Black Current Ice Tea",
           "productType": "Beverages",
           "active": true
         },
         {
           "id": "gOyHOZHgEx3z25dRP4J2",
           "productPrice": 100,
           "active": true,
           "productName": "Veg Manchow Soup",
           "productType": "Soups",
           "fav": false
         },
         {
           "id": "gVXV54lwmvvFBukVLelq",
           "fav": false,
           "productType": "South Indian",
           "productName": "Tomato Cheese Uttappa",
           "productPrice": 90,
           "active": true
         },
         {
           "id": "giKSPLOfOhl9L1DGBYFW",
           "active": true,
           "productType": "Rice",
           "productPrice": 100,
           "productName": "Dal Rice"
         },
         {
           "id": "gzaNKr8zjZC5yxMG3E9U",
           "productType": "Veg Special",
           "productName": "Veg Bhuna",
           "fav": false,
           "productPrice": 160,
           "active": true
         },
         {
           "id": "h7US26iZtEDzvbHoj4QW",
           "productPrice": 80,
           "productType": "Pasta & Fries",
           "active": true,
           "productName": "Peri Peri Fries"
         },
         {
           "id": "hRABcnWbdD0bJFbW8AZs",
           "productPrice": 150,
           "active": true,
           "productName": "Tawa Pulav",
           "productType": "Rice"
         },
         {
           "id": "hRfM03HZ5IBxttiVZYYj",
           "productPrice": 10,
           "active": true,
           "productType": "Extra",
           "productName": "Extra Dahi Vati"
         },
         {
           "id": "hc0pJ3SCaoeYWjV3xWy4",
           "productName": "Mattar Pulav",
           "productPrice": 120,
           "active": true,
           "productType": "Rice"
         },
         {
           "id": "hd1QBraDyCLq9ZvJEITR",
           "productType": "Sandwiches",
           "productPrice": 70,
           "active": true,
           "productName": "Club Sandwich"
         },
         {
           "id": "hofhbikYnlrC6h7KhnmA",
           "productPrice": 105,
           "productType": "Grilled Sandwiches",
           "active": true,
           "productName": "Chocolate Sandwich"
         },
         {
           "id": "i3EZ201IvPcsztzmIYM0",
           "productPrice": 170,
           "active": true,
           "fav": false,
           "productType": "Veg Special",
           "productName": "Veg Kadhai"
         },
         {
           "id": "i9hwnnTX7STXYfkRDgO9",
           "active": true,
           "productPrice": 150,
           "productType": "Pasta & Fries",
           "productName": "Desi Red Pasta"
         },
         {
           "id": "iKYnVbFWJnL9FlptjFSP",
           "productName": "Paneer Kolhapuri",
           "productType": "Paneer Special",
           "fav": false,
           "active": true,
           "productPrice": 180
         },
         {
           "id": "irRB2uYsFbXA6Iq4e0LM",
           "active": true,
           "productPrice": 190,
           "fav": false,
           "productType": "Paneer Special",
           "productName": "Panner Tawa"
         },
         {
           "id": "jw3sFc1cZkgKH1C9GejG",
           "productType": "Water",
           "active": true,
           "productPrice": 10,
           "productName": "Small Water Bottle"
         },
         {
           "id": "kBK7To8CCOwpbtM3AdVF",
           "active": true,
           "productType": "Sandwiches",
           "productName": "cheese sandwich plain",
           "productPrice": 65,
           "fav": false
         },
         {
           "id": "kRpJZ1IXr8088jRBZkRd",
           "fav": false,
           "productType": "Cafe Durga Special",
           "active": true,
           "productPrice": 45,
           "productName": "Egg omelette single"
         },
         {
           "id": "kXhpI0vLaWbpZ9GGi3hB",
           "productType": "Beverages",
           "fav": false,
           "productPrice": 50,
           "productName": "strong hot coffe 1/2",
           "active": true
         },
         {
           "id": "kfjTvx42TTaBbGD1iPyB",
           "productName": "Spicy chilli mojito",
           "productPrice": 80,
           "productType": "Mojito",
           "active": true
         },
         {
           "id": "l04b5zjkViIqEtSRuWmp",
           "fav": false,
           "productName": "Aloo Paratha",
           "productPrice": 80,
           "productType": "Paratha",
           "active": true
         },
         {
           "id": "ldJPPOTicKwrnKCfBgpZ",
           "productType": "Mojito",
           "productName": "Lime & Mint Mojito",
           "active": true,
           "productPrice": 80
         },
         {
           "id": "lhswDfhe4645ehTeKn6Y",
           "productName": "Mysore Masala Dosa",
           "fav": false,
           "productPrice": 90,
           "productType": "South Indian",
           "active": true
         },
         {
           "id": "mEUbw48GcAbdcnSErD2x",
           "fav": false,
           "productPrice": 190,
           "productName": "Paneer Tikka Masala",
           "active": true,
           "productType": "Paneer Special"
         },
         {
           "id": "mJ7S1kuAHnVH8xpAwPjZ",
           "fav": false,
           "productName": "Amul Masala Onion Ch. Cut Dosa",
           "productType": "South Indian",
           "productPrice": 100,
           "active": true
         },
         {
           "id": "mX3RG2IZdo9oTcbaDTPF",
           "productName": "extra pav (Pav bhaji 1 jodi)",
           "productPrice": 20,
           "fav": false,
           "productType": "Pav Bhaji",
           "active": true
         },
         {
           "id": "nvbLN138oHc1poCesB5T",
           "active": true,
           "productName": "Pav Single",
           "fav": false,
           "productPrice": 5,
           "productType": "Extra"
         },
         {
           "id": "oHHRoFaidPMw1P02k8d9",
           "active": true,
           "productName": "Dal Fry",
           "productType": "Veg Special",
           "fav": false,
           "productPrice": 110
         },
         {
           "id": "odPNAGP4Dvoy7QHBtYTM",
           "productName": "Schezwan Masala Dosa",
           "productType": "South Indian",
           "fav": false,
           "productPrice": 90,
           "active": true
         },
         {
           "id": "ou6dGRYDMVNAiAyw0gec",
           "productType": "Snacks",
           "active": true,
           "productPrice": 55,
           "productName": "Egg Maggie"
         },
         {
           "id": "ovb60Rxwn5sOJZ7wUycI",
           "productPrice": 40,
           "productName": "Bread Butter",
           "active": true,
           "productType": "Sandwiches"
         },
         {
           "id": "prGj1XzWY8dcKGuVMhb6",
           "productPrice": 100,
           "fav": false,
           "productName": "Mysore Masala Cheese Dosa",
           "productType": "South Indian",
           "active": true
         },
         {
           "id": "pwm7G00MnmWdFGq9y6xc",
           "productType": "Paneer Special",
           "fav": false,
           "productPrice": 170,
           "productName": "Palak Panner",
           "active": true
         },
         {
           "id": "qY6SuHyZaQD2lLryuNtc",
           "productPrice": 190,
           "active": true,
           "productName": "Paneer Maratha",
           "fav": false,
           "productType": "Paneer Special"
         },
         {
           "id": "qZyOQAjqDtCkwVXL1NWS",
           "productType": "Rice",
           "active": true,
           "productPrice": 80,
           "productName": "Plain Rice"
         },
         {
           "id": "r1EJ2JVoLeZvkqq4ZZXc",
           "productName": "Egg omelette double ",
           "active": true,
           "productType": "Cafe Durga Special",
           "productPrice": 65
         },
         {
           "id": "rIli323kkZQV5G9emh4C",
           "productName": "Gobi Paratha",
           "active": true,
           "productType": "Paratha",
           "fav": false,
           "productPrice": 80
         },
         {
           "id": "rJnM8at15CNZsEZvBQNJ",
           "productPrice": 65,
           "productName": "Egg half Fry double ",
           "active": true,
           "productType": "Cafe Durga Special"
         },
         {
           "id": "rUjkrdxcFC3rYonn4lKf",
           "productName": "Veg Tawa Kadhai",
           "productPrice": 180,
           "productType": "Veg Special",
           "fav": false,
           "active": true
         },
         {
           "id": "rmvm7gT1cXteNfi8tfRq",
           "productPrice": 140,
           "productName": "Veg Schezwan Fried Rice ",
           "fav": false,
           "productType": "CHINESE (VEG )",
           "active": true
         },
         {
           "id": "s6ktq9kgpFe55NFHtY5V",
           "productPrice": 55,
           "active": true,
           "productName": "Butter Maggie",
           "productType": "Snacks"
         },
         {
           "id": "sIaM4AZ8XDfFQj8otlas",
           "productName": "Paneer Pav Bhaji",
           "productPrice": 130,
           "productType": "Pav Bhaji",
           "active": true
         },
         {
           "id": "seeSzYkaTIGgO6bwRHKU",
           "productName": "Paneer Crispy",
           "active": true,
           "fav": false,
           "productPrice": 160,
           "productType": "CHINESE (VEG )"
         },
         {
           "id": "sknWQEkPUZpyEsDpbCaZ",
           "productPrice": 90,
           "fav": false,
           "active": true,
           "productType": "South Indian",
           "productName": "Onion Cheese uttappa "
         },
         {
           "id": "sn3rni2TEDJqJCRqI7e6",
           "active": true,
           "productType": "CHINESE (VEG )",
           "fav": false,
           "productName": "Paneer Fried Rice ",
           "productPrice": 150
         },
         {
           "id": "srV9OlbwFFte29oMpQBr",
           "active": true,
           "productPrice": 150,
           "productType": "CHINESE (VEG )",
           "productName": "Manchurian Schezwan Fried Rice",
           "fav": false
         },
         {
           "id": "tCvkfCXcOl3MhrnrVoPi",
           "productPrice": 60,
           "productName": "Sabudana Khichadi (Mon. & Thu.)",
           "productType": "Snacks",
           "active": true
         },
         {
           "id": "tdbo6gb2qyYQDK2hjm6X",
           "productType": "Kaju Special",
           "active": true,
           "productPrice": 190,
           "fav": false,
           "productName": "Kaju Curry"
         },
         {
           "id": "ttikHAOLvM0ipR56Exom",
           "active": true,
           "productPrice": 10,
           "fav": false,
           "productType": "Extra",
           "productName": "Pav Extra Double"
         },
         {
           "id": "txfiRgT9XJ9qksYHZSe4",
           "productPrice": 100,
           "active": true,
           "productType": "Pav Bhaji",
           "productName": "Pav Bhaji"
         },
         {
           "id": "u93ZM1yTkACz2h5oiR37",
           "active": true,
           "productPrice": 160,
           "productName": "Schezwan Noddles",
           "fav": false,
           "productType": "CHINESE (VEG )"
         },
         {
           "id": "u9A87J8jtZBtkQWRmo93",
           "fav": true,
           "productType": "Beverages",
           "productPrice": 30,
           "productName": "Hot Coffee",
           "active": true
         },
         {
           "id": "uJzFgg0pEABeROtOnC9a",
           "productName": "Corn Cheese Sandwich",
           "active": true,
           "productPrice": 90,
           "productType": "Grilled Sandwiches"
         },
         {
           "id": "uXU2YUEyBgWSNKnUeJuI",
           "productType": "Paneer Special",
           "active": true,
           "fav": false,
           "productPrice": 210,
           "productName": "Panner Tawa Handi"
         },
         {
           "id": "uY0RX6Rw1yl2KRzliLyo",
           "productName": "Mushroom Handi",
           "active": true,
           "productPrice": 180,
           "fav": false,
           "productType": "Mushroom Special"
         },
         {
           "id": "v2DMAeqI9ruMYKqjiHbZ",
           "active": true,
           "productPrice": 70,
           "productName": "Bun omelette ",
           "productType": "Cafe Durga Special"
         },
         {
           "id": "vL3iTfX2dD1mSZzQ1cg3",
           "fav": false,
           "productPrice": 140,
           "active": true,
           "productType": "CHINESE (VEG )",
           "productName": "Veg singapuri Fried Rice"
         },
         {
           "id": "vi7rcT6w24rSBIZ7WiD7",
           "productName": "Masala Papad",
           "productPrice": 45,
           "fav": false,
           "active": true,
           "productType": "Papad"
         },
         {
           "id": "viY3ZbfaqhsaG0hHOmMc",
           "active": true,
           "productPrice": 170,
           "productName": "Mushroom Masala",
           "fav": false,
           "productType": "Mushroom Special"
         },
         {
           "id": "wRGyYkTyeSJIGfHLk0ph",
           "productName": "Extra Parcel Charges Small",
           "productPrice": 5,
           "active": true,
           "productType": "Extra"
         },
         {
           "id": "xQcCBw28fXd3UCoI4Spk",
           "active": true,
           "productType": "Cafe Durga Special",
           "productName": "Egg bhurji double",
           "productPrice": 65
         },
         {
           "id": "xTz4F8FORokDQUJXWH7x",
           "productName": "Egg half fry single ",
           "productPrice": 40,
           "productType": "Cafe Durga Special",
           "active": true
         },
         {
           "id": "xrYtKoLU7zxceZkI3Sep",
           "fav": false,
           "active": true,
           "productName": "Egg Bhurji Single",
           "productPrice": 45,
           "productType": "Cafe Durga Special"
         },
         {
           "id": "xtdWhtVtYCeb6OEX5XZA",
           "productType": "Pav Bhaji",
           "active": true,
           "productPrice": 15,
           "productName": "Extra Pav (Misal / Bhurji 1 Jodi)"
         },
         {
           "id": "yGaYSPHXIvRSFUOyfoos",
           "productName": "cheese sandwich plain",
           "fav": false,
           "productPrice": 65,
           "active": true,
           "productType": "Sandwiches"
         },
         {
           "id": "yLOttJu0T0KtNHol3qr2",
           "productName": "Cheese Masala Maggie",
           "productType": "Snacks",
           "active": true,
           "productPrice": 60
         },
         {
           "id": "yNeqDE7PtRxSIOfxxpQ1",
           "productType": "Beverages",
           "productPrice": 45,
           "productName": "Tea with bun muska",
           "active": true
         },
         {
           "id": "yZZzFeeeSh1e2nEgThZz",
           "productPrice": 170,
           "active": true,
           "fav": false,
           "productType": "Veg Special",
           "productName": "Veg Maratha"
         },
         {
           "id": "ymY9bd4sojq3OzEJK9oU",
           "productType": "Beverages",
           "productPrice": 60,
           "productName": "Thick cold coffee with crush",
           "active": true
         },
         {
           "id": "ypGgBl6VB1sM3sJgz5nW",
           "productType": "South Indian",
           "fav": false,
           "productName": "Plain Dosa",
           "active": true,
           "productPrice": 50
         },
         {
           "id": "zENRhm158Swn1DvdsLzc",
           "active": true,
           "productPrice": 90,
           "productName": "Pav Bhaji Dosa",
           "productType": "South Indian",
           "fav": false
         },
         {
           "id": "zGKRkORcZKJDhC1BdWiH",
           "productName": "Veg Schezwan Noodle Rice",
           "fav": false,
           "productType": "CHINESE (VEG )",
           "active": true,
           "productPrice": 140
         },
         {
           "id": "zOOLRk9UaCcIkfCL83CS",
           "productName": "Veg Grilled Sandwich",
           "productType": "Grilled Sandwiches",
           "active": true,
           "productPrice": 55
         },
         {
           "id": "zVqyqKgeveut3RoaRJJ6",
           "fav": false,
           "productType": "Kaju Special",
           "productPrice": 190,
           "productName": "Kaju Panner Masala",
           "active": true
         },
         {
           "id": "ztfIobnPh5TQOWOGDaH3",
           "productName": "Paneer Masala",
           "fav": false,
           "productType": "Paneer Special",
           "active": true,
           "productPrice": 180
         }
       ]

    localStorage.setItem("itemtoken", btoa(JSON.stringify(itemtoken)));
    localStorage.setItem("TOP", "WyJWZWcgVGhhbGkgU21hbGwiLCJQYXYgQmhhamkiLCJEcmlua3MiLCJSaWNlIiwiQmV2ZXJhZ2VzIiwiVmVnIFRoYWxpIiwiUGFzdGEgJiBGcmllcyIsIk1vaml0byIsIlBpenphICYgQnVyZ2VyIiwiRWdnIFRoYWxpIiwiU25hY2tzIiwiR3JpbGxlZCBTYW5kd2ljaGVzIiwiRXh0cmEiLCJXYXRlciIsIlN0YXJ0ZXIiLCJNaWxrIHNoYWtlIHdpdGggSWNlIENyZWFtIiwiU2FuZHdpY2hlcyIsIkNhZmUgRHVyZ2EgU3BlY2lhbCIsIlNvdXRoIEluZGlhbiJd");
    localStorage.setItem("dataTab", "W1t7ImlkIjoiMVB6NjNVaVZlQ1NRcUdkdDBzRHMiLCJhY3RpdmUiOnRydWUsImNvdW50ZXJTZWN0aW9uIjoiU0VDVElPTiIsImNvdW50ZXJOdW1iZXIiOjV9LHsiaWQiOiIyblg3cW9mMFlXbURzaEFtZVB5UyIsImFjdGl2ZSI6dHJ1ZSwiY291bnRlck51bWJlciI6MTIsImNvdW50ZXJTZWN0aW9uIjoiU0VDVElPTiJ9LHsiaWQiOiJCT0F0R0xoRGt6UXE5bHQ0dHp0WSIsImFjdGl2ZSI6dHJ1ZSwiY291bnRlclNlY3Rpb24iOiJTRUNUSU9OIiwiY291bnRlck51bWJlciI6MTB9LHsiaWQiOiJCWk9yUEw0WTlINExrbTRNb2M4NSIsImNvdW50ZXJTZWN0aW9uIjoiU0VDVElPTiIsImNvdW50ZXJOdW1iZXIiOjgsImFjdGl2ZSI6dHJ1ZX0seyJpZCI6IklLRmVCMU9HQU5xenZFdHAwbGFqIiwiY291bnRlclNlY3Rpb24iOiJTRUNUSU9OIiwiY291bnRlck51bWJlciI6NiwiYWN0aXZlIjp0cnVlfSx7ImlkIjoiWkZmTDJ1TVlUZVY2YWd1SW9PSTQiLCJhY3RpdmUiOnRydWUsImNvdW50ZXJOdW1iZXIiOjQsImNvdW50ZXJTZWN0aW9uIjoiU0VDVElPTiJ9LHsiaWQiOiJsSkNjOWt4YmxQUVJLR1ZwUmM0MSIsImNvdW50ZXJTZWN0aW9uIjoiU0VDVElPTiIsImFjdGl2ZSI6dHJ1ZSwiY291bnRlck51bWJlciI6MTF9LHsiaWQiOiJsb2xnTzZoenpwYnkzUFpLbEE1TiIsImFjdGl2ZSI6dHJ1ZSwiY291bnRlclNlY3Rpb24iOiJTRUNUSU9OIiwiY291bnRlck51bWJlciI6N30seyJpZCI6InEzeGtGdFFreUZRR0V5bW84VHRMIiwiYWN0aXZlIjp0cnVlLCJjb3VudGVyTnVtYmVyIjozLCJjb3VudGVyU2VjdGlvbiI6IlNFQ1RJT04ifSx7ImlkIjoicWdGaG1BNW5Wa0J5Mnl5T3hLdmMiLCJjb3VudGVyTnVtYmVyIjo5LCJjb3VudGVyU2VjdGlvbiI6IlNFQ1RJT04iLCJhY3RpdmUiOnRydWV9LHsiaWQiOiJ2Y0xHNEZ5aVJBSXNYVmlURjZ5RiIsImFjdGl2ZSI6dHJ1ZSwiY291bnRlck51bWJlciI6MSwiY291bnRlclNlY3Rpb24iOiJTRUNUSU9OIn0seyJpZCI6InZsVzU5bzNHYld4V3VJNjZLU3RsIiwiY291bnRlclNlY3Rpb24iOiJTRUNUSU9OIiwiYWN0aXZlIjp0cnVlLCJjb3VudGVyTnVtYmVyIjoyfV0sW3siaWQiOiJhb0x5RExNZFFyV1R5czQ2TDVuMiIsImFjdGl2ZSI6dHJ1ZSwiY291bnRlck51bWJlciI6MSwiY291bnRlclNlY3Rpb24iOiJQQVJDRUwgU0VDVElPTiJ9XV0=");
    localStorage.setItem("itemtoken", btoa(JSON.stringify(itemtoken)));
    localStorage.setItem("token", "eyJ1c2VyIjp7InVpZCI6ImU3Y1lCVlVWVTdoV2R4YnY3THZibUZxSXJ3RDMiLCJlbWFpbCI6InJzdXJlc2gwMDk3QGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOnRydWUsImRpc3BsYXlOYW1lIjoiU3VyZXNoIFJhdGhvZCIsImlzQW5vbnltb3VzIjpmYWxzZSwicGhvdG9VUkwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NMaUNXMnJJY0ZvWXUxc0luYktVVE16X083OVRuSFMzTVMybG1aZVJoZ0lqQTdueHhBPXM5Ni1jIiwiY3JlYXRlZEF0IjoiMTcxMzU5ODAwMjAzMiIsImxhc3RMb2dpbkF0IjoiMTcxMzYwMTIyMDc1NSIsImFwaUtleSI6IkFJemFTeUQzS0gtQ21mRHFSTndjUVVnX01GWVY5NExwUkZPTllqOCIsImFwcE5hbWUiOiJbREVGQVVMVF0ifX0=");
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("access", true);
      if (localStorage.getItem("token") === null) {
        window.location.href = "/";
      }
    }
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
