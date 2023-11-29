// We are looking for a Python script that can process a set of real estate listings,
// each with a unique identifier (like "L4" or "L1"), an address,
//and a year. Given this data, the goal is to identify which listing is the most recent for each unique address.

// For example, from the data provided:

// L4, 123 kings road,2022
// L1, 123 kings road,2020
// L2, 20 queen road,1990
// L3, 20 queen road,1992

// The script should determine that:
// For "123 kings road", the most recent listing is "L4" from 2022.
// For "20 queen road", the most recent listing is "L3" from 1992.
// Thus, the output should be:

// L3,L4 => [ L3 , L4]

// Combine duplicated address
// find the latest date

let dataS = [
  "L4, 123 kings road, 2022",
  "L1, 123 kings road, 2020",
  "L2, 20 queen road, 1990",
  "L3, 20 queen road, 1992",
  "L23, 20 queen road, 2992",
];
let nData = [];

for (let i = 0; i < dataS.length; i++) {
  let arr = dataS[i].split(","); // l4,123 kings road, 2022
  nData.push({
    key: arr[0],
    address: arr[1],
    date: parseInt(arr[2]),
  });
}

//{ key: 'L4', address: ' 123 kings road', date: ' 2022' } => {123 kings road : {key:'L4',date:2022}}

const getLatestDate = (nData) => {
  let obj = {};
  nData.map((item) => {
    let { key, address, date } = item;
    if (!obj[address] || obj[address].date < date) {
      obj[address] = { key, date };
    }
  });
  return Object.values(obj).map((item) => item.key);
};

const getLatestDateReduce = (nData) => {
  let result = [];
  result = nData.reduce((acc, cur) => {
    let { key, address, date } = cur;
    if(!(acc[address])|| acc[address].date < date){
      acc[address] = {key,date}; 
    }
    return acc;
  },{});

  return Object.values(result).map((item)=>item.key)
};

console.log(getLatestDateReduce(nData));

// ------------------------------------------------------------------------------------------------

// Most Common Address:

// Given a set of real estate listings, find the address that appears most frequently.
// Oldest Listing for Each Address:

// Instead of finding the most recent listing, identify the oldest listing for each unique address.
// Number of Listings per Year:

// Determine the number of real estate listings for each year.
// Listings with the Same Year:

// Find all pairs of listings that have the same year.
// Address with the Highest Total Year:

// Identify the address with the highest sum of listing years.
// Listings for a Given Year:

// Given a specific year, list all real estate listings from that year.
// Address with Multiple Listings:

// Find addresses with more than one real estate listing and list the corresponding listings.
// Listings with Unique Years:

// Identify listings that have unique years (no other listings with the same year).
// Address with the Longest Listing History:

// Determine the address with the longest time span between the oldest and most recent listings.
// Listings Sorted by Year:

// Sort the real estate listings based on the listing year.
