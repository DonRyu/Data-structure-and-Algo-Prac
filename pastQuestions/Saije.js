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

dataS.map((item, key) => {
  let arr = item.split(",");
  nData[key] = {
    key: arr[0],
    address: arr[1],
    date: parseInt(arr[2]),
  };
});

const getLatest = (nData) => {
  let result = [];
  nData.map((item) => {
    let { key, address, date } = item;
    if (!(address in result) || result[address].date < date) {
      result[address] = { key, date };
    }
  });
  return Object.values(result).map((item) => item.key);
};

const getLatestRe = (nData) => {
  let result = [];
  result = nData.reduce((acc, cur) => {
    let { key, address, date } = cur;
    if (!acc[address] || acc[address].date < date) {
      acc[address] = { key, date };
    }
    return acc
  }, {});

  return Object.values(result).map((item) => item.key);
};

console.log(getLatestRe(nData));

// ------------------------------------------------------------------------------------------------

// Email Threads: Given a list of email threads with unique identifiers,
// subject lines, and timestamps, write a script to find the email with the latest timestamp for each unique subject line.

// Social Media Posts: Process a set of social media posts with unique identifiers,
// user handles, text content, and posting dates. Identify the post with the most comments and the post with the least comments for each unique user handle.

// File Revisions: Given a dataset of file revisions with unique identifiers,
// filenames, authors, and modification dates, write a function to find the most recent revision and the least recent revision for each unique filename.

// Restaurant Menus: Process a list of restaurant menu items with unique identifiers,
//dish names, prices, and last update dates. Determine the menu item with the highest price and the menu item with the lowest price for each unique dish name.

// Website Visits: Given a dataset of website visits with unique identifiers,
//user IDs, page URLs, and visit timestamps, write a script to find the most recent visit and the least recent visit for each unique user ID.
