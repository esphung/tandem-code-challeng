const uuidv4 = () => {
  // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  const time_stamp = String(Date.now())
  return ('xxxxxxxx-xxxx-4xxx-yxxx-' + (time_stamp.slice(1))).replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// console.log('uuidv4(): ', uuidv4());

export default uuidv4;
