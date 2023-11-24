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

let data = [
  {
    key: "L4",
    address: "123 kings road",
    date: 2022,
  },
  {
    key: "L1",
    address: "123 kings road",
    date: 2020,
  },
  {
    key: "L2",
    address: "queen road",
    date: 1995,
  },
  {
    key: "L3",
    address: "queen road",
    date: 3000,
  },
  {
    key: "L23",
    address: "queen road",
    date: 5000,
  },
];

const getLatestDate = (data) => {
  let result = [];
  let newObj = {};

  data.map((item) => {
    if (!(item.address in newObj) || item.date > newObj[item.address].date) {
      newObj[item.address] = { key: item.key, date: item.date };
    }
  });

  result = Object.values(newObj).map(({ key }) => key);
  return result;
};

const getLatestDateRedu = (data) => {
  let result = [];

  result = data.reduce((acc, curr) => {
    if (!acc[curr.address] || acc[curr.address].date > data.date) {
      acc[curr.address] = { key: curr.key, date: curr.date };
    }
    return acc
  }, {});

  return Object.values(result).map((item) => item.key);
};

console.log(getLatestDateRedu(data));


let test = [1,2,3,4,5];
test.forEach((item)=>{
  return item*2;
})

console.log(test)

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
