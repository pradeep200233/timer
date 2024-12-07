var time = document.getElementsByClassName("time")[0];
var day = document.getElementsByClassName("day")[0];
// console.log(time);
// console.log(day);    
function todaytime() {
  date = new Date();
  newdate = date.toDateString();

  day.innerHTML = newdate;
  
  correct_time = date.toLocaleTimeString();
  // console.log(correct_time);
  time.innerHTML = correct_time;
}
setInterval(todaytime,1000)
//   todaytime();