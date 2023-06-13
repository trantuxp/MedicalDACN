export const Convert_to_DD = timestamp => {
  const dateString = moment(timestamp).format('DD');

  return dateString;
};
export const Convert_to_MM = timestamp => {
  const dateString = moment(timestamp).format('MM');

  return dateString;
};
export const Convert_to_timestamp = time => {
  const timestamp = Date.parse(time.split('/').reverse().join('-'));

  return timestamp;
};
export const Convert_to_Day = timestamp => {
  const date = new Date(timestamp);
  const day = date.getDay();

  return day;
};
