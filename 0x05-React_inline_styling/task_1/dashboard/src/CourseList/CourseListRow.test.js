import React from 'react';
import { shallow } from 'enzyme';

import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  test('renders one cell with colspan of 2 if isHeader is true and textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell='test' />
    );
    const th = wrapper.find('th');

    expect(th.length).toBe(1);
    expect(th.props()).toHaveProperty('colSpan', '2');
  });

  test('renders one tr element with two td elements if isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell='test'
        textSecondCell='test'
      />
    );
    const th = wrapper.find('th');

    expect(th.length).toBe(2);
  });

  test('renders two td elements if isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell='test' />
    );
    const tds = wrapper.find('td');

    expect(tds.length).toBe(2);
  });
});
