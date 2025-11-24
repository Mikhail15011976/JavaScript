import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

const DateTimePretty = (Component) => {
  return function WrappedComponent(props) {
    const formatDate = (date) => {
      const now = moment();
      const postDate = moment(date);
      const diffMinutes = now.diff(postDate, 'minutes');
      const diffHours = now.diff(postDate, 'hours');
      const diffDays = now.diff(postDate, 'days');

      if (diffMinutes < 60) {
        return `${diffMinutes} минут назад`;
      } else if (diffHours < 24) {
        return `${diffHours} часов назад`;
      } else {
        return `${diffDays} дней назад`;
      }
    };

    return <Component {...props} date={formatDate(props.date)} />;
  };
};

export default DateTimePretty;