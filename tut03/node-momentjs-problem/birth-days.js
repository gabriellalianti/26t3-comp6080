// Run 'npm i dayjs'
// Docs:
// https://day.js.org/docs/en/parse/now

const dayjs = require("dayjs");

const now = dayjs();
const age = 14;

// Subtract i years from today's date
for (let i = 1; i <= 14; i++) {
  const pastBirthday = now.subtract(i, "year");
  console.log(pastBirthday.format("dddd"));
}
