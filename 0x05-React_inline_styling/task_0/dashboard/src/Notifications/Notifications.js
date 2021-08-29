import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';

import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    const currentNotifs = this.props.listNotifications;
    const newNotifs = nextProps.listNotifications;

    return newNotifs.length > currentNotifs.length;
  }
  
  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div className='notifications-wrapper'>
        <div className='menuItem'>Your Notifications</div>
        {displayDrawer && (
          <div className='Notifications'>
          {listNotifications.length ? (
            <Fragment>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map(({ id, type, value, html }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    value={value}
                    html={html}
                    markAsRead={this.markAsRead}
                  />
                ))}
              </ul>
            </Fragment>
          ) : (
            <p>No new notifications for now</p>
          )}
            <button
              className='close-icon'
              aria-label='Close'
              onClick={() => console.log('Close button has been clicked')}
            >
              <img
                src={closeIcon}
                alt='Close'
                style={{ height: '20px', width: '20px' }}
              />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notification;
