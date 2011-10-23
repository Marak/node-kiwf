require('../lib/kiwf')({
  maxUptime: 5000
});

console.log('process.maxUptime: ' + process.maxUptime);

//
// Start up a application that does nothing
//
setInterval(function(){
  //
  // Remark: process.uptime() is not available in 0.4.x branch
  //
  //console.log('Current uptime: ' + process.uptime());
}, 1000);