// Code your solution in this file!
// function logDriverNames(drivers){
//   drivers.forEach(function(d){
//     console.log(d.name);
//   });
// }

// function logDriversByHometown(drivers, ht) {
// drivers.forEach(function(d){
//   if(d.hometown===ht){
//     console.log(d.name);
//   }
// })
// }

// function driversByRevenue(drivers) {
//   newDrivers = [...drivers]
//   return newDrivers.sort(function (d1, d2) {
//     return d1.revenue - d2.revenue
//   })
// }


// function driversByName(drivers){
//   return drivers.sort(function(d1,d2){
//     return d1.name.localeCompare(d2.name)
//   })
// }

// function totalRevenue(drivers){
//   sum=0
//   drivers.forEach(function(d){
//     sum+=d.revenue
//   })
//   return sum;
// }

// function averageRevenue(drivers){
// sum=function totalRevenue(drivers)();
// return sum/drivers.length;
// }
function logDriverNames(drivers) {
  drivers.reduce((agg, el, i, arr) => console.log(el.name), [])
}

function logDriversByHometown(drivers, keyword) {
  drivers.reduce((agg, el, i, arr) => {
    if (el.hometown === keyword) {
      console.log(el.name)
    }
  }, [])
}

function driversByRevenue(drivers) {
  newDrivers = [...drivers]
  return newDrivers.sort((a, b) => {
    return (a.revenue - b.revenue)
  })
}

function driversByName(drivers) {
  newDrivers = [...drivers]
  return newDrivers.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  return drivers.reduce((agg, el, i, arr) => {
    return agg + el.revenue
  }, 0)
}

function averageRevenue(drivers) {
  const sum = drivers.reduce((agg, el, i, arr) => {
    return agg + el.revenue
  }, 0)
  return sum / drivers.length
}