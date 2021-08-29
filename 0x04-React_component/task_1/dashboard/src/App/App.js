import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
      window.addEventListener("keydown", this.handleLogout);
  }

  componentWillUnmount() {
      window.removeEventListener("keydown", this.handleLogout);
  }

  handleLogout (event) {
      if (event.ctrlKey && event.key === 'h') {
          event.preventDefault();
          alert("Logging you out");
          this.props.logOut();
      }
    }

  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      {
        id: 3,
        type: 'urgent',
        html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }
      }
    ];

    return (
      <Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className='App'>
          <Header />
          <div className='App-body'>
            {!isLoggedIn && <Login />}
            {isLoggedIn && <CourseList listCourses={listCourses} />}
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined
};

export default App;
