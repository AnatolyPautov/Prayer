import moment from 'moment';

export const timeFromNow = date => {
  const parseDate = moment(date);
  return parseDate.fromNow();
};
