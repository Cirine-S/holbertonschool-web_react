import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
  });
  test('renders with correct type and value', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li');

    expect(li.props()).to.have.property('data-notification-type', 'default');
    expect(li.text()).to.equal('test');
  });

  test('renders with correct inner html', () => {
    const wrapper = shallow(
      <NotificationItem type='default' html={{__html: '<u>test</u>'}} />
    );
    
    expect(wrapper.html()).equal('<li data-notification-type="default"><u>test</u></li>');
  });
});
