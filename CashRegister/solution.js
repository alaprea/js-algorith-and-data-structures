const availableCurrency = {"ONE HUNDRED":10000, "TWENTY": 2000, "TEN":1000, "FIVE":500, "ONE":100, "QUARTER":25, "DIME":10, "NICKEL":5, "PENNY":1};

function checkCashRegister(price, cash, cid) {
  const cents = 100;

  let cidCents = cid.map((elem) => {
    return [elem[0], Math.round(elem[1] * cents)];
  });

  let obj;
  let status;
  let changeMap = new Map();
  let changeObj = [];
  let change = (cash - price) * cents;

  if (change === 0) {
    status = "OPEN";
    changeMap = [];
  }

  else {
    let availableFunds = cidCents.filter((currency) => {
      return currency[1] > 0;
    });

    let insufficient = false;
    let sum = 0;

    while (!insufficient && sum != change) {

      let i = availableFunds.length - 1;
      let found = false;
      while(i >= 0 && !found) {
        
        if (availableCurrency[availableFunds[i][0]] + sum <= change) {

          sum += availableCurrency[availableFunds[i][0]];

          availableFunds[i][1] -= availableCurrency[availableFunds[i][0]];

          if (changeMap.has(availableFunds[i][0])) changeMap.set(availableFunds[i][0], changeMap.get(availableFunds[i][0]) + availableCurrency[availableFunds[i][0]]);
          else changeMap.set(availableFunds[i][0], availableCurrency[availableFunds[i][0]]);

          if (availableFunds[i][1] === 0) availableFunds.splice(i,1);

          found = true;
        }
        i--;
      }
      if (!found) insufficient = true;
    }

    if (insufficient) {
      status = "INSUFFICIENT_FUNDS";
      changeObj = [];
    }
    else {
      if (availableFunds.length === 0) {
        status = "CLOSED";
        changeObj = cid;
        console.log(changeMap)
      }
      else {
        status = "OPEN";
        changeMap.forEach((value,key) => {
        changeObj.push([key,value / cents]);
        });
      }
    }
  }

  obj = {status: status, change: changeObj}
  console.log(obj)
  return obj;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);