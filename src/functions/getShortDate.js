export default function getShortDate(date) {
  // short human readable date
  let str = '';
  if (date) {
    const dateObj = new Date(date);
    const hours = dateObj.getHours()
    const minutes = dateObj.getMinutes()
    return hours%24+':'+minutes+`${hours > 12 ? 'pm' : 'am'}`
    // str = `${mm}/${parseInt(dd, 10)}/${yyyy}`;
  }
  return str;
}
