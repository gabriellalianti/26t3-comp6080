const dayjs = require("dayjs");
const now = dayjs();

// Difference between now and the start of today in hours
const hoursSinceStart = now.diff(now.startOf("day"), "hour");

// Subtract one week from today and format it
const oneWeekAgo = now.subtract(1, "week");
const dayOneWeekAgo = oneWeekAgo.format("dddd");
const timeOneWeekAgo = oneWeekAgo.format("h:mm A");

// Format today's date
const todaysDate = now.format("DD/MM/YYYY");

// Set the target to Friday (day 5) at 9AM of the current week
let targetFriday = now.day(5).hour(9).minute(0).second(0).millisecond(0);
// If it's currently past 9AM on Friday, we need to target next week's Friday
if (now.isAfter(targetFriday)) {
  targetFriday = targetFriday.add(1, "week");
}
// Get the difference until friday in seconds
const secondsUntilFriday = targetFriday.diff(now, "second");

console.log(
  `The day started ${hoursSinceStart} hours ago.
  One week ago it was exactly ${dayOneWeekAgo} at ${timeOneWeekAgo}.
  Today's date is ${todaysDate}. There are exactly ${secondsUntilFriday} seconds until 9am on Friday.`,
);
