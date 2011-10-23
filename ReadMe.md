# kiwf

*kill it with fire*

##in-process node.js process monitor

##forces node processes to crash based on certain restrictions like memory usage or uptime.

<img src="http://emotibot.net/pix/444.gif"></img>

# Installation

    npm install kiwf

# Usage

```js
require('kiwf')(options);
```

## options

 `maxMemory` - represents maximum memory process can handle before exiting 
 *note: a negative value will indicate infinite memory*
 
 `maxUptime` - determines how long the application will stay up for
 *note: a negative value will indicate infinite maxUptime*

## MIT