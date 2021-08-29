import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

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
      <div className={css(styles.wrapper)}>
        <div className={css(styles.div, styles['menu-item'])}  data-testid='menu-item'>Your Notifications</div>
        {displayDrawer && (
          <div className={css(styles.div, styles.notifs)} data-testid='notifs'>
          {listNotifications.length ? (
            <Fragment>
              <p>Here is the list of notifications</p>
              <ul className={css(styles.list)}>
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
              className={css(styles.button)}
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

const styles = StyleSheet.create({
  div: {
    padding: '1rem',
    position: 'relative',
    margin: '0.5rem',
    '@media (max-width: 900px)': {
      padding: '0'
    }
  },
  notifs: {
    border: '1px dashed #e1354b',
    marginTop: '0',
    backgroundColor: 'white',
    '@media (max-width: 900px)': {
      width: '95vw',
      height: '95vh',
      margin: '0',
      zIndex: '10',
      border: '1px solid lightgray',
      fontSize: '20px'
    }
  },
  'menu-item': {
    marginBottom: 0,
    '@media (max-width: 900px)': {
/*       display: 'none' */
    }
  },
  wrapper: {
    position: 'absolute',
    right: '12px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  },
  list: {
    '@media (max-width: 900px)': {
      listStyleType: 'none',
      paddingLeft: '0'
    }
  },
  button: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    backgroundColor: 'transparent'
  }
});

export default Notification;
