import { DateTime } from './luxon.js';

const time = document.querySelector('.date span');
const setTime = () => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  time.innerHTML = date;
};
setInterval(setTime, 1000);