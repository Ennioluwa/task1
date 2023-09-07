const today = new Date();

// Get day name from date
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = weekday[today.getDay()];

// Get UTC time string
const utcTime = today.toUTCString();

// Display day name
document.querySelector('[data-testid="currentDayOfTheWeek"]').innerText = day;

// Display UTC time
document.querySelector('[data-testid="currentUTCTime"]').innerText = utcTime;
