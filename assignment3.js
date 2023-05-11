//Build a feature for Store's Inventory.

let items = {
    "item1": 10,
    "item2": 20,
    "item3": 30,
    "item4": 40
  };
  
  let exchangeRate = 80;
  let convertedPrices = Object.entries(items).map(([key, value]) => {
    let convertedValue = value * exchangeRate; // convert price to INR
    return [key, convertedValue];
  });
  
  let result = Object.fromEntries(convertedPrices);
  
  console.log(result); // output the converted prices in Rupees
  