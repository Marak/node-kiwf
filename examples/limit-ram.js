require('../lib/kiwf')({
  maxMemory: 50000000
});

//
// Start up a application that eats up ram
//
console.log('process.maxMemory: ' + process.maxMemory);

var x = [];
setInterval(function(){
  for (var i = 0; i < 1000; i++) {
    x.push(new Buffer(100000));
    console.log('Current memory usage: ' + process.memoryUsage().rss);
  }
}, 100);