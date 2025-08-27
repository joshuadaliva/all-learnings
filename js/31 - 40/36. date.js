// Date object - object that represent dates and time , these dates can be changed and formatted


// (year, month, day, hour, minute, seconds, ms)
const date1 = new Date(2024, 11, 12, 2, 2, 23, 123);
const date2 = new Date("2024-11-12T12:00:00Z");




const date = new Date();


// get the date and time
const year = date.getFullYear();    //get the year
const month = date.getMonth();      //get the month (jan is 0)
const day = date.getDate();         //get the day
const week = date.getDay()          //get the week name
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const millisec = date.getMilliseconds()

console.log(year, month, day, week);
console.log(hour, minutes, seconds, millisec);




//set the date and time
date.setFullYear(2024)
date.setMonth(4)
date.setDate(4)
date.setHours(3)
date.setMinutes(3)
date.setSeconds(42)
date.setMilliseconds(313)



let date3;
date3 = date.toTimeString() //13:56:34 GMT+0800 (Philippine Standard Time)
date3 = date.toDateString() //Sat Jul 19 2025
date3 = date.toLocaleDateString() //7/19/2025
date3 = date.toLocaleTimeString() //1:58:20 PM
date3 = date.toString() //Sat Jul 19 2025 13:59:01 GMT+0800 (Philippine Standard Time)
date3 = date.toLocaleDateString().replaceAll("/", "-")
date3 = date.toDateString().split(" ").join(" ")
console.log(date3);