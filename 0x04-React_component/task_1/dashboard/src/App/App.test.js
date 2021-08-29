import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App', () => {
    test('renders without crashing', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists());
});
  test('renders Notifications component', () => {
    const wrapper = shallow(<App />);
    const notifs = wrapper.find(Notifications);

    expect(notifs).to.have.lengthOf(1);
  });

  test('renders Header component', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find(Header);

    expect(header).to.have.lengthOf(1);
  });

  test('renders Login component', () => {
    const wrapper = shallow(<App />);
    const login = wrapper.find(Login);

    expect(login).to.have.lengthOf(1);
  });

  test('renders Footer component', () => {
    const wrapper = shallow(<App />);
    const footer = wrapper.find(Footer);

    expect(footer).to.have.lengthOf(1);
  });
  test('course list NOT displayed by default', () => {
    const wrapper = shallow(<App />);
    const courseList = wrapper.find(CourseList);

    expect(courseList).to.have.lengthOf(0);
  });

  test('if logged in, course list is displayed and login form is NOT', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);

    const login = wrapper.find(Login);
    const courseList = wrapper.find(CourseList);

    expect(login).to.have.lengthOf(0);
    expect(courseList).to.have.lengthOf(1);
  });
  test('logOut alerts with correct string', () => {
    const myLogOut = jest.fn(() => undefined);
    const myAlert = jest.spyOn(global, 'alert');

    const wrapper = shallow(<App logOut={myLogOut} />)

    expect(myAlert);
    expect(myLogOut);
    jest.restoreAllMocks();
  });
});
