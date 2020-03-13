const targetDate = moment("1/1/2021");

const $days = $("#days"),
  $hours = $("#hours"),
  $minutes = $("#minutes"),
  $seconds = $("#seconds");

setInterval(function() {
  //Calculate the time remaining
  let now = moment(); // leaving it empty will give us the current date and time

  //diff() moment method gives us the difference between then and now
  //duration() moment method converts it to milliseconds
  let timeLeft = moment.duration(targetDate.diff(now));
  updateClock(timeLeft); 

}, 10);

function updateClock(remainingTime) {
  //Display the difference

  //asDays() moment method turns ms into a certain number of days in decimals
  //Math.floor rounds it out
  let days = Math.floor(remainingTime.asDays()),
  hrs = Math.floor(remainingTime.asHours()) % 24, // modulo will give us the remaining hours in a day
  mins = Math.floor(remainingTime.asMinutes()) % 60, // modulo will give us the remaining minutes in an hour
  secs = Math.floor(remainingTime.asSeconds()) % 60; // modulo will give us the remaining seconds in a minute

  // applying the above variables to the text fields - jquery
  $('#days').text(padNumber(days));
  $('#hours').text(padNumber(hrs));
  $('#minutes').text(padNumber(mins));
  $('#seconds').text(padNumber(secs));
}

// This function will add a '0' to the seconds when it goes below 10
function padNumber(number) {
    let formattedNum = number;
    if (number < 10) {
        formattedNum = '0' + formattedNum;
    }
    return formattedNum;
}