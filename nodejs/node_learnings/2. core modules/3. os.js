

// os - use to get information about the system host like CPU, MEMORY, STORAGE
// synchronous by default

import os from "os";


// os information
console.log("---------os information");
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.uptime());
console.log(os.userInfo());

// network
console.log(os.networkInterfaces());

// memory
console.log("---------memory info");
console.log((os.totalmem() / 1024 / 1024/ 1024).toFixed(2));
console.log((os.freemem() / 1024/1024/1024).toFixed());
console.log(os.cpus());
