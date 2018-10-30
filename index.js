
function logDriversByHometown(drivers, ht) {

}

function driversByRevenue(drivers) {
  newDrivers = [...drivers]
  return newDrivers.sort(function (d1, d2) {
    return d1.revenue - d2.revenue
  })
}


function driversByName(drivers){
  return drivers.sort(function(d1,d2){
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

function averageRevenue(drivers){
 sum=function totalRevenue(drivers)();
 return sum/drivers.length;
}