const moment = require('moment');

// Jan 1st 1970 00:00:00 am - unix epic
// js is in milisecconds


var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
