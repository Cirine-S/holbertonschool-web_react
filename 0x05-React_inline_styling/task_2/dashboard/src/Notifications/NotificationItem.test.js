import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
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


});
