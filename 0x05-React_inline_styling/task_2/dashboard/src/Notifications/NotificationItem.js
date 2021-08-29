import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  render() {
    const { id, type, html, value, markAsRead } = this.props;

  return html === undefined? ( 
      <li data-notification-type={type} onClick={() => markAsRead(id) } className={css(styles[type])}>
      {value}
      </li>
    ) : (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} className={css(styles[type])}></li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  markAsRead: () => {}
};

const styles = StyleSheet.create({
  default: {
    color: 'blue'
  },
  urgent: {
    color: 'red'
  }
});


export default NotificationItem;
