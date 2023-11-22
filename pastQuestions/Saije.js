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

let data = [
    {
      key: "L4",
      address: "123 kings road",
      date: "2022",
    },
    {
      key: "L1",
      address: "123 kings road",
      date: "2020",
    },
    {
      key: "L2",
      address: "queen road",
      date: "2020",
    },
    {
      key: "L3",
      address: "queen road",
      date: "1992",
    },
  ];
  
  // categorized by address
  // find the max date
  
  const findLatestAddress = (data) => {
      
    
  
  };
  
  