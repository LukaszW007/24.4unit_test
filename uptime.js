const os = require('os');
const formatDate = require('./index');

// const uptime = formatDate(os.uptime());
const uptime = formatDate(0.0057875);

console.log(`Current uptime is ${uptime}`);