var days = ["Sun","Mon","Tues","Wed","Thru","Fri","Sat"];
var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var date = new Date();
    document.getElementById("demo").innerHTML = date;

var currentDate = date.getDate();
var month =date.getMonth();
var year =date.getFullYear();
var day = date.getDay();


var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var nameOfMonth = months[month];
console.log(nameOfMonth);



document.write(  currentDate + '/' + nameOfMonth + '/' + year);
document.write("<br>" + hours + ':' + minutes + ':' + seconds);