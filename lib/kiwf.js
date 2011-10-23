module['exports'] = function (options) {

  options = options || {};
  
  //
  // maxMemory - represents maximum memory process can handle before exiting 
  //
  // note: a negative value will indicate infinite memory
  //
  options.maxMemory = options.maxMemory  || -1;
  
  //
  // Bind maxMemory to process ( for reference )
  //
  process.maxMemory = options.maxMemory;
  
  //
  // maxUptime - determines how long the application will stay up for
  // 
  // note: a negative value will indicate infinite maxUptime
  //
  options.maxUptime = options.maxUptime || -1;
  options.startTime = new Date().getTime();

  //
  // Bind maxMemory to process ( for reference )
  //
  process.maxUptime = options.maxUptime;
  
  //
  // interval - value that we will check all kill conditions
  //
  options.interval = options.interval || 200;

  function checkConditions() {

    //
    // Memory
    //
    if (options.maxMemory && options.maxMemory !== -1) {
      var mem = process.memoryUsage().rss;
      if (mem >= options.maxMemory) {
        kill('maxMemory has been exceeded.');
      }
    }

    //
    // Uptime
    //
    if (options.maxUptime && options.maxUptime !== -1) {
      var currentTime = new Date().getTime();
      if (currentTime - options.startTime >= options.maxUptime) {
        kill('maxUptime has been exceeded.');
      }
    }

  }

  function kill (code) {
    console.log('process error: ' + code);
    process.exit();
  }


  setInterval(checkConditions, options.interval);

}
