export default function getTimeInterval(start, end) {
  var startDate = new Date(start);
  // Do your operations
  var endDate = new Date(end);
  // var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

  let interval = (endDate - startDate)

  var ms = interval,
  min = Math.floor((ms/1000/60) << 0),
  sec = Math.floor((ms/1000) % 60);

  return (min + ' min ' + ':' + sec + ' sec');
}
