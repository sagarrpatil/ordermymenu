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
           "active": true,
           "productName": "Club Sandwich GRILLED",
           "productPrice": 80,
           "productType": "Grilled Sandwiches"
        },
        {
           "id": "0SZp4LqnI4aQJ4kNhvB0",
           "active": true,
           "productName": "Black Coffee",
           "productType": "Beverages",
           "productPrice": 35
        },
        {
           "id": "0hIW3JuxGFxXpTxfdM73",
           "productName": "Peri Peri Cheese Fries",
           "productType": "Pasta & Fries",
           "active": true,
           "productPrice": 90
        },
        {
           "id": "11RMdxy3m113paU7QpkE",
           "productPrice": 50,
           "productName": "Thick Chocolate ",
           "productType": "Beverages",
           "active": true,
           "fav": true
        },
        {
           "id": "2GltnYEnN5AfHJrGGafc",
           "productType": "Sandwiches",
           "productPrice": 45,
           "productName": "Bun Jam",
           "active": true
        },
        {
           "id": "2vB9g2yWytPcPHgafi4W",
           "productPrice": 35,
           "active": true,
           "productName": "Hot chocolate ",
           "productType": "Beverages"
        },
        {
           "id": "35jj0703niqTwNkUqoAi",
           "active": true,
           "productType": "Pasta & Fries",
           "productPrice": 70,
           "productName": "Cheese Fries"
        },
        {
           "id": "3NKKGxf4LbwldmVn4gEs",
           "productName": "Cheese Egg Maggie",
           "active": true,
           "productPrice": 65,
           "productType": "Snacks"
        },
        {
           "id": "3SmdTw1Ctm7SNzD20Ltm",
           "productPrice": 55,
           "productType": "Beverages",
           "active": true,
           "productName": "Peach Ice tea"
        },
        {
           "id": "3YUY8ZLi7mLM2OZAqONo",
           "productPrice": 70,
           "productType": "Grilled Sandwiches",
           "productName": "Veg Cheese Sandwich GRILLED",
           "active": true
        },
        {
           "id": "3dyUekve8P9c2Aw7MAa3",
           "productName": "Original mojito ",
           "productType": "Mojito",
           "productPrice": 80,
           "active": true
        },
        {
           "id": "4GUq5gBpSoLb6TdUYmyT",
           "productType": "Rice",
           "productPrice": 140,
           "productName": "Egg Pulav",
           "active": true
        },
        {
           "id": "4yAzDN0pJuiU1KwLlx6N",
           "productType": "Milk shake with Ice Cream",
           "productName": "Pineapple ",
           "productPrice": 70,
           "active": true
        },
        {
           "id": "5ST4iPGeBOtYeZKuPIw4",
           "productType": "Milk shake with Ice Cream",
           "productName": "Strawberry ",
           "productPrice": 70,
           "active": true
        },
        {
           "id": "5xbHTWrCVk6MMYpqFqOd",
           "productName": "Cold Coffee with crush",
           "productPrice": 55,
           "productType": "Beverages",
           "active": true,
           "fav": true
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
           "productType": "Sandwiches",
           "productName": "Veg Sandwich",
           "active": true
        },
        {
           "id": "6Yc6taWn63oH8Gz362yk",
           "productType": "Sandwiches",
           "active": true,
           "productPrice": 45,
           "productName": "Grill Bread Butter"
        },
        {
           "id": "6ijqGhtypyRR3rptEDME",
           "productType": "Cafe Durga Special",
           "productPrice": 120,
           "productName": "Paneer Bhurji",
           "active": true
        },
        {
           "id": "9O4ipU8nN9m02nx9UfFV",
           "productType": "Snacks",
           "active": true,
           "productPrice": 30,
           "productName": "Upma"
        },
        {
           "id": "9hpkKYAAnFhEg7dGWYH2",
           "active": true,
           "productName": "Creamy White Pasta",
           "productPrice": 160,
           "productType": "Snacks"
        },
        {
           "id": "BAvTYi0Coyxcej3hugYs",
           "productPrice": 10,
           "productType": "Extra",
           "productName": "Extra Parcel Charges Large",
           "active": true
        },
        {
           "id": "BEb2ZL4vLRt9oxLCLA8z",
           "productName": "Plain Cheese Sandwich",
           "productType": "Sandwiches",
           "productPrice": 65,
           "active": true,
           "fav": false
        },
        {
           "id": "BH5FD0N9pEHIFT7WCqlm",
           "active": true,
           "productPrice": 120,
           "productType": "Rice",
           "productName": "Veg Schezwan  fried Rice "
        },
        {
           "id": "CQZTd5UG2xGi25s0CVRB",
           "active": true,
           "productType": "Drinks",
           "productPrice": 30,
           "productName": "Limbu Sarbat"
        },
        {
           "id": "CkO9G6cvvdUYDjRTgiJu",
           "fav": false,
           "productName": "butter pav",
           "productType": "Extra",
           "productPrice": 15,
           "active": true
        },
        {
           "id": "DL8Rk6ZN0kg0mwayegnh",
           "active": true,
           "productPrice": 60,
           "productType": "Cafe Durga Special",
           "productName": "Omelette sandwich "
        },
        {
           "id": "DlRNnkPJgCfHJPZgYfMG",
           "productPrice": 140,
           "productType": "Rice",
           "productName": "egg pulav rice",
           "active": true
        },
        {
           "id": "Dmi7tc4Fp0jlzboEbLZj",
           "productName": "Hot coffee 1/2",
           "productPrice": 35,
           "productType": "Beverages",
           "active": true
        },
        {
           "id": "DuC7VTo7WwlC6DEaTwS7",
           "productPrice": 60,
           "productName": "Thick chocolate with crush",
           "productType": "Beverages",
           "active": true
        },
        {
           "id": "EDhbYfndqLxLLxfmxv6M",
           "productPrice": 160,
           "productType": "Rice",
           "active": true,
           "productName": "Paneer Pulav Rice"
        },
        {
           "id": "ETH1DW5H2jyI5P7iQ5dv",
           "productName": "Cold milk",
           "productType": "Beverages",
           "productPrice": 30,
           "active": true
        },
        {
           "id": "EUgSRLI2doV4A7sWzIOT",
           "productType": "Grilled Sandwiches",
           "productPrice": 70,
           "active": true,
           "productName": "chease grill sandwitch"
        },
        {
           "id": "EbHbfl29sZUfGbdekSOE",
           "productName": "Cheese Jam Bread",
           "productType": "Sandwiches",
           "active": true,
           "productPrice": 55
        },
        {
           "id": "EboRDXtmZLLt70wqPIzf",
           "productPrice": 60,
           "active": true,
           "productType": "Beverages",
           "productName": "Cold coffee with ice cream"
        },
        {
           "id": "FLkVYjBVAjoeAPctXWYm",
           "active": true,
           "productName": "Paneer Pulav",
           "productPrice": 160,
           "productType": "Rice"
        },
        {
           "id": "FNdpNsBscYfhskU8hazw",
           "active": true,
           "productType": "Beverages",
           "productName": "Cold chocolate",
           "productPrice": 40
        },
        {
           "id": "FVKYAFoNTMOWEGekLcUa",
           "productName": "Banana",
           "active": true,
           "productPrice": 70,
           "productType": "Milk shake with Ice Cream"
        },
        {
           "id": "FjHsixgRioHW2QvRthfo",
           "productType": "Pav Bhaji",
           "productPrice": 90,
           "productName": "Masala Pav (double)",
           "active": true
        },
        {
           "id": "Fxcgm5StP7jAZJlLQFT6",
           "active": true,
           "productType": "Beverages",
           "productName": "Strong Cold Coffee",
           "productPrice": 50
        },
        {
           "id": "Fz6v9PyYV8KEFcX4WQql",
           "productPrice": 100,
           "productName": "Creamy Cheese Fries",
           "productType": "Pasta & Fries",
           "active": true
        },
        {
           "id": "GautyTf4H30W6UoiKB3V",
           "productPrice": 40,
           "active": true,
           "productName": "Cold Coffee",
           "fav": true,
           "productType": "Beverages"
        },
        {
           "id": "GxjXNF3ZCJGNqD4YhwIH",
           "productName": "Masala Pav (single)",
           "productPrice": 50,
           "productType": "Pav Bhaji",
           "active": true
        },
        {
           "id": "Hkk8eA52bkOL1fOWIIuE",
           "active": true,
           "productName": "Roasted papad",
           "productType": "Starter",
           "productPrice": 25
        },
        {
           "id": "Hlp5wPapjPrKjl59CZvd",
           "fav": false,
           "productType": "Extra",
           "productPrice": 20,
           "active": true,
           "productName": "coldring"
        },
        {
           "id": "INkqyTlQ4NmlnvAkqiQC",
           "productName": "Dal Khichadi tadka",
           "productPrice": 120,
           "active": true,
           "productType": "Rice"
        },
        {
           "id": "Ih6Gmb960nn2zz0wx7eq",
           "fav": false,
           "productName": "Veg Thali Small",
           "productType": "Veg Thali Small",
           "productPrice": 60,
           "active": true
        },
        {
           "id": "JgPrfD1xfJq6uvsR4mhm",
           "productName": "Paneer Cheese Sandwich",
           "productType": "Grilled Sandwiches",
           "productPrice": 100,
           "active": true
        },
        {
           "id": "KAZS7edmducdXT791PgS",
           "productPrice": 130,
           "productName": "Veg Pulav",
           "productType": "Rice",
           "active": true
        },
        {
           "id": "KEMRd1zp55F064HsQI6S",
           "active": true,
           "productPrice": 150,
           "productName": "Mushroom Tawa Pulav",
           "productType": "Rice"
        },
        {
           "id": "KZP5u8wgEA6mAYf2t3kM",
           "active": true,
           "productName": "Bread Butter Jam",
           "productPrice": 55,
           "productType": "Sandwiches"
        },
        {
           "id": "LnaoXvdd8o2vVj0zNVL9",
           "productPrice": 100,
           "active": true,
           "productType": "Rice",
           "productName": "Jeera Rice"
        },
        {
           "id": "LshOXDTWDMkIa72WgSVd",
           "productPrice": 20,
           "active": true,
           "productType": "Pav Bhaji",
           "productName": "Extra Pav (Pav Bhaji 1 Jodi)"
        },
        {
           "id": "MXUZsJIAvlk3llWCnW9l",
           "productPrice": 80,
           "active": true,
           "productName": "Oreo Milk Shake",
           "productType": "Milk shake with Ice Cream"
        },
        {
           "id": "MgHKWunKuCS4AvwDfPeK",
           "productName": "Sabudana Vada (Mon. & Thu.)",
           "productPrice": 65,
           "active": true,
           "productType": "Snacks"
        },
        {
           "id": "Mojx1ZQqHxxHx7Uw7wwd",
           "productName": "Cold Coffee 1/2",
           "productPrice": 50,
           "productType": "Beverages",
           "active": true,
           "fav": true
        },
        {
           "id": "NaQ8IL9GK3lQV0q6cvy0",
           "productPrice": 80,
           "active": true,
           "productName": "Club Cheese Sandwich",
           "productType": "Sandwiches"
        },
        {
           "id": "O8aDcbNo2Jxww8EfYr3b",
           "productName": "Extra Cheese",
           "productPrice": 15,
           "productType": "Extra",
           "active": true
        },
        {
           "id": "PX5Xojb8kl2CzCPVPtOS",
           "productType": "Beverages",
           "productName": "Thick Cold Coffee",
           "fav": true,
           "active": true,
           "productPrice": 50
        },
        {
           "id": "QJA0bK3l5CToAyoxvZ4M",
           "productPrice": 110,
           "active": true,
           "productType": "Rice",
           "productName": "Dal Khichadi",
           "fav": false
        },
        {
           "id": "QSS9F7fbUL97kd6boudN",
           "productName": "Blue splash ",
           "productPrice": 80,
           "active": true,
           "productType": "Mojito"
        },
        {
           "id": "Rwd8i1HM64OurGhjnBQ0",
           "fav": true,
           "productPrice": 20,
           "productType": "Beverages",
           "active": true,
           "productName": "Tea"
        },
        {
           "id": "SOxPriDWraENrk0L44IP",
           "productType": "Beverages",
           "active": true,
           "productPrice": 55,
           "productName": "Lemon ice tea"
        },
        {
           "id": "ScsYr6xxPFbXQdOFULWK",
           "productType": "Rice",
           "active": true,
           "productPrice": 80,
           "productName": "VEG SCHEZWAN fried HALF"
        },
        {
           "id": "T0fGz9DbqQ0V0aPjV36K",
           "productType": "Rice",
           "active": true,
           "productName": "Curd Rice",
           "productPrice": 90
        },
        {
           "id": "TU1MilViMKpDd9d7ehiW",
           "productType": "Beverages",
           "productPrice": 30,
           "active": true,
           "productName": "Hot milk "
        },
        {
           "id": "U5wnFeQmboq4noWx5Vwh",
           "active": true,
           "productName": "Cold Bournvita",
           "productType": "Beverages",
           "productPrice": 40
        },
        {
           "id": "U7hKM3DxzWathfmuBmhs",
           "productName": "Egg Rice",
           "active": true,
           "productPrice": 130,
           "productType": "Egg Thali"
        },
        {
           "id": "UP1LymlXAmmZN9BAAGxV",
           "productName": "French Fries",
           "productType": "Pasta & Fries",
           "productPrice": 60,
           "active": true
        },
        {
           "id": "VBJ1S682ngRZjHJ92qYx",
           "productType": "Grilled Sandwiches",
           "productPrice": 80,
           "productName": "Paneer Grilled Sandwich ",
           "active": true
        },
        {
           "id": "WwS0PPhLmPOSnh0yfi2R",
           "active": true,
           "productName": "Chocolate Cheeese Sandwich",
           "productPrice": 110,
           "productType": "Grilled Sandwiches"
        },
        {
           "id": "Xk68J608EdizpBWSYiRA",
           "active": true,
           "productName": "Maggie",
           "productType": "Snacks",
           "productPrice": 50
        },
        {
           "id": "XyNJ4JZlvyHHISy5jND8",
           "active": true,
           "productType": "Veg Thali",
           "productPrice": 120,
           "productName": "Veg Thali"
        },
        {
           "id": "YbOoc8RKfQjkW70TcxMY",
           "productType": "Cafe Durga Special",
           "productPrice": 70,
           "productName": "Omelette sandwich grill",
           "active": true
        },
        {
           "id": "abGSxo0zO9RdNwr6R5kH",
           "active": true,
           "productPrice": 70,
           "productType": "Milk shake with Ice Cream",
           "productName": "Chocolate milk shake "
        },
        {
           "id": "ascpG8u3HROs06HhrOnK",
           "productType": "Grilled Sandwiches",
           "productPrice": 90,
           "productName": "Club Cheese Grilled Sandwich",
           "active": true
        },
        {
           "id": "aukWvQFq6CUWeMHfnTKK",
           "active": true,
           "productName": "Tea",
           "productPrice": 20,
           "productType": "Beverages"
        },
        {
           "id": "bM8UFrYKzA6M29QsF7WT",
           "productName": "Masala Maggie",
           "productType": "Snacks",
           "active": true,
           "productPrice": 55
        },
        {
           "id": "bRBsQMMfBNvp9nUQWr79",
           "productName": "Egg Thali",
           "active": true,
           "productPrice": 120,
           "productType": "Egg Thali"
        },
        {
           "id": "bixT02VeFsyhJ8aI5w6M",
           "productType": "Snacks",
           "productName": "Masala Egg Maggie",
           "productPrice": 60,
           "active": true
        },
        {
           "id": "cCA2bae5wRmgDlW8Yvx5",
           "productName": "lemon drink",
           "productType": "Beverages",
           "active": true,
           "productPrice": 30
        },
        {
           "id": "cm3y2lA635NDePorFcmO",
           "active": true,
           "productType": "Pav Bhaji",
           "productPrice": 115,
           "productName": "Amul Pav Bhaji"
        },
        {
           "id": "cuvdyzA06ZyoMGph8soz",
           "productName": "Veg Cheese Sandwich",
           "productType": "Sandwiches",
           "active": true,
           "productPrice": 55
        },
        {
           "id": "d2ocUl9RE9k1DaPXgSXi",
           "productName": "Corn Sandwich",
           "active": true,
           "productPrice": 80,
           "productType": "Grilled Sandwiches"
        },
        {
           "id": "d9faRwBuqJaUYxUBu6lg",
           "active": true,
           "productName": "Wadav Pav",
           "productPrice": 15,
           "productType": "Snacks"
        },
        {
           "id": "djgKyqwC1xcFCbzYsHTd",
           "productType": "Extra",
           "active": true,
           "productName": "Extra Chapati",
           "productPrice": 10
        },
        {
           "id": "eHvhasj7DJTd9BcqlIzd",
           "productName": "Water Bottle",
           "active": true,
           "productPrice": 20,
           "productType": "Water",
           "fav": true
        },
        {
           "id": "eRHV37qzImAbgxHSFxnD",
           "productName": "Masala Fries",
           "productType": "Pasta & Fries",
           "active": true,
           "productPrice": 70
        },
        {
           "id": "eqAtfSomjO3SwcyYu4I0",
           "productPrice": 30,
           "active": true,
           "productName": "Pohe",
           "productType": "Snacks"
        },
        {
           "id": "fOTXGRNizQG34bpXYlcM",
           "productName": "Hot bournvita",
           "productPrice": 40,
           "active": true,
           "productType": "Beverages"
        },
        {
           "id": "fXFQFhdqKGQ83i8iAWmY",
           "productName": "Strong Hot Coffee",
           "active": true,
           "productPrice": 40,
           "productType": "Beverages"
        },
        {
           "id": "ff4APBfHsvoA2JxF895o",
           "productPrice": 70,
           "productName": "Misal Pav",
           "active": true,
           "productType": "Snacks"
        },
        {
           "id": "gGJQCBums4Uk7N5xxgBC",
           "active": true,
           "productType": "Pasta & Fries",
           "productName": "Masala Cheese Fries",
           "productPrice": 80
        },
        {
           "id": "gI8Ditxiv9NNINOW3T6c",
           "productType": "Beverages",
           "active": true,
           "productName": "Black Current Ice Tea",
           "productPrice": 55
        },
        {
           "id": "giKSPLOfOhl9L1DGBYFW",
           "productType": "Rice",
           "productPrice": 100,
           "active": true,
           "productName": "Dal Rice"
        },
        {
           "id": "h7US26iZtEDzvbHoj4QW",
           "productName": "Peri Peri Fries",
           "productPrice": 80,
           "productType": "Pasta & Fries",
           "active": true
        },
        {
           "id": "hRABcnWbdD0bJFbW8AZs",
           "productType": "Rice",
           "active": true,
           "productPrice": 150,
           "productName": "Tawa Pulav"
        },
        {
           "id": "hRfM03HZ5IBxttiVZYYj",
           "productType": "Extra",
           "productPrice": 10,
           "active": true,
           "productName": "Extra Dahi Vati"
        },
        {
           "id": "hc0pJ3SCaoeYWjV3xWy4",
           "productName": "Mattar Pulav",
           "productType": "Rice",
           "productPrice": 120,
           "active": true
        },
        {
           "id": "hd1QBraDyCLq9ZvJEITR",
           "productType": "Sandwiches",
           "productName": "Club Sandwich",
           "active": true,
           "productPrice": 70
        },
        {
           "id": "hofhbikYnlrC6h7KhnmA",
           "productType": "Grilled Sandwiches",
           "productPrice": 105,
           "active": true,
           "productName": "Chocolate Sandwich"
        },
        {
           "id": "i9hwnnTX7STXYfkRDgO9",
           "active": true,
           "productType": "Pasta & Fries",
           "productName": "Desi Red Pasta",
           "productPrice": 150
        },
        {
           "id": "jw3sFc1cZkgKH1C9GejG",
           "productPrice": 10,
           "productType": "Water",
           "active": true,
           "productName": "Small Water Bottle"
        },
        {
           "id": "kBK7To8CCOwpbtM3AdVF",
           "active": true,
           "productPrice": 65,
           "productType": "Sandwiches",
           "productName": "cheese sandwich plain",
           "fav": false
        },
        {
           "id": "kRpJZ1IXr8088jRBZkRd",
           "productType": "Cafe Durga Special",
           "productName": "Egg omelette single",
           "active": true,
           "productPrice": 45,
           "fav": false
        },
        {
           "id": "kXhpI0vLaWbpZ9GGi3hB",
           "productPrice": 50,
           "fav": false,
           "productType": "Beverages",
           "active": true,
           "productName": "strong hot coffe 1/2"
        },
        {
           "id": "kfjTvx42TTaBbGD1iPyB",
           "productName": "Spicy chilli mojito",
           "productPrice": 80,
           "active": true,
           "productType": "Mojito"
        },
        {
           "id": "lDaOfwRDllyyDp7xJVqW",
           "productType": "Rice",
           "active": true,
           "productPrice": 130,
           "productName": "veg fried rice"
        },
        {
           "id": "ldJPPOTicKwrnKCfBgpZ",
           "active": true,
           "productPrice": 80,
           "productType": "Mojito",
           "productName": "Lime & Mint Mojito"
        },
        {
           "id": "nvbLN138oHc1poCesB5T",
           "productName": "Pav Single",
           "productPrice": 5,
           "active": true,
           "fav": false,
           "productType": "Extra"
        },
        {
           "id": "ou6dGRYDMVNAiAyw0gec",
           "productName": "Egg Maggie",
           "productPrice": 55,
           "active": true,
           "productType": "Snacks"
        },
        {
           "id": "ovb60Rxwn5sOJZ7wUycI",
           "productName": "Bread Butter",
           "productType": "Sandwiches",
           "productPrice": 40,
           "active": true
        },
        {
           "id": "qZyOQAjqDtCkwVXL1NWS",
           "productPrice": 80,
           "productName": "Plain Rice",
           "productType": "Rice",
           "active": true
        },
        {
           "id": "r1EJ2JVoLeZvkqq4ZZXc",
           "productName": "Egg omelette double ",
           "productType": "Cafe Durga Special",
           "active": true,
           "productPrice": 65
        },
        {
           "id": "rJnM8at15CNZsEZvBQNJ",
           "productType": "Cafe Durga Special",
           "active": true,
           "productPrice": 65,
           "productName": "Egg half Fry double "
        },
        {
           "id": "s6ktq9kgpFe55NFHtY5V",
           "active": true,
           "productPrice": 55,
           "productName": "Butter Maggie",
           "productType": "Snacks"
        },
        {
           "id": "sIaM4AZ8XDfFQj8otlas",
           "productType": "Pav Bhaji",
           "productName": "Paneer Pav Bhaji",
           "active": true,
           "productPrice": 130
        },
        {
           "id": "tCvkfCXcOl3MhrnrVoPi",
           "active": true,
           "productType": "Snacks",
           "productName": "Sabudana Khichadi (Mon. & Thu.)",
           "productPrice": 60
        },
        {
           "id": "ttikHAOLvM0ipR56Exom",
           "active": true,
           "productName": "Pav Extra Double",
           "fav": false,
           "productType": "Extra",
           "productPrice": 10
        },
        {
           "id": "txfiRgT9XJ9qksYHZSe4",
           "productPrice": 100,
           "productName": "Pav Bhaji",
           "productType": "Pav Bhaji",
           "active": true
        },
        {
           "id": "u9A87J8jtZBtkQWRmo93",
           "productType": "Beverages",
           "productPrice": 30,
           "active": true,
           "productName": "Hot Coffee",
           "fav": true
        },
        {
           "id": "uJzFgg0pEABeROtOnC9a",
           "active": true,
           "productName": "Corn Cheese Sandwich",
           "productType": "Grilled Sandwiches",
           "productPrice": 90
        },
        {
           "id": "v2DMAeqI9ruMYKqjiHbZ",
           "productPrice": 70,
           "productType": "Cafe Durga Special",
           "active": true,
           "productName": "Bun omelette "
        },
        {
           "id": "wRGyYkTyeSJIGfHLk0ph",
           "productPrice": 5,
           "productType": "Extra",
           "productName": "Extra Parcel Charges Small",
           "active": true
        },
        {
           "id": "xQcCBw28fXd3UCoI4Spk",
           "active": true,
           "productPrice": 65,
           "productName": "Egg bhurji double",
           "productType": "Cafe Durga Special"
        },
        {
           "id": "xTz4F8FORokDQUJXWH7x",
           "productPrice": 40,
           "active": true,
           "productName": "Egg half fry single ",
           "productType": "Cafe Durga Special"
        },
        {
           "id": "xrYtKoLU7zxceZkI3Sep",
           "active": true,
           "productPrice": 45,
           "fav": false,
           "productType": "Cafe Durga Special",
           "productName": "Egg Bhurji Single"
        },
        {
           "id": "xtdWhtVtYCeb6OEX5XZA",
           "active": true,
           "productPrice": 15,
           "productName": "Extra Pav (Misal / Bhurji 1 Jodi)",
           "productType": "Pav Bhaji"
        },
        {
           "id": "yGaYSPHXIvRSFUOyfoos",
           "productName": "cheese sandwich plain",
           "fav": false,
           "active": true,
           "productPrice": 65,
           "productType": "Sandwiches"
        },
        {
           "id": "yLOttJu0T0KtNHol3qr2",
           "active": true,
           "productType": "Snacks",
           "productPrice": 60,
           "productName": "Cheese Masala Maggie"
        },
        {
           "id": "yNeqDE7PtRxSIOfxxpQ1",
           "active": true,
           "productType": "Beverages",
           "productName": "Tea with bun muska",
           "productPrice": 45
        },
        {
           "id": "ymY9bd4sojq3OzEJK9oU",
           "productType": "Beverages",
           "productName": "Thick cold coffee with crush",
           "productPrice": 60,
           "active": true
        },
        {
           "id": "zOOLRk9UaCcIkfCL83CS",
           "productName": "Veg Grilled Sandwich",
           "productType": "Grilled Sandwiches",
           "active": true,
           "productPrice": 55
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
