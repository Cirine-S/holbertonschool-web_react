import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

describe('listCourses is empty', () => {
    test('renders correctly if not specified', () => {
      const wrapper = shallow(<CourseList />);

      const rows = wrapper.find(CourseListRow);
      expect(rows.length).toBe(2);

      const td = wrapper.find('tbody tr td');
      expect(td.length).toBe(1);
      expect(td.props()).toHaveProperty('colSpan', '2');
      expect(td.text()).toBe('No course available yet');
    });

    test('renders correctly if empty array', () => {
      const wrapper = shallow(<CourseList listCourses={[]} />);

      const rows = wrapper.find(CourseListRow);
      expect(rows.length).toBe(2);

      const td = wrapper.find('tbody tr td');
      expect(td.length).toBe(1);
      expect(td.props()).toHaveProperty('colSpan', '2');
      expect(td.text()).toBe('No course available yet');
    });
  });

  describe('listCourses is not empty', () => {
    const courses = [
      { id: 0, name: 'HTML and CSS', credit: 20 },
      { id: 1, name: 'Javascript', credit: 40 }
    ];

    const wrapper = shallow(<CourseList listCourses={courses} />);
    const rows = wrapper.find(CourseListRow);

    test('renders correct amount of rows', () => {
      expect(rows.length).toBe(4);
    });

    test('renders rows with correct props', () => {
      expect(rows.at(2).props()).toHaveProperty(
        'textFirstCell',
        'HTML and CSS'
      );
      expect(rows.at(2).props()).toHaveProperty('textSecondCell', 20);

      expect(rows.at(3).props()).toHaveProperty('textFirstCell', 'Javascript');
      expect(rows.at(3).props()).toHaveProperty('textSecondCell', 40);
    });
  });
});
