// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(d){
    console.log(d.name)
  })
}

function logDriversByHometown(drivers, ht) {
drivers.forEach(function(d){
  if(d.hometown===ht){
    console.log(d.name);
  }
})
}

function driversByRevenue(drivers) {
  newDrivers = [...drivers]
  return newDrivers.sort(function (d1, d2) {
    return d1.revenue - d2.revenue
  })
}


function driversByName(drivers){
  newDrivers = [...drivers]
  return newDrivers.sort(function(d1,d2){
    return d1.name.localeCompare(d2.name)
  })
}

function totalRevenue(drivers){
  sum=0
  drivers.forEach(function(d){
    sum+=d.revenue
  })
  return sum;
}

// function averageRevenue(drivers){
// sum=function totalRevenue(drivers)();
// return sum/drivers.length;
// }


// function logDriverNames(drivers){
//   drivers.forEach(function(element) {
//     console.log(element['name']);
//   });
// }
// function logDriversByHometown(drivers, hometown){
//   drivers.forEach(function(element) {
//     if (element['hometown'] === hometown){
//       console.log(element['name']);
//     }
//   });
// }
// function driversByRevenue(drivers){
//   let sortDrivers = drivers.slice();
//   sortDrivers.sort( function(a,b){
//     return a['revenue']-b['revenue'];
//   });
//   return sortDrivers;
// }
// function driversByName(drivers){
//   let sortDrivers = drivers.slice();
//   sortDrivers.sort(function(a,b){
//     return a["name"].localeCompare(b["name"]);
//   });
//   return sortDrivers;
// }
// function totalRevenue(drivers){
//   return drivers.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue.revenue;
//   },0);
// }
// function averageRevenue(drivers){
//   return totalRevenue(drivers)/drivers.length;
// }